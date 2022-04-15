import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { SpaceService } from 'src/app/service/space.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnInit {
  validSpaceNum: number = NaN;
  invalidSpaceNum: number = NaN;
  dateTime: string = '';
  carId: string = '';

  now?: Date;
  startTime?: Date;
  nowInterval?: any;

  constructor(
    private spaceService: SpaceService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.reload();
    this.now = new Date();
    this.startTime = new Date();
    this.runTimer();
  }

  ngOnDestroy() {
    clearInterval(this.nowInterval);
  }

  getValidNum(): void {
    this.spaceService.getValidSpaceNum().subscribe((v) => {
      this.validSpaceNum = v.data;
    });
  }

  getInvalidNum(): void {
    this.spaceService.getInvalidSpaceNum().subscribe((v) => {
      this.invalidSpaceNum = v.data;
    });
  }

  getCarId(): string {
    let v: string | undefined = localStorage.getItem('carId')?.toString();

    if (v != undefined) {
      return v;
    }
    return '';
  }

  getOrderTime(): void {
    this.spaceService.getOrderTime().subscribe((v) => {
      if (v.msg == null) {
        this.dateTime = 'null';
      } else {
        this.dateTime = v.data;
      }
    });
  }

  reload(): void {
    this.getValidNum();
    this.getInvalidNum();
    // this.carId = this.getCarId();
    this.getOrderTime();
  }

  runTimer() {
    this.nowInterval = setInterval(() => {
      if (this.startTime) {
        if (new Date().getTime() - this.startTime.getTime() > 6000) {
          console.log(this.now);
          this.reload();
        }
      }
      this.now = new Date();
    }, 5000);
  }
}
