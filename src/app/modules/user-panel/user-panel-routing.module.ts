import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPanelComponent } from "./main-panel/main-panel.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainPanelComponent,
    children: [
      {
        path: "",
        redirectTo: "/user/panel",
        pathMatch: "full",
      },
      {
        path: "panel",
        loadChildren: () =>
          import("./components/panel/panel.module").then((m) => m.PanelModule),
        canActivate: [AuthGuard],
      },
      {
        path: "mytopics/:page",
        loadChildren: () =>
          import("./components/list-topic/list-topic.module").then(
            (m) => m.ListTopicModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "create/topic",
        loadChildren: () =>
          import("./components/create-topic/create-topic.module").then(
            (m) => m.CreateTopicModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "edit/topic/:topic",
        loadChildren: () =>
          import("./components/update-topic/update-topic.module").then(
            (m) => m.UpdateTopicModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPanelRoutingModule {}
