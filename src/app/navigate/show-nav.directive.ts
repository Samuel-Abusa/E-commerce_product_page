import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowNav]',
})
export class ShowNavDirective {
  constructor(private host: ElementRef) {}

  @HostListener('click', ['$event']) showNavigation(li: Event) {
    const anchor = li.target as HTMLAnchorElement;
    const show = () => {
      [...this.host.nativeElement.children].forEach((child: HTMLLIElement) =>
        child.classList.remove('active', 'active-nav-item')
      );
      anchor.parentElement?.classList.add('active', 'active-nav-item');
    };

    anchor.classList.contains('nav-link') && show();
  }
}
