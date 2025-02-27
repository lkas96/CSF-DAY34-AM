import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  photoArray: any[] = [];

  constructor(private fakerySvc: FakeryService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.photoArray = await this.fakerySvc.getFakeryPhotos();
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }
  }
}
