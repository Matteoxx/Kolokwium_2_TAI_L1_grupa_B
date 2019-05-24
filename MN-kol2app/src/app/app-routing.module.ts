import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersDetailsMNComponent } from "./orders-details-mn/orders-details-mn.component";
import { OrdersMNComponent } from "./orders-mn/orders-mn.component";

const routes: Routes = [
  {
    path: "",
    component: OrdersMNComponent
  },
  {
    path: "orders/:id",
    component: OrdersDetailsMNComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
