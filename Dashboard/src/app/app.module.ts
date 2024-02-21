import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './pages/start/start.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule, PlotlyService } from 'angular-plotly.js';
import * as DeLocale from '../../node_modules/plotly.js/lib/locales/de-ch.js'
import { MapComponent } from './components/leafletmap/map/map.component';
import { PlotComponent } from './components/plotly/plot/plot.component';
import { TableComponent } from './components/table/table/table.component';
import { BoxComponent } from './components/infobox/box/box.component';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/de';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor-service.service';
import { PrivateComponent } from './pages/private/private.component';
import { AdminComponent } from './pages/admin/admin.component'
import { ReplacePipe } from './services/replace_pipe';
import { AddUserDialog } from './pages/admin/components/addUserDialog';
import { UpdateUserDialog } from './pages/admin/components/updateUserDialog';
import { DeleteUserDialog } from './pages/admin/components/deleteUserDialog';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RenderTrunkComponent } from './components/dashboard/render-trunk/render-trunk.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { KeyDataContainerComponent } from './components/key-data-container/key-data-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlotContainerComponent } from './components/plot-container/plot-container.component';
import { BarChartComponent } from './components/plots/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/plots/line-chart/line-chart.component';
import { PrivateAnalysisComponent } from './components/private-analysis/private-analysis.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';

PlotlyModule.plotlyjs = PlotlyJS;

registerLocaleData(locales, 'de');

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MapComponent,
    PlotComponent,
    TableComponent,
    BoxComponent,
    LoginComponent,
    ProfileComponent,
    PrivateComponent,
    AdminComponent,
    ReplacePipe,
    AddUserDialog,
    UpdateUserDialog,
    DeleteUserDialog,
    DashboardComponent,
    RenderTrunkComponent,
    FooterComponent,
    HeaderComponent,
    KeyDataContainerComponent,
    NavigationComponent,
    NoDataComponent,
    PageNotFoundComponent,
    PlotContainerComponent,
    BarChartComponent,
    LineChartComponent,
    PrivateAnalysisComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PlotlyModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private plotlyService: PlotlyService) {
    this.setupPlotly()
  }

  private async setupPlotly() {
    const plotly = await this.plotlyService.getPlotly()
    plotly.register(DeLocale)
    plotly.setPlotConfig({ locale: 'de' })
  }
}
