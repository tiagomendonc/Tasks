const { getFirestore } = require('firebase-admin/firestore');
const { getAuth, createUserWithEmailAndPassword } = require('firebase-admin/auth');

exports.getAllUsers = async (req, res) => {
    const db = getFirestore();
    try {
        const snapshot = await db.collection('users').get();
        snapshot.forEach((user) => {
            console.log(user.id, '=>', user.data())
        });
        res.send(true);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
}

exports.createUser = async (req, res) => {
    const db = getFirestore();
    const auth = getAuth();
    try {
        const { email, password, firstName, lastName, birthdate } = req.body;
         createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 const user = userCredential.user;
             })
             .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 res.send(errorCode, errorMessage);
            });
        const userRef = db.collection('users').doc();
        await userRef.set({
            email: email,
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate
        });

        console.log("Usuário criado:", userRef);
        res.send(true);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
}