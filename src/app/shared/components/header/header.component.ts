import { Component, OnInit, DoCheck } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { config } from "../../services/global";
import { UserI } from "../../models/User";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {
  public identity: UserI;
  public token: string;
  public user: UserI;

  //data
  public name: string;
  public surname: string;

  public url;

  constructor(private _authService: AuthService, private _router: Router) {
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
    this.user = this.identity;
    this.onChargeProperties();
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.identity = this._authService.getIdentity();
    this.user = this.identity;
    this.onChargeProperties();
  }

  onLogout() {
    this._authService.logout();
    this._router.navigateByUrl("/auth/login");
    this.identity = null;
    this.url = null;
  }

  onChargeProperties() {
    if (this.user != null || this.identity != null) {
      this.user.name = this.identity.name.split(" ")[0];
      this.user.surname = this.identity.surname.split(" ")[0];
      this.url = config.AUTH_SERVER + "/image/avatar/" + this.user.image;
    }
  }
}
