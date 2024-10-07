const userRoutes = (app, fs) => {
  const canPath = "./data/can.json";
  const pythonPath = "./data/python.json";

  app.get("/can", (req, res) => {
    fs.readFile(canPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

  app.get("/python", (req, res) => {
    fs.readFile(pythonPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

// eslint-disable-next-line no-undef
module.exports = userRoutes;
