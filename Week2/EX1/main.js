const username = window.prompt("คุณชื่อไร");
if(username !== null|| username !=="") {
document.getElementById("show-name").innerText = "สวัสดี"+"username"

}

function showUserAgent(){
    const UserAgent = navigator.userAgent;
    window.alert("User Agent:"+ username);

}

function gotoyoutube(){
    window.open("https://www.youtube.com/");
}