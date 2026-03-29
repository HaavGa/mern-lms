import { cleanEnv, port, str, url } from "envalid";

export default cleanEnv(process.env, {
  DATABASE_URI: str(),
  CLIENT_URL: url(),
  PORT: port(),
})