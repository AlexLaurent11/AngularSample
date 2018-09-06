import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private photoData: any;

  constructor(private svc: PhotosService) { }

  ngOnInit() {
    this.svc.getPhotos().subscribe(data => {
      this.photoData = data;
    });
  }

}
