import Alert from "@domain/entities/alert";
import { Parts } from "@domain/entities/Parts";
export declare class AlertDto implements Partial<Alert> {
    readonly identifier: string;
    readonly title: string;
    readonly description: string;
    readonly part: Parts;
}
