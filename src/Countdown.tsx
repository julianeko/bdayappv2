import React, { useEffect, useState } from "react";
import { sortDateFunction } from "./storage";
import { Person } from "./domain/person";



function Countdown() {
  const [person, setPerson] = useState<Array<Person>>([]);

  useEffect(() => {
    sortDateFunction().then((value: any) => {
      if (value) {
        setPerson(value);
      }
    });
  }, []);
  console.log(person);



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
      <h1>Test</h1>
      <div>{onepersonview}</div>{" "}
    </>
  );
}

export default Countdown;
