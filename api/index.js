const { express, routes } = require('./controller')
const path = require("path");
const app = express();
const port = +process.env.PORT || 3000;

app.use(
  express.static("./static"),
  express.urlencoded({ extended: false }),
  routes
);

routes.get("^/$|/challenger", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, ()=>{
    console.log(`You are using port http://localhost:${port}`);
})