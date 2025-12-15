document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function () {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle) {
        document.querySelector(".job-title").textContent = newTitle;
    }
};

const skillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

skillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        skillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        skillsBtn.textContent = "Show Skills";
    }
};

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    counter.textContent = 200 - msgBox.value.length;
};

function validateForm() {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Name and Email are required!");
        return false;
    }
    return true;
}

document.getElementById("dateDisplay").textContent =
    new Date().toDateString();

let fontSize = 16;
const content = document.getElementById("main-content");

document.getElementById("increaseFont").onclick = function () {
    fontSize += 2;
    content.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFont").onclick = function () {
    fontSize -= 2;
    content.style.fontSize = fontSize + "px";
};