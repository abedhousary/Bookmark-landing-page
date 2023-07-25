let tabs = document.querySelectorAll(".tab");
let tabimg = document.querySelector("#tabimg");
let tabtitle = document.querySelector(".sec-title");
let tabdesc = document.querySelector(".sec-desc");
let tabsinfo = document.querySelectorAll(".question");
let emailinput = document.querySelector(".cu-in");
let messagebox = document.querySelector(".error-message");
let erroric = document.querySelector(".err-ic");
let submitform = document.querySelector("#submit");

const simplebook = {
    "img": "./images/illustration-features-tab-1.svg",
    "title": "Bookmark in one click",
    "desc": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}
const speedysearch = {
    "img": "./images/illustration-features-tab-2.svg",
    "title": "Intelligent search",
    "desc": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}
const easysharing = {
    "img": "./images/illustration-features-tab-3.svg",
    "title": "Share your bookmarks",
    "desc": " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}

tabs.forEach((e) => {
    e.addEventListener("click", () => {
        tabs.forEach((i) => { i.classList.remove("bd") })
        e.classList.add("bd");
        switch (e.id) {
            case "sb":
                tabimg.src = simplebook.img;
                tabtitle.innerHTML = simplebook.title
                tabdesc.innerHTML = simplebook.desc
                break;
            case "ss":
                tabimg.src = speedysearch.img;
                tabtitle.innerHTML = speedysearch.title
                tabdesc.innerHTML = speedysearch.desc
                break;
            case "es":
                tabimg.src = easysharing.img;
                tabtitle.innerHTML = easysharing.title
                tabdesc.innerHTML = easysharing.desc
                break;
            default:
                console.log("Not available");
                break;
        }
    })
})


tabsinfo.forEach((e) => {
    e.addEventListener("click", function () {
        tabtoshow = document.querySelector(`#${e.id}-desc`);
        arrowtoflip = document.querySelector(`#${e.id}-arr`);
        tabtoshow.classList.toggle("hidden");
        arrowtoflip.classList.toggle("arrow-on")
    })
})
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitform.onclick = () => {
    if (isValidEmail(emailinput.value)) {
        console.log("Valid email address!");
    } else {
        emailinput.classList.add("error");
        messagebox.classList.remove("hidden");
        erroric.classList.remove("hidden");
    }
}



