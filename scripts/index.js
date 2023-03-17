/* 

    Index Entry

*/
import { userListTmpl, userListTmplEmail, userListTmplTable } from "./templates.js";
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

  Tilføj profil billede

*/

const onProfileFormSubmit = (e) => {

    e.preventDefault();

    console.log('FILE: ', e.target)
    console.log('ID: ', e.target.dataset.id)

    const profile = e.target;
    const id = e.target.dataset.id
 
    const formData = new FormData();
    formData.append('id', id);
    formData.append('profile', profile.files[0]);

    console.log(formData)

    fetch('http://localhost:3000/users/profile', {
      method : 'POST',
      body: formData
    })
    .then( (response) => response.json() )
    .then( (response) => {

      console.log('RE', response);
      location.reload();

    }).catch( (err) => console.log(err))


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
      
        userList.forEach( (user ) => {

            userListContainer.innerHTML += userListTmplTable(user)

        });

        const profileForms = document.querySelectorAll('#userProfileForm');
        profileForms.forEach( (profileForm) => {

          profileForm.addEventListener('change', onProfileFormSubmit);

        })
       
        
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
      location.href = './read.html'
    })
    .catch((error) => {
      console.log("Error:", error);
    });

}


if(userDeleteForm) {

  let searchParams = new URLSearchParams(location.search);
  let userId = searchParams.get('id');

  if(userId) {

    console.log(userId)
    
    fetch("http://localhost:3000/users/" + userId)  
    .then((response) => response.json())
    .then((response) => {

      if(Object.keys(response.user).length !== 0)
      {
        // console.log('response', Object.keys(response.user))
        const {email} = response.user;
        const form = userDeleteForm.elements;

        form.email.value = email;
      }

      

    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }

    userDeleteForm.addEventListener('submit', onUserDeleteFormSubmit);
  
}

/* 

  Opdater Bruger

*/
const userUpdateForm = document.querySelector('#userUpdateForm');

const onUserUpdateFormSubmit = (e) => {
   //forhindre formen i at sende.
  e.preventDefault();

  const {name, username, email, uid, age, member} = e.target.elements;

  let user = {
      id : uid.value,
      username : username.value,
      name : name.value,
      email : email.value,
      age: age.value,
      member: member.checked
  }

  fetch("http://localhost:3000/users", {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })  
  .then((response) => response.json())
  .then((response) => {
    console.log("Success:", response);

    // window.location.href = '/users/read.html'

  })
  .catch((error) => {
    console.log("Error:", error);
  });

}

if(userUpdateForm) {

  let searchParams = new URLSearchParams(location.search);
  let userId = searchParams.get('id');

  if(userId) {

    console.log(userId)
    
    fetch("http://localhost:3000/users/" + userId)  
    .then((response) => response.json())
    .then((response) => {

      if(Object.keys(response.user).length !== 0)
      {
        // console.log('response', Object.keys(response.user))
        const {name, username, email, password, age, member, _id} = response.user;
        const form = userUpdateForm.elements;

        form.uid.value = _id;
        form.name.value = name;
        form.username.value = username;
        form.email.value = email;
        form.age.value = age;
        form.member.checked = member;
      }


    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }

  userUpdateForm.addEventListener('submit', onUserUpdateFormSubmit);

}
