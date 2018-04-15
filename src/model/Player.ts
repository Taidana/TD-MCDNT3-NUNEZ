export class Player {
  private picture_folder: string = '/assets/img/logos/';
  id: number;
  picture: string;
  lastname: string;
  firstname: string;
  current_team: string;
  country: string;
  position: string;

  constructor(
    id: number,
    picture: string,
    lastname: string,
    firstname: string,
    current_team: string,
    country: string,
    position: string,) {
    this.id = id;
    this.picture = picture;
    this.lastname = lastname;
    this.firstname = firstname;
    this.current_team = current_team;
    this.country = country;
    this.position = position;
  }
  getPic() {
    let external: boolean = this.picture.substr(0,4) == 'http';
    return external ? this.picture : this.picture_folder + this.picture;
  }
}
