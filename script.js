const shareBtn = document.querySelector('.share_btn');
const shareAreaEl = document.querySelector('.share_area');

const toggleShareArea = () => {
    shareBtn.classList.toggle('active');
    shareAreaEl.classList.toggle('active');
}

shareBtn.addEventListener('click', toggleShareArea);