import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { UserI } from "src/app/shared/models/User";
import { config } from "../../../shared/services/global";

import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  public img: string = "../../../../assets/img/img-male.png";

  public settingsForm: FormGroup;

  // propiedades
  public user: UserI;
  public identity: any;
  public token: any;

  // message
  public status: string;
  public message: string;

  // angular-filr-uploader congig
  public afuConfig: any;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.settingsForm = this.createFormGroup();
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
    this.user = this.identity;
    this.settingsForm.get("name").setValue(this.user.name);
    this.settingsForm.get("surname").setValue(this.user.surname);
    this.settingsForm.get("email").setValue(this.user.email);

    this.afuConfig = {
      multiple: false,
      formatsAllowed: " .png, .jpg, .jpeg, .gif",
      maxSize: "2",
      uploadAPI: {
        url: config.AUTH_SERVER + "/image/avatar",
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        attachPinBtn: "Image Upload"
      }
    };
    // console.log(this.user);
  }

  ngOnInit(): void {}
  get name() {
    return this.settingsForm.get("name");
  }
  get surname() {
    return this.settingsForm.get("surname");
  }

  get email() {
    return this.settingsForm.get("email");
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/[a-zA-ZÀ-ÿ]/)
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/[a-zA-ZÀ-ÿ]/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(this.emailPattern)
      ])
    });
  }
  onSelectImg(data) {
    let dataObj = JSON.parse(data.response);
    this.user.image = dataObj.file.image;

    localStorage.setItem("USER_ENTITY", JSON.stringify(this.user));

    console.log(this.user);
  }

  onSendForm() {
    this._authService.updateUser(this.settingsForm.value).subscribe(
      res => {
        this.status = res.status;
        this.message = res.msg;

        localStorage.setItem("USER_ENTITY", JSON.stringify(res.user));
        console.log(res);
      },

      error => {
        const msg = error.error;
        this.status = msg.status;
        this.message = msg.msg;
        // console.log(error);
      }
    );
  }
}
