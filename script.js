
function hideAboutPage() {
    var x = document.getElementById("about-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    x.style.zIndex = 5;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
} 

function hideSettingsPage() {
    var x = document.getElementById("settings-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    x.style.zIndex = 5;
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
} 

function hideResumePage() {
    var x = document.getElementById("resume-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    x.style.zIndex = 5;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
} 

function hideContactsPage() {
    var x = document.getElementById("contacts-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    x.style.zIndex = 5;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
} 

function hideFilesPage() {
    var x = document.getElementById("files-page");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    x.style.zIndex = 5;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
} 

function bringAboutToFront() {
    document.getElementById("about-page").style.zIndex = 5;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
}

function bringSettingsToFront() {
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("settings-page").style.zIndex = 5;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex -= 1;
}

function bringResumeToFront() {
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex = 5;
    document.getElementById("files-page").style.zIndex -= 1;
}

function bringContactsToFront() {
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex = 5;
    document.getElementById("files-page").style.zIndex -= 1;
}

function bringFilesToFront() {
    document.getElementById("about-page").style.zIndex -= 1;
    document.getElementById("settings-page").style.zIndex -= 1;
    document.getElementById("resume-page").style.zIndex -= 1;
    document.getElementById("contacts-page").style.zIndex -= 1;
    document.getElementById("files-page").style.zIndex = 5;
}

function changeBackgroundColor(color) {
    document.body.style.background = color;
}

function changeLine1Color() {
    document.getElementById("line1").style.background = "rgba(141, 165, 217, .50)";
    document.getElementById("line2").style.background = "rgba(244, 244, 244);";
}

function changeLine2Color() {
    document.getElementById("line1").style.background = "rgba(255, 255, 255)";
    document.getElementById("line2").style.background = "rgba(141, 165, 217, .50)";
    
}

function changeTheme(theme) {
    if (theme == "dark") {
        document.getElementById("dock").style.backgroundColor="rgba(0, 0, 0, 0.35)";
        document.getElementById("dock").style.outlineColor="rgba(0, 0, 0, 0.50)";
        
        document.getElementById("about-page").style.backgroundColor="rgb(30, 39, 50)";
        document.getElementById("about-pageheader").style.backgroundColor="rgb(25, 34, 45)";
        document.getElementById("about-page").style.color="#ffffff";
        
        document.getElementById("settings-page").style.backgroundColor="rgb(30, 39, 50)";
        document.getElementById("settings-pageheader").style.backgroundColor="rgb(25, 34, 45)";
        document.getElementById("settings-page").style.color="#ffffff";

        document.getElementById("resume-page").style.backgroundColor="rgb(30, 39, 50)";
        document.getElementById("resume-pageheader").style.backgroundColor="rgb(25, 34, 45)";
        document.getElementById("resume-page").style.color="#ffffff";

        document.getElementById("contacts-page").style.backgroundColor="rgb(30, 39, 50)";
        document.getElementById("contacts-pageheader").style.backgroundColor="rgb(25, 34, 45)";
        document.getElementById("contacts-page").style.color="#ffffff";

        document.getElementById("files-page").style.backgroundColor="rgb(30, 39, 50)";
        document.getElementById("files-pageheader").style.backgroundColor="rgb(25, 34, 45)";
        document.getElementById("files-page").style.color="#ffffff";

        document.getElementById("line1").style.background="rgb(30, 39, 50)"
        document.getElementById("line2").style.backgroundColor="rgb(30, 39, 50)"
        document.getElementById("header").style.color="rgb(30, 39, 50)"
        document.getElementById("footer").style.backgroundColor="rgb(30, 39, 50)"
        document.getElementById("anchor").style.color="fff"
    }

    if (theme == "light") {
        document.getElementById("dock").style.backgroundColor="rgba(255, 255, 255, 0.5)";
        document.getElementById("dock").style.outlineColor="rgba(255, 255, 255, 0.75)";
        
        document.getElementById("about-page").style.backgroundColor="rgb(255, 255, 255)";
        document.getElementById("about-pageheader").style.backgroundColor="#f6f6f6";
        document.getElementById("about-page").style.color="#000000";
        
        document.getElementById("settings-page").style.backgroundColor="rgb(255, 255, 255)";
        document.getElementById("settings-pageheader").style.backgroundColor="#f6f6f6";
        document.getElementById("settings-page").style.color="#000000";

        document.getElementById("resume-page").style.backgroundColor="rgb(255, 255, 255)";
        document.getElementById("resume-pageheader").style.backgroundColor="#f6f6f6";
        document.getElementById("resume-page").style.color="#000000";

        document.getElementById("contacts-page").style.backgroundColor="rgb(255, 255, 255)";
        document.getElementById("contacts-pageheader").style.backgroundColor="#f6f6f6";
        document.getElementById("contacts-page").style.color="#000000";

        document.getElementById("files-page").style.backgroundColor="rgb(255, 255, 255)";
        document.getElementById("files-pageheader").style.backgroundColor="#f6f6f6";
        document.getElementById("files-page").style.color="#000000";
    }
}