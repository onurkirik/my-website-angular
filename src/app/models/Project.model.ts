import { AppUser } from "./AppUser.model";

export interface Project {
    id?: string,
    title: string,
    content: string,
    startDate: Date,
    endDate: Date,
    userId?: string,
    user?: AppUser,
}