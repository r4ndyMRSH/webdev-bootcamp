var liElement = document.querySelector("#elem");
liElement.innerHTML = "Pavel";
liElement.style.color = "red";
var an = document.querySelector("a");
an.style.color = "red";
an.setAttribute("href", "https://ya.ru/?issue_tld=ru");
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge");
document.getElementsByTagName("li")[1].innerHTML = "<em>inner HTML chnge</em>";