import { MenuService } from './../../navigate/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-copy',
  templateUrl: './sneaker-copy.component.html',
  styleUrls: ['./sneaker-copy.component.css'],
})
export class SneakerCopyComponent implements OnInit {
  price = 125;
  counter = 0;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.updateItems.subscribe((data) => (this.counter = data));
  }

  count(e: Event) {
    const target = e.target as HTMLElement;

    target.classList.contains('add') ||
    target.parentElement?.classList.contains('add')
      ? this.menuService.items++
      : this.menuService.items === 0
      ? this.menuService.items
      : this.menuService.items--;

    this.menuService.updateItems.next(this.menuService.items);

    if (this.menuService.items > 0) this.price = 125 * this.menuService.items;
  }

  addToCart() {
    this.menuService.addCartItems.next(this.menuService.items);
    this.menuService.items = 0;
    this.price = 125;
    this.menuService.updateItems.next(this.menuService.items);
  }
}
