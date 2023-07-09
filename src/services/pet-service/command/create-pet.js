const Pet = require("../../../models/pet-model");

exports.createPet = async (petData) => {
  const { petId, petName, petBreed, petType } = petData;
  try {
    // Check if pet with the same name, breed, and type already exists
    const existingPet = await Pet.findOne({ petName, petBreed, petType });

    if (existingPet) {
      // Pet already exists, return the existing pet
      return "Pet Already Exist";
    }

    // Pet doesn't exist, create a new pet
    const pet = await Pet.create({ petId, petName, petBreed, petType });
    return pet;
  } catch (error) {
    console.log("Command Failed: Failed to create pet", error);
  }
};
