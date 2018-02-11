import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    animations: [
    trigger('cardAnimator', [
      transition('* => fadeOutDown', animate(200, keyframes(kf.fadeOutDown)))
    ])
  ]
})
export class AppComponent implements OnInit {
  gesture = '';

  items = [
    {
      order: 1,
      name: 'kristy',
      image: 'https://semantic-ui.com/images/avatar2/large/kristy.png',
      visible: true,
      active: true,
      animationState: ''
    },
    {
      order: 2,
      name: 'matthew',
      image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
      visible: true,
      active: false,
      animationState: ''
    },
    {
      order: 3,
      name: 'chris',
      image: 'https://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: true,
      active: false,
      animationState: ''
    },
    {
      order: 4,
      name: 'jenny',
      image: 'https://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: true,
      active: false,
      animationState: ''
    }
  ];

  cardItems: any;
  ngOnInit(){
    this.getCardList();
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };
  swipe(item: any, action: string = this.SWIPE_ACTION.DOWN) {
    console.log('Current item: '+ item.order);
    this.gesture = action;
    //var currentIndex = this.items.findIndex(item);
    // if (currentIndex > this.items.length || currentIndex < 0) return;

    //let nextIndex = currentIndex;

    // next
    if (action === this.SWIPE_ACTION.DOWN) {
      this.startAnimation('fadeOutDown', item);
      // const isLast = currentIndex === this.items.length - 1;
      // nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // previous
    // if (action === this.SWIPE_ACTION.UP) {
    //   const isFirst = currentIndex === 0;
    //   nextIndex = isFirst ? this.items.length - 1 : currentIndex - 1;
    // }
  }

  animationState: string;

  startAnimation(state, item: any) {
    
    if (!item.animationState) {
      console.log("started animation", item.name)
      item.animationState = state;
    }
  }

  resetAnimationState(item: any) {
    if(!item.animationState) return;
    console.log("reset animation", item.name)
    item.animationState = '';

    item.visible = false;
    this.getCardList();
  }

  private getCardList(): any{

    // toggle avatar visibility
    this.cardItems = this.items.filter(x => x.visible === true).sort((a: any, b: any) => a.order - b.order).slice(0, 3);
    console.log('Current stack length: '+this.cardItems.length)
    if(this.cardItems.length == 0 && this.items.length > 0) {
      this.items.forEach((x, i) => x.visible = true);
      this.getCardList();
      return;
    }
    let nextItem = this.cardItems[0];
    this.items.forEach((x, i) => x.active = (x.order === nextItem.order));
  }

}


