import { products, services, testimonial, teamdata, blogs }
    from './json.js';

// DOM references — null-checked before use since not all elements exist on every page
const classList = document.querySelector('#prod-list');
const template = document.querySelector('#prod-template');
const icons_serv = document.querySelector("#services-icons");
const template_serv = document.querySelector("#services-template");
const templtest = document.querySelector(".testimonial-temp");
const testwrapper = document.querySelector(".testimonials-wrapper");
const teamtemp = document.querySelector(".team-template");
const teamsect = document.querySelector("#team-section");
const blogwrapper = document.querySelector(".blogs-wrapper");
const blogtemp = document.querySelector(".blog-template");


// ============================================================
// PRODUCTS — shows 3 on index, full list on shop page
// ============================================================
if (classList && template) {
    const isShop = window.location.pathname.includes('shop');
    const productsToShow = isShop ? products : products.slice(0, 3);

    productsToShow.forEach((product) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.product-img').src = product.image;
        clone.querySelector('.product-title').innerText = product.name;
        clone.querySelector('.product-price').innerText = product.price;
        classList.appendChild(clone);
    })
}


// ============================================================
// SERVICES — shows 4 on index, full list on services page
// ============================================================
if (icons_serv && template_serv) {
    const isShop = window.location.pathname.includes('services');
    const servicesToShow = isShop ? services : services.slice(0, 4);

    servicesToShow.forEach((service) => {
        const clone = template_serv.content.cloneNode(true);
        clone.querySelector(".wrapper-class").className = service.classname;
        clone.querySelector('.service-img').src = service.svg;
        clone.querySelector('.service-text').textContent = service.text;
        icons_serv.appendChild(clone);
    })
}


// ============================================================
// TESTIMONIALS — unique class added per card for individual styling
// ============================================================
if (templtest && testwrapper) {
    for (let testemdata = 0; testemdata < testimonial.length; testemdata++) {
        const clone = templtest.content.cloneNode(true);
        let perimage = clone.querySelector('.person-1-img');
        let pertitle = clone.querySelector('.person-title');
        perimage.classList.add(`person_${testemdata + 1}-img`);
        perimage.src = testimonial[testemdata].image;
        pertitle.textContent = testimonial[testemdata].title;
        testwrapper.appendChild(clone);
    }
}


// ============================================================
// TEAM SECTION
// ============================================================
if (teamtemp && teamsect) {
    teamdata.forEach((team) => {
        const clone = teamtemp.content.cloneNode(true);
        clone.querySelector('.team-img').src = team.team_img;
        clone.querySelector('.member-title').textContent = team.team_title;
        teamsect.appendChild(clone);
    })
}


// ============================================================
// BLOG POSTS — shows 3 on index, full list on blog page
// ============================================================
if (blogtemp && blogwrapper) {
    const isPath = window.location.pathname.includes("blog");
    const blogpost = isPath ? blogs : blogs.slice(0, 3);
    blogpost.forEach((post) => {
        const clone = blogtemp.content.cloneNode(true);
        console.log(clone)
        clone.querySelector(".blog-pic").src = post.blog_img;
        clone.querySelector(".blog-info").textContent = post.blog_info;
        clone.querySelector(".blog-title").textContent = post.blog_title;
        blogwrapper.appendChild(clone);
    })
}


// ============================================================
// COMPONENT LOADER — fetches and injects shared HTML components
// Fires "componentsLoaded" event once done so other scripts can safely query injected elements
// ============================================================
async function loadComponent(selector, url) {
    const response = await fetch(url);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
}

async function loadComponents() {
    await loadComponent('header', '/Ecommerce web/components/navbar.html');
    await loadComponent('#footer-section', '/Ecommerce web/components/footer.html');
}

async function elementsLoader() {
    await loadComponents()
    document.dispatchEvent(new CustomEvent("componentsLoaded"));
};

elementsLoader();