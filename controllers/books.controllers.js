const sql = require("../config/db.config");

exports.getAllBooks = (req, res) => {
  sql.query("SELECT * FROM test", (err, data) => {
    if (err) {
      console.log("Error ", err);
      res.status(500).send({ error: { message: "Something went wrong!" } });
    } else {
      res.send(data);
    }
  });
};

exports.getBoookyId = (req, res) => {
  const bookId = req.params.bookId;

  sql.query(
    `SELECT * FROM test 
  WHERE id = ${bookId}`,
    (err, data) => {
      if (err) {
        res.status(500).send({
          error: { message: "Something went wrong" },
        });
      } else {
        res.send(data);
      }
    }
  );
};

exports.addNewBook = (req, res) => {
  sql.query(
    `INSERT INTO test(book_name, author, publisher, genre) VALUES('${req.body.bookName}', '${req.body.author}', '${req.body.publisher}', '${req.body.genre}')`,
    (err, data) => {
      if (err) {
        res.status(500).send({
          error: { message: "Something went wrong" },
        });
        throw err;
      } else {
        console.log(data);
        res.send("Book added successfully");
      }
    }
  );
};

exports.updateBook = (req, res) => {
  sql.query(
    `UPDATE test
     SET 
     book_name = '${req.body.bookName}', 
     author = '${req.body.author}', 
     genre='${req.body.genre}', 
     publisher='${req.body.publisher}' 
     WHERE id = ${req.params.bookId}`,
    (err, data) => {
      if (err) {
        res.status(500).send({
          error: { message: "Something went wrong" },
        });
        throw err;
      } else {
        console.log(data);
        res.send("Book updated successfully");
      }
    }
  );
};

exports.deleteBook = (req, res) => {
  sql.query(
    `DELETE FROM test
  WHERE id = ${req.params.bookId}
   `,
    (err, data) => {
      if (err) {
        res.status(500).send({
          error: { message: "Something went wrong" },
        });
        throw err;
      } else {
        console.log("Deleted");
        res.send(
          `Book with id of ${req.params.bookId} is deleted successfully`
        );
      }
    }
  );
};
