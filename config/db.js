import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Kết nối thành công với Database ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Lỗi trong MongoDB ${error} `.bgRed.white);
  }
};
export default connectDB;