import { ImageService } from './image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-image',
  templateUrl: './sneaker-image.component.html',
  styleUrls: ['./sneaker-image.component.css'],
})
export class SneakerImageComponent implements OnInit {
  mainSneakerImg = '../../assets/images/image-product-1.jpg';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.currImage.subscribe(
      (data) =>
        (this.mainSneakerImg = `../../assets/images/image-product-${
          +data.id + 1
        }.jpg`)
    );
  }

  selectImg(img: HTMLImageElement) {}

  setMainModalImage(img: HTMLImageElement) {
    this.imageService.mainModalImage.next(img);
  }
}
