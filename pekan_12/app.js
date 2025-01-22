const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const studentRouter = require("./routes/api"); 


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", studentRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});