import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PageContainerComponent } from "./page-container/page-container.component";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

@NgModule({
  declarations: [PageContainerComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
  ],
  providers: [AuthService, AuthGuard],
})
export class PagesModule {}
