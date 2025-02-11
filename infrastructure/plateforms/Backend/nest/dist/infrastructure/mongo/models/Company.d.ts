import { Schema } from "mongoose";
import Company from "@domain/entities/Company";
declare const CompanySchema: Schema<Company, import("mongoose").Model<Company, any, any, any, import("mongoose").Document<unknown, any, Company> & Company & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Company, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Company>> & import("mongoose").FlatRecord<Company> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const CompanyModel: import("mongoose").Model<Company, {}, {}, {}, import("mongoose").Document<unknown, {}, Company> & Company & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
export { CompanySchema, CompanyModel };
