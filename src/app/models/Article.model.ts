import { AppUser } from "./AppUser.model";
import { Category } from "./Category.model";

export interface Article {
    id?: string,
    title: string,
    content: string,
    createdDate: Date,
    updatedDate?: Date,
    userId: string,
    author?: AppUser,
    categoryId: string,
    category?: Category,
}