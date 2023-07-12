import { AppUser } from "./AppUser.model";

export interface WorkExperience {
    id?: string,
    title: string,
    startDate: Date,
    endDate: Date,
    content: string,
    userId: string,
    user?: AppUser,
}