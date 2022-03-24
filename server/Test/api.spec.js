const request = require("supertest");
const server = require('../server');

describe('API server', () => {
    let api
    let post = {
        "id": 2,
        "title": "Here is a fact",
        "description": "Here is some text",
        "date": "Thu, 25 Nov 2021 15:08:51 GMT",
        reactions: [1, 1, 0],
        comment: ["Sidar you should not panic"],
    }

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () => console.log('Test server running on port 5000'))
    })

    afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
        // close the server, then run done
        console.log('Gracefully stopping test server')
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })


   // post tests

  it ('responds to get / with status 200', (done) => {
    request(api).get('/').expect(200, done);
  });

  it ('responds to get /comments/:id with status 200', (done) => {
      request(api).get('/comments/1').expect(200, done);
  });

  it ('responds to non-existent paths with 404', (done) => {
    request(api).get('/no').expect(404, done);
  })


  it ('responds to get specific reactions', (done) => {
      request(api).get('/reaction/1').expect(200).expect({"reaction1":1,"reaction2":0,"reaction3":0}, done);
  });

//   it ('responds to post / with status 201', (done) => {
//       request(api).post('/').send(post).expect(201).expect("message:2 successfully added to our collection., done")
//   });

  //comment test

  it ('retrieves a comment by id with status 200', (done) => {
    request(api).get('/comment/1').expect(200).expect(["Test comment", "Sidar you should panic", "idk"], done);
});

    it ('responds to get /comment/200 with status 500', (done) => {
        request(api).get('/comment/200').expect(500, done);
    });


    it ('responds to put /comment/7 with status 201', (done) => {
        request(api).put('/comment/7').send("posted comment").expect(201, done)
    })
})
