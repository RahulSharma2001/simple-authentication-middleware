const express = require("express");
const loginMiddleware = require("./middlewares/login");
const app = express();

app.use(express.json());
app.use(loginMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "Dummy Get Api After Middleware",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "Dummy Post Api After Middleware",
  });
});

app.listen(5000, () => console.log(`Server Running ${5000}`));
