import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

import {
  TopicI,
  TopicResponseI,
  getTopicsI,
  TopicResponseDelI,
} from "../models/Topic";
import { config } from "./global";

@Injectable()
export class TopicService {
  public authSubject = new BehaviorSubject(false);

  constructor(private _httpClient: HttpClient) {}

  createTopic(topic: TopicI, token: string): Observable<TopicResponseI> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    return this._httpClient.post<TopicResponseI>(
      config.AUTH_SERVER + "/topic",
      topic,
      { headers: headers }
    );
  }

  getMyTopics(token: string, numPage: number) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);
    return this._httpClient.get<getTopicsI>(
      config.AUTH_SERVER + `/mytopics/${numPage}`,
      { headers: headers }
    );
  }

  getTopics(numPage: number): Observable<getTopicsI> {
    return this._httpClient.get<getTopicsI>(
      config.AUTH_SERVER + `/topics/${numPage}`
    );
  }

  getTopic(idTopic: string): Observable<TopicResponseI> {
    return this._httpClient.get<TopicResponseI>(
      config.AUTH_SERVER + `/topic/${idTopic}`
    );
  }

  updateTopic(topic: TopicI, idTopic: string, token: string) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    return this._httpClient.put<TopicResponseI>(
      config.AUTH_SERVER + `/topic/${idTopic}`,
      topic,
      { headers: headers }
    );
  }

  deleteTopic(token: string, idTopic: string): Observable<TopicResponseDelI> {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this._httpClient.delete<TopicResponseDelI>(
      config.AUTH_SERVER + `/user/topic/${idTopic}`,
      { headers: headers }
    );
  }
}
