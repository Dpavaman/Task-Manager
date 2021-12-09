const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(errorHandlerMiddleware);
//routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
const port = process.env.PORT || 3000;

const initializeProject = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Server is Up and running on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

initializeProject();
