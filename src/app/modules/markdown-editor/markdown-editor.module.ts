import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MarkdownEditorRoutingModule } from "./markdown-editor-routing.module";
import { MarkdownEditorComponent } from "./markdown-editor.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { AuthService } from "src/app/shared/services/auth.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [CommonModule, MarkdownEditorRoutingModule,HttpClientModule],
  providers: [AuthService, AuthGuard],
})
export class MarkdownEditorModule {}
