let page = 1;
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');

function getData() {
	fetch(`${BASE_URL}?_page=${page}&_limit=5`)
		.then((response) => response.json())
		.then((results) => drawResults(results));
}

function drawResults(results) {
	const html = results
		.map(
			(result) =>
				`
        <div class="result">
        <h3>${result.title}</h3>
        <p>${result.body}</p>
        </div>
        `
		)
		.join('');
	page++;
	container.innerHTML += html;
}

document.addEventListener('DOMContentLoaded', getData);
window.addEventListener('scroll', () => {
	if (
		document.documentElement.scrollTop +
			document.documentElement.clientHeight >=
		document.documentElement.scrollHeight
	) {
		loader.classList.remove('hidden');
		setTimeout(() => {
			loader.classList.add('hidden');
			getData();
		}, 2000);
	}
});