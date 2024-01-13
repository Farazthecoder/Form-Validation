const form = document.getElementById("myform");
// console.log(form)
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm--password");
const hesitate = document.querySelector(".hesitate");



form.addEventListener("submit",function(event){
    /*We need to write the logic to check wheather password and confirm password 
     is matching or not */ 
     event.preventDefault()
     
     isPasswordMatched = false // dont need to do this it is not compulsory

     if(password.value === confirmPassword.value){

        isPasswordMatched = true // dont do it is not compulsory
        hesitate.innerText = "PASSWORD IS MATCH"

      //   console.log(event)

      const data = {
         fullname : event.target[0].value,
         phoneNumber : event.target[1].value,
         Email : event.target[2].value,
         url : event.target[3].value,
         password : event.target[4].value,
         confirmPassword : event.target[5].value
      }

      console.log(data)
     }

     else{
        isPasswordMatched = false  // dont do it is not compulsory
        hesitate.innerText = "PASSWORD DON'T MATCH"
     }

})