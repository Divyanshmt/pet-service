const petService = require("../../services/pet-service/index");
const { validationResult } = require("express-validator");

const validator = require("./validator");

// Create a pet
exports.createPet = [
  validator.validatePetName(),
  validator.validatePetBreed(),
  validator.validatePetType(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const pet = await petService.services.commands.createPet(req.body);
      res.json(pet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create pet" });
    }
  },
];

// Get all pets
exports.getAllPets = async (req, res, next) => {
  try {
    const pets = await petService.services.queries.getAllPets();
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch pets" });
  }
};

// Update pet by ID
exports.updatePetById = [
  validator.validatePetId(),
  async (req, res) => {
    try {
      const { id } = req.params;
      const pets = await petService.services.commands.updatePetById(
        id,
        req.body
      );
      res.json(pets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update pet" });
    }
  },
];

// Delete a pet by ID
exports.deletePetById = [
  validator.validatePetId(),
  async (req, res) => {
    try {
      const { id } = req.params;
      const pets = await petService.services.commands.deletePetById(id);
      res.json(pets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete pet" });
    }
  },
];
