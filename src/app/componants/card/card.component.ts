import {Component,Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {KeybroadModel} from '../../models/keybroad.model';
import {CartService} from '../../services/cart/cart.service';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() key!:KeybroadModel;

  constructor(protected cartService: CartService) {
  }
}

