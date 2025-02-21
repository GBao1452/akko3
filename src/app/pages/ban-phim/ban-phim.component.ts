import {Component, Input} from '@angular/core';
import {CardListComponent} from "../../componants/card-list/card-list.component";
import {KeybroadModel} from '../../models/keybroad.model';
import {CartService} from '../../services/cart/cart.service';
import {AkkoService} from '../../services/akko/akko.service';
import {CardKeybroadComponent} from '../../componants/card-keybroad/card-keybroad.component';

@Component({
  selector: 'app-ban-phim',
  standalone: true,
  imports: [
    CardListComponent,
    CardKeybroadComponent
  ],
  templateUrl: './ban-phim.component.html',
  styleUrl: './ban-phim.component.scss'
})
export class BanPhimComponent {
  productsssss!: KeybroadModel[];

  constructor(protected cartService: CartService,private akkoService: AkkoService) {
    console.log(this.akkoService.products,this.akkoService.productss);
  }
  ngOnInit(): void {
    this.productsssss = this.akkoService.productsssss;
  }
}
