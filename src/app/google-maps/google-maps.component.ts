import { Component, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PostalCode } from '../shared/models/postal-code.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements AfterViewInit, OnChanges {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  markers: google.maps.Marker[];
  @Input() postalCodes: PostalCode[];

  constructor() {
    console.log('Loaded GoogleMapsComponent!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changed GoogleMapsComponent!', changes);
    if (this.map) {
      console.log('Updated mapContainer!');
      this.updateMarkers(changes.postalCodes.currentValue);
    }
  }

  ngAfterViewInit() {
    console.log('View Initialized GoogleMapsComponent!');
    this.mapInitializer();
  }

  getBounds() {
    const bound = new google.maps.LatLngBounds();
    this.postalCodes.forEach(item => bound.extend(new google.maps.LatLng(item.latitude, item.longitide)));
    return bound;
  }

  mapInitializer() {
    if (this.postalCodes) {
      console.log('Initialized GoogleMaps!');

      const bounds = this.getBounds();
      const center = bounds.getCenter();
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: 1,
      };

      this.map = new google.maps.Map(
        this.gmap.nativeElement,
        mapOptions
      );

      this.map.panToBounds(bounds);
      const coordinates = this.postalCodes.map(item => new google.maps.LatLng(item.latitude, item.longitide));
      this.markers = coordinates.map(coordinate => new google.maps.Marker({
        position: coordinate,
        map: this.map,
      }));
    }
  }

  updateMarkers(postalCodes) {
    if (this.markers) {
      this.markers.forEach(marker => marker.setMap(null));
    }

    const coordinates = postalCodes.map(item => new google.maps.LatLng(item.latitude, item.longitide));
    this.markers = coordinates.map(coordinate => new google.maps.Marker({
      position: coordinate,
      map: this.map,
    }));
    const bounds = this.getBounds();
    this.map.fitBounds(bounds);
    this.map.panToBounds(bounds);
  }

}
