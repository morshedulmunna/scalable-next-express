// middleware
import express from "express";
import cors from "cors";
import morgan from "morgan";

const GlobalMiddleware = [
   morgan("dev"),
   cors(),
   express.json(),
   express.urlencoded({ extended: true }),
];

export default GlobalMiddleware;
