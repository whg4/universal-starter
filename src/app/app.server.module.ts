// angular
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// shared
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    // AppModule - FIRST!!!
    AppModule,
    ServerModule,
    NoopAnimationsModule,
],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppServerModule {}
