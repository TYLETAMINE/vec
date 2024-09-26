const dialogWindow = document.createElement('div')
dialogWindow.className = 'dialog-window'

const closeWindow = document.createElement('button')
closeWindow.innerHTML = 'Закрыть'
closeWindow.className = 'close-window'
dialogWindow.append(closeWindow)

async function fetchData() {
    const news = await fetch('news.json').then((Response) => Response.json())

    var newsContain = document.createElement('div')
    newsContain.className = 'news-contain'

    const newsOne = document.getElementById('newsOne')
    newsOne.addEventListener('click', function () {
        document.body.append(dialogWindow)
        newsContain.innerHTML = news.firstNews

        dialogWindow.prepend(newsContain)
    })

    const newsTwo = document.getElementById('newsTwo')
    newsTwo.addEventListener('click', function () {
        document.body.append(dialogWindow)
        newsContain.innerHTML = news.secondNews

        dialogWindow.prepend(newsContain)
    })

    const newsThree = document.getElementById('newsThree')
    newsThree.addEventListener('click', function () {
        document.body.append(dialogWindow)
        newsContain.innerHTML = news.thirdNews

        dialogWindow.prepend(newsContain)
    })

    const newsFour = document.getElementById('newsFour')
    newsFour.addEventListener('click', function () {
        document.body.append(dialogWindow)
        newsContain.innerHTML = news.fourthNews

        dialogWindow.prepend(newsContain)
    })

    const newsFive = document.getElementById('newsFive')
    newsFive.addEventListener('click', function () {
        document.body.append(dialogWindow)
        newsContain.innerHTML = news.fifthNews

        dialogWindow.prepend(newsContain)
    })

    closeWindow.addEventListener('click', function () {
        dialogWindow.remove()
        newsContain.remove()
    })
}

fetchData()