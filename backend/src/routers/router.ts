import { Router, Request, Response } from "express";
import { Readable } from "stream"; 
import multer from "multer";
import readline from "readline";


const multerConfig = multer();
const router = Router();

router.post("/transacoes", multerConfig.single("file"), async (request: Request, response: Response) => {
    
    //recebe o arquivo em buffer para leitura no servidor
    const buffer = request.file?.buffer;
    
    //cria o array com as informações do arquivo
    const ReadableFile = new Readable();
    ReadableFile.push(buffer);
    ReadableFile.push(null);

    //interface para leitura do array
    const transacoes = readline.createInterface({
        input: ReadableFile
    });

    //pega as informações pela posição
    for await(let line of transacoes){
        const transacoesSplit = line.split(",");
        console.log(transacoesSplit[7]);
    }

    return response.send();
})

export { router }