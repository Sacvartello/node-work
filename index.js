const http = require('http')


const server = http.createServer(reqwList)

function reqwList (req,res){
    if(req.method === 'GET'){
        if(req.url === '/about'){
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end('this is info about my page');
        }
    } 
    if(req.method === 'POST'){
        if(req.url === '/users'){
            let str = ''
            req.on('data',(chunk)=>{
                str += chunk
            })
            req.on('end', ()=>{
                const usObj = JSON.parse(str)
                res.statusCode = 201;
                res.statusMessage = 'Created';
                res.end(`${usObj.username} ${usObj.lastName}, ви успішно зареєстровані!`);
            })
        }
    }
}
server.listen(5000)