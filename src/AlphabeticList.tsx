import React, { DetailedHTMLProps, useEffect } from "react";
import { getPersons } from "./storage";
import { useState } from "react";
import { Person } from "./domain/person";
function AlphabeticList() {
  const [person, setPerson] = useState<Array<Person>>([]);

  useEffect(() => {
    getPersons().then((value: Person[]) => {
      if (value) {
        setPerson(value);
      }
    });
  }, []);
  console.log(person);

  person.sort(function (a, b) {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
  });

  const onepersonview = person.map((p: Person) => {
    const message = p.message ? "Send Message" : <></>;
    const postcard = p.postcard ? "Send Postcard" : <></>;
    const present = p.present ? "Buy a present" : <></>;
    return (
      <div className="container">
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

        <input type="text" placeholder="Search Name"></input>
      </div>
      <div>{onepersonview}</div>
    </>
  );
}

export default AlphabeticList;
