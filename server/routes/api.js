// importalos los siguientes archivos en el API
 
const ClientsDAO    = require('../dao/clients.dao');
const ProductsDAO   = require('../dao/products.dao');
const SalesDAO      = require('../dao/sales.dao');
 
const express       = require('express');
const router        = express.Router();


 
router.all('*', function(req, res, next){
  console.log("[api]", req.method, req.url);
  next();
});
 
router.get('/api/hola', function(req, res){
  res.send("hola mundo");
});
 
router.get('/api/holajson', function(req, res){
  res.json({result:"hola json", data:"este es un formato JSON"});
});
 
router.get('/api/hola/:name', function(req, res){
  var name  = req.params.name;
  res.send("hola " +  name);
});

//en esta seccion se esta aplicando el passport para el login
passport.use(new LocalStrategy({    
  passReqToCallback: true  
    },   
 
function(req, username, password, done) {   
  console.log("passportlo", username);
  db.find("user", {
    email: username
  }).then(function(data) {
    if (data.body) {
      if (password == data.body[0].password) {
        console.log('bien');
        return done(null, data.body);   
      } 
        else {
        console.log('mal');
        return done(null, false); 
      } 
    } 
      
      else {
      return done(null, false); 
    }
    res.json(data);
  }).catch(function(error) {
    res.json(error);
  });
}));

 
router.all('*', function(req, res, next) {  
  console.log("[api]", req.method, req.url);  
  next();
}); 
router.get('/api/hola', function(req, res) {  
  res.send("hola mundo");
}); 
router.get('/api/holajson', function(req, res) {  
  res.json({
    result: "hola json",
    data: "este es un formato JSON"
  });
}); 
router.get('/api/hola/:name', function(req, res) {  
  var name  = req.params.name;  
  res.send("hola " +  name);
});
 

// Users
router.get('/api/clients', ClientsDAO.find);
router.post('/api/clients', ClientsDAO.insertOne);
router.put('/api/clients', ClientsDAO.updateOne);
router.delete('/api/clients/:id', ClientsDAO.deleteOne);
router.get('/api/clients/:name', ClientsDAO.findbyname);

 
// Products
router.get('/api/products', ProductsDAO.find);
router.post('/api/products', ProductsDAO.insertOne);
router.put('/api/products', ProductsDAO.updateOne);
router.delete('/api/products/:id', ProductsDAO.deleteOne);
router.get('/api/product/:name', ProductsDAO.findbyname);
 
// Sales
router.get('/api/sales', SalesDAO.find);
router.post('/api/sales', SalesDAO.insertOne);
router.put('/api/sales', SalesDAO.updateOne);
router.delete('/api/sales/:id', SalesDAO.deleteOne);

//funcion para validar al usuario al iniciar sesión
router.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
      console.log('hooiuu', error, user, info);
      if (user) {
        res.json({
          result: 'success',
          body: user
        });
      } else {
        res.json({
          result: 'failure',
          error: error
        });
      }
    })(req, res, next)
});
 

module.exports = router;