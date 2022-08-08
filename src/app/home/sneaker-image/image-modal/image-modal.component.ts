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

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.currImage.subscribe(
      (imgData) => (this.currentModalImage = `${+imgData.id + 1}`)
    );
    this.imageService.switchImage.subscribe((data) => {
      this.currentModalImage = this.imageService.showImgSrcNumber(data);
    });
  }
}
