// Template For Userlist Item
export const userListTmpl = (user) => `<div class="list-item">
    <h1>${user.name}</h1> 
    <span>${user.username}</span>
</div>`;

export const userListTmplEmail = (user) => `<div class="list-item">
    <h1>${user.name}</h1> 
    <span>${user.username}</span>
    <span>${user.email}</span>
</div>`;