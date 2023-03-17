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

export const userListTmplTable = (user) => `<tr>
    <td>
        <form id="userProfileForm">
            <label>
            <img src="http://localhost:3000/images/${user.profile}" class="list-profile" alt="profile image" width="150px"/>
                <input type="file" class="inpFile" name="profile" data-id="${user._id}"/>
            </label>
        </form>
    </td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.member}</td>
    <td>
        <a href="/users/update.html?id=${user._id}">Update</a>
        <a href="/users/delete.html?id=${user._id}">Delete</a>
    
    </td>
</tr>`;