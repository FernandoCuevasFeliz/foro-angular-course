import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TopicService } from "src/app/shared/services/topic.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicI } from "src/app/shared/models/Topic";

@Component({
  selector: "app-list-all-topic",
  templateUrl: "./list-all-topic.component.html",
  styleUrls: ["./list-all-topic.component.scss"],
})
export class ListAllTopicComponent implements OnInit {
  public page_title = "List Topics";

  // propiedades
  public identity: any;
  public token: any;
  public topics: TopicI[];
  public totalDocs;
  public total_pages;
  public number_pages;
  public pages;
  public next_page;
  public prev_page;

  // property of message
  public status: string;
  public message: string;

  constructor(
    private _authService: AuthService,
    private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      var page = +params["page"];
      if (!page || page == null || page == undefined) {
        page = 1;
        this.prev_page = 1;
        this.next_page = 2;
      }
      this.getTopics(page);
    });
  }
  ngDoCheck(): void {}

  getTopics(page = 1) {
    this._topicService.getTopics(page).subscribe(
      (res) => {
        this.topics = res.topics;

        this.total_pages = res.totalPages;

        let number_pages = [];
        for (let i = 1; i <= this.total_pages; i++) {
          number_pages.push(i);
        }
        this.number_pages = number_pages;

        if (page >= 2) {
          this.prev_page = page - 1;
        } else {
          this.prev_page = 1;
        }

        if (page < this.total_pages) {
          this.next_page = page + 1;
        } else {
          this.next_page = this.total_pages;
        }
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
