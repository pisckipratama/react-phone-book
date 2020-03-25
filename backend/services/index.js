const firebase = require('firebase');

const getPhones = () => {
  const phoneReferences = firebase.database().ref('/Phones');
  return (new Promise((resolve, reject) => {
    phoneReferences.on('value', (snapshoot) => {
      const folders = snapshoot.val();
      if (folders === null) {
        resolve([]);
      } else {
        const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]))
        resolve(data);
      }
      phoneReferences.off('value');
    }, (errorObject) => {
      console.log('read failed: ' + errorObject.code);
      reject('read failed: ' + errorObject.code);
    })
  }))
}

const createPhone = phone => {
  const referencePath = `/Phones/${phone.id}`
  const phoneReferences = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReferences.set({Name: phone.Name, Phone: phone.Phone}, (error) => {
      if (error) {
        reject("Data couldn't added: " + error)
      } else {
        resolve(phone)
      }
    })
  }))
}

const updatePhone = phone => {
  const referencePath = `/Phones/${phone.id}`
  const phoneReferences = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReferences.update({Name: phone.Name, Phone: phone.Phone}, err => {
      if (err) {
        reject('data could not updated: ' + err)
      } else {
        resolve(phone)
      }
    })
  }))
}

const deletePhone = phone => {
  const referencePath = `/Phones/${phone.id}`
  const phoneReferences = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReferences.remove((err) => {
      if (err) {
        reject('data could not deleted: ' + err)
      } else {
        resolve(phone)
      }
    })
  }))
}

module.exports = {
  getPhones,
  createPhone,
  updatePhone,
  deletePhone
}