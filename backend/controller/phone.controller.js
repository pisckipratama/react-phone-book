const PhoneSchema = require('../models/Phone');

const getData = (req, res) => {
  PhoneSchema.find().then((data) => {
    res.status(200).json({
      error: false,
      listContact: data
    })
  }).catch((err) => {
    res.status(500).json({
      error: true,
      message: err
    });
  });
}

const addData = (req, res) => {  
  const newPhone = new PhoneSchema(req.body);
  const response = {
    status: '',
    data: {}
  }
  newPhone.save().then((result) => {
    console.log(result)
    response.status = 'success',
    response.data.id = result._id;
    response.data.name = result.name;
    response.data.phone = result.phone;
    res.status(201).json(response);
  }).catch((err) => {
    res.send(err)
  });
}

const editData = (req, res) => {
  let response = {
    status: '',
    data: {}
  }

  PhoneSchema.findOne({_id: req.params.id}).then((result) => {
    if (!result) {
      response.status = 'data not found'
      res.status(401).json(response);
    }
    result.name = req.body.name;
    result.phone = req.body.phone;
    result.save().then((update) => {
      response.status = 'success'
      response.data.id = update._id;
      response.data.name = update.name;
      response.data.phone = update.phone;
      res.status(201).json(response);
    }).catch((err) => {
      res.status(500).json(err)
    });
  }).catch((err) => {
    res.status(500).json(err)
  });
}

const deleteData = (req, res) => {
  PhoneSchema.findByIdAndDelete({_id: req.params.id}).then((result) => {
    res.status(201).json({
      status: "success",
      data: result
    })
  }).catch((err) => {
    res.status(500).json({
      status: "failed",
      message: err
    })
  });
}

module.exports = {
  getData,
  addData,
  editData,
  deleteData
}