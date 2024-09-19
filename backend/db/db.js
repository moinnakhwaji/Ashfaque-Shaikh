import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Aliza", {
      // No need to specify deprecated options
    });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Uncomment the following line if you want the process to exit on connection failure
    // process.exit(1);
  }
};

export default connectToDatabase;
