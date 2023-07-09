const Pet = require("../../../models/pet-model");

exports.deletePetById = async (id) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      throw new Error("Pet not found");
    }
    return deletedPet;
  } catch (error) {
    throw new Error("Failed to update pet");
  }
};
