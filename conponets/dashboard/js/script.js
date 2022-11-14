class Aside extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <aside class="aside">
        <div onclick="logo()" class="logo">
            <h1><i class="bi bi-lightning-charge "></i> <span> Clever</sapn></h1>
        </div>
        <div class="aside__saidbar">
            <div class="aside__saidbar-route">
                <h3 id="Dashboard"  onclick="exchange('Dashboard')" class="active">
				<i class="bi bi-house"></i>
				<span> Dashboard</h3> </sapan>
                <h3 id="Test" onclick="exchange('Test')" >
				<i class="bi bi-chat "  ></i>
				<span>Test CRUD </span> </h3>
                <h3 id="Users" onclick="exchange('Users')"><i class="bi bi-person-circle"></i><span> Users</span></h3>
				<h3 class="" id="Account" onclick="exchange('Account')"><i   class="bi bi-person-badge-fill"></i><span> Account</span></h3>
                <h3 onclick="exchange('Logout')" ><i class="bi bi-box-arrow-left"></i> <span>Logout</span></h3>
				</div>
            <div class="aside__saidbar-register">
               
            </div>
        </div>
    </aside>
        `
	}
}
class Card extends HTMLElement {
	connectedCallback() {

		this.innerHTML = ` 
   
    <div class="cards">
    <div class="card">
        <img src="../../img/card.png" alt="">
        <h3 class="card-title">Headline label </h3>
        <p class="card-label">Label, Label</p>
        <button class="card-btn">Badge</button>
    </div>
    <div class="card-button">
        <h2><i class="bi bi-three-dots"></i></h2>
    </div>
</div>
    </a> 
   `
	}
}
class Navbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = ` <nav class="navbar">
        <div class="navbar__text">
            <h1>Dashboard</h1>
            <div class="navbar__text-p">
                  <p id="text" class="active"  onclick="exchange('test')">Tests</p>
                <p id="Applicants" onclick="exchange('Applicants')">Applicants</p>
            </div>
        </div>
        <div class="navbar__button">
            <button>+ create</button>
        </div>
    </nav>`
	}
}
class Table extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `  
       
        `
	}
}
customElements.define('main-table', Table);
customElements.define('main-navbar', Navbar);
customElements.define('main-card', Card);
customElements.define('main-aside', Aside);
let id = localStorage.getItem("id")
let A = document.getElementById("A")
let B = document.getElementById("B")
let D = document.getElementById("D")
let radioA = document.getElementById("radioA")
let radioB = document.getElementById("radioB")
let radioD = document.getElementById("radioD")
let time = document.getElementById("time")
let min = 1
let sec = 60
let total = 0;
let counter = 0
let answera;
let number = document.getElementById("number")
let science = localStorage.getItem("science")
let question = document.getElementById("question")
let text = document.getElementById("text")
let Applicants = document.getElementById("Applicants")
let Dashboard = document.getElementById("Dashboard")
let section = document.getElementById("section")
let Test = document.getElementById("Test")
let Users = document.getElementById("Users")
let modal = document.getElementById("modal")
let Account = document.getElementById("Account")
let containers = document.getElementById("containers")
let section__body = document.getElementById("section__body")
let section__applicants = document.getElementById("section__applicants")
let section__test = document.getElementById("section__test")
let section__users = document.getElementById("section__users")
let section__test__body__form = document.getElementById("section__test__body__form")
let section__test__body__form2 = document.getElementById("section__test__body__form2")
let section__account = document.getElementById("section__account")
let sectionInput1 = document.getElementById("sectionInput1")
let section__theResult = document.getElementById("section__theResult")
let correct = document.getElementById("correct")
let wrong = document.getElementById("wrong")
let inputA = document.getElementById("inputA")
let inputB = document.getElementById("inputB")
let inputD = document.getElementById("inputD")
let category = document.getElementById("category")
let resOnaTili = JSON.parse(localStorage.getItem("OnaTili"))
let resTarx = JSON.parse(localStorage.getItem("tarx"))
let resMetematika = JSON.parse(localStorage.getItem("metematika"))
let aa = document.getElementById("radiosA")
let bb = document.getElementById("radiosB")
let dd = document.getElementById("radiosD")
let crud = document.getElementById("crud")
let OnaTili = []
let tarx = []
let metematika = []
let test = []
let answers;
let prepared = document.getElementById("prepared")
let prepareda = document.getElementById("prepareda")
let caunt = 1;
let tbody = document.getElementById("tbody")
let section__checkOut = document.getElementById("section__checkOut")
let theNext = document.getElementById("theNext")
let firstB = document.getElementById("first")
let InputName = document.getElementById("InputName")
let InputA = document.getElementById("InputA")
let InputB = document.getElementById("InputB")
let InputD = document.getElementById("InputD")
let newTestData = []
let resNewTestData = JSON.parse(localStorage.getItem("newTestData"))
let dataAnswers = []
let userId = localStorage.getItem("userId")
prepared.innerHTML = `Number of tests prepared: ${caunt}`
prepareda.innerHTML = `Number of tests prepared: ${caunt}`
const exchange = (arg) => {
	if (arg == "test") {
		text.style.color = "#4C6FFF"
		Applicants.style.color = "#718096"
		section__body.className = "section__body d-block"
		section__applicants.className = 'd-none'
		section__checkOut.className = "d-none  "

	}
	else if (arg == "Applicants") {
		text.style.color = "#718096"
		section__body.className = "section__body d-none"
		Applicants.style.color = "#4C6FFF"
		section__applicants.className = 'd-block section__applicants'
		section__checkOut.className = "d-none  "

	} else
		if (arg == "Dashboard") {
			section.className = "d-block section "
			section__test.className = "d-none"
			section__users.className = "d-none"
			section__account.className = "d-none"
			Dashboard.className = "active"
			Test.className = ""
			Account.className = ""
			Users.className = ' '
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"
		}
		else if (arg == "Test") {
			section__test.className = "d-block section__test"
			section.className = "d-none"
			section__account.className = "d-none"
			section__users.className = "d-none"
			Test.className = "active"
			Dashboard.className = ""
			Users.className = ''
			Account.className = ""
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"


		}
		else if (arg == "Users") {
			section__users.className = "d-block"
			section.className = "d-none"
			section__test.className = "d-none"
			section__account.className = "d-none"
			Users.className = 'active'
			Test.className = ""
			Dashboard.className = ""
			Account.className = ""
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"


		}
		else if (arg == "openModal") {
			modal.className = "d-block modal"
			containers.className = "opasity containers"

		}
		else if (arg == "oneOption") {
			modal.className = "d-none"
			containers.className = " containers"
			section__test__body__form.className = "d-block section__test__body__form"
			section__test__body__form2.className = "d-none"
			section__account.className = "d-none"
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"
		}
		else if (arg == "severalOptions") {
			modal.className = "d-none"
			containers.className = " containers"
			section__test__body__form2.className = "d-block section__test__body__form2"
			section__test__body__form.className = "d-none"
			section__account.className = "d-none"
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"
		}
		else if (arg == "Account") {
			section__account.className = "d-block section__account"
			section__users.className = "d-none"
			section__test.className = "d-none"
			section.className = "d-none"
			Account.className = "active"
			Test.className = ""
			Users.className = ''
			Dashboard.className = ""
			section__checkOut.className = "d-none  "
			section__theResult.className = "d-none"
		} else if (arg == "check") {
			section__checkOut.className = "d-block section__checkOut "
			section__account.className = "d-none"
			section__users.className = "d-none"
			section__test.className = "d-none"
			section.className = "d-none"
			Account.className = ""
			Test.className = ""
			Users.className = ''
			Dashboard.className = ""
			testI()
			setTimeout(sayHi, 1000);
			section__theResult.className = "d-none"
		} else if (arg == "theResult") {
			section__theResult.className = "section__theResult d-block"
			section__checkOut.className = "d-none "
			section__account.className = "d-none"
			section__users.className = "d-none"
			section__test.className = "d-none"
			section.className = "d-none"
			Account.className = ""
			Test.className = ""
			Users.className = ''
			Dashboard.className = ""
		} else if (arg == "Logout") {
			window.location.href = "../../index.html";
		}
}
const logo = () => {
	location.reload()
}
const next = (arg) => {
	if (arg == "collar") {
		if (inputA.value == inputB.value || inputB.value == inputD.value || inputA.value == inputD.value) {
			alert('Please note that not all test options are the same')
		} else {
			caunt++
			prepared.innerHTML = `Number of tests prepared: ${caunt}`
			if (aa.checked) {
				answers = aa.value
			} else if (bb.checked) {
				answers = bb.value
			}
			else if (dd.checked) {
				answers = dd.value
			}
			let person = {
				name: sectionInput1.value,
				inputA: inputA.value,
				inputB: inputB.value,
				inputD: inputD.value,
				answer: answers,
			}
			test.push(person)
			sectionInput1.value = ""
			inputA.value = ""
			inputB.value = ""
			inputD.value = ""
			aa.checked = false
			bb.checked = false
			dd.checked = false
		}
	} else if (arg == "aLot") {
		if (InputA.value == InputB.value || InputB.value == InputD.value || InputA.value == InputD.value) {
			alert('Please note that not all test options are the same')
		} else {
			caunt++
			prepared.innerHTML = `Number of tests prepared: ${caunt}`
			let person = {
				name: InputName.value,
				InputA: InputA.value,
				InputB: InputB.value,
				InputD: InputD.value,
			}
			test.push(person)
			InputName.value = ""
			InputA.value = ""
			InputB.value = ""
			InputD.value = ""
		}
	}

}
const addTest = (arg) => {
	if (arg == "collor") {
		if (category.value == "OnaTili") {
			if (localStorage.getItem("OnaTili")) {
				OnaTili = []
				JSON.parse(localStorage.getItem("OnaTili")).forEach(elem => {
					OnaTili.push(elem)
				});
				OnaTili.push(test)
				localStorage.setItem("OnaTili", JSON.stringify(OnaTili))
			} else {
				OnaTili.push(test)
				localStorage.setItem("OnaTili", JSON.stringify(OnaTili))
				reading()
			}
			location.reload()
		}

		else if (category.value == "tarx") {
			if (localStorage.getItem("tarx")) {
				tarx = []
				JSON.parse(localStorage.getItem("tarx")).forEach(elem => {
					tarx.push(elem)
				});
				tarx.push(test)
				localStorage.setItem("tarx", JSON.stringify(tarx))
			} else {
				tarx.push(test)
				localStorage.setItem("tarx", JSON.stringify(tarx))
				reading()
			}
			location.reload()
		}
		else if (category.value == "metematika") {
			if (localStorage.getItem("metematika")) {
				metematika = []
				JSON.parse(localStorage.getItem("metematika")).forEach(elem => {
					metematika.push(elem)
				});
				metematika.push(test)
				localStorage.setItem("metematika", JSON.stringify(metematika))
			} else {
				metematika.push(test)
				localStorage.setItem("metematika", JSON.stringify(metematika))
				reading()
			}
			location.reload()
		}
	} else if (arg == "aLot") {
		console.log(JSON.parse(localStorage.getItem("newTestData")));
		if (localStorage.getItem("newTestData")) {
			newTestData = []
			JSON.parse(localStorage.getItem("newTestData")).forEach(elem => {
				newTestData.push(elem)
			});
			newTestData.push(test)
			localStorage.setItem("newTestData", JSON.stringify(newTestData))
		}
		else {
			newTestData.push(test)
			localStorage.setItem("newTestData", JSON.stringify(newTestData))
			reading()
		}
		location.reload()
	}

}
function reading() {
	if (localStorage.getItem("newTestData")) {
		JSON.parse(localStorage.getItem("newTestData")).forEach((elem, index) => {
			section__body.innerHTML += `
		   <div class="cards">
			<div class="card" onclick="access('${index}','psychologist')">
			   <img src="../../img/xx.jpg" alt="">
			   <h3 class="card-title">Psychologist</h3>
			   <a href="answers.html">
			   <p class="card-label">check the answers</p></a>
			 <button onclick="exchange('check')" class="card-btn">check out</button> 
			</div>
			<div class="card-button">
			    <h2 ><i onclick="crudDelet(${index},'psychologist')" class="bi bi-trash"></i></h2>
			  <h2><i class="bi bi-pencil-square"></i></h2>
			</div>
		   </div>
	    `
		});
	}
	if (localStorage.getItem("OnaTili")) {
		JSON.parse(localStorage.getItem("OnaTili")).forEach((elem, index) => {
			section__body.innerHTML += `
		   <div class="cards">
			<div class="card" onclick="access('${index}','onatili')">
			   <img src="../../img/onatili.png" alt="">
			   <h3 class="card-title">Ona-tili</h3>
			   <a href="answers.html">
			   <p class="card-label">check the answers</p></a>
			 <button onclick="exchange('check')" class="card-btn">check out</button> 
			</div>
			<div class="card-button">
			    <h2 ><i onclick="crudDelet(${index},'OnaTili')" class="bi bi-trash"></i></h2>
			  <h2><i class="bi bi-pencil-square"></i></h2>
			</div>
		   </div>
	    `
		});
	}
	if (localStorage.getItem("tarx")) {
		JSON.parse(localStorage.getItem("tarx")).forEach((elem, index) => {
			section__body.innerHTML += `
			  <div class="cards" >
			 
			    <div class="card" onclick="access(${index},'tarx')">
				  <img src="../../img/unnamed.webp" alt="">
				  <h3 class="card-title">Tarix</h3>
				  <a href="answers.html" >
				    <p class="card-label">check the answers </p></a> 
					 
					<button class="card-btn" onclick="exchange('check')">check out</button> 
			    </div>
			    <div class="card-button">
			    <h2 ><i onclick="crudDelet(${index},'tarx')" class="bi bi-trash"></i></h2>
			    <h2><i class="bi bi-pencil-square"></i></h2>
			    </div>
			  </div>
		   `
		});
	}
	if (localStorage.getItem("metematika")) {
		JSON.parse(localStorage.getItem("metematika")).forEach((elem, index) => {
			section__body.innerHTML += `
			  <div class="cards"  >
			  
			    <div class="card" onclick="access(${index},'matem')">
				  <img src="../../img/matem.png" alt="">
				  <h3 class="card-title">Matematika </h3>
				  <a href="answers.html" >  
				  <p class="card-label">check the answers </p></a>
				  <button class="card-btn" onclick="exchange('check')">check out</button> 
			    </div>
			    <div class="card-button">
			    <h2 ><i onclick="crudDelet(${index},'metematika')" class="bi bi-trash"></i></h2>
			    <h2><i class="bi bi-pencil-square"></i></h2>
			    </div>
			  </div>
		   `
		});
	}
}

reading()
function crudDelet(id, sciences) {
	if (sciences == "OnaTili") {
		section__body.innerHTML = ""
		localStorage.setItem("OnaTili", JSON.stringify(resOnaTili.filter((item) => item !== resOnaTili[id])))
		reading()
	}
	else if (sciences == "tarx") {
		section__body.innerHTML = ""
		localStorage.setItem("tarx", JSON.stringify(resTarx.filter((item) => item !== resTarx[id])))
		reading()
	}
	else if (sciences == "metematika") {
		section__body.innerHTML = ""
		localStorage.setItem("metematika", JSON.stringify(resMetematika.filter((item) => item !== resMetematika[id])))
		reading()
	} else if (sciences == "psychologist") {
		section__body.innerHTML = ""
		deleteItem = JSON.stringify(resNewTestData.filter((item) => item !== resNewTestData[id]))
		localStorage.setItem("newTestData", deleteItem)
		reading()
	}
	location.reload()
}

const access = (id, science) => {
	if (science == 'onatili') {
		localStorage.setItem("id", id)
		localStorage.setItem("science", 'OnaTili')
		localStorage.setItem("check", "")
	} else if (science == "tarx") {
		localStorage.setItem("id", id)
		localStorage.setItem("science", 'tarx')
		localStorage.setItem("check", "")
	}
	else if (science == "matem") {
		localStorage.setItem("id", id)
		localStorage.setItem("science", "metematika")
		localStorage.setItem("check", "")
	} else if (science == "psychologist") {
		localStorage.setItem("id", id)
		localStorage.setItem("science", "newTestData")
		localStorage.setItem("check", "")
	}
}

if (localStorage.getItem("data")) {
	JSON.parse(localStorage.getItem("data")).forEach((elem ,index) => {
		tbody.innerHTML += `
		<tr>
		<td>
			<div class="tbody__title">
				<div class="tbody__title-icon">
					<i class="bi bi-image"></i>
				</div>
				<div class="tbody__title-text">
					<b>${elem.name}</b>
					<p>${elem.email}</p>
				</div>
			</div>
		</td>
		<td>x</td>
		<td>5/23/2020, 10:45 AM</td>
		<td><button>Mathematics</button> </td>
	</tr>
		`
	})
}
const testI = () => {
	if (science == "OnaTili") {
		if (resOnaTili[id][counter]) {
			question.innerHTML = resOnaTili[id][counter].name
			A.innerHTML = resOnaTili[id][counter].inputA
			B.innerHTML = resOnaTili[id][counter].inputB
			D.innerHTML = resOnaTili[id][counter].inputD
		}
	} else if (science == "tarx") {
		if (resTarx[id][counter]) {
			question.innerHTML = resTarx[id][counter].name
			A.innerHTML = resTarx[id][counter].inputA
			B.innerHTML = resTarx[id][counter].inputB
			D.innerHTML = resTarx[id][counter].inputD
		}
	} else if (science == "metematika") {
		if (resMetematika[id][counter]) {
			question.innerHTML = resMetematika[id][counter].name
			A.innerHTML = resMetematika[id][counter].inputA
			B.innerHTML = resMetematika[id][counter].inputB
			D.innerHTML = resMetematika[id][counter].inputD
		}
	} else if (science == "newTestData") {
		if (resNewTestData[id][counter]) {
			question.innerHTML = resNewTestData[id][counter].name
			A.innerHTML = resNewTestData[id][counter].InputA
			B.innerHTML = resNewTestData[id][counter].InputB
			D.innerHTML = resNewTestData[id][counter].InputD
		}

	}
}

const check = () => {
	if (radioA.checked) {
		answera = radioA.value
	} else if (radioB.checked) {
		answera = radioB.value

	} else if (radioD.checked) {
		answera = radioD.value
	}
}
const TheNext = () => {
	if (science == "OnaTili") {
		if (resOnaTili[id].length <= counter) {
			alert("the questions are over, thank you for your attention!")
		} else {
			resOnaTili[id][counter].answer == answera ? total++ : null;
			radioA.checked = false
			radioB.checked = false
			radioD.checked = false
			counter++
			testI()
		}
	}
	else if (science == "tarx") {
		if (resTarx[id].length <= counter) {
			alert("the questions are over, thank you for your attention!")
		} else {
			resTarx[id][counter].answer == answera ? total++ : "";
			radioA.checked = false
			radioB.checked = false
			radioD.checked = false
			counter++
			testI()
		}
	}
	else if (science == "metematika") {
		if (resMetematika[id].length <= counter) {
			alert("the questions are over, thank you for your attention!")
		} else {
			resMetematika[id][counter].answer == answera ? total++ : "";
			radioA.checked = false
			radioB.checked = false
			radioD.checked = false
			counter++
			testI()
		}
	}
	else if (science = "newTestData") {
		if (resNewTestData[id].length == counter) {
			alert("the questions are over, thank you for your attention!")
		} else {
			if (answera == "A") {
				let data = {
					name: resNewTestData[id][counter].name,
					selected: resNewTestData[id][counter].InputA
				}
				dataAnswers.push(data)
				counter + 1
				radioA.checked = false
				radioB.checked = false
				radioD.checked = false
			} if (answera == "B") {
				let data = {
					name: resNewTestData[id][counter].name,
					selected: resNewTestData[id][counter].InputB
				}
				dataAnswers.push(data)
				counter + 1
				radioA.checked = false
				radioB.checked = false
				radioD.checked = false

			} if (answera == "D") {
				let data = {
					name: resNewTestData[id][counter].name,
					selected: resNewTestData[id][counter].InputD
				}
				dataAnswers.push(data)
				counter + 1
				radioA.checked = false
				radioB.checked = false
				radioD.checked = false
			}
			counter++
			testI()

		}
	}
	number.innerHTML = counter + 1
}
const first = () => {
	theNext.className = ""
	counter--
	if (counter == -1) {
		counter = 0
		firstB.className = "bg-active"
	} else {
		console.log(counter);
		testI()
	}
	number.innerHTML = counter + 1
}

function sayHi() {
	sec--
	if (sec == 0) {
		sec = 60
		min--
	}
	min == 0 ? finish() : setTimeout(sayHi, 1000);
	time.innerHTML = min + ":" + sec
}

const finish = () => {
	if (science == "newTestData") {
		localStorage.setItem("check", "check")
		location.href = "./answers.html"
		localStorage.setItem("dataAnswer", JSON.stringify(dataAnswers))
	} else {
		if (science == "OnaTili") {
			correct.innerHTML = total;
			result = resOnaTili[id].length - total
			wrong.innerHTML = result
			localStorage.setItem(userId,  total) 
		} else if (science == "tarx") {
			correct.innerHTML = total;
			result =  resTarx[id].length - total
			wrong.innerHTML = result
			localStorage.setItem("userId",JSON.stringify(result))
		}
		else if (science == "metematika") {
			correct.innerHTML = total;
			result =  resMetematika[id].length - total
			wrong.innerHTML = result
			localStorage.setItem("userId",JSON.stringify(result))
		}
		min = 0
		sec = 0
		exchange("theResult")
	}

}
const back = () => {
	location.reload()
}

