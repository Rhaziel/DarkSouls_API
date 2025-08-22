import express from "express";
import dotenv from "dotenv";
import ResourceSearchService  from "./src/repository/service/ResourceSearchService.js";


dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log("App is running");
});

/** Devuelve todos los objetos */
app.get("/api/items", (req, res) => {
  let response = ResourceSearchService.getAllItems();
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve los materiales de mejora */
app.get("/api/materials", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('MaterialesMejora',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve los objetos consumibles */
app.get("/api/consumables", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Consumibles',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve herramientas */
app.get("/api/tools", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Herramientas',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve proyectiles */
app.get("/api/projectiles", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Proyectiles',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve municiones */
app.get("/api/ammo", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Municion',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve almas */
app.get("/api/souls", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Almas',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve jefes */
app.get("/api/bosses", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('Jefes',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve objetos clave */
app.get("/api/key-items", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('ObjetosClave',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve objetos multijugador */
app.get("/api/multiplayer-items", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('ObjetosMultijugador',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve otros objetos */
app.get("/api/other-items", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('OtrosObjetos',itemName);
  res.json({status_code: res.statusCode, data: response});
});

/** Devuelve objetos del dlc */
app.get("/api/dlc-items", (req, res) => {
  let itemName = req.query.name || "";
  let response = ResourceSearchService.getItem('ObjetosDLC',itemName);
  res.json({status_code: res.statusCode, data: response});
});