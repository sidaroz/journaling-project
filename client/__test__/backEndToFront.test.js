/**
* @jest-environment jsdom
*/

const fs = require("fs");
const path = require("path");
const { isTypedArray } = require("util/types");
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

const fetchMock = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  )

describe('Backend to Frontend connector',() => {

    beforeEach( () => {
        document.documentElement.innerHTML = html.toString();
        app = require('../backEndToFront');
    })

    describe('listAllPosts', () => {
        test('fetches the data', () => {
            app.listAllPosts();
            expect(fetchMock).toHaveBeenCalledWith('https://factopia-api.herokuapp.com/')
        })
        
      })
})
