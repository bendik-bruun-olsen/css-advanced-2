const btn = document.getElementById("btn")
const container = document.getElementById("btn-container")


btn.addEventListener("click", function() {
    container.classList.add("spin");
    btn.innerHTML = "Weeee!"
    container.addEventListener("animationend", function() {
        container.classList.remove("spin");
        btn.innerHTML = "Again!"
    }, {once:true});
});
