import express from "express";

const app = express();
const port  = 3000;

app.get("/", async (req, res) => {
    let temp = await getAdvice();
    let dayType = temp[0];
    let advice = temp[1];
    res.render("intro-index.ejs", {dayType: dayType, advice: advice})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

function getAdvice(){

    let date = new Date();
    let day = date.getDay();
    let dayType, advice;
    if (day == 0 || day == 6){
        dayType = "a weekend";
        advice = "have fun";
    }else{
        dayType = "a weekday";
        advice = "work hard";
    }
    return [dayType, advice];
}
