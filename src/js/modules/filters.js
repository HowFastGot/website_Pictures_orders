const filters = () => {
	const menu = document.querySelector(".portfolio-menu"),
			items = menu.querySelectorAll("li"),
			wrapper = document.querySelector(".portfolio-wrapper"),
			markAll = wrapper.querySelectorAll(".all"),
			no = document.querySelector(".portfolio-no");

	function typeFilter(markType) {

		wrapper.style.justifyContent = "center";

		markAll.forEach(mark => {
			mark.style.display = "none";
			mark.classList.remove("animated", "fadeIn");
		});

		no.style.display = "none";
		no.classList.add("animated", "fadeIn");

		if (markType.length) {
			markType.forEach(mark => {
				mark.style.display = "block";
				mark.classList.add("animated", "fadeIn");
			});
		} else {
			no.style.display = "block";
			no.classList.add("animated", "fadeIn");
		}
	}

	function bindClassSelector(classSelector) {
		let marks = wrapper.querySelectorAll(`.${classSelector}`);
		
		typeFilter(marks)
		
	}


	menu.addEventListener("click", function(e) {
		let target = e.target;
		items.forEach(item => {
			item.classList.remove("active");
		});

		if (target.closest("li")) {
			bindClassSelector(target.className);
			target.classList.add("active");
		}
	});
};

export default filters;