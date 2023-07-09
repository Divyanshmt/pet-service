const createPet = require("./command/create-pet");
const updatePetById = require("./command/update-pet-by-id");
const deletePetById = require("./command/delete-pet-by-id");

const getAllPets = require("./queries/get-pets");

exports.services = {
  queries: { ...getAllPets },
  commands: { ...createPet, ...updatePetById, ...deletePetById },
};
