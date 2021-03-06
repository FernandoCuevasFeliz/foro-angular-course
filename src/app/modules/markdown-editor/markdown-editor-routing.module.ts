import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarkdownEditorComponent } from "./markdown-editor.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MarkdownEditorComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkdownEditorRoutingModule {}
