const reviewBox = document.getElementById('review-box');
const expandButton = reviewBox.querySelector('.expand-button');

let isExpanded = false;

function toggleExpand() {
    if (isExpanded) {
        reviewBox.style.height = '22%';
        expandButton.classList.remove('img-expand');
    } else {
        reviewBox.style.height = 'auto';
        expandButton.classList.add('img-expand');
    }
    isExpanded = !isExpanded;
}

expandButton.addEventListener('click', toggleExpand);