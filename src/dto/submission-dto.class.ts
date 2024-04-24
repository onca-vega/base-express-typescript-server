import { IsString, IsIn, MinLength, MaxLength } from "class-validator";
import { Category } from "@/constants/enums";

const categories = Object.values(Category);

export default class SubmissionDTO {
  constructor(attributes: { category?: string; message?: string }) {
    this.category = attributes.category || "";
    this.message = attributes.message || "";
  }

  @IsIn(categories)
  category: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  message: string;
}
