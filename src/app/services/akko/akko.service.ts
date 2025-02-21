import { Injectable } from '@angular/core';
import {KeybroadModel} from '../../models/keybroad.model';

@Injectable({
  providedIn: 'root'
})

export class AkkoService {

  constructor() { }

  viewDetail (id: string) {
    const product = this.products.find(product => product.id === parseInt(id));
    return product;
    const products = this.products.find(products => products.id === parseInt(id));
    return products;
  }

  products: KeybroadModel[] = [
    {
      id: 1,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/Multi-modes-4-1-247x296.png',
      name: 'Bàn phím cơ AKKO 5075B Plus Chicago (Hotswap/RGB/Multi-modes)',
      money:1990,
    },
    {
      id: 2,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/Multi-modes-4-247x296.png',
      name: 'Bàn phím cơ AKKO 5075B Plus Horizon (Hotswap/RGB/Multi-modes)',
      money: 1599,
    },
    {
      id: 3,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Max SP White (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 4,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Black Akko Glare Magnetic Switches Tri-Mode (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 5,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP Black Akko Glare Magnetic Switches Tri-Mode',
      money: 899,
    },
    {
      id: 6,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP White Akko Glare Magnetic Switches Tri-Mode',
      money: 899,
    },
    {
      id: 7,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Bàn phím cơ MonsGeekk FUN60 Pro SP Black Akko Glare Magnetic Switches',
      money: 699,
    },
    {
      id: 8,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP White Akko Glare Magnetic Switches',
      money: 699,
    },
  ];
  productss: KeybroadModel[] = [
    {
      id: 9,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/5075B-Plus_%E6%B8%B2%E6%9F%93%E5%9B%BE_%E8%8A%9D%E5%8A%A0%E5%93%A5_RGB%E6%AD%A3%E9%9D%A21-247x296.png',
      name: 'Bàn phím cơ AKKO 5075B Plus Chicago (Hotswap/RGB/Multi-modes)',
      money:1990,
    },
    {
      id: 10,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/P1097807-247x296.jpg',
      name: 'Bàn phím cơ AKKO 5075B Plus Horizon (Hotswap/RGB/Multi-modes)',
      money: 1599,
    },
    {
      id: 11,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/FUN60_pro_max_%E5%8E%9F%E5%8E%82_%E6%B8%B2%E6%9F%93%E5%9B%BE_%E7%99%BD%E8%89%B2%E4%BE%A7%E5%88%BB_%E6%AD%A3%E9%9D%A2_DeMain_0000-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Max SP White (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 12,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/FUN60-Pro-Max_%E5%8E%9F%E5%8E%82_%E6%B8%B2%E6%9F%93%E5%9B%BE_%E9%BB%91%E8%89%B2%E4%BE%A7%E5%88%BB_%E5%89%8D%E4%BF%AF1_DeMain_0090-247x296.png',
      name: 'Black Akko Glare Magnetic Switches Tri-Mode (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 13,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/FUN60-Pro-Max_%E5%8E%9F%E5%8E%82_%E6%B8%B2%E6%9F%93%E5%9B%BE_%E9%BB%91%E8%89%B2%E4%BE%A7%E5%88%BB_%E5%89%8D%E4%BF%AF1_DeMain_0090-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP Black Akko Glare Magnetic Switches Tri-Mode',
      money: 899,
    },
  ];
  productsss: KeybroadModel[] = [
    {
      id: 9,
      image: 'https://akkogear.com.vn/wp-content/uploads/2024/09/AG-ONE-8K-Joy-of-Life-2-600x600-1-247x296.png',
      name: 'Chuột Gaming AKKO AG One 8K Joy of Life',
      money:1599,
    },
    {
      id: 10,
      image: 'https://akkogear.com.vn/wp-content/uploads/2023/05/chuot-khong-day-monsgeek-d1-white-247x296.jpg',
      name: 'Chuột không dây MonsGeek D1 (2.4Ghz – Đen / Trắng / Hồng)',
      money: 299,
    },
    {
      id: 11,
      image: 'https://akkogear.com.vn/wp-content/uploads/2020/05/Akko-Hamster-X-wireless-Hima-05-247x296.jpg',
      name: 'Chuột không dây AKKO Hamster Plus – HIMA',
      money: 369,
    },
    {
      id: 12,
      image: 'https://akkogear.com.vn/wp-content/uploads/2020/05/Akko-Hamster-X-wireless-Taro-01-247x296.jpg',
      name: 'Chuột không dây AKKO Hamster Plus – TARO',
      money: 369,
    },
    {
      id: 13,
      image: 'https://akkogear.com.vn/wp-content/uploads/2020/05/Akko-Hamster-X-wireless-Momo-05-247x296.jpg',
      name: 'Chuột không dây AKKO Hamster Plus – MOMO',
      money: 369,
    },
  ];
  productssss: KeybroadModel[] = [
    {
      id: 14,
      image: 'https://akkogear.com.vn/wp-content/uploads/2024/09/Akko-Capybara-Mouse-Pad-1-247x296.png',
      name: 'Bàn di Akko Capybara',
      money:1490,
    },
    {
      id: 15,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/P1097807-247x296.jpg',
      name: 'Bàn di Akko Cat Orange KATE',
      money: 1490,
    },
    {
      id: 16,
      image: 'https://akkogear.com.vn/wp-content/uploads/2024/09/Akko-Cat-Theme-Mouse-Pad-3-247x296.png',
      name: 'Bàn di Akko Cat Gary MIMO',
      money: 1490,
    },
    {
      id: 17,
      image: 'https://akkogear.com.vn/wp-content/uploads/2024/09/Akko-Cat-Theme-Mouse-Pad-1-247x296.png',
      name: 'Bàn di Akko Cat ANGIE',
      money: 1490,
    },
    {
      id: 18,
      image: 'https://akkogear.com.vn/wp-content/uploads/2024/09/Vegetables-Dog-Mousepad-2-600x600-1-247x296.jpg',
      name: 'Bàn di AKKO Cabbage Dog',
      money: 399,
    },
  ];
  productsssss: KeybroadModel[] = [
    {
      id: 19,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/Multi-modes-4-1-247x296.png',
      name: 'Bàn phím cơ AKKO 5075B Plus Chicago (Hotswap/RGB/Multi-modes)',
      money:1990,
    },
    {
      id: 20,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/02/Multi-modes-4-247x296.png',
      name: 'Bàn phím cơ AKKO 5075B Plus Horizon (Hotswap/RGB/Multi-modes)',
      money: 1599,
    },
    {
      id: 21,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Max SP White Akko Glare Magnetic Switches (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 22,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Max SP Black Glare Magnetic Switches (Tri-mode) 8K in 2.4G Wireless',
      money: 1090,
    },
    {
      id: 23,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP Black Akko Glare Magnetic Switches Tri-Mode',
      money: 899,
    },
    {
      id: 24,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP White Akko Glare Magnetic Switches Tri-Mode',
      money: 899,
    },
    {
      id: 25,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/29-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP Black Akko Glare Magnetic Switches',
      money: 699,
    },
    {
      id: 26,
      image: 'https://akkogear.com.vn/wp-content/uploads/2025/01/28-247x296.png',
      name: 'Bàn phím cơ MonsGeek FUN60 Pro SP White Akko Glare Magnetic Switches',
      money: 699,
    },
  ];
}
