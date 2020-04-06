import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageContainerComponent } from "./page-container.component";

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then(m => m.HomeModule)
      },

      {
        path: "user/settings",
        loadChildren: () =>
          import("../settings/settings.module").then(m => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageContainerRoutingModule {}
