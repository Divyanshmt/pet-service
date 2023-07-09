const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet-controler/pet-controller.js");

// Create a new pet
router.post("/", petController.createPet);

// Read all pets
router.get("/", petController.getAllPets);

// Update a pet by ID
router.put("/:id", petController.updatePetById);

// Delete a pet by ID
router.delete("/:id", petController.deletePetById);

module.exports = router;
