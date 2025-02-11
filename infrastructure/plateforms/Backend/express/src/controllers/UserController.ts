import { Request, Response } from "express";
import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { UsersRepository } from "@domain/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export class UserController {
    private usersRepository: UsersRepository;

    constructor() {
        this.usersRepository = new SequelizeUsersRepository();
    }

    async signUp(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;

            const existingUser = await this.usersRepository.findByEmail(email);
            if (existingUser) {
                res.status(400).json({ error: "User already exists" });
                return;
            }

            // const hashedPassword = await bcrypt.hash(password, 10);

            const userData: Omit<User, "id"> = {
                name,
                email,
                password,
                roles: "user",
                isActive: true,
                isEmailVerified: false,
                createdAt: new Date(),
                updatedAt: null,
            };

            const createdUser = await this.usersRepository.create(userData);
            res.status(201).json(createdUser);
        } catch (error) {
            console.error("Error in UserController.signUp:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async signIn(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user = await this.usersRepository.findByEmail(email);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }

            /*
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                res.status(401).json({ error: "Invalid credentials" });
                return;
            }
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            */

            res.status(200).json({
                message: "Login successful",
                user,
                // token
            });
        } catch (error) {
            console.error("Error in UserController.signIn:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.usersRepository.findAll();
            res.json(users);
        } catch (error) {
            console.error("Error in UserController.getUsers:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await this.usersRepository.findOne(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.json(user);
        } catch (error) {
            console.error("Error in UserController.getUser:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updates = req.body;
            const updatedUser = await this.usersRepository.update(id, updates);
            if (!updatedUser) {
                res.status(404).json({ error: "User not found or update failed" });
                return;
            }
            res.json(updatedUser);
        } catch (error) {
            console.error("Error in UserController.updateUser:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async removeUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const success = await this.usersRepository.remove(id);
            if (!success) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.status(204).send();
        } catch (error) {
            console.error("Error in UserController.removeUser:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
