import { Person } from "./domain/person";

export class More {
  more: boolean;
  person: Person;
  constructor(more: boolean, person: Person) {
    this.more = more;
    this.person = person;
  }
}
