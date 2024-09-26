const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', function () {
    searchInput.style.opacity = '1'
})

searchInput.addEventListener('input', function () {
    switch (searchInput.value) {
        case 'Карта':
            document.location.href = '/links/maps/maps.html'
            break

        case 'Контакты':
            document.location.href = '/links/contacts/contacts.html'
            break

        case 'Главная':
            document.location.href = '/index.html'

        default:
            break;
    }
})