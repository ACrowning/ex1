const products = [
	{id: 1, title: 'title1', description: 'description1'},
	{id: 2, title: 'title2', description: 'description2'},
	{id: 3, title: 'title3', description: 'description3'},
]
const button = document.querySelector('#addButton')

function createUl() {products.forEach(product => {
	const prodUl = document.querySelector('#products')
	const newUl = document.createElement("ul")
	const newLiTitle = document.createElement("li")
		
	newUl.textContent = 
	`${product.id}`
	newLiTitle.textContent = 
	`${product.title}, ${product.description}`
			
	prodUl.appendChild(newUl)
	newUl.appendChild(newLiTitle)	
})}

let nextCount = 4

function add() {
	const addNewObject = {id: `${nextCount++}`, title: 'title_', description: 'description_'}
	const prodUl = document.querySelector('#products')
	const newUl = document.createElement("ul")
	const newLiTitle = document.createElement("li")
	
	newUl.textContent = 
	`${addNewObject.id}`
	newLiTitle.textContent = 
	`${addNewObject.title}, ${addNewObject.description}`
			
	prodUl.appendChild(newUl)
	newUl.appendChild(newLiTitle)	
}

createUl(button.addEventListener("click", add))