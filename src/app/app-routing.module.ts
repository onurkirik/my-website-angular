import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "articles", loadChildren: () => import("./admin/components/articles/articles.module").then(module => module.ArticlesModule) },
      { path: "categories", loadChildren: () => import("./admin/components/categories/categories.module").then(module => module.CategoriesModule) },
      { path: "projects", loadChildren: () => import("./admin/components/projects/projects.module").then(module => module.ProjectsModule) },
      { path: "education", loadChildren: () => import("./admin/components/education/education.module").then(module => module.EducationModule) },
      { path: "experiences", loadChildren: () => import("./admin/components/work-experience/work-experience.module").then(module => module.WorkExperienceModule) },
      { path: "certificates", loadChildren: () => import("./admin/components/certificates/certificates.module").then(module => module.CertificatesModule) },
      { path: "skills", loadChildren: () => import("./admin/components/skills/skills.module").then(module => module.SkillsModule) },
      { path: "social-media", loadChildren: () => import("./admin/components/social-media/social-media.module").then(module => module.SocialMediaModule) }
    ]
  },
  { path: "login", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
