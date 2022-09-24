const express = require("express")
require("../src/db/conn")

const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(res.body)
        console.log(req.body);
        addingMensRecords.save();
    } catch (e) {
        res.send(e);
    }
})


app.listen(port, () => {
    console.log('connectin is live at port no. ${port}...');
})