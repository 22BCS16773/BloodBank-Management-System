function sendAppointmentEmail() {
  var donoremail = document.getElementById("donoremail").value;
  var Date = document.getElementById("date").value;
  var Time = document.getElementById("time").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kmhcoder@gmail.com",
    Password: "69F090596806B70F2A3E68D5C0B59F5CDF98",
    
    To: donoremail,
    From: "kmhcoder@gmail.com",
    Subject: `BloodBuddy`,
    Body: `Blood Donation Appointment Details : Date: ${Date} , Time: ${Time} `

  })
  
  afterAppointment();
}

function afterAppointment(){
  alert("Checkout your email")
  window.open("../index.html")
}