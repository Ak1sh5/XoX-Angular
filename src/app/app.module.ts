import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { GameOptionsComponentComponent } from './game-options-component/game-options-component.component';
import { SinglePlayerGameComponentComponent } from './single-player-game-component/single-player-game-component.component';
import { TwoPlayerGameComponentComponent } from './two-player-game-component/two-player-game-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameOptionsComponentComponent,
    SinglePlayerGameComponentComponent,
    TwoPlayerGameComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
