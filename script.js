const observer = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('.subscribe');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=form.parentElement.querySelector('.subscribe-status');status.textContent='Thanks for subscribing!';form.reset();});}
