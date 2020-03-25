const express = require('express');
const router = express.Router();
const firebase = require('firebase')

/* GET list phones. */
router.get('/', (req, res) => {
  const phoneReferences = firebase.database().ref('/Phones/');

  phoneReferences.on('value', (snapshoot) => {
    console.log(snapshoot.val());
    res.json(snapshoot.val());
    phoneReferences.off('value');
  }, (errorObject) => {
    console.log('read failed: ' + errorObject.code);
  })
});

/* POST add phone */
router.post('/', (req, res) => {
  const { id, name, phone } = req.body;

  const referencePath = '/Phones/' + id + '/';
  const phoneReferences = firebase.database().ref(referencePath);
  phoneReferences.set({Name: name, Phone: phone}, err => {
    if (err) {
      res.send('data could not be saved. ' + err)
    } else {
      res.send('data saved successfully');
    }
  })
})

/* PUT update phone */
router.put('/:id', (req, res) => {
  const { id, name, phone } = req.body;

  const referencePath = '/Phones/' + id + '/';
  const phoneReferences = firebase.database().ref(referencePath);
  phoneReferences.update({Name: name, Phone: phone}, err => {
    if (err) res.send('data could not be updated. ' + err)
    res.send('data updated successfully');
  })
})

/* DELETE */
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const referencePath = '/Phones/' + id + '/';
  const phoneReferences = firebase.database().ref(referencePath);
  phoneReferences.remove(err => {
    if (err) res.send('data could not be deleted. ' + err)
    res.send('data deleted successfully')
  })
})

module.exports = router;
