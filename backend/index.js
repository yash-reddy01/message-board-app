const express = require("express");
const { rootRouter } = require("./routes/index");

const App = express();

App.use(express.json());
App.use(cors());

App.use("/api/v1", rootRouter);

App.listen(3000);