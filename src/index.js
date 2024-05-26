import dotenv from "dotenv";
import app from "./app.js";
import connectMongo from "./db/db.js";
dotenv.config({ path: "./env" });

const config = {
  host: "192.168.0.1",
  port: process.env.PORT || 3000,
};

connectMongo()
  .then(() => {
    app.listen(config.port, config.host, () =>
      console.log(`server running on http://${config.host}:${config.port}`)
    );
  })
  .catch((err) => console.log(err));
