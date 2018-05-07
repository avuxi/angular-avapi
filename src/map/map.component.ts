import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var AVUXI;
declare var google;

@Component({
  selector: 'map',
  templateUrl: './map.component.html'
})

export class MapComponent implements AfterViewInit {
  @Input() confId: string;
  @Input() lat: string;
  @Input() lng: string;
  @Input() zoom: string;
  
  @ViewChild('container') container: ElementRef;

  constructor() {
  }
  
  ngAfterViewInit() {
    const options = {
      zoom: parseInt(this.zoom),
      center: new google.maps.LatLng(this.lat, this.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    const map = new google.maps.Map(this.container.nativeElement, options);
    AVUXI.MapStart(map, this.confId);
  }
}

