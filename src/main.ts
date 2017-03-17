///<reference path="../typings/modules/lodash/index.d.ts" />
import {Two} from "./two";

import * as _ from "lodash";

class Todo {
  todos: Array<string>;

  constructor() {
    this.todos = ["køb ind", "luft hund"];
    console.log(this.todos);
  }
}

new Todo();
