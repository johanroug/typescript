///<reference path="../typings/modules/lodash/index.d.ts" />
import * as _ from "lodash";
import {Two} from "./two";

export class Todo {
  todos: Array<string>;

  constructor() {
    this.todos = ["køb ind", "luft hund"];
    console.log(this.todos);
  }
}

new Todo();
