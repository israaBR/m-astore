import { Component, OnInit } from '@angular/core';
import { Parfum } from '../../../shared/models/Parfum';
import { ActivatedRoute } from '@angular/router';
import { ParfumService } from '../../../services/parfum.service';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parfum-page',
  templateUrl: './parfum-page.component.html',
  styleUrls: ['./parfum-page.component.css']
})
export class ParfumPageComponent implements OnInit{
parfum!: Parfum;
constructor(activatedRoute:ActivatedRoute, parfumService:ParfumService,
  private cartService:CartService, private router: Router)
  {
  activatedRoute.params.subscribe((params) => {
    if(params.id)
       parfumService.getParfumById(params.id).subscribe(serverParfum => {
      this.parfum =serverParfum;
      });
     })
}
  ngOnInit(): void {
      
  }

  addToCart(){
    this.cartService.addToCart(this.parfum);
   this.router.navigateByUrl('/cart-page');
  }

}
