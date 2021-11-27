const express = require("express");
const controller = require("../controllers/books.controllers");

const router = express.Router();

router.get("/", controller.getAllBooks);
router.get("/:bookId", controller.getBoookyId);
router.post("/", controller.addNewBook);
router.put("/:bookId", controller.updateBook);
router.delete("/:bookId", controller.deleteBook);

module.exports = router;
