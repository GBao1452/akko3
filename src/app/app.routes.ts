import { Routes } from '@angular/router';
import {TinTucComponent} from './pages/tin-tuc/tin-tuc.component';
import {BanPhimComponent} from './pages/ban-phim/ban-phim.component';
import {KitBanPhimComponent} from './pages/kit-ban-phim/kit-ban-phim.component';
import {KeycapComponent} from './pages/keycap/keycap.component';
import {ChuotComponent} from './pages/chuot/chuot.component';
import {PhuKienComponent} from './pages/phu-kien/phu-kien.component';
import {SwitchComponent} from './pages/switch/switch.component';
import {CartComponent} from './pages/cart/cart.component';
// import * as path from 'node:path';
import {HomeComponent} from './pages/home/home.component';
import {KeyDetailComponent} from './pages/key-detail/key-detail.component';

export const routes: Routes = [
  {
    path: 'tin-tuc',
    component: TinTucComponent,
  },

  {
    path: 'ban-phim',
    component: BanPhimComponent,
  },

  {
    path: 'kit-ban-phim',
    component: KitBanPhimComponent,
  },

  {
    path: 'keycap',
    component: KeycapComponent,
  },

  {
    path: 'chuot',
    component: ChuotComponent,
  },

  {
    path: 'phu-kien',
    component: PhuKienComponent,
  },
  {
    path: 'switch',
    component: SwitchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'key-detail/:id',
    component: KeyDetailComponent,
  },
];
