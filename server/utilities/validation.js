const validate = require('mongoose-validator')

const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 20],
    message: 'Name must not exceed {ARGS[1]} characters.'
  })
];

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 25],
    message: 'Email must not exceed {ARGS[1]} characters.'
  }),
  validate({
    validator: 'isEmail',
    message: 'Email must be valid.(smth@smth.com)'
  })
];

const descValidator = [
  validate({
    validator: 'isLength',
    arguments: [0,500],
    message: 'Description must not exceed {ARGS[1]} characters.'
  })
]

module.exports = {
  nameValidator,
  emailValidator,
  descValidator
}
