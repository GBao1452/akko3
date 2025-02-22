import {Component, Input} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {KeyboardModel} from '../../models/keybroad.model';

@Component({
  selector: 'app-card-keybroad',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './card-keybroad.component.html',
  styleUrl: './card-keybroad.component.scss'
})
export class CardKeybroadComponent {
  @Input() key!:KeyboardModel;

  constructor(protected cartService: CartService) {
  }
}
