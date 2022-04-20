// execute script afer page loaded

window.onload = function digital_fn() {
    // toggle button
    let toggle = document.querySelector('#nav .toggle-btn');
    let collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', function (e) {
        collapse.classList.toggle('active');
    });

}