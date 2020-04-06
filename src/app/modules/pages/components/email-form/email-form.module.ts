import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { EmailFormRoutingModule } from "./email-form-routing.module";

import { EmailFormComponent } from "./email-form.component";
import { AuthService } from "src/app/shared/services/auth.service";

@NgModule({
  declarations: [EmailFormComponent],
  imports: [CommonModule, ReactiveFormsModule, EmailFormRoutingModule],
  providers: [AuthService],
})
export class EmailFormModule {}
