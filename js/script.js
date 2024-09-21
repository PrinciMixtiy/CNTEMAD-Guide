let header_nav = document.getElementById('header-nav');
let header_button = document.getElementById('header-arrow-button');

function toggle_header() {
    header_nav.classList.toggle('hidden');

    if (header_button.textContent == '🔼') {
        header_button.innerText = '🔽';
    } else {
        header_button.innerText = '🔼';
    }
}
