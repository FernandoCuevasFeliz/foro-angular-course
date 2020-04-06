import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    if (this._authService.getToken()) {
      return true;
    } else {
      this._router.navigateByUrl("/auth/login");
      return false;
    }
  }
}
