import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOptionsComponentComponent } from './game-options-component/game-options-component.component';
import { SinglePlayerGameComponentComponent } from './single-player-game-component/single-player-game-component.component';
import { TwoPlayerGameComponentComponent } from './two-player-game-component/two-player-game-component.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

   routes: Routes = [
    { path: '', component: GameOptionsComponentComponent },
    { path: 'single-player-game', component: SinglePlayerGameComponentComponent},
    { path: 'two-player-game', component: TwoPlayerGameComponentComponent },
  ];
  
}
