import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-email-form",
  templateUrl: "./email-form.component.html",
  styleUrls: ["./email-form.component.scss"],
})
export class EmailFormComponent implements OnInit {
  public page_title: string = "Change Email";
  public emailForm: FormGroup;

  // propiedades
  public identity: any;
  public token: any;

  // property of message
  public status: string;
  public message: string;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private _authService: AuthService, private _router: Router) {
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
    this.emailForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  get email() {
    return this.emailForm.get("email");
  }
  get password() {
    return this.emailForm.get("password");
  }

  get confirm_password() {
    return this.emailForm.get("confirm_password");
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(this.emailPattern),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirm_password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSaveForm() {
    console.log(this.emailForm.value);
    if (this.emailForm.valid) {
      this._authService.updateEmail(this.emailForm.value).subscribe(
        (res) => {
          if (res) {
            this.identity.email = res.user.email;
            localStorage.setItem("USER_ENTITY", this.identity);
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
    this.status = "";
    this.message = "";
  }
}
