import { Article } from "./Article.model";
import { Certificate } from "./Certificate.model";
import { Education } from "./Education.model";
import { Gender } from "./Gender.model";
import { Project } from "./Project.model";
import { Skills } from "./Skills.model";
import { SocialMedia } from "./SocialMedia.model";
import { WorkExperience } from "./WorkExperience.model";

export interface AppUser{
    id: string;
  userName: string;
  name: string;
  surname: string;
  age: number;
  personalInfo: string;
  address: string;
  gender: Gender;
  birthDate: Date;
  articleId: string;
  article: Article;
  socialMedias: SocialMedia[];
  certificates: Certificate[];
  projects: Project[];
  skills: Skills[];
  experiences: WorkExperience[];
  education: Education;
}