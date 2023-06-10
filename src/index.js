const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`server running on ${ServerConfig.PORT}`);
  //   Logger.info("Successfuly started the server", "root", {});
});
