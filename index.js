const API_URL = "https://api.github.com/users/MillenaG30/repos"

fetch(API_URL)
	.then(response => response.json())
	.then(response => {
		const reposList = document.querySelector("#repos-list")
		response.forEach(repo => {
			const { 
				name, 
				html_url ,
				description,
				language
			} = repo
			const lowercaseLang = language ? language.toLowerCase() : ""

			const anchor = document.createElement('a')
			anchor.className = "repo-container"
			anchor.href = html_url

			const img = document.createElement('img')
			img.alt = " "
			img.src = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${lowercaseLang}/${lowercaseLang}-original.svg`

			const div = document.createElement('div')
			div.className = "total-size"

			anchor.appendChild(img)
			anchor.appendChild(div)

			const strong = document.createElement("strong")
			strong.textContent = name

			const p = document.createElement("p")
			p.textContent = description

			div.appendChild(strong)
			div.appendChild(p)

			reposList.appendChild(anchor)
		})
	})

document.querySelectorAll(".content-changer").forEach(button => {
	button.addEventListener('click', () => {
		const contentId = button.children[0].value
		const content = document.querySelector(`#${contentId}`)
		
		document.querySelector(".content-enable").className = "content-disable"
		content.parentElement.className = "content-enable total-size"
	})
})
