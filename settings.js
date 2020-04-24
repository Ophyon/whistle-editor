function picktheme() {
    var input = document.getElementById("input").value;
    localStorage.setItem('whistletheme', input);
    window.location.href = "index.html";
}