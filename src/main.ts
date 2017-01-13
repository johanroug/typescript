///<reference path="../typings/modules/lodash/index.d.ts" />
import * as _ from "lodash";
import {Two} from "./two";

class Johan {
  constructor() {
    console.log("ho ho ho5");

  }
  getUser() {
    return [{name: "Leena"}]
  }
}

new Johan();
new Two();
console.log(_.isArray(new Johan().getUser()));
