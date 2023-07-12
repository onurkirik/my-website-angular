import { AppUser } from "./AppUser.model";

export interface Education {
    id?: string,
    title: string,
    startDate: Date,
    endDate: Date,
    userId: string,
    user?: AppUser,
}