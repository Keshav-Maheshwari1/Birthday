// changing behaviour to cursor

document.addEventListener('mousemove',(e)=>{
        const cursor = document.querySelector('.cursor');
        const bubble = document.createElement('div');

        bubble.classList.add('bubble');
        bubble.style.left = `${e.pageX}px`;
        bubble.style.top = `${e.pageY}px`;
        document.body.appendChild(bubble);

        // Remove bubble after animation
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });


        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
})