const express = require("express");
const bodyParser = require("body-parser");
const AddToDataBase = require("./addToDataBase");
const cors = require("cors");
const getTasks = require("./getTasks");
const deleteTask = require("./deleteTask");
const updateTask = require("./updateTask");
const { ObjectId } = require("mongodb");
const serverless = require("serverless-http");

const api = express();
api.use(cors());
api.use(bodyParser.json());

api.all("/addtask", (req, res, next) => {
  const taskData = req.body;

  AddToDataBase(taskData)
    .then(() => {
      res.status(200).json(`Zadanie dodane do bazy danych: ${taskData.task}`);
      next();
    })
    .catch((err) => {
      res.status(500).json(`Bład dodawania do bazy danych: ${err}`);
      next();
    });
});

api.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Błąd pobierania zadań: " + error });
  }
});

api.post("/delete", (req, res) => {
  const deletedItems = req.body;

  deleteTask(deletedItems)
    .then(res.status(200).json({ success: true }))
    .catch((err) => {
      res.status(500).json({ err: "Bład usuwania z bazy: " + err });
    });
});

api.post("/edit", (req, res) => {
  const taskBody = req.body;
  const validTaskBody = taskBody.filter((item) => {
    return ObjectId.isValid(item._id);
  });

  console.log("validTaskBody: ", validTaskBody);
  Promise.all(updateTask(validTaskBody))
    .then(() => {
      res
        .status(200)
        .json({ success: true, message: "Dane zaktualizowane pomyślnie." });
    })
    .catch((err) => {
      res.status(500).json({ err: "Bład edycji zadania " + err });
    });
});

api.all("/all", (req, res) => {
  res.status(200).json({ success: true });
});

api.listen(8080, () => {
  console.log("Server działa!");
});

// api.use("/.netlify/api_node/express", router);
// module.exports.handler = serverless(api);
