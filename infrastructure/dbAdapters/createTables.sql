-- Drop tables if they already exist to start fresh
DROP TABLE IF EXISTS "Incidents" CASCADE;
DROP TABLE IF EXISTS "MaintenanceServices" CASCADE;
DROP TABLE IF EXISTS "Parts" CASCADE;
DROP TABLE IF EXISTS "Bikes" CASCADE;
DROP TABLE IF EXISTS "Users" CASCADE;


-- Création de la table users
CREATE TABLE users (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password VARCHAR(255) NOT NULL,
                       roles VARCHAR(255) NOT NULL,
                       is_active BOOLEAN DEFAULT true,
                       is_email_verified BOOLEAN DEFAULT false,
                       created_at TIMESTAMP DEFAULT NOW(),
                       updated_at TIMESTAMP
);

-- Création de la table bikes
CREATE TABLE bikes (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       brand VARCHAR(255) NOT NULL,
                       model VARCHAR(255) NOT NULL,
                       mileage INT NOT NULL,
                       registration_number VARCHAR(50) UNIQUE NOT NULL,
                       purchase_date DATE NOT NULL,
                       warranty_expiration_date DATE,
                       owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                       is_active BOOLEAN DEFAULT true,
                       is_in_maintenance BOOLEAN DEFAULT false,
                       is_decommissioned BOOLEAN DEFAULT false,
                       next_maintenance_mileage INT,
                       next_maintenance_date DATE,
                       created_at TIMESTAMP DEFAULT NOW(),
                       updated_at TIMESTAMP
);

-- Création de la table incidents
CREATE TABLE incidents (
                           id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                           bike_id UUID NOT NULL REFERENCES bikes(id) ON DELETE CASCADE,
                           date TIMESTAMP NOT NULL,
                           description TEXT NOT NULL,
                           is_resolved BOOLEAN DEFAULT false
);

-- Création de la table maintenance_services
CREATE TABLE maintenance_services (
                                      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                      bike_id UUID NOT NULL REFERENCES bikes(id) ON DELETE CASCADE,
                                      date TIMESTAMP NOT NULL,
                                      description TEXT NOT NULL,
                                      type VARCHAR(50) NOT NULL CHECK (type IN ('preventive', 'curative')),
                                      is_resolved BOOLEAN DEFAULT false,
                                      cost NUMERIC(10, 2) DEFAULT 0,
                                      parts_used JSONB,
                                      technician_id UUID,
                                      created_at TIMESTAMP DEFAULT NOW(),
                                      updated_at TIMESTAMP
);

-- Création de la table parts
CREATE TABLE parts (
                       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       name VARCHAR(255) NOT NULL,
                       description TEXT,
                       stock_quantity INT DEFAULT 0,
                       min_stock_level INT DEFAULT 1,
                       price NUMERIC(10, 2) NOT NULL,
                       created_at TIMESTAMP DEFAULT NOW(),
                       updated_at TIMESTAMP
);



-- Instructions pour tester le script
-- Vous pouvez insérer des données dans ces tables pour vérifier leur fonctionnement :
-- Exemple d'insertion dans la table users
INSERT INTO users (name, email, password, roles)
VALUES
    ('John Doe', 'john.doe@example.com', 'securepassword', 'admin');

-- Exemple d'insertion dans la table bikes
INSERT INTO bikes (
    brand, model, mileage, registration_number, purchase_date, owner_id
)
VALUES
    ('Triumph', 'Street Triple', 5000, 'ABC123', '2022-01-01', (SELECT id FROM users WHERE email = 'john.doe@example.com'));

-- Exemple d'insertion dans la table incidents
INSERT INTO incidents (bike_id, date, description)
VALUES
    ((SELECT id FROM bikes WHERE registration_number = 'ABC123'), NOW(), 'Flat tire reported during ride.');

-- Exemple d'insertion dans la table parts
INSERT INTO parts (name, description, stock_quantity, price)
VALUES
    ('Oil Filter', 'High-performance oil filter for Triumph bikes', 10, 15.99);

-- Exemple d'insertion dans la table maintenance_services
INSERT INTO maintenance_services (
    bike_id, date, description, type, is_resolved, cost, parts_used
)
VALUES
    (
        (SELECT id FROM bikes WHERE registration_number = 'ABC123'),
        NOW(),
        'Oil change and general checkup',
        'preventive',
        true,
        100.50,
        '[{"partId": "1", "quantity": 1}]'
    );

COMMIT;


-- Vérification des données
SELECT * FROM users;
SELECT * FROM bikes;
SELECT * FROM incidents;
SELECT * FROM parts;
SELECT * FROM maintenance_services;