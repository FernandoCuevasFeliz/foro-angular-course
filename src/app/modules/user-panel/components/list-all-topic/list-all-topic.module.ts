import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MomentModule } from "angular2-moment";

import { ListAllTopicRoutingModule } from "./list-all-topic-routing.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";
import { HttpClientModule } from "@angular/common/http";
import { ListAllTopicComponent } from "./list-all-topic.component";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";

@NgModule({
  declarations: [ListAllTopicComponent],
  imports: [
    CommonModule,
    ListAllTopicRoutingModule,
    HttpClientModule,
    MomentModule,
    SharedComponentsModule,
  ],
  providers: [AuthService, TopicService],
})
export class ListAllTopicModule {}
