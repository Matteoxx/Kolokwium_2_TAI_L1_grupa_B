import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersMNComponent } from './orders-mn/orders-mn.component';
import { OrdersItemMNComponent } from './orders-item-mn/orders-item-mn.component';
import { OrdersDetailsMNComponent } from './orders-details-mn/orders-details-mn.component';

@NgModule({
  declarations: [AppComponent, OrdersMNComponent, OrdersItemMNComponent, OrdersDetailsMNComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
