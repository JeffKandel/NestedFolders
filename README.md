# Frame_Kandel

## Setup

To run the project locally, you'll need to take the following steps:

* Clone this repo!
* `npm install`, or `yarn install`
* Create two postgres databases: `Frame_Kandel` and `Frame_Kandel-test`
  * If there are Postgres authentication issues see the note in `/server/db/db.js`
* Run `yarn seed` to:
  * Create the tables from our schema
  * Populate two Projects you can explore with the API
* Run `yarn start` to start the app
  * Navigate to the following:
    * localhost:3000/api/projects/1
    * localhost:3000/api/projects/2
  * You can display child folders as a list by adding `?flatten=true` to the URL
* Run `yarn test` to run a test of the API with mocha

Alternatively, you can head to the [deployed site](https://nestedfolders.herokuapp.com)


