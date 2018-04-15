import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { TeamService } from '../team.service';

@Component({
  selector: 'intro',
  templateUrl: 'intro.component.html'
})
export class IntroComponent {
  // les propriétés sont publiques par défaut

  // types primitifs (simples)
  public title = 'mon Application';
  message: string = '';
  message2: string = '';
  nb1: number = 14;
  nb2: number = 16;
  result: number = 0;
  admin_status: boolean = false;
  name: string = 'Chris';

  notes: number[] = [12, 8, 23, 14];
  stagiaires: string[] = ['Paul', 'Eric', 'Abdel', 'Léa', 'Véronica'];

  book = {
    title: 'Germinal',
    author: 'Zola',
    year: 1872,
    famous: true,
    topics: [
      {labelEn: 'History', labelFr: 'Histoire', labelIt: 'Storia'},
      {labelEn: 'Politic', labelFr: 'Politique', labelIt: 'Politica'},
      {labelEn: 'Drama', labelFr: 'Drame', labelIt: 'Drama'},
    ]
  };

  // instanciation de la classe Book
  book1: Book = new Book('Game of Thrones', 2001);
  //book1.setTitle('Game of Thrones'); Mauvais endroit pour appeler la méthode

  // DI (Dependency Injection). Le constructeur de la classe IntroComponent
  // instancie la classe TeamService
  // les objets IntroComponent dispose d'une propriété this.teamService
  constructor(private teamService: TeamService) {}

  test() {
    this.result = this.result + 30;
    this.message = this.result.toString();

    if (this.result >= 120) {
      if (this.admin_status) {
        this.message2 = 'Bravo M. l\'administrateur !';
      } else {
        this.message2 = 'Bravo !';
      }

    }
  }

  clear() {
    this.title = "fsdqfsqfsqfsqfsq";
    this.result = 0;
    this.message = '';
    this.message2 = '';
  }

  onKeyUp(e) {
    console.log(e);
    this.message2 += e.key;
  }

}
