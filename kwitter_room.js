
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCDteYphqNVfJtSdeYHbIptJwoNK3i5B8k",
      authDomain: "kwitter-1b48b.firebaseapp.com",
      databaseURL: "https://kwitter-1b48b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b48b",
      storageBucket: "kwitter-1b48b.appspot.com",
      messagingSenderId: "129239438033",
      appId: "1:129239438033:web:ad3db7d9e828cb79156bf0",
      measurementId: "G-E8084CJCF0"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
