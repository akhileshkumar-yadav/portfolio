import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Database connected successfully!');
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);  // Server ko exit karne ke liye
    }
};

export default dbConnect;
