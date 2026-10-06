const express = require("express");

const studentRoutes = require("./routes/studentroutes");
const logger = require("./middleware/logger");

const app = express();


app.use(express.json());

app.use(logger);

app.use("/students", studentRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Student Management REST API is running",
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
  });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
