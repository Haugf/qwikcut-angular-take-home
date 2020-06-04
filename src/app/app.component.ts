import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QwikCut-Evaluation';
  clips: Array<any> = [
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

}
