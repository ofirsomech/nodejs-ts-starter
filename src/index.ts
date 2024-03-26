import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import routes from "./route";


const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json());


app.use(routes);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// app.use(Router);
