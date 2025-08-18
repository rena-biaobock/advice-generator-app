const playBtn = document.getElementById('play-button')
const adviceTitle = document.getElementById('advice-title')
const adviceBody = document.getElementById('advice-body')

playBtn.addEventListener('click', newAdvice)

async function newAdvice () {
    const url = 'https://api.adviceslip.com/advice'
    const response  = await fetch(url)
    const json = await response.json()
    if (response.ok) {
        const adviceId = json.slip.id
        const adviceText = json.slip.advice
        adviceTitle.innerHTML = `ADVICE #${adviceId}`
        adviceBody.innerHTML = adviceText
    }
}