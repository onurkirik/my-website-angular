import { AppUser } from "./AppUser.model";

export interface SocialMedia {
  id?: string,
  name: string,
  link: string,
  userId: string,
  user?: AppUser,

}