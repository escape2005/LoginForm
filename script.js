function test() {
    var uid = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // alert(uid + " " + pass)

    var user = localStorage.setItem("uid", uid)
    var pass = localStorage.setItem("pass", pass)

    var user = localStorage.getItem("uid", uid)
    var pass = localStorage.getItem("pass", pass)

    var a,b;

    a = "vesit";
    b = "2024";

    if(a==user && b==pass){
        alert("Login Successful!");
    } else{
        alert("Invalid Credentials!");
    }


}