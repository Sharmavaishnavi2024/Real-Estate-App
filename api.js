const express= require("express");
const cors= require("cors")

const app= express();
app.use(cors())
 const realEstateData= require("./data.json")



app.get('/api/realEstate', function(req, res) {
    res.send(realEstateData)
});

app.listen(8000, function() {
    console.log("Server is running at port 8000 ");
});