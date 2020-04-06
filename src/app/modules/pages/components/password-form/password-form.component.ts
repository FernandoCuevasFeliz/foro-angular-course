import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.component.html",
  styleUrls: ["./password-form.component.scss"],
})
export class PasswordFormComponent implements OnInit {
  public passwordForm: FormGroup;

  // propiedades
  public identity: any;
  public token: any;

  // property of message
  public status: string;
  public message: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
    this.passwordForm = this.createFormGroup();
  }

  ngOnInit(): void {}
  get password() {
    return this.passwordForm.get("password");
  }
  get new_password() {
    return this.passwordForm.get("new_password");
  }
  get confirm_password() {
    return this.passwordForm.get("confirm_password");
  }
  createFormGroup() {
    return new FormGroup({
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      new_password: new FormControl("", [Validators.minLength(6)]),
      confirm_password: new FormControl("", [Validators.minLength(6)]),
    });
  }
  onSendForm() {
    console.log(this.passwordForm.value);
    if (this.passwordForm.valid) {
      this._authService.updatePassword(this.passwordForm.value).subscribe(
        (res) => {
          if (res) {
            this._router.navigateByUrl("/user/panel");
          }
        },
        (err) => {
          if (err) {
            this.status = err.error.status;
            this.message = err.error.msg;
            console.log(err);
          }
        }
      );
      return true;
    }
    this.status = "error";
    this.message = "Incorrect data";
    return false;
  }
  resetSendvalid() {
    this.message = "";
    this.status = "";
  }
}
