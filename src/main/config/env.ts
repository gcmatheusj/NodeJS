export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'mc23!!==03'
}
