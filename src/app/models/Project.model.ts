import { AppUser } from "./AppUser.model";

export interface Project {
    Title: string,
    StartDate: Date,
    EndDate: Date,
    UserId: string,
    User: AppUser,
}