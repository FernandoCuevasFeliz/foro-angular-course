import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpdateTopicComponent } from "./update-topic.component";

const routes: Routes = [
  {
    path: "",
    component: UpdateTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTopicRoutingModule {}
