import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";

//components
import { MainAuthComponent } from "./main-auth/main-auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

//service
import { AuthService } from "src/app/shared/services/auth.service";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { LoggedInGuard } from "src/app/shared/guards/logged-in.guard";

@NgModule({
  declarations: [MainAuthComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
  ],
  providers: [AuthService, LoggedInGuard],
})
export class AuthModule {}
