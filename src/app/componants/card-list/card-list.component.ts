import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';
import {KeyboardModel} from '../../models/keybroad.model';

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
  @Input() key!:KeyboardModel;

  constructor(protected cartService: CartService) {
  }
}
