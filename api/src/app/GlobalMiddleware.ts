// middleware
import express from "express";
import cors from "cors";
import morgan from "morgan";

const middleware = [morgan("dev"), cors(), express.json(), express.urlencoded({ extended: true })];

module.exports = middleware;
