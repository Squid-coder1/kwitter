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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!!!!!!!!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorafe.setItem("room_name", name);
      window.location="kwitter_page.html";
}
 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter.html";
}