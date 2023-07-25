const products = [
	{id: 1, title: 'title1', description: 'description1'},
	{id: 2, title: 'title2', description: 'description2'},
	{id: 3, title: 'title3', description: 'description3'},
]
const button = document.querySelector('#addButton')
const prodUl = document.querySelector('#products')
const inputTitle = document.querySelector('#title')
const inputDescription = document.querySelector('#description')

function createUl(items, container) {
	items.forEach(product => {
		const newUl = document.createElement("ul")
		const newLiTitle = document.createElement("li")
			
		newUl.textContent = 
		`${product.id}`
		newLiTitle.textContent = 
		`${product.title}, ${product.description}`
				
		container.appendChild(newUl)
		newUl.appendChild(newLiTitle)	
	})
}

function add(items, container) {

	const nextCount = items.length + 1
	const addNewObject = {
		id: `${nextCount}`,
		title: `${inputTitle.value}`,
		description: `${inputDescription.value}`
	}

	items.push(addNewObject)
		
	const newUl = document.createElement("ul")
	const newLiTitle = document.createElement("li")
	
	newUl.textContent = 
	`${addNewObject.id}`
	newLiTitle.textContent = 
	`${addNewObject.title}, ${addNewObject.description}`
			
	container.appendChild(newUl)
	newUl.appendChild(newLiTitle)
}

function onAdd() {
	if (inputTitle.value.length === 0) {
		return alert('Void title! Enter the title, please')
	}
	else if (inputDescription.value.length === 0) {
		inputDescription.value = '-'
	}

	add(products, prodUl)

	inputTitle.value = ''
	inputDescription.value = '' 
}

function enterBtn(event) {
	if (event.key === 'Enter') {
		button.click()
	}}

function init() {
	button.addEventListener("click", function () {onAdd()
	})
	inputTitle.addEventListener('keydown', enterBtn)
	inputDescription.addEventListener('keydown', enterBtn)
	createUl(products, prodUl)
}

init()