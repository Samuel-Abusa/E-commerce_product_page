import { ImageService } from './../image.service';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-buttons',
  templateUrl: './switch-buttons.component.html',
  styleUrls: ['./switch-buttons.component.css'],
})
export class SwitchButtonsComponent implements AfterViewInit {
  @Input() img: HTMLImageElement | undefined;

  imgSelector: number | undefined;
  next = false;
  prev = true;

  constructor(private imageService: ImageService) {}

  ngAfterViewInit(): void {
    this.imgSelector = +this.imageService.showImgSrcNumber(this.img!.src);

    this.imageService.updateButtonWithThumbnail.subscribe((data) => {
      this.imgSelector = data;
      this.prev = this.checkPrev();
      this.next = this.checkNext();
    });
  }

  private checkPrev() {
    return this.imgSelector! === 1 ? true : false;
  }
  private checkNext() {
    return this.imgSelector === 4 ? true : false;
  }

  switchImg(e: Event) {
    (e.target as HTMLElement).parentElement?.classList.contains('next') ||
    (e.target as HTMLElement).classList.contains('next')
      ? this.imgSelector! < 4 && this.imgSelector!++
      : this.imgSelector! > 1 && this.imgSelector!--;

    this.next = this.checkNext();
    this.prev = this.checkPrev();

    this.imageService.switchImage.next(
      `../../assets/images/image-product-${this.imgSelector}.jpg`
    );

    this.imageService.defaultImg.next(this.imgSelector!);
  }
}
