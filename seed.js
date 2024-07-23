const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');

// Sample data
const sampleUsers = [
  { name: 'Ken Mwai', email: 'ken.mwai@example.com', age: 28 },
  { name: 'Wanjiku Njeri', email: 'wanjiku.njeri@example.com', age: 34 },
  { name: 'Jomo Kenyatta', email: 'jomo.kenyatta@example.com', age: 58 },
  { name: 'Amani Achieng', email: 'amani.achieng@example.com', age: 23 },
  { name: 'Martha Karua', email: 'martha.karua@example.com', age: 45 },
  { name: 'Peter Otieno', email: 'peter.otieno@example.com', age: 30 },
  { name: 'Grace Wambui', email: 'grace.wambui@example.com', age: 40 },
  { name: 'Pauline Njenga', email: 'pauline.njenga@example.com', age: 29 },
  { name: 'David Kiplagat', email: 'david.kiplagat@example.com', age: 37 },
  { name: 'Sarah Akinyi', email: 'sarah.akinyi@example.com', age: 31 }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');

    // Clear existing data
    await User.deleteMany({});

    // Insert sample data
    await User.insertMany(sampleUsers);
    console.log('Sample data inserted');

    // Close connection
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    mongoose.connection.close();
  });
