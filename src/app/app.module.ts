import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [ { 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig 
  }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
