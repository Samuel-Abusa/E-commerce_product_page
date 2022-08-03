import { ImageService } from './../image.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent implements OnInit {
  currentModalImage = '1';
  @ViewChild('imgs') container: ElementRef | undefined;
  cont: any[] | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.mainModalImage.subscribe(
      (imgData) =>
        (this.currentModalImage = imgData.src
          .split('-')
          .splice(-1, 1)[0]
          .split('.')
          .filter((str: string) => isNaN(+str) === false)[0])
    );

    this.imageService.currImage.subscribe(
      (imgData) => (this.currentModalImage = `${+imgData.id + 1}`)
    );
  }
}
