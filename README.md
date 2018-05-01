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

## How Querying Works

Nested queries are handled by the sequelize-hierarchy plugin.  When a call to the folder hierarchical structure is made the generated SQL looks like:

```sql
SELECT projects.id,
       projects.name,
       projects.root_folder_id,
       folders.id,
       folders.name,
       folders.parent_folder_id,
       folders."hierarchyLevel",
       descendent.id,
       descendent.name,
       descendent.parent_folder_id,
       descendent."hierarchyLevel",
       ancestor."foldersId",
       ancestor."ancestorId"
FROM projects AS projects
LEFT OUTER JOIN folders ON projects.root_folder_id = folders.id
LEFT OUTER JOIN (foldersancestors AS ancestor
                 INNER JOIN folders AS descendent ON descendent.id = ancestor."foldersId") ON folders.id = ancestor."ancestorId"
WHERE projects.id = '1'
```


This queries utilizes a through table to rapidly identify all the children of the requested root folder.  The plugin then utilizes an [afterFind hook](https://github.com/overlookmotel/sequelize-hierarchy/blob/618af733828e7e154ba2e71136589970274dff99/lib/hooksUniversal.js#L63) to build the nested structure from the return data.  If a consumer of this API does not want to see the descendent nesting, passing flatten=true in the request query will simply return the result of the query above.
