import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import {
  UserI,
  UserUpdateI,
  UserResponseI,
  PasswordUserI,
  PasswordUserResponseI,
  EmailUserI,
  EmailUserResponseI,
} from "../models/User";
import { JwtResponceI } from "../models/JwtResponseI";
import { config } from "./global";

@Injectable()
export class AuthService {
  public authSubject = new BehaviorSubject(false);
  private token: string;
  private identity: any;

  constructor(private _httpClient: HttpClient) {}

  register(user: UserI): Observable<JwtResponceI> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._httpClient
      .post<JwtResponceI>(`${config.AUTH_SERVER}/signup`, user, { headers })
      .pipe(
        tap((res: JwtResponceI) => {
          if (res && res != null && res != undefined) {
            // saved data
            this.savedData(res);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponceI> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._httpClient
      .post<JwtResponceI>(`${config.AUTH_SERVER}/signin`, user, { headers })
      .pipe(
        tap((res: JwtResponceI) => {
          if (res && res != null && res != undefined) {
            // saved data
            this.savedData(res);
          }
        })
      );
  }

  logout() {
    this.token = "";
    this.identity = "";
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER_ENTITY");
  }

  private savedData(res: JwtResponceI): void {
    localStorage.setItem("ACCESS_TOKEN", res.token);
    this.token = res.token;
    delete res.token;
    // console.log(res);
    this.identity = res;
    localStorage.setItem("USER_ENTITY", JSON.stringify(this.identity));
  }
  public getToken() {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
  public getIdentity() {
    if (!this.identity) {
      this.identity = localStorage.getItem("USER_ENTITY");
      this.identity = JSON.parse(this.identity);
    }
    return this.identity;
  }

  updateUser(user: UserUpdateI): Observable<UserResponseI> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.token}`);
    return this._httpClient.put<UserResponseI>(
      config.AUTH_SERVER + "/update/user",
      user,
      { headers: headers }
    );
  }

  updatePassword(data: PasswordUserI): Observable<PasswordUserResponseI> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.token}`);
    return this._httpClient.put<PasswordUserResponseI>(
      config.AUTH_SERVER + "/user/update/password",
      data,
      { headers: headers }
    );
  }
  updateEmail(data: EmailUserI): Observable<EmailUserResponseI> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.token}`);
    return this._httpClient.put<EmailUserResponseI>(
      config.AUTH_SERVER + "/user/update/email",
      data,
      { headers: headers }
    );
  }
}
