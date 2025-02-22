import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {CartService} from '../../services/cart/cart.service';
import {KeyboardModel} from '../../models/keybroad.model';
import {AkkoService} from '../../services/akko/akko.service';

@Component({
  selector: 'app-key-detail',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './key-detail.component.html',
  styleUrl: './key-detail.component.scss'
})
export class KeyDetailComponent {

  key!: KeyboardModel;

  constructor(protected cartService: CartService, protected akkoService: AkkoService ,private activatedRoute: ActivatedRoute) {
    // get id
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    // get key
      this.key = akkoService.findProductById(id) as KeyboardModel;
  }

}

