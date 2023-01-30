let Navbar = document.querySelector('.vh-navbar');

document.querySelector('#bars-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
}

