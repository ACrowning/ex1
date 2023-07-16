const products = [
	{id: 1, title: 'title1', description: 'description1'},
	{id: 2, title: 'title2', description: 'description2'},
	{id: 3, title: 'title3', description: 'description3'}
]

const indexId1 = products.indexOf(products.id)+1
const prId1 = products[indexId1]

const indexId2 = products.indexOf(products.id)+2
const prId2 = products[indexId2]

const indexId3 = products.indexOf(products.id)+3
const prId3 = products[indexId3]

const keys = Object.keys(prId1)
keys.forEach(key => {
  const toProduct = document.querySelector('#products')
  document.body.onload = addElement()

  function addElement() {

     const newUl = document.createElement("ul")
        newUl.innerHTML = `<li>${key}</li>
				<ul id="list">
				<li>${prId1[key]}</li>
				<li>${prId2[key]}</li>
				<li>${prId3[key]}</li>
			</ul>`

    prod_Ul = document.getElementById("products_list")
    document.body.querySelector('#products').insertBefore(newUl, prod_Ul)
  }
 })