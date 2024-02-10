require("dotenv").config("");
import http from "http";
import app from "./src/app/app";

// Routes
// app.use("/", appRouter);

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
const server: http.Server = http.createServer(app);

server.listen(PORT, () => {
   console.log(`Server Listening On PORT ${PORT}`);
});
