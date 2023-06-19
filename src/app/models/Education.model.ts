import { AppUser } from "./AppUser.model";

export interface Education {
    Title: string,
    StartDate: Date,
    EndDate: Date,
    UserId: string,
    User: AppUser,
}