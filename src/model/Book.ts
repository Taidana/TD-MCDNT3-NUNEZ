export class Book {
  private title: string;
  private year: number;

  constructor(title: string, year: number) {
    this.setTitle(title);
    this.setYear(year);
  }

  public getTitle() {
    return this.title;
  }

  public getYear() {
    return this.year;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public setYear(year: number) {
    this.year = year;
  }

}
