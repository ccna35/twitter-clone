const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ccna35:test123@cluster0.s8c05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    // const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
