import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { SettingsRoutingModule } from "./settings-routing.module";

import { SettingsComponent } from "./settings.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PasswordFormComponent } from "src/app/modules/pages/components/password-form/password-form.component";

import { AuthService } from "src/app/shared/services/auth.service";

@NgModule({
  declarations: [SettingsComponent, PasswordFormComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    FormsModule,
  ],
  providers: [AuthService],
})
export class SettingsModule {}
