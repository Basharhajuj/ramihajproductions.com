const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const AdminUser = require('./models/adminUser'); // Update with the correct path

mongoose.connect('mongodb://localhost:27017/RHdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('your_new_password', salt);

  // Create a new admin user
  const adminUser = new AdminUser({
    username: 'Rami',
    password: 123456,
    role: 'admin'
  });

  await adminUser.save();
  console.log('New admin user created successfully');
  mongoose.disconnect();
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
