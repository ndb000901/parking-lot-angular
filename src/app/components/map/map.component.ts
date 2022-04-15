import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { MyLocation } from '../common/MyLocation';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: Map<string, string>;
  locationMap: Map<number, string>;
  iconType: string = '';

  now?: Date;
  startTime?: Date;
  nowInterval?: any;

  constructor(private mapService: MapService) {
    this.map = new Map<string, string>();
    this.locationMap = new Map<number, string>();
    

  }

  ngOnInit(): void {
    this.getSpaces();
    this.getLocation();
    this.initMap();
    this.now = new Date();
    this.startTime = new Date();
    this.runTimer();

  }

  ngOnDestroy() {
    clearInterval(this.nowInterval);
  }

  getSpaces(): void {
    this.map.clear();
    this.mapService.getSpaces().subscribe((v) => {
      for (let value of v.data) {
        if (value.valid == 1) {
          let key =
            value.parkingLotId +
            ';' +
            value.areaId +
            ';' +
            value.parkingSpaceId;
          this.map.set(key, 'square ' + 'area-' + value.areaId);
        } else {
          let key =
            value.parkingLotId +
            ';' +
            value.areaId +
            ';' +
            value.parkingSpaceId;
          this.map.set(key, 'square ' + 'off');
        }
      }
    });
  }

  getLocation(): void {
    this.mapService.getLocation().subscribe((v) => {
      if (v.data == null) {
        console.log('null');
      } else {
        if (v.data.direction == 'E') {
          this.iconType = 'right-circle';
        } else if (v.data.direction == 'W') {
          this.iconType = 'left-circle';
        } else if (v.data.direction == 'N') {
          this.iconType = 'up-circle';
        } else if (v.data.direction == 'S') {
          this.iconType = 'down-circle';
        }

        this.locationMap.clear();
        for (let i = 1; i <= 12; i++) {
          if (v.data.location == i) {
            this.locationMap.set(i, 'icon');
          } else {
            this.locationMap.set(i, 'icon icon-off');
          }
        }
      }


    });
  }

  initMap():void {
    for(let areaId = 1; areaId <= 6; areaId++) {
      for(let spaceId = 1; spaceId <= 6; spaceId++) {
        this.map.set('1;' + areaId + ';' + spaceId,'square ' + 'area-' + areaId);
      }
    }
  }

  reload(): void {
    this.getLocation();
    // this.getSpaces();
  }


  runTimer() {
    this.nowInterval = setInterval(() => {
      if (this.startTime) {
        if (new Date().getTime() - this.startTime.getTime() > 5000) {
          // console.log(this.now);
          this.reload();
        }
      }
      this.now = new Date();
    }, 5000);
  }
}
