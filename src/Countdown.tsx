import React, { useEffect, useState } from "react";
import { Birthday } from "./domain/birthday";
import { sortDateFunction } from "./storage";
import { countDownFunction } from "./domain/birthday";
import { Person } from "./domain/person";
import { Link } from "react-router-dom";
function Countdown() {
  const [person, setPerson] = useState<Array<Person>>([]);
  const [countdown, setCountdown] = useState();

  console.log(person);

  // const countdown2 = person.map((p) => {
  //   console.log(p.birthday);
  //   const newc = countDownFunction(p.birthday);
  //   return <p>{newc}</p>;
  // });

  // console.log(countdown2);
  // const showcountdown = countdown2.map((e) => {
  //   console.log(e);
  //   return <p>{e}</p>;
  // });

  useEffect(() => {
    sortDateFunction().then((value: Person[]) => {
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

    const newc = countDownFunction(p.birthday);
    let showcountdown = 0;
    if (newc === 365) {
      showcountdown = 0;
    } else {
      showcountdown = newc;
    }
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
          <p>Days to go: {showcountdown} </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h1>Test</h1>
        <div>{onepersonview}</div>
        <Link style={{ textDecoration: "none" }} to={"/YourFriends"}>
          <p>Your Friends and Search</p>
        </Link>
      </div>
    </>
  );
}

export default Countdown;
