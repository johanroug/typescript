import * as _ from "lodash";
import 'jquery';
import {Two} from "./two";

export class Todo {
  todos: Array<string>;

  constructor() {
    this.todos = ["køb ind", "luft hund"];
    console.log(this.todos);
    console.log("johan er sej")
    console.log(_);
  }
}

new Todo();
