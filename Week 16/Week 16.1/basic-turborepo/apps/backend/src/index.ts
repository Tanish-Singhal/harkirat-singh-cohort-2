import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "hello world!"
  });
  console.log("App Started");
});

app.listen(3002);