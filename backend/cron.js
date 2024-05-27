import cron from "cron";
import https from "https";

const URL = "https://expense-tracker-graphql-psbs.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request send successdully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.log("Error while sending request", e);
    });
});

export default job;
