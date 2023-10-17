const ratingBtns = document.querySelectorAll('.state__rating-btns button');
const rating = document.querySelector('.rating');
const submitBtn = document.querySelector('.state__submit-btn')
const state1 = document.querySelector('.rating-state');
const state2 = document.querySelector('.thank-you-state');


ratingBtns.forEach(button => {
    button.addEventListener('click', e => {      
        document.querySelector('.selected')?.classList.remove('selected');
        button.classList.add('selected');
        let number = e.target.innerText;
        rating.innerText = number;
    })
})

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    state1.style.display = 'none';
    state2.style.display = 'block';
})