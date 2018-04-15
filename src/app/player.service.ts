import { Injectable } from '@angular/core';
import { Player } from '../model/Player';
import { PlayersComponent } from './players/Players.component';
@Injectable()
export class PlayerService {
  private players: Player[] = [
    new Player(0, 'Gignac.jpg','Gignac', 'André-Pierre', 'O.M','France', 'Attaquant'),
    new Player(1, 'Higuain.jpg','Higuain', 'Gonzalo Gerardo', 'Juventus','Argentine', 'Attaquant'),
    new Player(2, 'Blayac.jpg','Blayac', 'Jérémy', 'Strasbourg','France', 'Attaquant'),
    new Player(3, 'Messi.jpg', 'Messi', 'Lionel', 'FC Barcelone', 'Argentine', 'Attaquant'),
  ];
  constructor() { }

  public getPlayers() {
    return this.players;
  }

}
