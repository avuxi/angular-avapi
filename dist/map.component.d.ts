import { AfterViewInit, ElementRef } from '@angular/core';
export declare class MapComponent implements AfterViewInit {
    confId: string;
    lat: string;
    lng: string;
    zoom: string;
    container: ElementRef;
    constructor();
    ngAfterViewInit(): void;
}
