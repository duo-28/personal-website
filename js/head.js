
function hideSections(idArray) {
  for (const i of idArray) {
    document.getElementById(i).style.display = "none";
  }
}

// Scroll to section with matching id
function scrollToFunction(id, idArray) {
  hideSections(idArray)
  document.getElementById(id).style.display = "block";
  document.getElementById(id).scrollIntoView();
}

function fadeFunction(className, idArray) {
  hideSections(idArray)
  // Fade out/in items in given class
  var classArray = document.getElementsByClassName(className);
  for (var i = 0; i < classArray.length; i++) {
    var element = classArray.item(i);
    element.classList.toggle('fade');
  }
}

function switchTheme() {
  var element = document.getElementById("main-img");
  const mickeyImg = "./images/mickey.jpg";
  const dewImg = "./images/bamboo-dew.jpeg";
  if (element.style.getPropertyValue('--img') == "mickey") {
    element.src = dewImg;
    element.style.setProperty('--img', 'bamboo');
    var color = getComputedStyle(document.documentElement).getPropertyValue('--green-bg');
    document.documentElement.style.setProperty('--bg-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--green-border');
    document.documentElement.style.setProperty('--border-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--green-theme');
    document.documentElement.style.setProperty('--theme-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--green-text');
    document.documentElement.style.setProperty('--text-color', color);
  } else {
    element.src = mickeyImg;
    element.style.setProperty('--img', 'mickey');
    var color = getComputedStyle(document.documentElement).getPropertyValue('--blue-bg');
    document.documentElement.style.setProperty('--bg-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--blue-border');
    document.documentElement.style.setProperty('--border-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--blue-theme');
    document.documentElement.style.setProperty('--theme-color', color);
    color = getComputedStyle(document.documentElement).getPropertyValue('--blue-text');
    document.documentElement.style.setProperty('--text-color', color);
  }
}