import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCPermABnHZCRy0MCNrqMot86FYvffMhkg",
    authDomain: "drip-drop-8aaae.firebaseapp.com",
    databaseURL: "https://drip-drop-8aaae.firebaseio.com",
    projectId: "drip-drop-8aaae",
    storageBucket: "drip-drop-8aaae.appspot.com",
    messagingSenderId: "86397982769",
    appId: "1:86397982769:web:e1d75b1756e0a40d7f5d10",
    measurementId: "G-1RRSXTNXKT"
  };

class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig)
      this.auth = app.auth()
      this.db = app.firestore()
    }
    
    login(email, passowrd) {
  
      return this.auth.signInWithEmailAndPassword(email, passowrd)
    }
  
    logout() {
      return this.auth.signOut()
    }
  
    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name
      })
    }

    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }

    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
  }

  export default new Firebase()