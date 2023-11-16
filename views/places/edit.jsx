const React = require('react')
const Def = require('../default.jsx')

function edit_form () {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
        </Def>
    )
}





router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
  


  

  
module.exports = edit_form
