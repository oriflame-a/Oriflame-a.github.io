function open_menu() {
    document.querySelector("#open").style.display = 'block';
    document.querySelector("#close_menu").style.display = "block";
    document.querySelector('body').style.overflow = 'hidden';
}

function close_menu() {
    document.querySelector("#open").style.display = 'none';
    document.querySelector("#close_menu").style.display = "none";
    document.querySelector('body').style.overflow = 'auto';
} 