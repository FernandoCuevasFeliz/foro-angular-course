import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";

@Component({
  selector: "app-create-topic",
  templateUrl: "./create-topic.component.html",
  styleUrls: ["./create-topic.component.scss"],
})
export class CreateTopicComponent implements OnInit {
  public page_title = "Create Topic";
  public createTopicForm: FormGroup;

  // propiedades
  public identity: any;
  public token: any;

  // property of message
  public status: string;
  public message: string;

  constructor(
    private _authService: AuthService,
    private _topicService: TopicService,
    private _router: Router
  ) {
    this.createTopicForm = this.createFormGroup();
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
  }

  ngOnInit(): void {}

  get title() {
    return this.createTopicForm.get("title");
  }
  get content() {
    return this.createTopicForm.get("content");
  }

  get lang() {
    return this.createTopicForm.get("lang");
  }

  get code() {
    return this.createTopicForm.get("code");
  }

  createFormGroup() {
    return new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      lang: new FormControl(""),
      code: new FormControl(""),
    });
  }
  onSendForm(): boolean {
    console.log(this.createTopicForm.value);
    if (this.createTopicForm.valid) {
      if (this.createTopicForm.value.lang == "") {
        this.createTopicForm.value.lang = "no language";
      }
      this._topicService
        .createTopic(this.createTopicForm.value, this.token)
        .subscribe(
          (res) => {
            this._router.navigateByUrl("/user/panel");
          },
          (err) => {
            this.status = err.error.status;
            this.message = err.error.msg;
            console.log(err);
          }
        );
      return true;
    }
    this.status = "error";
    this.message = "Please, fill in the fields correctly";
    return false;
  }
  resetSendvalid() {
    this.status = "";
    this.message = "";
  }
}
