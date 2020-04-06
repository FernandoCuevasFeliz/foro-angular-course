import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserPanelRoutingModule } from "./user-panel-routing.module";
import { MainPanelComponent } from "./main-panel/main-panel.component";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { TopicService } from "src/app/shared/services/topic.service";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { ListAllTopicComponent } from "./components/list-all-topic/list-all-topic.component";

@NgModule({
  declarations: [MainPanelComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserPanelRoutingModule,
    SharedComponentsModule,
  ],
  providers: [AuthService, AuthGuard],
})
export class UserPanelModule {}
