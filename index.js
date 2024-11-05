const http = require('http')
const exp = require('express')
const app = exp()
const bodyParser = exp.json()
const server = http.createServer(app)

// function reqwList (req,res){
//     if(req.method === 'GET'){
//         if(req.url === '/about'){
//             res.statusCode = 200;
//             res.statusMessage = 'OK';
//             res.end('this is info about my page');
//         }
//     } 
//     if(req.method === 'POST'){
//         if(req.url === '/users'){
//             let str = ''
//             req.on('data',(chunk)=>{
//                 str += chunk
//             })
//             req.on('end', ()=>{
//                 const usObj = JSON.parse(str)
//                 res.statusCode = 201;
//                 res.statusMessage = 'Created';
//                 res.end(`${usObj.username} ${usObj.lastName}, ви успішно зареєстровані!`);
//             })
//         }
//     }
// }
server.listen(5000)

app.get('/about',(req, res)=>{
    res.status(200).send('this is page about ...')
})
app.post('/users',bodyParser,(req,res,next)=>{
    res.status(201).send(`Привіт ${req.body.username} ${req.body.lastName}`)
})