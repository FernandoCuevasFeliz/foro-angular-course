import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainAuthComponent } from "./main-auth/main-auth.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "src/app/shared/components/nopagefound/nopagefound.component";
import { LoggedInGuard } from "src/app/shared/guards/logged-in.guard";

const routes: Routes = [
  {
    path: "",
    component: MainAuthComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent,
        canActivate: [LoggedInGuard],
      },

      {
        path: "login",
        component: LoginComponent,
        canActivate: [LoggedInGuard],
      },
      {
        path: "**",
        component: NopagefoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
