import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.css'],
})
export class ImageThumbComponent implements OnInit {
  sneakerImgThumb: string[] = [
    '../../assets/images/image-product-1-thumbnail.jpg',
    '../../assets/images/image-product-2-thumbnail.jpg',
    '../../assets/images/image-product-3-thumbnail.jpg',
    '../../assets/images/image-product-4-thumbnail.jpg',
  ];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  selectImg(img: HTMLImageElement) {
    this.imageService.currImage.next(img);

    const container = (img.parentElement as HTMLElement).parentElement!;

    [...container.children]
      .map((child) => child as HTMLDivElement)
      .map((child) => child.children[0] as HTMLImageElement)
      .forEach((img) => (img.style.opacity = '1'));

    img.style.opacity = '.3';
  }
}
