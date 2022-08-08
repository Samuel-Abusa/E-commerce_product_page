import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  switchImage = new Subject<string>();
  currImage = new Subject<HTMLImageElement>();
  defaultImg = new Subject<number>();
  updateButtonWithThumbnail = new Subject<number>();

  constructor() {}

  showImgSrcNumber(src: string) {
    return src
      .split('/')
      .splice(-1, 1)[0]
      .split('-')
      .splice(-1, 1)[0]
      .split('.')[0];
  }
}
