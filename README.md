# FrontendInterviewTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Assignment:
1. Open app.component and try to connect the submit button, ie show in a console.log the value for the input when you press the button
2. Use Angular’s *ngFor directive in slot.component.html to display each item’s name, type, and picture from the data input. Ensure that the image and name are displayed correctly.
3. Use the notAdmin pipe to display "Admin" for users with this type and "User is not an admin" for all others. Integrate this in slot.component.html to modify how the user type is shown.
4. Add a button in app.component.html that toggles visibility of only admin types in filteredData. Ensure that when toggled, only items with type: 'Admin' are displayed
5. Extra: Add tests for main-data.service and not-admin pipe
6. Extra: How this project can be optimized?
