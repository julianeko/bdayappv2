import { getValue } from "@testing-library/user-event/dist/utils";
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
  new Person("Anna2", new Birthday(10, 8), true, false, true, ""),
  new Person("Anna3", new Birthday(20, 7), true, false, true, ""),
  new Person("Bla", new Birthday(25, 7), true, false, true, ""),
  new Person("Bla2", new Birthday(26, 7), true, false, true, ""),
  new Person("Bla2", new Birthday(30, 7), true, false, true, ""),
  new Person("Bla2", new Birthday(27, 12), true, false, true, ""),
];

export async function getPersons(): Promise<Person[]> {
  const persons = await PersonsArray.map((person: Person) => {
    return person;
  });
  return persons;
}
export async function sortFunction(): Promise<Person[]> {
  const personssortalphabet = await PersonsArray.sort(function (a, b) {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
  });
  return personssortalphabet;
}

export async function searchFunction(wert: string): Promise<Person[]> {
  let pattern = new RegExp(wert, "gim");
  console.log(pattern);
  return await PersonsArray.filter(function (person) {
    if (person.name != "") {
      let result = person.name.match(pattern);

      return result;
    }
  });
}

export async function sortDateFunction() {
  const moment = require("moment");
  const today = moment();
  const dateformatedDay = Number(today.format("DD"));
  const dateformatedMonth = Number(today.format("M"));

  const personssortdate = await PersonsArray.sort(
    (element1: Person, element2: Person) => {
      const e1infuture =
        element1.birthday.month === dateformatedMonth
          ? element1.birthday.day >= dateformatedDay
          : element1.birthday.month >= dateformatedMonth;

      const e2infuture =
        element2.birthday.month === dateformatedMonth
          ? element2.birthday.day >= dateformatedDay
          : element2.birthday.month >= dateformatedMonth;

      if (
        (e1infuture === true && e2infuture === true) ||
        (e1infuture !== true && e2infuture !== true)
      ) {
        if (element1.birthday.month === element2.birthday.month)
          return element1.birthday.day - element2.birthday.day;
        else {
          return element1.birthday.month - element2.birthday.month;
        }
      } else if (
        element2.birthday.month === dateformatedMonth &&
        element1.birthday.month === dateformatedMonth
      ) {
        return element2.birthday.day - element1.birthday.day;
      } else {
        return element2.birthday.month - element1.birthday.month;
      }
    }
  );

  return personssortdate;
}
