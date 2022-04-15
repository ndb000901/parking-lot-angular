import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MainComponent } from './components/main/main.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TotalComponent } from './components/total/total.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TableComponent } from './components/table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { SettingComponent } from './components/setting/setting.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainComponent,
    TotalComponent,
    TableComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzGridModule,
    NzStatisticModule,
    NzCardModule,
    NzTableModule,
    NzAlertModule,
    NzInputModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
