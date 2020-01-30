document.getElementById("button").onclick = () => {
    document.getElementById("confirm").innerHTML = "Order placed.Check email for confirmation";
    document.getElementById("button").style.display = "none";
    document.getElementById("confirm").style.background = "#4CAF50";
    document.getElementById("confirm").style.color = "white"
}