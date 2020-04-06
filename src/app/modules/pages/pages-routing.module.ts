import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageContainerComponent } from "./page-container/page-container.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "user/settings",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsModule),
        canActivate: [AuthGuard],
      },
      {
        path: "user/change/email",
        loadChildren: () =>
          import("./components/email-form/email-form.module").then(
            (m) => m.EmailFormModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
