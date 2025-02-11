import { Schema } from "mongoose";
import Alert from "@domain/entities/alert";
declare const AlertSchema: Schema<Alert, import("mongoose").Model<Alert, any, any, any, import("mongoose").Document<unknown, any, Alert> & Alert & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Alert, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Alert>> & import("mongoose").FlatRecord<Alert> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const AlertModel: import("mongoose").Model<Alert, {}, {}, {}, import("mongoose").Document<unknown, {}, Alert> & Alert & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
export { AlertSchema, AlertModel };
