import httpServer from "./server.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});