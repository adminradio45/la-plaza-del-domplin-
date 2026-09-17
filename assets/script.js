
const btn=document.querySelector('.menu-btn');const nav=document.querySelector('.navlinks');if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const box=f.querySelector('.form-message');if(box){box.textContent='Demo form only — connect your email or backend before publishing.';box.style.display='block';}}));
