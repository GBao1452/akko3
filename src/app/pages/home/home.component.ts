import {Component, OnInit} from '@angular/core';
import {AkkoService} from '../../services/akko/akko.service';
import {CardComponent} from '../../componants/card/card.component';
import {BackstopComponent} from '../../componants/backstop/backstop.component';
import {BodySlideShowComponent} from '../../componants/body-slide-show/body-slide-show.component';
import {ImageGalleryComponent} from '../../componants/image-gallery/image-gallery.component';
import {KeyboardSectionComponent} from '../../componants/keyboard-section/keyboard-section.component';
import {RouterOutlet} from '@angular/router';
import {SectionTitleComponent} from '../../componants/section-title/section-title.component';
import {WarrantyContainerComponent} from '../../componants/warranty-container/warranty-container.component';
import {CardListComponent} from '../../componants/card-list/card-list.component';
import {KeyboardModel} from '../../models/keybroad.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    BackstopComponent,
    BodySlideShowComponent,
    ImageGalleryComponent,
    KeyboardSectionComponent,
    RouterOutlet,
    SectionTitleComponent,
    WarrantyContainerComponent,
    CardListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products!: KeyboardModel[];
  productss!: KeyboardModel[];
  productsss!: KeyboardModel[];
  productssss!: KeyboardModel[];

  constructor(private akkoService: AkkoService) {
    console.log(this.akkoService.products,this.akkoService.productss);
  }
  ngOnInit(): void {
    this.products = this.akkoService.products;
    this.productss = this.akkoService.productss;
    this.productsss = this.akkoService.productsss;
    this.productssss = this.akkoService.productssss;
  }
}
