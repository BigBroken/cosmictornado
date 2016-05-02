let path = require('path')
let pg = require('pg')
let assert = require("assert")
let http = require('http')
let should = require('should')
let request = require('request')
let exec = require('child_process').exec
let testUtils = require('./testUtils.js');

// Tell chai that we'll be using the "expect" style assertions.

describe('userUtils', () => {

  // Connect to database before any tests
  before((done) => {
    testUtils.prepareDb;
  });
  after((done) => {
    testUtils.cleanDB;
  })

  beforeEach( (done) => {
      // TODO: Seed database with some jobs to run tests against. 
    clearDB( () => {
      var jobs = [
        {
          name: 'Cat Sitter',
          salary: 36000
        },
        {
          name: 'Expert Cat Sitter',
          salary: 200000
        },
        {
          name: 'Developer',
          salary: 120000
        },
        {
          name: 'Sign Holder',
          salary: 36000
        }
      ];
    // See http://mongoosejs.com/docs/models.html for details on the `create` method
      Job.make(jobs, done);
  
    });
  });

  // TODO: Write your tests for jobController here
  it('should have a method that given a new user, adds a user to the database', (done) => {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    jobController.createJob({name: 'napper', salary: 25}, (err, job) => {
      expect(err).to.equal(null); 
      expect(job.name).to.equal('napper');
      done();
    });
  });

  it('should have a method that retrieves all users from the database', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    jobController.getHighPayingJobs( (err, highPayingJobs) => {
      expect(err).to.equal(null); 
      expect(highPayingJobs[0]).to.include({
        name: 'Expert Cat Sitter',
        salary: 200000
      });
      expect(highPayingJobs[1]).to.include({
        name: 'Developer',
        salary: 120000
      });
      done();
    });
  });


});