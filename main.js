/*
Retrieving the necessary html elements with their id and storting them in separator  variables.
*/

const todoTitle = document.getElementById('put-title')
const tododesc = document.getElementById('put-desc')
const insert = document.getElementById('new-insert')
const tbBody = document.getElementById('tb-body')
/*
Retrieving the edit and remove elements and storing them in variables
*/

const addNewData = document.getElementById('change')
const removeData = document.getElementById('remove')

/*
	
*/


/*
	Check if todo exit in browser local storage or add one
*/
let createArr = JSON.stringify(new Array())
if(!localStorage.getItem('data')){
	localStorage.setItem('data', createArr)
}

/*
	Get the data from browser local storage as a json. convert it to the object and show the data in table body
*/





/* create a function which is show the data on table*/

const showData = () =>{
	const getJson = localStorage.getItem('data')
	const convert = JSON.parse(getJson)

	/*
		initializing a new value for table row index
	*/
	console.log(convert)

	let serial = 1

	/* reset the previous data */

	tbBody.innerHTML = ''

	convert.forEach((data, index)=>{
		tbBody.innerHTML += `
		<tr>
			<td>${serial}</td>
			<td>${data.product}</td>
			<td>${data.desc}</td>
			<td>
				<button data-itemId="${index}" id="change" class="edit">Edit</button>
				<button data-itemId="${index}" id="remove" class="delete">delete</button>
			</td>
		</tr>`
		serial++
	})
	
}


/* initialize a function "setData" that is push the data to the local storage key value pairs as key data and render showData function again*/

const setData = ()=>{

	insert.addEventListener('click', ()=>{
		/*
		store the user providing data
		*/

		let proTitle = todoTitle.value
		let prodesc  = tododesc.value

		/* make a object wiht the data */

		let dataObj = {
			product: proTitle,
			desc: prodesc
		}


		/* fecth the data from the local storage covert it to js array. push the new object inside it. set the data again to the localstorage after all*/

		let oldData = JSON.parse(localStorage.getItem('data'))
		oldData.push(dataObj)
		let createArr = JSON.stringify(oldData)

		/* reset the data item */
		localStorage.removeItem('data')

		localStorage.setItem('data', createArr)

		/* reset the field so user can write again*/

		todoTitle.value = ''
		tododesc.value = ''

		showData()
	})
	


}

/* create a function for delete todo*/

const deleteTodo = ()=>{

}

function editBox(title, desc, index){
	return tableField = `<td>
						<input value=${title} type="text" title" id="ed-title">
					</td>
					<td colspan="2">
						<input value=${desc} type="text" id="ed-desc">
					</td>
					<td><button id="cenceled" class="nochange" data-cencel=${index}>cancel</button>
					<button data-edited=${index} id="add" class="replace">Add</button>
					</td>`
}

tbBody.addEventListener('click', (e)=>{
	if(e.target.classList.contains('edit')){
		let getEditIndenti = Number(e.target.dataset.itemid)

		/* field exiting text */
		let exTitle = tbBody.children[getEditIndenti].children[1].innerText
		let exDesc = tbBody.children[getEditIndenti].children[2].innerText

		/* calling the function that is change the row element */
		tbBody.children[getEditIndenti].innerHTML = editBox(exTitle, exDesc, getEditIndenti)		

	}
	else if(e.target.classList.contains('nochange')){
		showData()
	}
	else if(e.target.classList.contains('replace')){
		/* retreiving the edite button in variable also store the it data index another variable*/
		let btnIndex = Number(e.target.dataset.edited)

		/* stor the field value */
		let afterCnageTitle = document.querySelectorAll('#ed-title')[btnIndex].value
		let afterCnageDesc = document.querySelectorAll('#ed-desc')[btnIndex].value
		/* featch the data */
		let feaData = JSON.parse(localStorage.getItem('data'))
		feaData[btnIndex] = {
			product: afterCnageTitle,
			desc: afterCnageDesc
		}
		
		/* set the new item */
		let objToStr = JSON.stringify(feaData)
		
		localStorage.setItem('data', objToStr)

		showData()
		
	}
	else if(e.target.classList.contains('delete')){
		let getIndenti = Number(e.target.dataset.itemid)

		/* featch the data and filter*/
		let feData = JSON.parse(localStorage.getItem('data'))
		console.log(typeof getIndenti)
		let del = feData.filter((item,index)=>{
			console.log(typeof index)
			return index !== getIndenti
		})

		/* set the item */
		let createArr = JSON.stringify(del)
		/* reset the data item */
		localStorage.removeItem('data')

		localStorage.setItem('data', createArr)
		
		showData()
	}
})



setData()
showData()








/*_________________________________________________________*/


const add = document.getElementById('component')
const btn = document.getElementById('adding')
const alt = document.querySelectorAll('#aId')

let i = 1

btn.addEventListener('click', ()=>{
	let ele = document.createElement('th')
	ele.innerHTML = `colling for the ${i} time`
	ele.value = i++
	ele.setAttribute('id', 'aId')

	add.appendChild(ele)
	clkevent()

})

function clkevent(){
	//console.log(document.querySelectorAll('#aId'))
	document.querySelectorAll('#aId').forEach(item=>{
		item.onclick = function(){
			 //console.log('hellow')
		}
	})
}

clkevent()


const element = document.getElementById('yourElementId');

let c = document.getElementById('chek')

c.addEventListener('keypress',()=>{

})






/*______________________________________*/

let p = document.getElementById('pare')

p.addEventListener('click', (e)=>{
	console.log(e.target.dataset.value)
})






