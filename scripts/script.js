const btn1 = document.getElementById('uno');
const btn2 = document.getElementById('dos');
const btn3 = document.getElementById('tres');
const btn4 = document.getElementById('cuatro');
const btn5 = document.getElementById('cinco');
const submit = document.getElementById('submit');
const empty = document.getElementById('principal');
let valor = [];

btn1.addEventListener('click', () => {
    btn1.classList.add('orange');
    btn2.classList.remove('orange');
    btn3.classList.remove('orange');
    btn4.classList.remove('orange');
    btn5.classList.remove('orange');
    valor.pop();
    valor.push('1');
})

btn2.addEventListener('click', () => {
    btn1.classList.remove('orange');
    btn2.classList.add('orange');
    btn3.classList.remove('orange');
    btn4.classList.remove('orange');
    btn5.classList.remove('orange');
    valor.pop();
    valor.push('2');
})

btn3.addEventListener('click', () => {
    btn1.classList.remove('orange');
    btn2.classList.remove('orange');
    btn3.classList.add('orange');
    btn4.classList.remove('orange');
    btn5.classList.remove('orange');
    valor.pop();
    valor.push('3');
})

btn4.addEventListener('click', () => {
    btn1.classList.remove('orange');
    btn2.classList.remove('orange');
    btn3.classList.remove('orange');
    btn4.classList.add('orange');
    btn5.classList.remove('orange');
    valor.pop();
    valor.push('4');
})

btn5.addEventListener('click', () => {
    btn1.classList.remove('orange');
    btn2.classList.remove('orange');
    btn3.classList.remove('orange');
    btn4.classList.remove('orange');
    btn5.classList.add('orange');
    valor.pop();
    valor.push('5');
})

submit.addEventListener('click', () => {
    if(valor.length > 0){
        empty.innerHTML = `<section class="second">
        <img class="illus" src="/assets/illustration/illustration-thank-you.svg" alt="illustration">
        <div class="stars">You selected ${valor[0]} out of 5</div>
        <article>
            <h1 class="second-h1">Thank you!</h1>
            <p class="second-paragraph">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </article>
    </section>`;
    }
})