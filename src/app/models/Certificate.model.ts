import { AppUser } from "./AppUser.model";

export interface Certificate{
  Name:string,
  UserId:string,
  User:AppUser,
}