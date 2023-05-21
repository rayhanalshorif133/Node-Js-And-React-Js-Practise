const { initializeApp,cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccountKey.json");


const firebaseApp = initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore(firebaseApp);

module.exports = db;

// Path: server.js