import React, { DetailedHTMLProps, useEffect } from "react";
import { getPersons, searchFunction, sortFunction } from "./storage";
import { useState } from "react";
import { Person } from "./domain/person";
function AlphabeticList() {
  const [person, setPerson] = useState<Array<Person>>([]);
  const [eingabe, setEingabe] = useState(String);

  useEffect(() => {
    sortFunction().then((value: Person[]) => {
      if (value) {
        setPerson(value);
      }
    });
  }, []);
  console.log(person);

  function eingabeFunction(event: React.FormEvent<HTMLInputElement>) {
    setEingabe((event.target as HTMLInputElement).value);
  }

  function searchNow() {
    searchFunction(eingabe).then((value: Person[]) => {
      if (value) {
        setPerson(value);
      }
    });
  }

  const onepersonview = person.map((p: Person) => {
    const message = p.message ? "Send Message" : <></>;
    const postcard = p.postcard ? "Send Postcard" : <></>;
    const present = p.present ? "Buy a present" : <></>;
    return (
      <div>
        <div className="onebox">
          <div>{p.name}</div>
          <div>
            {p.birthday.day}.{p.birthday.month}.{p.birthday.year}
          </div>
          <div>{message}</div>
          <div>{postcard}</div>
          <div>{present}</div>
          <div>{p.idea}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h1>Your friends</h1>
        <div>
          <input
            type="text"
            placeholder="Search Name"
            value={eingabe}
            onChange={eingabeFunction}
          ></input>
          <button onClick={searchNow}>Search</button>
        </div>

        <div>{onepersonview}</div>
      </div>
    </>
  );
}

export default AlphabeticList;
