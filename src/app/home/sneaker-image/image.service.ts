import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  currImage = new Subject<HTMLImageElement>();
  mainModalImage = new Subject<HTMLImageElement>();

  constructor() {}

  imgSelector(
    img: HTMLImageElement,
    relativeToFileLocation: string,
    mainImg: string
  ) {
    mainImg = `${relativeToFileLocation}assets/images/image-product-${
      +img.id + 1
    }.jpg`;
  }
}
