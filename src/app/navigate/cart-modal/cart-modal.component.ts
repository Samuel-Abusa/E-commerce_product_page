import { MenuService } from './../menu.service';
import { fromEvent, Subscription } from 'rxjs';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css'],
})
export class CartModalComponent implements AfterViewInit, OnDestroy, OnInit {
  onWindowResizeSubscription: Subscription | undefined;
  @ViewChild('modal') cartModal: ElementRef | undefined;
  items: number | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.addCartItems.subscribe((data) => (this.items = data));
  }

  ngAfterViewInit(): void {
    window.innerWidth > 768
      ? this.cartModal?.nativeElement.classList.add('modal-sm')
      : this.cartModal?.nativeElement.classList.remove('modal-sm');
  }

  ngOnDestroy(): void {
    this.onWindowResizeSubscription!.unsubscribe();
  }

  deleteItem() {
    this.items! > 0 && this.items!--;
    this.menuService.addCartItems.next(this.items!);
  }

  checkout() {
    this.menuService.addCartItems.next(0);
  }
}
