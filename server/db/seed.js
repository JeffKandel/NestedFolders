const db = require('./db')
const File = require('./models/file')
const Folder = require('./models/folder')
const Project = require('./models/project')

const folders = [{
  name: 'Draft -- April 24',
  parent_folder_id: null,
}, {
  name: 'Media Files',
  parent_folder_id: 1,
}, {
  name: 'Images',
  parent_folder_id: 2,
}, {
  name: 'Videos',
  parent_folder_id: 2,
}, {
  name: 'Frame.io TV Spot',
  parent_folder_id: null,
}, {
  name: 'Screen Captures',
  parent_folder_id: 5,
}, {
  name: 'Small',
  parent_folder_id: 6,
}, {
  name: 'Medium',
  parent_folder_id: 6,
}, {
  name: 'Large',
  parent_folder_id: 6,
}]

const files = [{
  name: 'logo.png',
  media_url: "http://placekitten.com/200/300",
  folder_id: 3,
}, {
  name: 'promo.mp4',
  media_url: "http://placekitten.com/200/300",
  folder_id: 4,
}, {
  name: 'capt_one_small.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 7,
}, {
  name: 'capt_two_small.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 7,
}, {
  name: 'capt_two_med.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 8,
}, {
  name: 'capt_one_med.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 8,
}, {
  name: 'capt_two_lg.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 9,
}, {
  name: 'capt_one_lg.jpg',
  media_url: "http://placekitten.com/200/300",
  folder_id: 9,
}]

const projects = [{
  name: 'Project One',
  root_folder_id: 1,
}, {
  name: 'Project Two',
  root_folder_id: 5,
}]

const seed = async () => {
  try{
    for(const folder of folders){
      await Folder.create(folder)
    }

    for(const project of projects){
      await Project.create(project)
    }

    for(const file of files){
      await File.create(file)
    }
  } catch (err) {
    throw new Error(err)
  }
}

const main = () => {
  console.log('Syncing db...')
  /*
   * The {force: true} option is destructive
   * It is only suitable for demos/prototypes like this.
   */
  db.sync({force: true})
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
