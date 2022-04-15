import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '../common/ParkingLot';
import { MapService } from 'src/app/service/map.service';
import { ParkingSpace } from '../common/ParkingSpace';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  items: ParkingSpace[] = [];

  now?: Date;
  startTime?: Date;
  nowInterval?: any;

  constructor(
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.getSpaces();
    this.now = new Date();
    this.startTime = new Date();
    this.runTimer();
  }
  ngOnDestroy() {
    clearInterval(this.nowInterval);
  }

  selectColor(id: number): string {
    // let v: string = '"color: '
    switch (id) {
      case 1:
        return '#40ff00';
      case 2:
        return '#00ffff';
      case 3:
        return '#ffb3ff';
      case 4:
        return '#ffaa80';
      case 5:
        return '#99ffff';
      case 6:
        return '#99ccff';
      default:
        return '#000000';
    }
  }

  getSpaces(): void{
    this.mapService.getSpaces().subscribe(v => {
      this.items = [];
      for (let space of v.data) {
        if(space.valid == 1) {
          this.items.push(space);
        }
      }
    });
  }

  runTimer() {
    this.nowInterval = setInterval(() => {
      if (this.startTime) {
        if (new Date().getTime() - this.startTime.getTime() > 5000) {
          // console.log(this.now);
          this.getSpaces();
        }
      }
      this.now = new Date();
    }, 5000);
  }
  
}
