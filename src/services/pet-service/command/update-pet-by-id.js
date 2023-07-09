const Pet = require("../../../models/pet-model");

exports.updatePetById = async (id, petData) => {
  try {
    const pet = await Pet.findByIdAndUpdate(id, petData, {
      new: true,
    });
    console.log("pet", pet);

    if (!pet) {
      throw new Error("Pet not found");
    }

    return pet;
  } catch (error) {
    throw new Error("Failed to update pet");
  }
};
