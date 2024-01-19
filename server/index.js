import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// import dashboardRoutes from "./routes/dashboard.js";
import generalRoutes from "./routes/general.js";
import Entity from "./models/Entity.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
// app.use("/dasboard", dashboardRoutes);
app.use("/general", generalRoutes);

app.post("/api/addItem", async (req, res) => {
  const newEntity = new Entity(req.body);
  try {
    await newEntity.save();
    res.status(201).json({ message: "Entity added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding entity to the database" });
  }
});

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(process.env.MONGO_URL);
    console.log(`${error} did not connect`);
  });
