import { Component, OnInit } from "@angular/core";
import { MNDataService } from "../mn-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders-mn",
  templateUrl: "./orders-mn.component.html",
  styleUrls: ["./orders-mn.component.css"]
})
export class OrdersMNComponent implements OnInit {
  constructor(private ordersService: MNDataService) {}

  ordersItems$: any;

  ngOnInit() {
    this.ordersService.getAllItems().subscribe(data => {
      this.ordersItems$ = data;
    });
  }
}
