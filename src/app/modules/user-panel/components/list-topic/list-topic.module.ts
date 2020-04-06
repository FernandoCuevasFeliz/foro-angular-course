import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MomentModule } from "angular2-moment";

import { ListTopicRoutingModule } from "./list-topic-routing.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";
import { ListTopicComponent } from "./list-topic.component";

@NgModule({
  declarations: [ListTopicComponent],
  imports: [CommonModule, ListTopicRoutingModule, MomentModule],
  providers: [AuthService, TopicService],
})
export class ListTopicModule {}
