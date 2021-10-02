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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0

    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
