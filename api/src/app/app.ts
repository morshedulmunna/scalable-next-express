import express, { Application } from "express";
import { errorHandler, notFoundHandler } from "./GlobalError";
import router from "./GlobalRoute";
import GlobalMiddleware from "./GlobalMiddleware";

const app: Application = express();
// middleWare
app.use(GlobalMiddleware);

// Router Link
app.use(router);

//Default Global error MiddleWare
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
