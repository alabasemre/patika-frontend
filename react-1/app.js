import getData from "./lib/service.js";

(async () => {
  console.log(await getData(1));
})()