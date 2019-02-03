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
$(document).ready(function(){
var database = firebase.database();


$("#add-train").on('click', function(event){
  event.preventDefault();

  var trainName = $("#input-name").val().trim();
  var destination = $("#input-destination").val().trim();
  var startTime = $("#input-start").val().trim();
  var frequency = $("#input-frequency").val().trim();
  var currentTime = moment();
  var trainTime = moment(startTime, "HH:mm");
  var difference = currentTime.diff(trainTime, "minutes");
  var minutesSince = difference % Number(frequency);
  var minutesAway = Number(frequency) - minutesSince;
  

  currentTime.add(minutesAway, "minutes");
  var nextArrival = currentTime.format("hh:mm");
  

 

  console.log("clicked")

  $("#input-name").val('');
  $("#input-destination").val('');
  $("#input-start").val('');
  $("#input-frequency").val('');


  database.ref().push({
    trainName: trainName,
    destination: destination,
    startTime: startTime,
    frequency: frequency,
    nextArrival: nextArrival,
    minutesAway: minutesAway,

  })

  // $("#input-name").val('');
  // $("#input-destination").val('');
  // $("#input-start").val('');
  // $("#input-frequency").val('');

})

database.ref().on("child_added", function(snap){
  var save = snap.val();
  


  var $row = $("<tr>");
  $row.append('<td>' + save.trainName + '</td>');
  $row.append('<td>' + save.destination + '</td>');
  $row.append('<td>' + save.frequency + '</td>');
  $row.append('<td>' + save.nextArrival + '</td>');
  $row.append('<td>' + save.minutesAway + '</td>');
  $('#train-table-rows').append($row);

  console.log(snap.key, snap.val());

  console.log(save.trainName);
  console.log(save.destination);
  console.log(save.startTime);
  console.log(save.frequency);
  
  
})
});

