const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./src/routes/routes');
app.use(express.json());
app.use(router);

const port = 8000;

app.listen(port, () => {
    const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
    const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
    var admin = require("firebase-admin");
    var serviceAccount = require("./serviceAccountKey.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log(`Aplicação rodando na porta ${port}`);  
}); 