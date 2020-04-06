import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public page_title = "Login";
  public loginForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // property of message
  public status: string;
  public message: string;
  public sendValid: string;

  constructor(private _autService: AuthService, private _router: Router) {
    this.loginForm = this.createFormGroup();
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  // create FormGroup
  createFormGroup() {
    return new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // restet form
  onResetForm() {
    this.loginForm.reset();
  }

  // Send Data
  onSendForm(): void {
    if (this.loginForm.valid) {
      this._autService.login(this.loginForm.value).subscribe(
        (res) => {
          // console.log(res);
          this._router.navigateByUrl("/user/panel");
        },
        (error) => {
          const msg = error.error;
          this.status = msg.status;
          this.message = msg.msg;
          // console.log(error);
        }
      );
    } else {
      this.sendValid = "The data is incorrect!";
    }
  }

  resetSendvalid() {
    this.sendValid = "";
  }
}
