var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngAfterViewInit = function () {
        var options = {
            zoom: parseInt(this.zoom),
            center: new google.maps.LatLng(this.lat, this.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(this.container.nativeElement, options);
        AVUXI.MapStart(map, this.confId);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MapComponent.prototype, "confId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MapComponent.prototype, "lat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MapComponent.prototype, "lng", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MapComponent.prototype, "zoom", void 0);
    __decorate([
        ViewChild('container'),
        __metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object)
    ], MapComponent.prototype, "container", void 0);
    MapComponent = __decorate([
        Component({
            selector: 'map',
            templateUrl: './map.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
    var _a;
}());
export { MapComponent };
//# sourceMappingURL=map.component.js.map