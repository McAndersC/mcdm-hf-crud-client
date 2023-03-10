/* 

    Index Entry

*/
import { userListTmpl, userListTmplEmail } from "./templates.js";
import navigation from "./navigation.js";
navigation.init();


/* 

    Create New User

*/
// Opretter en reference til formen
const userCreateForm = document.querySelector('#userCreateForm');

const onUserCreateFormSubmit = (e) => {
    //forhindre formen i at sende.
    e.preventDefault();

    const {name, username, email, password, confirmPassword, age, member} = e.target.elements;

    console.log(member.checked);

    let user = {

        username : username.value,
        name : name.value,
        email : email.value,
        password : password.value,
        age: age.value,
        member: member.checked
    }

    fetch("http://localhost:3000/users", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })  
    .then((response) => response.json())
    .then((response) => {
      console.log("Success:", response);

    })
    .catch((error) => {
    
        console.log("Error:", error);

    });


}

// Hvis der findes en userCreateForm så tilføjer vi en event-listner.
if( userCreateForm )
{
    // Lytter på vores vores submit knap
    userCreateForm.addEventListener('submit', onUserCreateFormSubmit);

}


/* 

    Læser Brugere

*/
const userListContainer = document.querySelector('.user-list');

if(userListContainer) {

    fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    })  
    .then((response) => response.json())
    .then((response) => {

        let userList = response.userlist;
        userListContainer.innerHTML = '';

        userList.forEach( (user ) => {

            console.log(user.name)
            userListContainer.innerHTML += userListTmplEmail(user)

        });

      console.log("Success:", response.userlist);
      
    })
    .catch((error) => {
      console.log("Error:", error);
    });

}


/* 

    Sletter Bruger

*/
const userDeleteForm = document.querySelector('#userDeleteForm');
const onUserDeleteFormSubmit = (e) => {

    //forhindre formen i at sende.
    e.preventDefault();

    const {email} = e.target.elements;

    console.log(email.value)

    let user = {email: email.value}

    fetch("http://localhost:3000/users", {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })  
    .then((response) => response.json())
    .then((response) => {
      console.log("Success:", response);
    })
    .catch((error) => {
      console.log("Error:", error);
    });

}


if(userDeleteForm) {

    userDeleteForm.addEventListener('submit', onUserDeleteFormSubmit);
}
