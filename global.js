// console.log("IT'S ALIVE!");

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navlinks = $$("nav a");

// let currentLink = navlinks.find(
//     a => a.host === location.host && a.pathname === location.pathname
// );

// currentLink?.classList.add("current");
const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
   { url:"", title:"Home"},
   { url:"projects/", title:"Projects"},
   { url:"contact/", title:"Contact"},
   { url:"resume/", title:"Resume"},
   { url:"https://github.com/paulocgr9", title:"GitHub"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav

    if (!ARE_WE_HOME && !url.startsWith("http")){
        url = "../" + url;
    }
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${title}</a>`);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host != location.host) {
        console.log(a.host, location.host);
        a.setAttribute("target", "_blank");
    }

    nav.append(a);
}
