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
    MainBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
