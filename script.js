globalTheme = "light";

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});

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

function changeLineColor(number, theme) {
  var lineNumber = "line" + number.toString();

  if (globalTheme == "light") {
    line1 = document.getElementsByClassName("line1");
    for (var i = 0; i < line1.length; i++) {
      line1[i].style.background = "rgba(255, 255, 255)";
    }

    line2 = document.getElementsByClassName("line2");
    for (var i = 0; i < line2.length; i++) {
      line2[i].style.background = "rgba(244, 244, 244)";
    }

    document.getElementById(lineNumber).style.background =
      "rgba(191, 218, 245)";
  } else if (globalTheme == "dark") {
    line1 = document.getElementsByClassName("line1");
    for (var i = 0; i < line1.length; i++) {
      line1[i].style.background = "rgb(30, 39, 50)";
    }

    line2 = document.getElementsByClassName("line2");
    for (var i = 0; i < line2.length; i++) {
      line2[i].style.background = "rgb(30, 39, 50)";
    }

    document.getElementById(lineNumber).style.background = "rgba(63, 80, 110)";
  }

  // document.getElementsByClassName("line1").style.background =
  //   "rgba(141, 165, 217, .50)";
  // document.getElementsByClassName("line2").style.background =
  //   "rgba(244, 244, 244);";
}

function changeTheme(theme) {
  if (theme == "dark") {
    globalTheme = "dark";
    document.getElementById("dock").style.backgroundColor =
      "rgba(0, 0, 0, 0.35)";
    document.getElementById("dock").style.outlineColor = "rgba(0, 0, 0, 0.50)";

    document.getElementById("about-page").style.backgroundColor =
      "rgb(30, 39, 50)";
    document.getElementById("about-pageheader").style.backgroundColor =
      "rgb(25, 34, 45)";
    document.getElementById("about-page").style.color = "#ffffff";

    document.getElementById("settings-page").style.backgroundColor =
      "rgb(30, 39, 50)";
    document.getElementById("settings-pageheader").style.backgroundColor =
      "rgb(25, 34, 45)";
    document.getElementById("settings-page").style.color = "#ffffff";

    document.getElementById("resume-page").style.backgroundColor =
      "rgb(30, 39, 50)";
    document.getElementById("resume-pageheader").style.backgroundColor =
      "rgb(25, 34, 45)";
    document.getElementById("resume-page").style.color = "#ffffff";

    document.getElementById("contacts-page").style.backgroundColor =
      "rgb(30, 39, 50)";
    document.getElementById("contacts-pageheader").style.backgroundColor =
      "rgb(25, 34, 45)";
    document.getElementById("contacts-page").style.color = "#ffffff";

    document.getElementById("files-page").style.backgroundColor =
      "rgb(30, 39, 50)";
    document.getElementById("files-pageheader").style.backgroundColor =
      "rgb(25, 34, 45)";
    document.getElementById("files-page").style.color = "#ffffff";

    document.getElementById("hr-thing").style.color = "rgb(20, 29, 40)";

    document.getElementById("profile-photo").style.borderColor = "white";

    line1 = document.getElementsByClassName("line1");
    for (var i = 0; i < line1.length; i++) {
      line1[i].style.background = "rgb(30, 39, 50)";
    }

    line2 = document.getElementsByClassName("line2");
    for (var i = 0; i < line2.length; i++) {
      line2[i].style.background = "rgb(35, 44, 55)";
    }

    a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "rgb(255, 255, 255)";
    }

    header = document.getElementsByTagName("header");
    for (var i = 0; i < a.length; i++) {
      a[i].style.background = "rgb(30, 39, 50)";
    }

    a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "rgb(255, 255, 255)";
      a[i].style.background = "none";
    }

    // document.getElementById("footer").style.backgroundColor = "rgb(30, 39, 50)";
    // document.getElementById("anchor").style.color = "fff";
  }

  if (theme == "light") {
    globalTheme = "light";
    document.getElementById("dock").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
    document.getElementById("dock").style.outlineColor =
      "rgba(255, 255, 255, 0.75)";

    document.getElementById("about-page").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("about-pageheader").style.backgroundColor =
      "#f6f6f6";
    document.getElementById("about-page").style.color = "#000000";

    document.getElementById("settings-page").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("settings-pageheader").style.backgroundColor =
      "#f6f6f6";
    document.getElementById("settings-page").style.color = "#000000";

    document.getElementById("resume-page").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("resume-pageheader").style.backgroundColor =
      "#f6f6f6";
    document.getElementById("resume-page").style.color = "#000000";

    document.getElementById("contacts-page").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("contacts-pageheader").style.backgroundColor =
      "#f6f6f6";
    document.getElementById("contacts-page").style.color = "#000000";

    document.getElementById("files-page").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("files-pageheader").style.backgroundColor =
      "#f6f6f6";
    document.getElementById("files-page").style.color = "#000000";

    document.getElementById("hr-thing").style.color = "#eeeeee";

    document.getElementById("profile-photo").style.borderColor = "black";

    line1 = document.getElementsByClassName("line1");
    for (var i = 0; i < line1.length; i++) {
      line1[i].style.background = "rgb(255, 255, 255)";
    }

    line2 = document.getElementsByClassName("line2");
    for (var i = 0; i < line2.length; i++) {
      line2[i].style.background = "rgb(244, 244, 244)";
    }

    a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "rgb(0, 0, 0)";
      a[i].style.background = "none";
    }
  }
}
