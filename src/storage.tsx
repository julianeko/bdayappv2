import { Birthday } from "./domain/birthday";
import { Person } from "./domain/person";

const PersonsArray: Array<Person> = [
  {
    name: "Sebastian Thelen",
    birthday: { day: 8, month: 12, year: 1982 },
    present: true,
    postcard: false,
    message: false,
    idea: "Test",
  },
  {
    name: "Mama",
    birthday: { day: 26, month: 1 },
    present: true,
    postcard: false,
    message: false,
    idea: "",
  },
  new Person("Susanne", new Birthday(23, 4), true, false, true, ""),
  new Person("Anna", new Birthday(9, 7), true, false, true, ""),
];

export async function getPersons(): Promise<Person[]> {
  const persons = await PersonsArray.map((person: Person) => {
    return person;
  });
  return persons;
}

console.log(getPersons());
