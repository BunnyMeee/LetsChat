
var firebaseConfig = {
      apiKey: "AIzaSyB8E4rciN76w_sIsoiRd0-8yp0YgQPO46k",
      authDomain: "kwitter-12536.firebaseapp.com",
      databaseURL: "https://kwitter-12536-default-rtdb.firebaseio.com",
      projectId: "kwitter-12536",
      storageBucket: "kwitter-12536.appspot.com",
      messagingSenderId: "266532523383",
      appId: "1:266532523383:web:0a5a435456eeb7aebfe572",
      measurementId: "G-61D2ZCR0BD"
};
firebase.initalizeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("welcome_user_name").innerHTML = "welcome" + user_name + "|";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("Roomname", room_name);
      window.location = "kwitter_page.html";
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      })
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {


            });
      });
}
getData();
