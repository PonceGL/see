import { useState, useEffect } from 'react';

const FirebaseApp = () => {
  const [currentUserSession, setCurrentUserSession] = useState('');
  const [userPhotoSession, setuserPhotoSession] = useState('');
  const [watchList, setWatchList] = useState([]);
  const [myWatch, setMyWatch] = useState(false);
  const [errorRegisterMessage, setErrorRegisterMessage] = useState('');
  const [errorSignMessage, setErrorSignMessage] = useState('');

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

  //Curent User

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setCurrentUserSession(user);
        setuserPhotoSession(user.photoURL);
        getWatchList(user.uid);
      } else {
        setCurrentUserSession('');
      }
    });
  }, [currentUserSession]);

  //dataBase
  /* const databaseRef = firebase.database().ref().child('movies');
  databaseRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  }); */

  //WatchList

  const getWatchList = (id) => {
    firebase
      .firestore()
      .collection(id)
      .orderBy('date', 'desc')
      .get()
      .then((querySnapshot) => {
        setWatchList([]);
        querySnapshot.forEach((doc) => {
          setWatchList((watchList) => [...watchList, doc.data()]);
        });
      });
  };

  //addWatchList

  const addWatchList = (movie) => {
    firebase.firestore().collection(currentUserSession.uid).doc(movie.id).set({
      background: movie.background,
      cast: movie.cast,
      duration: movie.duration,
      genders: movie.genders,
      id: movie.id,
      poster: movie.poster,
      qualification: movie.qualification,
      titles: movie.titles,
      year: movie.year,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMyWatch(true);
    getWatchList(currentUserSession.uid);
  };

  //Delete from watchlist

  const deleteFromWatchlist = (idmovie) => {
    firebase
      .firestore()
      .collection(currentUserSession.uid)
      .doc(idmovie)
      .delete()
      .then(() => {
        setMyWatch(false);
        getWatchList(currentUserSession.uid);
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  //Is it on my list?

  const isItOnMyList = (id) => {
    setMyWatch(false);
    firebase
      .firestore()
      .collection(currentUserSession.uid)
      .where('id', '==', id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            setMyWatch(true);
          } else {
            setMyWatch(false);
          }
        });
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  //Create User on Firestore

  const createUserFirestore = (user) => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .set({
        info: {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        },
      });
    setCurrentUserSession(user.displayName);
  };

  //Update Proflie

  const updateProfileCreated = (Name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: Name,
      })
      .then(() => {
        createUserFirestore(user);
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
      .then(() => {
        FormRegister.reset();
        updateProfileCreated(Name);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setErrorRegisterMessage(error.message);
      });
  };

  //Sign in

  const signin = (userSignin) => {
    const formSignin = document.getElementById('formSignin');
    const email = userSignin.email;
    const password = userSignin.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
        formSignin.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode);
        setErrorSignMessage(error.message);
      });
  };

  //Log Out

  const Logaut = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUserSession('');
      })
      .catch((error) => {
        console.error('Sign Out Error', error);
      });
  };

  //Delete doc user of firestore

  const deleteDocUser = () => {
    firebase
      .firestore()
      .collection(currentUserSession.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete().then(() => {});
        });
      })
      .catch((error) => {
        console.log('Error al eliminar la colleccion', error);
      });
  };

  //Delete user of authentication

  const deleteUserOfAuthentication = () => {
    const user = firebase.auth().currentUser;
    user
      .delete()
      .then(() => {})
      .catch((error) => {
        console.log('Ocurrio un error', error);
      });
  };

  //Delete user of firestore

  const deleteUser = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(currentUserSession.uid)
      .get()
      .then((doc) => {
        doc.ref.delete();
      })
      .then(() => {
        deleteDocUser();
      })
      .then(() => {
        deleteUserOfAuthentication();
      })
      .catch((error) => {
        console.log('Error al eliminar el documento', error);
      });
  };

  //Register with Google

  const registerWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        setCurrentUserSession(result.user);
        createUserFirestore(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
  };

  return {
    currentUserSession,
    userPhotoSession,
    setCurrentUserSession,
    firebase,
    register,
    errorRegisterMessage,
    signin,
    errorSignMessage,
    registerWithGoogle,
    Logaut,
    deleteUser,
    watchList,
    addWatchList,
    deleteFromWatchlist,
    isItOnMyList,
    myWatch,
  };
};

export default FirebaseApp;
