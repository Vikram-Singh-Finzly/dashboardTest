import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BankosDashboardModule } from 'bankos-dashboard';
import { AppRoutingModule } from './app-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BankosDashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
