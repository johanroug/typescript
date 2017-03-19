SystemJS.config({
    paths: {
      'npm:': 'node_modules/'
    },
    packages: {
      "dist": {
        "defaultExtension": "js",
        "main": "main"
      }
    },
    map: {
      "lodash": "https://unpkg.com/lodash@4.17.4",
      "jquery": "./node_modules/jquery/dist/jquery.min.js"
    }
  });

  System.import("dist")
