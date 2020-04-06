import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  declarations: [HeaderComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, ToolbarComponent]
})
export class SharedComponentsModule {}
