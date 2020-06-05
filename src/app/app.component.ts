import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

// Media class
export interface IMedia {
  clipnumber: number;
  url: string;
  personnel: string;
  down: number;
  distance: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QwikCut-Evaluation';
  api: VgAPI;
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  clips: Array<IMedia> = [
    {
      clipnumber: 1,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/1.mp4',
      personnel: 'Offense',
      down: 1,
      distance: 10
    }, 
    {
      clipnumber: 2,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/2.mp4',
      personnel: 'Offense',
      down: 2,
      distance: 9
    }, 
    {
      clipnumber: 3,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/3.mp4',
      personnel: 'Offense',
      down: 3,
      distance: 2
    }, 
    {
      clipnumber: 4,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/4.mp4',
      personnel: 'Offense',
      down: 4,
      distance: 4
    }, 
    {
      clipnumber: 5,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/8.mp4',
      personnel: 'Defense',
      down: 1,
      distance: 10
    }, 
    {
      clipnumber: 6,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/9.mp4',
      personnel: 'Defense',
      down: 1,
      distance: 9
    }, 
    {
      clipnumber: 7,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/10.mp4',
      personnel: 'Defense',
      down: 2,
      distance: 4
    }, 
    {
      clipnumber: 8,
      url: 'https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/11.mp4',
      personnel: 'Defense',
      down: 3,
      distance: 9
    }
  ]

  currentIndex = 0;
  currentItem: IMedia = this.clips[ this.currentIndex ];

  onClickPlaylistItem(item: IMedia, index) {
      this.currentIndex = index;
      this.currentItem = item;
      this.videoplayer.nativeElement.load();

  }

  

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.clips.length) {
        this.currentIndex = 0;
    }

    this.currentItem = this.clips[ this.currentIndex ];
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
}




 toggleVideo(event: any) {
     this.videoplayer.nativeElement.play();
 }
}
