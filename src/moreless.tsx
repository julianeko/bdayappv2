import { Person } from "./domain/person";

export class More {
  more: Boolean | undefined;
  person: Person;
  constructor(more: Boolean, person: Person) {
    this.more = more;
    this.person = person;
  }
}
