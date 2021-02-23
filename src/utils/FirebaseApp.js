const FirebaseApp = () => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  //dataBase
  /* const databaseRef = firebase.database().ref().child('movies');
  databaseRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  }); */

  return { firebase };
};

export default FirebaseApp;
