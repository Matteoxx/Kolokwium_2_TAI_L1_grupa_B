import { Component, OnInit } from "@angular/core";
import { MNDataService } from "../mn-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-orders-details-mn",
  templateUrl: "./orders-details-mn.component.html",
  styleUrls: ["./orders-details-mn.component.css"]
})
export class OrdersDetailsMNComponent implements OnInit {
  constructor(
    private ordersService: MNDataService,
    private route: ActivatedRoute
  ) {}

  id: number;
  orderItem$: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.ordersService.getItemsById(this.id).subscribe(data => {
        this.orderItem$ = data;
      });
    });
  }
}
