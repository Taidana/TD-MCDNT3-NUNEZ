import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { CupComponent } from './cup/cup.component';

import { TeamService } from './team.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { PlayerService } from './player.service'
const appRoutes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:name', component: TeamComponent},
  {path: 'admin', component: AddTeamComponent},
  {path: 'players', component: PlayersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TeamComponent,
    TeamsComponent,
    CupComponent,
    AddTeamComponent,
    PlayerComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeamService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
