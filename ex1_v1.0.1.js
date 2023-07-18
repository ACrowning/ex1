const products = [
	{id: 1, title: 'title1', description: 'description1'},
	{id: 2, title: 'title2', description: 'description2'},
	{id: 3, title: 'title3', description: 'description3'},
]

const maps = products.map(product => {	
	const prodUl = document.querySelector('#products')
	const newUl = document.createElement("ul")
	const newLiTitle = document.createElement("li")
		
	newUl.textContent = 
	`${product.id}`
	newLiTitle.textContent = 
	`${product.title}, ${product.description}`
			
	prodUl.appendChild(newUl)
	newUl.appendChild(newLiTitle)	
})

const button = document.querySelector('#addButton')
function init() {
	const count = products.length
	const add = {id: `${count + 1}`, title: 'title_', description: 'description_'}
	products.push(add)
	
	products.map(product => {
		
		const prodUl = document.querySelector('#products')
		const newUl = document.createElement("ul")
		const newLiTitle = document.createElement("li")
		
		newUl.textContent = 
		`${product.id}`
		newLiTitle.textContent = 
		`${product.title}, ${product.description}`
			
		prodUl.appendChild(newUl)
		newUl.appendChild(newLiTitle)	
	})
}

button.addEventListener("click", init)
