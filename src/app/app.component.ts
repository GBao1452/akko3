import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './componants/header/header.component';
import {BodySlideShowComponent} from './componants/body-slide-show/body-slide-show.component';
import {SectionTitleComponent} from './componants/section-title/section-title.component';
import {CardComponent} from './componants/card/card.component';
import {KeyboardSectionComponent} from './componants/keyboard-section/keyboard-section.component';
import {ImageGalleryComponent} from './componants/image-gallery/image-gallery.component';
import {BackstopComponent} from './componants/backstop/backstop.component';
import {WarrantyContainerComponent} from './componants/warranty-container/warranty-container.component';
import {KeybroadModel} from './models/keybroad.model';
import {HomeComponent} from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodySlideShowComponent, SectionTitleComponent, CardComponent, KeyboardSectionComponent, ImageGalleryComponent, BackstopComponent, WarrantyContainerComponent, HomeComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
  }
}


