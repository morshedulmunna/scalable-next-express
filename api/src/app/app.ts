import express, { Application } from "express";
import { errorHandler, notFoundHandler } from "./GlobalError";

const app: Application = express();
// middleWare
app.use(require("./GlobalMiddleware.ts"));

// Router Link
app.use(require("./GlobalRoute.ts"));

//Default Global error MiddleWare
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
