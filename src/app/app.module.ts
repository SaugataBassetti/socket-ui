import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SocketComponent } from './_components/socket/socket.component';
import { SocketService } from './services/socket.service';
import { SearchBarComponent } from './_components/search-bar/search-bar.component';
import { CardComponent } from './_components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocketComponent,
    SearchBarComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
