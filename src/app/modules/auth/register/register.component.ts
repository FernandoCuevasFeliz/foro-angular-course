import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public page_title: string = "Register";
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public registerForm: FormGroup;

  // property of message
  public status: string;
  public message: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.registerForm = this.createFormGroup();
  }

  get name() {
    return this.registerForm.get("name");
  }
  get surname() {
    return this.registerForm.get("surname");
  }
  get sex() {
    return this.registerForm.get("sex");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/[a-zA-ZÀ-ÿ]/),
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/[a-zA-ZÀ-ÿ]/),
      ]),
      sex: new FormControl("", [Validators.required, Validators.maxLength(1)]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(this.emailPattern),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onResetForm() {
    this.registerForm.reset();
  }
  public onSaveForm(): void {
    this._authService.register(this.registerForm.value).subscribe(
      (res) => {
        this._router.navigateByUrl("/user/panel");
        // console.log(res);
      },
      (error) => {
        const msg = error.error;
        this.status = msg.status;
        this.message = msg.msg;
        // console.log(msg);
      }
    );
  }
}
