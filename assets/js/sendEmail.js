function sendMail (contactForm) {
    emailjs.send("gmail", "milestone_project_two", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "location": contactForm.location.value
    })
    .then(
        function(response) {
            console.log("REQUEST SENT!", response);
        }, 
        function(error){
            console.log("FAILED", error)
        })
        return false;
}