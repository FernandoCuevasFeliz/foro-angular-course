import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NopagefoundComponent } from "./shared/components/nopagefound/nopagefound.component";

import { AuthGuard } from "./shared/guards/auth.guard";
const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./modules/user-panel/user-panel.module").then(
        (m) => m.UserPanelModule
      ),
  },
  {
    path: "editor",
    loadChildren: () =>
      import("./modules/markdown-editor/markdown-editor.module").then(
        (m) => m.MarkdownEditorModule
      ),
  },

  {
    path: "topics/:page",
    loadChildren: () =>
      import(
        "./modules/user-panel/components/list-all-topic/list-all-topic.module"
      ).then((m) => m.ListAllTopicModule),
  },
  {
    path: "topics",
    redirectTo: "topics/1",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NopagefoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
