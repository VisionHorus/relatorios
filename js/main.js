// Intersection Observer para animações de reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
reveals.forEach(el=>obs.observe(el));

// Menu ativo ao clicar
const links = document.querySelectorAll('.menu a');
links.forEach(link=>{
  link.addEventListener('click',()=>{
    links.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
    
    // Fechar menu mobile após clicar
    const aside = document.querySelector('aside');
    if(window.innerWidth <= 980){
      aside.classList.remove('active');
    }
  });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const aside = document.querySelector('aside');

if(menuToggle){
  menuToggle.addEventListener('click', ()=>{
    aside.classList.toggle('active');
  });
}

// Fechar menu ao clicar fora
document.addEventListener('click', (e)=>{
  if(window.innerWidth <= 980){
    if(!aside.contains(e.target) && !menuToggle.contains(e.target)){
      aside.classList.remove('active');
    }
  }
});

// Atualizar menu ativo ao scroll
window.addEventListener('scroll', ()=>{
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute('id');
    }
  });
  
  links.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href').slice(1) === current){
      link.classList.add('active');
    }
  });
});
