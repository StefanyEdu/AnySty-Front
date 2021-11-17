import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListComponent } from './list/list.component';
import { HomePageComponent } from './home/home-page.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'list', component: ListComponent },
      { path: 'imoveis/:cidadeOf', component: OfertasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListComponent,
    HomePageComponent,
    OfertasComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
