const express = require('express');
const app = express();
app.use(express.json());
let dataBase = [
    {id:1,actorName:"Pablo",paintings:"a",Parice:00},
    {id:2,actorName:"Davenci",paintings:"b",Parice:00},
    {id:3,actorName:"Van Gogh",paintings:"c",Parice:00},
    {id:4,actorName:"Michel Angelo",paintings:"d",Parice:00},
    {id:5,actorName:"Edvard Munch",paintings:"e",Parice:00}
];

app.get('/id',(req,res)=>{
    console.log("welcom to project-3 server")
    res.status(404).json("")
    res.json(dataBase)
})

app.put('/paintings/:index',(req,res)=>{
    const {index}=req.params
    const {newPaintings}=req.body
    dataBase[index].paintings=newPaintings
    res.json(dataBase)
})

app.post('/actorName',(req,res)=>{
    dataBase.push(req,body)
    
    res.json(dataBase)
})

app.delete('/actorName',(req,res)=>{
    dataBase = []
    console.log("Delete is confirmed")
    res.status(404).json("")
    res.json(dataBase)
})


// i have an error but i don`t know how to handle it -_-
app.delete('/id/paintings/:paintings',(req,res) =>{       
    dataBase.filter((element,index)=>{
        return element.paintings != req.params.paintings
    });
    res.json(dataBase)
})



/* 
*/
const port = 3000;
app.listen(port, () => {
  console.log(`SERVER ON at http://localhost:${port}`);
});