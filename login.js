function log() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("Please Enter Username");

    } else if (pass.value == "") {

        alert("Please Enter Password");

    } else if (username.value == "csc271" && pass.value == "csc271") {

        window.location.href = "welcome.htm";

    } else {

        alert("Please Enter correct username and password")

    }
}

































// }
// function checkLogon() {
//     var name = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     
//     if ((name == null || name == "") || (pass == null || pass == "")) {
//         alert("！");
//     } else {
//         if (name == "123" && pass == "123") {
//             alert("");
//            
//             window.location.href = "https://dengxj.blog.csdn.net/";
//         } else {
//             alert("");
//         }
//     }
// }