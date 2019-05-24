import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MNDataService {
  private url = "https://kol2tai.herokuapp.com";

  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get(this.url + "/api/order/items");
  }

  getItemsById(id: number) {
    return this.http.get(this.url + `/api/order/items/${id}`);
  }
}
