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
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(petRouter);
app.use("/form", AdoptFormRoute);
app.use("/admin", AdminRoute);
app.use("/user", userRoute);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://kulkarniapurva132:MQZTBJcGGNG07ttD@petcluster.wbcswbs.mongodb.net/petdb?retryWrites=true&w=majority&appName=PetCluster";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
