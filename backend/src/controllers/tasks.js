const { getFirestore, Timestamp } = require('firebase-admin/firestore');

exports.getAllTasks = async (req, res) => {
    const db = getFirestore();
    try {
        const snapshot = await db.collection('tasks').get();
        snapshot.forEach((task) => {
            console.log(task.id, '=>', task.data());
        });
        res.send(true); 
    } catch(err) {
        console.log(err);
        res.send(err);
    }
}

exports.createTask = async (req, res) => {
    const db = getFirestore();
    try {
        const { description, endDate, name, uid} = req.body;

        const usersRef = db.collection('users');
        const userSnapshot = await usersRef.where('uid', '==', uid).get();
        if(userSnapshot.empty) {
            res.send("ERROR! User not found");
        }
        
        const tasksRef = db.collection('tasks').doc();
        await tasksRef.set({
            description: description,
            endDate: endDate,
            name: name,
            startDate: Timestamp.now().toMillis()
        })
        res.send(true);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
}