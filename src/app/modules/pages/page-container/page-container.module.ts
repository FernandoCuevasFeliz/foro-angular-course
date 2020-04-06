import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageContainerRoutingModule } from "./page-container-routing.module";
import { PageContainerComponent } from "./page-container.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { NopagefoundComponent } from "src/app/shared/components/nopagefound/nopagefound.component";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PageContainerComponent, HeaderComponent, NopagefoundComponent],
  providers: [AuthService],
  imports: [CommonModule, PageContainerRoutingModule, HttpClientModule]
})
export class PageContainerModule {}
