import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: 'articles', loadChildren: () => import("./admin/components/articles/articles.module").then(module => module.ArticlesModule) }
    ]
  },
  { path: "login", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
