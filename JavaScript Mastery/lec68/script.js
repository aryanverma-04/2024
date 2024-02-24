const appendCookie = async(value) =>{
    let element = document.createElement("div")
    element.innerText = value;
    document.body.append(element)
}

const printCookies = () =>{
    let element = document.createElement("div")
    element.innerText = document.cookie;
    document.body.append(element)
}
appendCookie("Hello")
document.cookie = "name=ARYAN"
// printCookies()

document.cookie = "username=John Doe; expires=Sat, 28 Feb 2024 12:26:00 UTC";
printCookies()
// document.cookie = "username=John Doe; expires=Sat, 24 Feb 2024 12:26:00 UTC, path=/a";

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
printCookies()



// // Function to set a cookie
// function setCookie(cookieName, cookieValue, expirationDays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
// }

// // Insert 30 cookies
// for (var i = 1; i <= 30; i++) {
//     var cookieName = "cookie" + i;
//     var cookieValue = "value" + i;
//     setCookie(cookieName, cookieValue, 30); // Cookie expires in 30 days
// }
