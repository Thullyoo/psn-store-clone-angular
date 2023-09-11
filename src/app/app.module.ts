import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/card/label/label.component';
import { PricingComponent } from './components/card/pricing/pricing.component';
import { GamesContentComponent } from './pages/games-content/games-content.component';
import { AddGameComponent } from './components/add-game/add-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    CardComponent,
    LabelComponent,
    PricingComponent,
    GamesContentComponent,
    AddGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
