import admin from "firebase-admin";
import serviceAccount from "../ctr/entregafinalcoder-8e664-firebase-adminsdk-01rzf-d1e58a1e56.json" assert { type: "json" };

function connectFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default connectFirebase;
