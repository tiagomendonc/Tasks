const express = require('express');

const app = express();
const router = require('./src/routes/routes');
app.use(express.json());
app.use(router);

const port = 8000;

app.listen(port, () => {
    var admin = require("firebase-admin");
    var serviceAccount = require("./serviceAccountKey.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log(`Aplicação rodando na porta ${port}`);  
}); 
