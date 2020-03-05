import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuuChinhChuyenPhatComponent} from "./buu-chinh-chuyen-phat/buu-chinh-chuyen-phat.component";
import {MainBotComponent} from "./Components/Blocks/main-bot/main-bot.component";
import {CarouselComponent} from "./Components/Blocks/carousel/carousel.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path:'dich-vu/buu-chinh-chuyen-phat',
    component:BuuChinhChuyenPhatComponent,
  },
  {
    path:'',
    component:CarouselComponent,
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
