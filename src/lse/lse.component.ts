import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var AVUXI;

@Component({
  selector: 'lse',
  templateUrl: './lse.component.html'
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
