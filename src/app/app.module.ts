// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutsModule } from '@shared/layouts/layouts.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    RouterModule,
    AppRoutes,
    LayoutsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent],
})
export class AppModule {
}
