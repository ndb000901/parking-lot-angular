import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  tempId: string = '';
  isEdit: boolean = true;
  iconFlag: string = 'save';
  title: string = '保存';

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    let v: string | undefined =  localStorage.getItem('carId')?.toString();
    if (v != undefined) {
      this.tempId = v;
    }
  }


  save(carId: string): void {
    localStorage.setItem('carId',carId);
    // this.mapService.setCarId(carId);
  }

  clickButton():void {
    if(this.isEdit) {
      this.save(this.tempId);
      this.isEdit = false;
      this.iconFlag = 'edit';
      this.title = '编辑'
    } else {
      this.isEdit = true;
      this.iconFlag = 'save';
      this.title = '保存';
    }
  }
}
