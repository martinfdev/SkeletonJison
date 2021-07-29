import express from 'express';
import { PORT } from './Server/Config/Constants';
import { userRouter } from './Server/Routes';

const app = express();
// app.use(express.json());

function main(){
    //format to json
    app.use(express.json());

    //define routes
    app.use('/users', userRouter)  
    
    //set port
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

main();
