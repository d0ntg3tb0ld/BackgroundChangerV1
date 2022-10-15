document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('mint').onclick = partyMint
document.getElementById('lavender').onclick = partyLavender
document.getElementById('yellow').onclick = partyYellow
document.getElementById('gray').onclick = partyGray
document.getElementById('orange').onclick = partyOrange
document.getElementById('obsidian').onclick = partyObsidian
document.getElementById('purplerain').onclick = partyPurplerain



function partyPurple() {
  document.querySelector('body').style.backgroundImage = 'url(luffywall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyGreen() {
  document.querySelector('body').style.backgroundImage = 'url(zorowall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyBlue() {
  document.querySelector('body').style.backgroundImage = 'url(sanjiwall.jpg)'
  document.querySelector('body').style.color = 'solid black'
  board.classList.add('hidden')
}

function partyMint () {
  document.querySelector('body').style.backgroundImage = 'url(usoppwall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}
function partyLavender() {
  document.querySelector('body').style.backgroundImage = 'url(chopperwall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyYellow() {
  document.querySelector('body').style.backgroundImage = 'url(namiwall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyGray() {
  document.querySelector('body').style.backgroundImage = 'url(nicowall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyOrange () {
  document.querySelector('body').style.backgroundImage = 'url(frankywall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}
function partyObsidian() {
  document.querySelector('body').style.backgroundImage = 'url(acewall.jpg)'
  document.querySelector('body').style.color = 'solid black'
}

function partyPurplerain () {
  document.querySelector('body').style.backgroundImage = 'url(jinbeiwall.png)'
  document.querySelector('body').style.color = 'solid black'
}


// andi.classList.toggle('hidden')