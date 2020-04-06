import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";
import { Router, Params, ActivatedRoute } from "@angular/router";
import { TopicI } from "src/app/shared/models/Topic";

@Component({
  selector: "app-update-topic",
  templateUrl: "./update-topic.component.html",
  styleUrls: ["./update-topic.component.scss"],
})
export class UpdateTopicComponent implements OnInit {
  public page_title = "Edit Topic";
  public editTopicForm: FormGroup;

  // propiedades
  public identity: any;
  public token: any;
  public topic: TopicI;
  public param;

  // property of message
  public status: string;
  public message: string;

  constructor(
    private _authService: AuthService,
    private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.editTopicForm = this.editFormGroup();
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
    this.getTopic();
  }

  ngOnInit(): void {
    this.getTopic();
  }

  get title() {
    return this.editTopicForm.get("title");
  }
  get content() {
    return this.editTopicForm.get("content");
  }

  get lang() {
    return this.editTopicForm.get("lang");
  }

  get code() {
    return this.editTopicForm.get("code");
  }

  editFormGroup() {
    return new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      lang: new FormControl(""),
      code: new FormControl(""),
    });
  }
  onSendForm(): boolean {
    console.log(this.editTopicForm.value);
    if (this.editTopicForm.valid) {
      if (this.editTopicForm.value.lang == "") {
        this.editTopicForm.value.lang = "no language";
      }
      this._topicService
        .updateTopic(this.editTopicForm.value, this.topic._id, this.token)
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
  getTopic() {
    this._route.params.subscribe((params) => {
      this.param = params["topic"];
    });
    this._topicService.getTopic(this.param).subscribe(
      (res) => {
        this.topic = res.topic;

        // asignando valores
        this.editTopicForm.get("title").setValue(this.topic.title);
        this.editTopicForm.get("content").setValue(this.topic.content);
        this.editTopicForm.get("lang").setValue(this.topic.lang);
        if (this.topic.lang != "no language") {
          this.editTopicForm.get("code").setValue(this.topic.code);
        }
        // console.log(this.topic);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
