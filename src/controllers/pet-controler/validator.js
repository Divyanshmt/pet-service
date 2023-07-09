const { body, param, validationResult } = require("express-validator");

exports.validatePetId = () => {
  return [
    param("id")
      .notEmpty()
      .withMessage("Pet ID cannot be empty")
      .isMongoId()
      .withMessage("Invalid Pet ID"),
  ];
};

exports.validatePetName = () => {
  return [
    body("petName")
      .isString()
      .withMessage("Pet name must be a string")
      .isLength({ max: 15 })
      .withMessage("Pet name must not exceed 15 characters"),
  ];
};

exports.validatePetBreed = () => {
  return [
    body("petBreed")
      .isString()
      .withMessage("Pet breed must be a string")
      .isLength({ max: 15 })
      .withMessage("Pet breed must not exceed 15 characters"),
  ];
};

exports.validatePetType = () => {
  return [
    body("petType")
      .isString()
      .withMessage("Pet type must be a string")
      .isLength({ max: 15 })
      .withMessage("Pet type must not exceed 15 characters"),
  ];
};
