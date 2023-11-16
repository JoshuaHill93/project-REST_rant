const router = require("express").Router();


router.get('/new', (req, res) => {
  res.render('places/new')
})




router.get("/", (req, res) => {
    console.log(req.body)
  res.send("POST /places");
});

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
}]

router.post('/', (req, res) => {
    
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
  
  
module.exports = router;