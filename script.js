// --- GLOBAL FUNCTIONS ---

function showMainInterface() {
    document.getElementById('main-interface').style.display = 'block';
    document.getElementById('lab-container').style.display = 'none';
    window.scrollTo(0,0);
}

function showLab(labName) {
    document.getElementById('main-interface').style.display = 'none';
    const labContainer = document.getElementById('lab-container');
    const labFrame = document.getElementById('lab-frame');
    const labTitle = document.getElementById('lab-title');
    
    labContainer.style.display = 'block';

    if (labName === 'lab1') {
        labTitle.innerText = "Viewing: Lab 1 (Table Layout)";
        labFrame.srcdoc = lab1Code;
    } else if (labName === 'lab2') {
        labTitle.innerText = "Viewing: Lab 2 (CSS Layout)";
        labFrame.srcdoc = lab2Code;
    } else if (labName === 'lab3') {
        labTitle.innerText = "Viewing: Lab 3 (JS & Interactivity)";
        labFrame.srcdoc = lab3Code;
    }
}

function validateForm() {
    const name = document.getElementById('nameField').value;
    const email = document.getElementById('emailField').value;
    const message = document.getElementById('msgBox').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out!");
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true; 
}


// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark Mode
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // 2. Font Size
    const increaseFontBtn = document.getElementById('increaseFont');
    const decreaseFontBtn = document.getElementById('decreaseFont');
    let currentFontSize = 16; 

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => {
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + 'px';
        });
    }

    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => {
            if (currentFontSize > 10) {
                currentFontSize -= 2;
                document.body.style.fontSize = currentFontSize + 'px';
            }
        });
    }

    // 3. Edit Job Title
    const editJobBtn = document.getElementById('editJobBtn');
    if (editJobBtn) {
        editJobBtn.addEventListener('click', () => {
            const jobTitleElement = document.querySelector('.job-title');
            if (jobTitleElement) {
                const newTitle = prompt("Enter new job title:", jobTitleElement.innerText);
                if (newTitle) {
                    jobTitleElement.innerText = newTitle;
                }
            }
        });
    }

    // 4. Toggle Skills
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');
    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener('click', () => {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
                toggleSkillsBtn.innerText = "Hide Skills";
            } else {
                skillsSection.style.display = "none";
                toggleSkillsBtn.innerText = "Show Skills";
            }
        });
    }

    // 5. Character Counter
    const msgBox = document.getElementById('msgBox');
    const counter = document.getElementById('counter');
    if (msgBox && counter) {
        msgBox.addEventListener('input', () => {
            const currentLength = msgBox.value.length;
            const remaining = 200 - currentLength;
            counter.innerText = remaining;
        });
    }

    // 6. Date Display
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        const today = new Date();
        dateDisplay.innerText = today.toDateString();
    }
});


// --- HISTORICAL LAB CODES (With FIXED Images) ---

const lab1Code = `
<!DOCTYPE html>
<html>
<head><title>Lab 1</title></head>
<body>
<div style="text-align:center; padding:10px;"><a href="#">Home</a> | <a href="#">About</a></div>
<table width="100%">
<tr><td width="35%" valign="top">
<img src="garduce.jpg" alt="Profile" width="200" height="200">
<h3>John Matthew D. Garduce</h3><p>BSIT Student</p><hr>
<p><strong>Email:</strong> johnmatthewgarduce55@gmail.com</p>
<p><strong>Age:</strong> 20</p><hr>
<h3>Skills</h3><ul><li>Cooking</li><li>Singing</li><li>Drawing</li></ul>
</td><td valign="top">
<h2>About Me</h2><p>Hi, I am JM. I am a 20 year old BSIT student.</p>
<h2>Experiences</h2><p>Computer Engineering background.</p>
<hr><h2>Goals</h2><ul><li>Web Dev</li><li>Programming</li></ul>
<hr><h2>Message Me</h2>
<form><input type="text" placeholder="Name"><br><input type="email" placeholder="Email"><br><textarea></textarea><br><input type="submit" value="Send"></form>
</td></tr></table>
<div style="text-align:center; margin-top:20px;"><strong>WebProg 2025</strong></div>
</body></html>
`;

const lab2Code = `
<!DOCTYPE html>
<html>
<head>
<title>Lab 2</title>
<style>
body { font-family: 'Times New Roman', serif; padding: 20px; }
.navbar { background: #333; padding: 10px; color:white; } .navbar a { color: white; margin-right: 15px; text-decoration: none; }
.left-column { width: 30%; float: left; padding-right: 20px; border-right: 1px solid #ccc; }
.right-column { width: 65%; float: left; padding-left: 20px; }
.profile-img { width: 150px; }
hr { clear: both; margin: 20px 0; border: 0; border-top: 1px solid #ccc; }
</style>
</head>
<body>
<div class="navbar">Home | About | Contact</div>
<div class="left-column">
    <img src="garduce.jpg" class="profile-img">
    <h2>John Matthew D. Garduce</h2><p>BSIT Student</p><hr>
    <h3>Contact</h3><p>johnmatthewgarduce55@gmail.com</p><hr>
    <h3>Skills</h3><ul><li>Cooking</li><li>Singing</li></ul>
</div>
<div class="right-column">
    <h2>About Me</h2><p>I am JM, a BSIT student.</p>
    <h2>Experiences</h2><p>Former Computer Engineering student.</p><hr>
    <h2>Goals</h2><ul><li>Web Dev</li><li>Master Programming</li></ul>
</div>
</body></html>
`;

const lab3Code = `
<!DOCTYPE html>
<html>
<head>
<title>Lab 3</title>
<style>
body { font-family: 'Times New Roman'; transition: 0.3s; }
body.dark-mode { background: #121212; color: #fff; }
.navbar { background: #222; padding: 10px; } .navbar a { color: #fff; margin: 10px; }
.left-column { width: 30%; float: left; } .right-column { width: 65%; float: left; padding-left: 20px; }
.profile-img { width: 150px; }
</style>
</head>
<body>
<div class="navbar"><a href="#">Home</a><a href="#">About</a></div>
<button id="themeBtn" style="margin:10px;">Toggle Dark Mode</button>
<div style="display:flex;">
    <div class="left-column">
        <img src="garduce.jpg" class="profile-img">
        <h2>John Matthew D. Garduce</h2>
        <p class="job-title">BSIT Student</p>
        <button id="editJobBtn">Edit Title</button><hr>
        <h3>Contact</h3><p>johnmatthewgarduce55@gmail.com</p>
    </div>
    <div class="right-column">
        <h2>About Me</h2><p>Hi, I am JM, 20 years old.</p>
        <h2>Message Me</h2>
        <input type="text" id="name" placeholder="Name"><br>
        <textarea id="msg" oninput="document.getElementById('cnt').innerText = 200 - this.value.length"></textarea>
        <p>Chars left: <span id="cnt">200</span></p>
    </div>
</div>
<script>
    document.getElementById('themeBtn').onclick = function() { document.body.classList.toggle('dark-mode'); };
    document.getElementById('editJobBtn').onclick = function() {
        let t = document.querySelector('.job-title');
        let n = prompt("New Title:", t.innerText);
        if(n) t.innerText = n;
    };
<\/script>
</body></html>
`;