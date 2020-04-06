import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListAllTopicComponent } from "./list-all-topic.component";

const routes: Routes = [
  {
    path: "",
    component: ListAllTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAllTopicRoutingModule {}
