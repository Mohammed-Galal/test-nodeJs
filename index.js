const http = require("http");

const app = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/json"); // very important
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);

  const file = { id: 1, name: "john doe" },
    data = JSON.stringify(file);

  res.write(data);
  res.end();
});

app.listen(5000, () =>
  console.log("you will see this messege when you run this file")
);

// press --> Ctrl + J
// node .  || node index.js
