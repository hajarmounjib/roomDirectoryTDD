
var express = require('express');
var router = express.Router();

/* 
  Création d'un utilisateur
  Body : token(1234), email(hajar@hajar.com), nom(Hajar), n° de chambre (13)
  Response : result(true), saveUser({token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13}), token
  */
 router.post('/sign-up',async function(req, res, next) {

  var token = 1234
  var email = req.body.email;
  var nom = req.body.nom;
  var chambre = req.body.chambre;
  
  if (!email || !nom || !chambre) {
      res.json({ result: false });
  } else {
      res.json({result:true, saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13}})
  } ;})

/* 
Connexion d'un utilisateur (sign-in)
 Body :  email(hajar@hajar.com), nom(Hajar), n° de chambre (13)
Response : result(true), saveUser({token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13})
*/
router.post('/sign-in' ,async function(req, res, next) {
  var email = req.body.email;
  var nom = req.body.nom;
  var chambre = req.body.chambre;

  
  if (email != 'hajar@hajar.com' || nom !='Hajar' || chambre != '13') {
      res.json({ result: false });
  } else {
      res.json({result:true,  saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13}})
  } ;})

/* 
    Récupération d'un événement
    Params : eventId(event1234)
    Response : result(true), event({nom:"Pause goûter de l'après-midi",date:"15/03/2020"})
    */
   router.get('/events/:eventId', async function (req, res, next){
    const evenementId = req.params.eventId

    if (!evenementId) {
      res.json({ result: false });
  } else {
      res.json({result:true,event:{nom:"Pause goûter de l'après-midi",date:"15/03/2020"}})
  } ;})


  /* 
  Confirmation de la participation à un evenements
  Body : userId(id1234), eventId(event1234),isComing(true)
  Response : result(true)
  */
 router.post('/confirmationEvents', async function (req, res, next){
  const userId = req.body.userId;
  const eventId = req.body.evenementId;
  const isComing = req.body.isComing

  if (!userId || !eventId || !isComing) {
    res.json({ result: false });
} else {
    res.json({result:true})
} ;})

  /* 
  Affichage du récap des commandes et événement de l'utilisateur
  Body : userId(id1234)
  Response : result(true),events('mes événements'),orders('mes commandes')
  */
 router.post('/account', async function (req, res, next){
  const userId = req.body.userId

  if (userId === 'id1234') {
    res.json({result:true,events:'mes événements',orders:'mes commandes'})
} else {
    res.json({result:false})
} ;})

module.exports = router;
