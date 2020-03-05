import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './Components/Blocks/menu-top/menu-top.component';
import { MenuMidComponent } from './Components/Blocks/menu-mid/menu-mid.component';
import { MenuBotComponent } from './Components/Blocks/menu-bot/menu-bot.component';
import { CarouselComponent } from './Components/Blocks/carousel/carousel.component';
import { BodyLeftComponent } from './Components/Page/body-left/body-left.component';
import { BodyRightComponent } from './Components/Page/body-right/body-right.component';
import { FooterBotComponent } from './Components/Blocks/footer-bot/footer-bot.component';
import { FooterMidComponent } from './Components/Blocks/footer-mid/footer-mid.component';
import { MainTopComponent } from './Components/Blocks/main-top/main-top.component';
import { MainBotComponent } from './Components/Blocks/main-bot/main-bot.component';
import { BuuChinhChuyenPhatComponent } from './buu-chinh-chuyen-phat/buu-chinh-chuyen-phat.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    MenuMidComponent,
    MenuBotComponent,
    CarouselComponent,
    BodyLeftComponent,
    BodyRightComponent,
    FooterBotComponent,
    FooterMidComponent,
    MainTopComponent,
    MainBotComponent,
    BuuChinhChuyenPhatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
