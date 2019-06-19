// JavaScript source code
window.onload = function () {
    var user = JSON.parse(sessionStorage.getItem("user"));
    document.getElementById('welcome-name').innerHTML = user.first + " " + user.last;

    var logout = document.getElementById("logout_btn");
    logout.onclick = btn_logout_click;

    var check_bootstrap = document.getElementById("bootstrap_check");
    check_bootstrap = btn_check_not;

    var check_c = document.getElementById("c_check");
    check_c.onclick = btn_check_not;

}


function btn_logout_click()
{
    window.location.href = "index.html";
    sessionStorage.clear();
}

function btn_check_not() {
    alert("Sorry.This exam is not avilable right now.")
}
