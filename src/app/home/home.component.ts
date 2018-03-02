import { Component, OnInit } from '@angular/core';
import { Dish } from './../shared/dish';
import { DishService } from './../services/dish.service';
import { Promotion } from './../shared/promotion';
import { PromotionService } from './../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(
    private dishervice: DishService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishervice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
