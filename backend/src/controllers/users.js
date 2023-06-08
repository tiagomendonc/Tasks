const { getFirestore } = require('firebase-admin/firestore');

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
    try {
        const { firstName, lastName, birthdate } = req.body;
        const user = db.collection('users').doc();
        await user.set({
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate
        });

        console.log("Usuário criado:", user);
        res.send(true);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
}