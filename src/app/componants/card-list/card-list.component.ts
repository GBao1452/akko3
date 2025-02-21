import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from '@angular/router';
import {KeybroadModel} from '../../models/keybroad.model';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() key!:KeybroadModel;

  constructor(protected cartService: CartService) {
  }
}
