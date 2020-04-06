import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UpdateTopicRoutingModule } from "./update-topic-routing.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpdateTopicComponent } from "./update-topic.component";

@NgModule({
  declarations: [UpdateTopicComponent],
  imports: [
    CommonModule,
    UpdateTopicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, TopicService],
})
export class UpdateTopicModule {}
