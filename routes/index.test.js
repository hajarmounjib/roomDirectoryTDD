var app = require("../app")
var request = require("supertest")

test("Création d'un utilisateur - Body correct", async (done) => {
 await request(app).post('/sign-up')
   .send({email:'hajar@hajar.com',nom:'Hajar',chambre:13})
   .expect(200)
   .expect({result:true, saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13}});
 done();
});

test("Création d'un utilisateur - Body incomplet", async (done) => {
  await request(app).post('/sign-up')
    .send({email:'hajar@hajar.com'})
    .expect(200)
    .expect({ result: false });
  done();
 });

 test("Connexion d'un utilisateur - Body correct", async (done) => {
  await request(app).post('/sign-in')
    .send({email:'hajar@hajar.com',nom:'Hajar',chambre:13})
    .expect(200)
    .expect({result:true, saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13}});
  done();
 });
 
 test("Connexion d'un utilisateur - Body incomplet", async (done) => {
   await request(app).post('/sign-in')
     .send({email:'hajar@hajar.com'})
     .expect(200)
     .expect({ result: false });
   done();
  });

  test("Récupération d'un événement - Params correct", async (done) => {
    await request(app).get('/events/event1234')
      .expect(200)
      .expect({result:true, event:{nom:"Pause goûter de l'après-midi",date:"15/03/2020"}});
    done();
  });


  test("Confirmation de la participation à un événements - Body correct", async (done) => {
    await request(app).post('/confirmationEvents')
      .send({userId:'id1234',eventId:'event1234',isComing:true})
      .expect(200)
      .expect({ result: false });
    done();
   });

   test("Récapitulatif de l'utilisateur - Body correct", async (done) => {
    await request(app).post('/account')
      .send({userId:'id1234'})
      .expect(200)
      .expect({ result:true,events:'mes événements',orders:'mes commandes' });
    done();
  });

