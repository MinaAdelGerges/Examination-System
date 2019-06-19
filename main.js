// JavaScript source code
window.onload = function ()
{

    //------------------------------- Login-----------------------------------------
    var regbtn = document.getElementById("btn_login");
    regbtn.onclick = btn_login_click;

    var check_profile = document.getElementById("profile_check");
    check_profile.onclick = btn_check_click;

    var check_html = document.getElementById("html_check");
    check_html.onclick = btn_check_click;

    var check_css = document.getElementById("css_check");
    check_css.onclick = btn_check_click;

    var check_js = document.getElementById("js_check");
    check_js.onclick = btn_check_click;

    var check_sql = document.getElementById("sql_check");
    check_sql.onclick = btn_check_click;

    var check_bootstrap = document.getElementById("bootstrap_check");
    check_bootstrap = btn_check_not;

    var check_c = document.getElementById("c_check");
    check_c.onclick = btn_check_not;
}

function btn_login_click() {

    var signMail = document.getElementById("formGroupExampleInput").value;
    var signPass = document.getElementById("formGroupExampleInput2").value;
    var login = false;
    var arr_users = [];
    arr_users = JSON.parse(localStorage.getItem("users"))
    if (arr_users == null) {
        alert("No Users yet!")
    }
    else {
        for (var i = 0; i < arr_users.length; i++) {
            if (arr_users[i].ma == signMail && arr_users[i].passwrd == signPass) {
                login = true;
                document.getElementById("register_btn").style.visibility = 'hidden';
                sessionStorage.setItem("user", JSON.stringify(arr_users[i]))
                window.location.href = "loggedIndex.html";
                break;
            }
        }
        if (!login)
        {
            alert("Email or Password is uncorrect! Please try again.");
        }
    }


}

function btn_check_click() {

        alert("Please login first")
}

function btn_check_not() {
    alert("Sorry.This exam is not avilable right now.")
}
