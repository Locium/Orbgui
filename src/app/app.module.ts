import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule} from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { GroupviewComponent } from './components/groupview/groupview.component';
import { ClientviewComponent } from './components/clientview/clientview.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ChartsModule } from "ng2-charts";
import { AssetAllocationChartComponent } from './components/asset-allocation-chart/asset-allocation-chart.component';
import { AssetAllocationBubbleChartComponent } from './components/asset-allocation-bubble-chart/asset-allocation-bubble-chart.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as World from "fusionmaps/maps/fusioncharts.world";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(
  FusionCharts,
  FusionMaps,
  World,
  FusionTheme
);


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    GroupviewComponent,
    ClientviewComponent,
    TodosComponent,
    TodoItemComponent,
    AssetAllocationChartComponent,
    AssetAllocationBubbleChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
