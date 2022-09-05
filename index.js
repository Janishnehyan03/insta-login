const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");


dotenv.config();

const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const AuthModel = mongoose.model("Auth", authSchema);

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (!err) {
    console.log("DB connected");
  } else {
    console.log(err);
  }
});

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.post("/api/login", async (req, res) => {
  try {
    let data = await AuthModel.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.get("/api/data", async (req, res) => {
  try {
    let data = await AuthModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});
app.delete("/api/data/:id", async (req, res) => {
  try {
    let data = await AuthModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
