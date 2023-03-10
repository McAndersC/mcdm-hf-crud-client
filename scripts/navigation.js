const navigation = {};

navigation.init = () => {

    let navBar = document.querySelector('.nav-bar');

    navBar.innerHTML = '';
    navBar.insertAdjacentHTML('beforeend', `
        <a href="/index.html">Forside</a>
        <a href="/users/create.html">(C)reate</a>
        <a href="/users/read.html">(R)ead</a>
        <a href="/users/update.html">(U)pdate</a>
        <a href="/users/delete.html">(D)elete</a>
    `);

}


export default navigation;