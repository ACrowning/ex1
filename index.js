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

function add(items, container, tit, des) {
	if (tit.value.length === 0) {
		return
	}
	else if (des.value.length === 0) {
		des.value = '-'
	}

	const nextCount = items.length + 1
	const addNewObject = {
		id: `${nextCount}`,
		title: `${tit.value}`,
		description: `${des.value}`
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

function init() {
	button.addEventListener("click", function () {
		add(products, prodUl, inputTitle, inputDescription) 
	})
	createUl(products, prodUl)
}

init()
