import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListTopicComponent } from "./list-topic.component";

const routes: Routes = [
  {
    path: "",
    component: ListTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTopicRoutingModule {}
