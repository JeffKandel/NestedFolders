# Frame_Kandel

## Setup

To run the project locally, you'll need to take the following steps:

* Clone this repo!
* `npm install`, or `yarn install`
* Create a postgres databases: `Frame_Kandel`
  * If there are Postgres authentication issues see the note in `/server/db/db.js`
* Run `yarn seed` to:
  * Create the tables from our schema
  * Populate two Projects you can explore with the API
* Start the app with `yarn start`
* Navigate to localhost:3000/api/projects/1 or localhost:3000/api/projects/2

Alternatively, you can head to the [deployed site](https://nestedfolders.herokuapp.com)


