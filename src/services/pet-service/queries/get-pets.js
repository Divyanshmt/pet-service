const Pet = require("../../../models/pet-model");

exports.getAllPets = async () => {
  try {
    const pets = await Pet.findByIdcrea();
    return pets;
  } catch (error) {
    throw new Error("Failed to fetch pets");
  }
};
