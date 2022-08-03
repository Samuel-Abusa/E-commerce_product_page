import { MenuService } from './menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css'],
})
export class NavigateComponent implements OnInit {
  navigation = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  @Input('dark-bg') overlay: HTMLDivElement | undefined;
  itemsInCart = 0;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.addCartItems.subscribe(
      (data) => (this.itemsInCart = data)
    );
  }

  showMenu() {
    this.menuService.toggleMenu('.slide-menu', 'show', this.overlay!);
    this.menuService.close.next({
      menu: '.slide-menu',
      background: this.overlay!,
    });
  }
}
