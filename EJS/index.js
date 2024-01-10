import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    // const day = 6;

    let type = "a weekday";
    let adv = "it's  time to work hard";

    if(day == 0 || day === 6){
        type = "a weekend";
        adv = "it's time to have some fun";
    }
     
    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});