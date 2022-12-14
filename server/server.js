//////////// UPDATE CHECK
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");



///////////// MONGO DB CONNECTION
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("DB Connected!");
});
///////////////////////////////////////



//////////// APPLY MIDDLEWARES
app.use(express.json());
const { checkToken } = require('./middlewares/auth');
app.use(checkToken);



////////// API ROUTES
const userApi = require("./routes/api/userApi");
app.use("/api/user", userApi);
///////////////////////////////////////

app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {
  const path = require("path");
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  });
}


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running!");
})