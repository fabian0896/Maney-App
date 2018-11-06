// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDXXR0OVSZvGPsOumlw_W9LFTgfVhfqBZw",
    authDomain: "money-app-fb85e.firebaseapp.com",
    databaseURL: "https://money-app-fb85e.firebaseio.com",
    projectId: "money-app-fb85e",
    storageBucket: "money-app-fb85e.appspot.com",
    messagingSenderId: "547340425536"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
