import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PanelRoutingModule } from "./panel-routing.module";
import { PanelComponent } from "./panel.component";
import { AuthService } from "src/app/shared/services/auth.service";
import { TopicService } from "src/app/shared/services/topic.service";
import { MomentModule } from "angular2-moment";

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PanelRoutingModule, MomentModule],
  providers: [AuthService, TopicService],
})
export class PanelModule {}
