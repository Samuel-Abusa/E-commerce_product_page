import { ImageService } from './image.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-sneaker-image',
  templateUrl: './sneaker-image.component.html',
  styleUrls: ['./sneaker-image.component.css'],
})
export class SneakerImageComponent implements OnInit, AfterViewInit {
  mainSneakerImg = '../../assets/images/image-product-1.jpg';
  @ViewChild('mainImg') defaultImg: ElementRef | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // Switch images with thumbnails
    this.imageService.currImage.subscribe(
      (data) =>
        (this.mainSneakerImg = `../../assets/images/image-product-${
          +data.id + 1
        }.jpg`)
    );

    // switch images with buttons
    this.imageService.switchImage.subscribe(
      (data) => (this.mainSneakerImg = data)
    );
  }

  private defaultImageEmitter() {
    this.imageService.defaultImg.next(
      +this.imageService.showImgSrcNumber(this.defaultImg!.nativeElement.src)
    );
  }

  ngAfterViewInit(): void {
    this.defaultImageEmitter();
  }

  setActiveModalThumb() {
    this.defaultImageEmitter();
  }
}
