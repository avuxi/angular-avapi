import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var AVUXI;

@Component({
  selector: 'lse',
  template: `
    <div class='vxlse'>
      <span class='vxwil'
            attr.t='{{confId}}'
            attr.ll='{{lat}},{{lng}}'>
      </span>
    </div>`
})

export class LseComponent implements AfterViewInit {
  @Input() confId: string;
  @Input() lat: string;
  @Input() lng: string;
  
  constructor() {
  }
  
  ngAfterViewInit() {
    AVUXI.LSERefresh();
  }
}
