import React, { DetailedHTMLProps, useEffect } from "react";
import { getPersons, searchFunction, sortFunction } from "./storage";
import { useState } from "react";
import { Person } from "./domain/person";
import { Link } from "react-router-dom";
import { More } from "./moreless";
function AlphabeticList() {
  const [person, setPerson] = useState<Array<Person>>([]);
  const [eingabe, setEingabe] = useState(String);
  const [show, setShow] = useState<boolean>(false);
  const [personsless, setPersonsless] = useState<Array<More>>([]);

  useEffect(() => {
    sortFunction().then((value: Person[]) => {
      if (value) {
        let newperson = value.map((p: Person) => {
          return new More(false, p);
        });
        return setPersonsless(newperson);
      }
    });
  }, []);
  console.log(personsless);

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

  const onepersonview = personsless.map((p: More) => {
    const message = p.person.message ? "Send Message" : <></>;
    const postcard = p.person.postcard ? "Send Postcard" : <></>;
    const present = p.person.present ? "Buy a present" : <></>;
    console.log(p.more);
    if (show === false) {
      return (
        <div>
          <div className="onebox">
            <div>{p.person.name}</div>
            <div>
              {p.person.birthday.day}.{p.person.birthday.month}.
              {p.person.birthday.year}
            </div>
            <div
              onClick={() => (
                (p.more = true), setShow(p.more), console.log(p.more)
              )}
            >
              Click
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="onebox">
            <div>{p.person.name}</div>
            <div>
              {p.person.birthday.day}.{p.person.birthday.month}.
              {p.person.birthday.year}
            </div>
            <div
              onClick={() => (
                (p.more = false), setShow(p.more), console.log(p.more)
              )}
            >
              Click
            </div>

            <div>{message}</div>
            <div>{postcard}</div>
            <div>{present}</div>
            <div>{p.person.idea}</div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className="container">
        <h1>Your friends</h1>
        <p>
          {" "}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Back{" "}
          </Link>
        </p>
        <div>
          <input
            type="text"
            placeholder="Search Name"
            value={eingabe}
            onChange={eingabeFunction}
          ></input>
          <button onClick={searchNow}>Search</button>
        </div>

        <div>{onepersonview} </div>
      </div>
    </>
  );
}

export default AlphabeticList;
