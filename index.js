let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'The neighbor', 'My cat'];
let action = ['ate', 'peed', 'crushed', 'broke', 'stole', 'burned'];
let what = ['my homework', 'my phone', 'the car', 'my laptop', 'my shoes'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 
           'during my lunch', 'while I was praying', 'right before the exam'];

function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];
    
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
};
