import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../model/Player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input('player') player: Player;
  constructor() { }

  ngOnInit() {
  }

}