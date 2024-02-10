import { NextFunction, Request, Response } from "express";

const notFoundHandler = (_req: Request, res: Response, next: NextFunction): void => {
   const error: any = new Error("Resource Not Found");
   error.status = 404;
   next(error);
};

const errorHandler = (error: any, _req: Request, res: Response, _next: NextFunction): void => {
   if (error.status) {
      res.status(error.status).json({
         message: error.message,
      });
   }
   res.status(500).json({ message: "Something went Wrong" });
};

export { notFoundHandler, errorHandler };
