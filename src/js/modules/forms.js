import {postData} from "../services/requests.js";

const forms = () => {
	const form = document.querySelectorAll("form"),
			input = document.querySelectorAll("input"),
			uploads = document.querySelectorAll("[name='upload']");

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро с вами свяжутся',
		failure: "Woops! Что то пошло не так !",
		spinner: "./img/icons/loading.gif",
		fail:"./img/icons/fail.png",
		ok: "./img/icons/ok.png",
	};

	const puth = {
		designer: "./assets/server.php",
		question: "./assets/question.php",
	};

	const clearInputs = () => {
		input.forEach(item => {
			item.value = "";
		});
		uploads.forEach(item => item.previousElementSibling.textContent = "Файл не выбран !");
	};

	uploads.forEach(item => {
		item.addEventListener("input", function(e) {
			let fileNameArr = item.files[0].name.split(".");
			let dotts;

			fileNameArr[0].length > 7 ? dotts = "..." : dotts = ".";
			let name = fileNameArr[0].slice(0, 7) + dotts + fileNameArr[1];
			item.previousElementSibling.textContent = name;
		});
	});

	form.forEach(item => {
		item.addEventListener("submit", function(e) {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			statusMessage.style.textAlign = "center";
			item.parentNode.appendChild(statusMessage);

			item.classList.add("animated", "fadeOutUp");
			setTimeout(() => {
				item.style.display = "none";
			}, 200);

			let statusImg = document.createElement("img");
			statusImg.style.cssText = `width:100px; height:100px; margin-top: -20px`;
			statusImg.setAttribute("src", message.spinner);
			statusImg.classList.add("animated", "fadeInUp");
			statusMessage.append(statusImg);

			let statusText = document.createElement("div");
			statusText.textContent = message.loading;
			statusText.classList.add("animated", "fadeInUp");
			statusMessage.append(statusText);

			let formData = new FormData(item);

			let api;
			item.closest(".popup-design") || item.classList.contains("form-calc") ? api = puth.designer : api = puth.question;

			postData(api, formData)
				.then(text => {
					console.log(text)
					
					statusImg.setAttribute("src", message.ok);
					statusText.textContent = message.success;
				})
				.catch(err => {
					statusImg.setAttribute("src", message.fail);
					statusText.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() =>{
						statusMessage.remove();
						item.style.display = "block";
						item.classList.remove("fadeOutUp");
						item.classList.add("fadeInUp");
					}, 5000);
				});
			});
		});
};

export default forms;