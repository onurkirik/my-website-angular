import { AppUser } from "./AppUser.model";

export interface Certificate{
  id?: string,
  name:string,
  userId:string,
  user?:AppUser,
}