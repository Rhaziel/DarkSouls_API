import express from "express";
import dotenv from "dotenv";
import getMaterials from "./src/repository/service/materials.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});

/** Devuelve los materiales de mejora */
app.get("/api/materials", (req, res) => {
  let itemName = req.query.name || "";
  let response = getMaterials(MaterialesMejora,itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve los objetos consumibles *//*
app.get("/api/consumables", (req, res) => {
  let itemName = req.query.name || "";
  let response = getConsumables(itemName);
  res.json({status_code: res.statusCode, data: response});
});*/