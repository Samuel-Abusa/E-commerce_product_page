import { ImageService } from './../image.service';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.css'],
})
export class ImageThumbComponent implements AfterViewInit {
  sneakerImgThumb: string[] = [
    '../../assets/images/image-product-1-thumbnail.jpg',
    '../../assets/images/image-product-2-thumbnail.jpg',
    '../../assets/images/image-product-3-thumbnail.jpg',
    '../../assets/images/image-product-4-thumbnail.jpg',
  ];
  @ViewChild('container') container: ElementRef | undefined;
  thumbs: HTMLElement[] | undefined;

  constructor(private imageService: ImageService) {}

  private clearActiveClass() {
    this.thumbs!.forEach((el) => el.classList.remove('active-img'));
  }

  ngAfterViewInit(): void {
    this.thumbs = [...this.container?.nativeElement.children];

    this.imageService.defaultImg.subscribe((data) => {
      this.clearActiveClass();

      this.thumbs!.find((el) =>
        el.classList.contains(`img-${data}`)
      )?.classList.add('active-img');
    });
  }

  selectImg(img: HTMLImageElement, thumbNail: HTMLDivElement) {
    this.imageService.currImage.next(img);
    this.imageService.defaultImg.next(+this.imageService.getImgId(img.id) + 1);

    this.clearActiveClass();

    thumbNail.classList.add('active-img');

    this.imageService.updateButtonWithThumbnail.next(
      +this.imageService.getImgId(img.id) + 1
    );
  }
}
