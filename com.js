function sendMail() {
    var params = {
      name: document.getElementById("Nom").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
    };
  
    const serviceID = "service_rmsfl7y";
    const templateID = "template_t49733w";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("Nom").value = "";
          document.getElementById("email").value = "";
          document.getElementById("msg").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }