import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  order: Order = new Order();
  orderId: any;

  constructor(
    orderService: OrderService,
    router: Router,
    private route: ActivatedRoute
  ) {
    //new: get order id value
    route.queryParams.subscribe((params) => {
      this.orderId = params.id;
    });
    //new: send request to get order details
    orderService.getOrderById(this.orderId).subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout');
      },
    });
  }
  ngOnInit(): void {}
}
