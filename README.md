# Simple React App

Contains the bare minimum for a react app using a local node.js server. You must have node.js installed.

To start:
1. npm install
2. npm start
    * Open `localhost:3000` to display your webapp

Build a react form
1. Use the existing app to build a form from components. Your form should support the following components:
    * input
        * text, number, date, and submit types
    * textarea
    * select
        * This means you will also need to support the option tag.
    * button
        * A simple button object that can take attached events.
2. You can decide the composition, but each component should be atomic. In other words, each component should not be broken down further.
    * You may group related components in the same file (select and option).
    * Any component that can exist on its own (input, textarea) should be in its own file.
3. When the user clicks submit, the form should disappear, and the data they just entered should be displayed in the center of the screen.
4. You should have an additional button on the page to reset the form. This button should still be available when the user clicks submit and to bring back the empty form.
