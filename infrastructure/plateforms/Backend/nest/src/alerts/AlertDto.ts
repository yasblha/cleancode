import Alert from "@domain/entities/alert";
import {Parts} from "@domain/entities/Parts";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class AlertDto implements Partial<Alert> {
  readonly identifier: string;

  @ApiProperty({ example: "Low stock" })
  @IsString()
  @MinLength(3)
  readonly title: string;

  @ApiProperty({ example: "The stock is low, please order more" })
  @IsString()
  @MinLength(3)
  readonly description: string;

  @ApiProperty()
  readonly part: Parts;
}
