const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', ()=>{
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('open-modal');
});