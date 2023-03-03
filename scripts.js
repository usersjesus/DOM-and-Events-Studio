// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", function() {
    // Code here will run after the DOM has loaded
    // This doesn’t wait for things like pictures and videos
    const takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.") === true) {
            document.getElementById("flightStatus").innerHTML = `Shuttle in flight.`
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            // document.getElementById("spaceShuttleHeight").innerHTML = parseInt(10px;
        }
    })

    // const landButton = document.getElementById("landing");
    // landButton.addEventListener("click", function (event){
    //     window.alert("The shuttle is landing. Landing gear engaged.");

    // })
  });
 