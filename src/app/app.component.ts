import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  gesture = '';

  items = [
    {
      name: 'kristy',
      image: 'https://semantic-ui.com/images/avatar2/large/kristy.png',
      visible: true
    },
    {
      name: 'matthew',
      image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
      visible: false
    },
    {
      name: 'chris',
      image: 'https://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: false
    },
    {
      name: 'jenny',
      image: 'https://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: false
    }
  ];

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };
  swipe(currentIndex: number, action: string = this.SWIPE_ACTION.RIGHT) {
    console.log('Current Index: '+ currentIndex);
    this.gesture = action;
    if (currentIndex > this.items.length || currentIndex < 0) return;

    let nextIndex = currentIndex;

    // next
    if (action === this.SWIPE_ACTION.DOWN) {
      const isLast = currentIndex === this.items.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // previous
    if (action === this.SWIPE_ACTION.UP) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.items.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    this.items.forEach((x, i) => x.visible = (i === nextIndex));
  }

}


