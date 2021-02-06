function addSteps() {
    let stepEls = document.getElementsByClassName("step-action-d-none");
    for(let element of stepEls) {
        element.style.display = 'grid';
    };
}