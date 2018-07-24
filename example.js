var elasticsearch = require('./index');
var Car = elasticsearch.model('Car');
var car = new Car({
  type: 'Ford', color: 'Black'
});

elasticsearch.connect('testindex').then(function(){
    console.log(car.find({}))
       
  // be sure to call connect before bootstrapping your app.
//   car.save().then(function(document){
//     console.log(document);
//   });
});