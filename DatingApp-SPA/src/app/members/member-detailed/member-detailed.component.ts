import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { Route, ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

// import {
//   NgxGalleryOptions,
//   NgxGalleryImage,
//   NgxGalleryAnimation,
// } from '';

@Component({
  selector: 'app-member-detailed',
  templateUrl: './member-detailed.component.html',
  styleUrls: ['./member-detailed.component.css'],
})
export class MemberDetailedComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:false,
        imagePercent:100
      },
    ];
    this.galleryImages = this.getImages();
  }

  getImages(){
    const photosURLs = [];
    for (const photo of this.user.photos) {
      photosURLs.push({
              small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
      });
    }
    return photosURLs;
  }
  // loadUser()
  // {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User) => {
  //     this.user = user;
  //   },
  //   error=> {
  //     this.alertify.error(error)
  //   });
  // }
}
