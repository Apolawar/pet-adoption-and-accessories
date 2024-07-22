require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const petRouter = require("./Routes/PetRoute");
const AdoptFormRoute = require("./Routes/AdoptFormRoute");
const AdminRoute = require("./Routes/AdminRoute");
const userRoute = require("./Routes/userRoute");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(petRouter);
app.use("/form", AdoptFormRoute);
app.use("/admin", AdminRoute);
app.use("/user", userRoute);

mongoose
  .connect("mongodb://localhost:27017/pet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
