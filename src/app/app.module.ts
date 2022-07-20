import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecentRequestsComponent } from './recent-requests/recent-requests.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarLinksComponent } from './side-bar-links/side-bar-links.component';
import { StatisticsCardsComponent } from './statistics-cards/statistics-cards.component';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {NgxEchartsModule} from "ngx-echarts";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MainLayoutComponent,
    NavBarComponent,
    RecentRequestsComponent,
    SideBarComponent,
    SideBarLinksComponent,
    StatisticsCardsComponent,
    ChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
