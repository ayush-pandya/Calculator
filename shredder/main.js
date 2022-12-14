document.addEventListener('DOMContentLoaded', function(e) {
    const mainEl = '.shredded-paper';
    const repeatUnit = '.shredded-paper .content';
    const repeatNum = 10;
    
    for(let i = 0; i < repeatNum; ++i) {
        let newEl = document.createElement('div');
        newEl.innerHTML = document.querySelector(repeatUnit).innerHTML;
        newEl.classList.add(`item-${i+1}`);
        newEl.setAttribute('style', `clip-path: inset(0px ${(repeatNum-1-i)*40}px 0 ${i*40}px);`);
        document.querySelector(mainEl).appendChild(newEl);
    }

    document.querySelector('.shred-me').addEventListener('click', function(e) {
        document.querySelector('.shredded-paper').classList.add('animate');
    });
});
