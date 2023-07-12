import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "articles", loadChildren: () => import("./admin/components/articles/articles.module").then(module => module.ArticlesModule) },
      { path: "categories", loadChildren: () => import("./admin/components/categories/categories.module").then(module => module.CategoriesModule) },
      { path: "projects", loadChildren: () => import("./admin/components/projects/projects.module").then(module => module.ProjectsModule) },
      { path: "education", loadChildren: () => import("./admin/components/education/education.module").then(module => module.EducationModule) }
    ]
  },
  { path: "login", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
