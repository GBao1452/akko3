import {Component, Input} from '@angular/core';
import {CardListComponent} from "../../componants/card-list/card-list.component";
import {CartService} from '../../services/cart/cart.service';
import {AkkoService} from '../../services/akko/akko.service';
import {CardKeybroadComponent} from '../../componants/card-keybroad/card-keybroad.component';
import {KeyboardModel} from '../../models/keybroad.model';

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
  productsssss!: KeyboardModel[];

  constructor(protected cartService: CartService,private akkoService: AkkoService) {
    console.log(this.akkoService.products,this.akkoService.productss);
  }
  ngOnInit(): void {
    this.productsssss = this.akkoService.productsssss;
  }
}
