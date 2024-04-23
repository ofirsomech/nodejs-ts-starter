import morgan from "morgan";
import routes from "./route";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import express, { Application } from "express";
import { handleError } from "./shared/models/errors/ErrorHandler.middleware";


const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json());

app.use(routes);
app.use(handleError);
 
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
