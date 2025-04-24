
const burger=document.querySelector('.burger');
const navLinks=document.querySelector('.nav-links');
if(burger){
  burger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

/* Dropdown with delay */
document.querySelectorAll('.dropdown').forEach(dd=>{
  let hideTo;
  const menu=dd.querySelector('.dropdown-menu');
  const open=()=>{clearTimeout(hideTo);dd.classList.add('open');}
  const close=()=>{hideTo=setTimeout(()=>dd.classList.remove('open'),250);}
  dd.addEventListener('mouseenter',open);
  dd.addEventListener('mouseleave',close);
  menu.addEventListener('mouseenter',open);
  menu.addEventListener('mouseleave',close);
});

/* Timeline slide in */
const panel=document.getElementById('panel');
if(panel){
  const yr=document.getElementById('panelYear');
  const mem=document.getElementById('panelMembers');
  const list=document.getElementById('panelList');
  const img=document.getElementById('panelImg');
  document.querySelectorAll('.timeline-item').forEach(item=>{
    item.addEventListener('click',()=>{
      yr.textContent=item.dataset.year+" Season";
      mem.textContent=item.dataset.members;
      list.innerHTML='';
      item.dataset.names.split(',').forEach(n=>{
        const li=document.createElement('li');li.textContent=n.trim();list.appendChild(li);
      });
      img.src=item.querySelector('img').src;
      panel.classList.add('open');
    });
  });
  document.getElementById('closePanel').addEventListener('click',()=>panel.classList.remove('open'));
}
