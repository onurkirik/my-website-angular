import { AppUser } from "./AppUser.model";

export interface Education {
    title: string,
    startDate: Date,
    endDate: Date,
    userId: string,
    user?: AppUser,
}