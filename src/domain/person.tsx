import { Birthday } from "./birthday";

export class Person {
  name: string;
  birthday: Birthday;
  present: Boolean;
  postcard: Boolean;
  message: Boolean;
  idea: string;
  
  constructor(
    name: string,
    birthday: Birthday,
    present: Boolean,
    postcard: Boolean,
    message: Boolean,
    idea: string
    
  ) {
    this.name = name;
    this.birthday = birthday;
    this.present = present;
    this.postcard = postcard;
    this.message = message;
    this.idea = idea;
  }
}
