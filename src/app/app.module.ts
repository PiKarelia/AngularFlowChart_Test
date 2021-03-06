import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DynamicChartComponent } from './charts/dynamic-chart/dynamic-chart.component';
import { GrayChartComponent } from './charts/gray-chart/gray-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    DynamicChartComponent,
    GrayChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
