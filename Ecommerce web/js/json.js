// ============================================================
// DATA ARRAYS
// Exported at the bottom for use across the app
// ============================================================


// Product cards — name, price, and image path
const products = [
    { name: "Nordic Chair", price: "$50.00", image: "/Ecommerce web/img/product-1.png" },
    { name: "Kruzo Aero Chair", price: "$78.00", image: "/Ecommerce web/img/product-2.png" },
    { name: "Ergonomic Chair", price: "$43.00", image: "/Ecommerce web/img/product-3.png" },
    { name: "Nordic Chair", price: "$50.00", image: "/Ecommerce web/img/product-1.png" },
    { name: "Kruzo Aero Chair", price: "$78.00", image: "/Ecommerce web/img/product-2.png" },
    { name: "Ergonomic Chair", price: "$43.00", image: "/Ecommerce web/img/product-3.png" },
    { name: "Nordic Chair", price: "$50.00", image: "/Ecommerce web/img/product-1.png" },
    { name: "Kruzo Aero Chair", price: "$78.00", image: "/Ecommerce web/img/product-2.png" },
    { name: "Ergonomic Chair", price: "$43.00", image: "/Ecommerce web/img/product-3.png" },
];

// Services section — icon, label, and CSS class per service card
const services = [
    { classname: "shipping", svg: "/Ecommerce web/img/truck.svg", text: "Free Shipping" },
    { classname: "return", svg: "/Ecommerce web/img/return.svg", text: "Hassle Free Returns" },
    { classname: "support", svg: "/Ecommerce web/img/support.svg", text: "24/7 Support" },
    { classname: "shopping", svg: "/Ecommerce web/img/bag.svg", text: "Easy to Shope" },
    { classname: "shipping", svg: "/Ecommerce web/img/truck.svg", text: "Free Shipping" },
    { classname: "return", svg: "/Ecommerce web/img/return.svg", text: "Hassle Free Returns" },
    { classname: "support", svg: "/Ecommerce web/img/support.svg", text: "24/7 Support" },
    { classname: "shopping", svg: "/Ecommerce web/img/bag.svg", text: "Easy to Shope" }
];

// Testimonial cards — customer photo and name
const testimonial = [
    { image: "/Ecommerce web/img/person-1(fe).png", title: "Maria Jones" },
    { image: "/Ecommerce web/img/person-1.avif", title: "Willium Syan" },
    { image: "/Ecommerce web/img/person-1.png", title: "Ryan Smith" }
];

// Team section — member photo and name
const teamdata = [
    { team_img: "/Ecommerce web/img/person_1.jpg", team_title: "Lawson Arnold" },
    { team_img: "/Ecommerce web/img/person_2.jpg", team_title: "Jeremy Walker" },
    { team_img: "/Ecommerce web/img/person_3.jpg", team_title: "Patrik White" },
    { team_img: "/Ecommerce web/img/person_4.jpg", team_title: "Kathryn Ryan" }
]

// Blog posts — thumbnail, post title, and author name
const blogs = [
    {blog_img: "/Ecommerce web/img/post-1.jpg", blog_info: "First Time Home Owner Ideas", blog_title: "Kristin Watson"},
    {blog_img: "/Ecommerce web/img/post-2.jpg", blog_info: "How To Keep Your Furniture Clean", blog_title: "Robert Fox"},
    {blog_img: "/Ecommerce web/img/post-3.jpg", blog_info: "Small Space Furniture Apartment Ideas", blog_title: "Kristin Watson"}, 
    {blog_img: "/Ecommerce web/img/post-1.jpg", blog_info: "First Time Home Owner Ideas", blog_title: "Kristin Watson"},
    {blog_img: "/Ecommerce web/img/post-2.jpg", blog_info: "How To Keep Your Furniture Clean", blog_title: "Robert Fox"},
    {blog_img: "/Ecommerce web/img/post-3.jpg", blog_info: "Small Space Furniture Apartment Ideas", blog_title: "Kristin Watson"}, 
    {blog_img: "/Ecommerce web/img/post-1.jpg", blog_info: "First Time Home Owner Ideas", blog_title: "Kristin Watson"},
    {blog_img: "/Ecommerce web/img/post-2.jpg", blog_info: "How To Keep Your Furniture Clean", blog_title: "Robert Fox"},
    {blog_img: "/Ecommerce web/img/post-3.jpg", blog_info: "Small Space Furniture Apartment Ideas", blog_title: "Kristin Watson"}
]

export { products, services, testimonial, teamdata , blogs};