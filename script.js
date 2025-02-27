function openFolder(folderName) {
    switch(folderName) {
        case 'About':
            window.location.href = 'about.html';
            break;
        case 'Projects':
            window.location.href = 'projects.html';
            break;
        case 'GitHub':
            window.location.href = 'https://github.com/burntchow';
            break;
        case 'LinkedIn':
            window.location.href = 'https://www.linkedin.com/in/aveline-villaganas/';
            break;
    }
} 

function slideBookRec() {
    const bookContainer = document.getElementById('book-container');
    const bookImage = document.getElementById('book-image');
    
    // Toggle visibility
    if (bookContainer.style.bottom === '0px') {
        bookContainer.style.bottom = '-100%'; // Slide back down
    } else {
        bookContainer.style.bottom = '0'; // Slide up
        // Add a click event listener to the document to hide the image when clicking outside
        document.addEventListener('click', outsideClickListener);
    }
    
    function outsideClickListener(event) {
        if (!bookContainer.contains(event.target) && !event.target.closest('.folder')) {
            bookContainer.style.bottom = '-100%'; // Slide back down
            document.removeEventListener('click', outsideClickListener);
        }
    }
}

window.onload = function() {

    const bookContainer = document.getElementById('book-container');
    bookContainer.style.bottom = '-100%';

    const img = document.getElementById('logo');
    const container = document.getElementById('container'); 
    const scoreElement = document.getElementById('score');
    let score = 0;

    let posX = Math.random() * (window.innerWidth - img.clientWidth);
    let posY = Math.random() * (window.innerHeight - img.clientHeight);
    let velocityX = Math.random() * 4 + 2;
    let velocityY = Math.random() * 4 + 2;

    // Add 10 points to score on click
    img.addEventListener('click', function() {
        score += 10;
        scoreElement.textContent = 'Score: ' + score;

        // Reset position to a random location
        posX = Math.random() * (window.innerWidth - img.clientWidth);
        posY = Math.random() * (window.innerHeight - img.clientHeight);

        // Reset direction to a new random velocity
        velocityX = (Math.random() * 5 + 2) * (Math.random() < 0.5 ? 1 : -1);
        velocityY = (Math.random() * 5 + 2) * (Math.random() < 0.5 ? 1 : -1);

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
    });

    function updatePosition() {
        posX += velocityX;
        posY += velocityY;

        // Check for collision with the edges
        if (posX <= 0 || posX >= (window.innerWidth - img.clientWidth)) {
            velocityX *= -1;
        }
        if (posY <= 0 || posY >= (window.innerHeight - img.clientHeight)) {
            velocityY *= -1;
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
};

