const phone="919582037458";let cart=[];const $=s=>document.querySelector(s);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menu=$("#menu"),nav=$("#nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.addEventListener("mousemove",e=>{const g=$(".cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
function addToCart(name,price){cart.push({name,price});$("#cartCount").textContent=cart.length;toast(name+" added to cart");renderCart()}
function renderCart(){const box=$("#cartItems"),total=cart.reduce((s,x)=>s+x.price,0);box.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-row"><span>${x.name}</span><b>₹${x.price.toLocaleString("en-IN")}</b></div>`).join(""):"<p style='color:#777;padding:25px 0'>Your cart is empty.</p>";$("#cartTotal").textContent=cart.length?"Total: ₹"+total.toLocaleString("en-IN"):"";const msg=cart.length?`Hi TORTEX, I want to order:%0A${cart.map(x=>"- "+x.name+" — ₹"+x.price).join("%0A")}%0ATotal: ₹${total}`:"";$("#checkout").href=`https://wa.me/${phone}?text=${msg}`}
function openCart(){renderCart();$("#drawer").classList.add("open");$("#backdrop").classList.add("show")}
function closeCart(){$("#drawer").classList.remove("open");$("#backdrop").classList.remove("show")}
let toastTimer;function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>x.classList.remove("show"),2200)}
renderCart();