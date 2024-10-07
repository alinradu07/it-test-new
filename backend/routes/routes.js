/* eslint-disable no-undef */
const questionsRoutes = require("./questions");
const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });
  questionsRoutes(app, fs);
};

module.exports = appRouter;
