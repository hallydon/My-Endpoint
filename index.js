const http = require('http');
const express = require('express');
const app = express(); 
 
const hostname = '127.0.0.1';
const port = 3000;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



app.get("/", (req, res) => {
    const {slack_name, track} = req.query;
    const day = new Date().getUTCDay();
    res.status(200).json({
        slack_name: slack_name,
    current_day: days[day],
  utc_time: new Date(),
  track: track,
  github_file_url: "https://github.com/hallydon/My-Endpoint/blob/main/index.js",
  github_repo_url: "https://github.com/hallydon/My-Endpoint.git",
  status_code: 200
    })

})
 
app.listen(port, hostname , function () {
    console.log('Example app listening on port 3000.');
});