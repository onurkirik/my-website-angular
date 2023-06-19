import { AppUser } from "./AppUser.model";

export interface WorkExperience{
Title: string, 
StartDate: Date, 
EndDate: Date, 
Content: string, 
UserId: string, 
User: AppUser, 
}