let resOnatili = JSON.parse(localStorage.getItem("OnaTili"))
let resTarx = JSON.parse(localStorage.getItem("tarx"))
let resMatematika = JSON.parse(localStorage.getItem("metematika"))
let cards = document.getElementById("cards")

function reading() {
  if (localStorage.getItem("OnaTili")) {
    resOnatili.forEach((elem, index) => {
      cards.innerHTML += `
          <div class="section__cards__card" >
          <img src="../../img/OnaTili2.png" alt="">
          <h2>Mother tongue ${index + 1}</h2>
          <p>Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson. And you will find feedback for every question!</p>
          <a href="../check out/checkOut.html">
          <button onclick="access(${index},'onatili')">start the test process</button>
          </a>
        </div>
          `
    });
  }
  if (localStorage.getItem("tarx")) {
    resTarx.forEach((elem, index) => {
      cards.innerHTML += `
          <div class="section__cards__card" onclick="access(${index},'tarx')">
          <img src="https://media.istockphoto.com/photos/quill-and-inkwell-on-top-of-declaration-of-independence-picture-id173150593?b=1&k=20&m=173150593&s=170667a&w=0&h=PP6eMuL5snKAIx0wP23BDtgBCGzmBDdPNyMSml7oab8=" alt="">
          <h2>History ${index + 1}</h2>
          <p>Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson. And you will find feedback for every question!</p>
          <button>start the test process</button>
        </div>
          `
    });
  }
  if (localStorage.getItem("metematika")) {
    resMatematika.forEach((elem, index) => {
      cards.innerHTML += `
          <div class="section__cards__card" onclick="access(${index},'matem')">
          <img src="https://i.pinimg.com/736x/21/39/3c/21393c41e9afb4beb99e32a5be5f3655.jpg" alt="">
          <h2>Mathematics ${index + 1}</h2>
          <p>Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson. And you will find feedback for every question!</p>
          <button>start the test process</button>
        </div>
          `
    });
  }
}
reading()
const access = (id, science) => {
	if (science == 'onatili') {
		localStorage.setItem("id", id)
		localStorage.setItem("science", 'OnaTili')
	} else if (science == "tarx") {
		localStorage.setItem("id", id)
		localStorage.setItem("science", 'tarx')
	}
	else if (science == "matem") {
		localStorage.setItem("id", id)
		localStorage.setItem("science", "metematika")
  	}

}
function register() {
  location.href="../../index.html"
}


