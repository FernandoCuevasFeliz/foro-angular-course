import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateTopicComponent } from "./create-topic.component";

const routes: Routes = [
  {
    path: "",
    component: CreateTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTopicRoutingModule {}
