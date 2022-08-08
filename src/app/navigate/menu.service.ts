import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  close = new Subject<{ menu: string; background: HTMLDivElement }>();
  items = 0;
  updateItems = new Subject<number>();
  addCartItems = new Subject<number>();

  constructor() {}

  toggleMenu(menu: string, condition: string, background: HTMLDivElement) {
    if (condition === 'show') {
      (document.querySelector(menu) as HTMLElement).style.width = '250px';
      background.style.display = 'block';
    } else {
      (document.querySelector(menu) as HTMLElement).style.width = '0';
      background.style.display = 'none';
    }
  }
}
