import { useState } from 'react';

const FirebaseApp = () => {
  const [nameUser, setNameUser] = useState('');

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

  //Curent User

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setNameUser(user.displayName);
    } else {
      console.log('No hay nadie registrado');
    }
  });

  //Update Proflie

  const updateProfile = (Name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: Name,
      })
      .then(() => {
        //dataBaseFirebase(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Register User

  const register = (newUser) => {
    const FormRegister = document.getElementById('FormRegister');
    const Name = newUser.name;
    const Email = newUser.email;
    const Password = newUser.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        FormRegister.reset();
        updateProfile(Name);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return { nameUser, setNameUser, firebase, register };
};

export default FirebaseApp;
