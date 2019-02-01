  // Initialize Firebase
var config = {
    apiKey: "AIzaSyCaMv8RkUB1l3os6F8rSsdFXe0heWqb5Kw",
    authDomain: "dlc-train-app.firebaseapp.com",
    databaseURL: "https://dlc-train-app.firebaseio.com",
    projectId: "dlc-train-app",
    storageBucket: "dlc-train-app.appspot.com",
    messagingSenderId: "141918396876"
};
firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;