import { MenuService } from './../menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css'],
})
export class SlideMenuComponent implements OnInit {
  @Input('nav') navigation: string[] = [];
  menu: string | undefined;
  background: HTMLDivElement | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.close.subscribe((data) => {
      this.menu = data.menu;
      this.background = data.background;
    });
  }

  hideMenu() {
    this.menuService.toggleMenu(this.menu!, '', this.background!);
  }
}
