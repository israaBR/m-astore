import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-all-orders-page',
  templateUrl: './all-orders-page.component.html',
  styleUrl: './all-orders-page.component.css',
})
export class AllOrdersPageComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getAllOrdersForCurrentUser().subscribe((orders) => {
      this.orders = orders;
    });
  }
  ngOnInit(): void {}
}
