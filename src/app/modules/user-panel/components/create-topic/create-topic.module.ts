import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateTopicRoutingModule } from "./create-topic-routing.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { CreateTopicComponent } from "./create-topic.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TopicService } from "src/app/shared/services/topic.service";

@NgModule({
  declarations: [CreateTopicComponent],
  imports: [CommonModule, ReactiveFormsModule, CreateTopicRoutingModule],
  providers: [AuthService, TopicService],
})
export class CreateTopicModule {}
