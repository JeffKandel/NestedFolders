const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../app')
const { Project } = require('../db/models')

describe('User routes', () => {
  describe('/api/projects/:id', () => {
    it('returns a project with the correct properties', () => {
      return request(app)
        .get('/api/projects/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.property('name')
          expect(res.body).to.have.property('root_folder_id')
          expect(res.body).to.have.property('root_folder')
        })
    })

    it('includes the folder hierarchy', () => {
      return request(app)
        .get('/api/projects/1')
        .expect(200)
        .then(res => {
          const { root_folder: { children } } = res.body
          expect(children).to.be.an('array').that.is.not.empty;
          expect(children[0].children).to.be.an('array').that.is.not.empty;
        })
    })
  })
})
