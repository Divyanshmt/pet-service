require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://familydeos:${process.env.MONGO_PASSWORD}@cluster0.ubosizw.mongodb.net/?retryWrites=true&w=majority`,
};
