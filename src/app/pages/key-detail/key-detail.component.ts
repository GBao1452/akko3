import {Component, Input} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {KeybroadModel} from '../../models/keybroad.model';
import {AkkoService} from '../../services/akko/akko.service';
import {CurrencyPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-key-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    RouterLink
  ],
  templateUrl: './key-detail.component.html',
  styleUrl: './key-detail.component.scss'
})
export class KeyDetailComponent {

  @Input() key!:KeybroadModel;

  constructor(protected cartService: CartService) {
  }
}

