import { AppUser } from "./AppUser.model";

export interface Skills {
    id?: string,
    name: string,
    rate: number,
    userId: string,
    user?: AppUser,
}