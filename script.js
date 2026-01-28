const button = document.getElementById("btn");
const text = document.getElementById("text");
const title = document.getElementById("title");

button.addEventListener("click", () => {
    alert("Button clicked!");

    text.innerText = "JavaScript is now working 🎉";
    title.style.color = "blue";
    button.innerText = "Clicked!";
});
