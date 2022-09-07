//const data = axios(
//  `https://somewebsite.com/getData?secret_api_key=${process.env.SECRET_API_KEY}`
//);

import dotenv from "dotenv";

// by default dotenv will look for .env

console.log(process.env.MODE);

const mode = process.env.MODE;

switch (mode) {
  case "PRODUCTION":
    dotenv.config({
      path: ".env.production",
    });
    break;
  case "TEST":
    dotenv.config({
      path: ".env.test",
    });
    break;
  default:
  case "DEVELOPMENT":
    dotenv.config({
      path: ".env.development",
    });
    break;
}

console.log(process.env.SECRET_API_KEY, process.env.URL);
