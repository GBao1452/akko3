import {Component, HostListener, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatBadgeModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchActive: boolean = false; // Trạng thái hiển thị hộp tìm kiếm

  constructor(protected cartService: CartService) {}

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
  }

  @HostListener('document:click', ['$event'])
  closeSearch(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.search')) {
      this.isSearchActive = false;
    }
  }
}
