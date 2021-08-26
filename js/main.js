/*
 ** Idea By: Kirolos Mahfouz
 ** Designed By: Kirolos Mahfouz
 ** Frontend By: Kirolos Mahfouz
 */

// Start Global Variables

let sliderImgsCont = document.querySelector(".s-imgs"),
	galleryCont = document.querySelector(".gallery"),
	sliderImgs = sliderImgsCont.querySelectorAll("img"),
	galleryImgs = galleryCont.querySelectorAll("img"),
	sliderImgsLength = sliderImgs.length,
	galleryImgsLength = galleryImgs.length,
	guideCont = document.querySelector(".guide"),
	settingsCont = document.querySelector(".s-settings"),
	controlsCont = document.querySelector(".s-controls"),
	currentSlide = 0;

// End Global Variables
// Start Trigger Smooth Scroll

Scrollbar.init(guideCont);
Scrollbar.init(galleryCont);
Scrollbar.init(document.querySelector(".settings-cont"));

// End Trigger Smooth Scroll
// Start Local Storage [ Save Option ]

let saveLocalOptionLocal = localStorage.getItem("saveLocalOptionLocal");

if (saveLocalOptionLocal !== null) {
	if (saveLocalOptionLocal === "false") {
		activeStatus(".save-option .off");
	} else {
		activeStatus(".save-option .on");
	}
}

// End Local Storage [ Save Option ]
// Start Local Storage [ Full View Option ]

let fullViewOptonLocal = localStorage.getItem("fullViewOptonLocal");

if (fullViewOptonLocal !== null) {
	if (fullViewOptonLocal === "true") {
		controlsCont.classList.add("hide");
		activeStatus(".full-view-option .on");
	} else {
		activeStatus(".full-view-option .off");
		controlsCont.classList.remove("hide");
	}
}

// End Local Storage [ Full View Option ]
// Start Local Storage [ Help Option ]

let helpOptionLocal = localStorage.getItem("helpOptionLocal");

if (helpOptionLocal !== null) {
	if (helpOptionLocal === "true") {
		controlsCont.classList.add("help");
		activeStatus(".help-option .on");
	} else {
		controlsCont.classList.remove("help");
		activeStatus(".help-option .off");
	}
}

// End Local Storage [ Help Option ]
// Start Local Storage [ Random Images Time Option ]

let randomTimeOptionLocal = localStorage.getItem("randomTimeOptionLocal");
let randomTime = 5000;

if (randomTimeOptionLocal !== null) {
	randomTime = randomTimeOptionLocal;
	activeStatus(
		`.random-time-option .times div[data-time="${randomTimeOptionLocal}"]`
	);
}

// End Local Storage [ Random Images Time Option ]
// Start Local Storage [ Random Images Option ]

let randomOptionLocal = localStorage.getItem("randomOptionLocal");
let randomBtn = document.querySelector("#randomBtn i");
let randomImgs;

if (randomOptionLocal !== null) {
	if (randomOptionLocal === "true") {
		enableRandomImages();
	} else {
		disableRandomImages();
		if (randomOptionLocal !== "false") {
			currentSlide = galleryCont.querySelector(
				`img[src='${randomOptionLocal}']`
			).dataset.number;
			activeStatus(sliderImgs[currentSlide], 2);
			activeStatus(galleryImgs[currentSlide], 2);
		}
	}
}

// End Local Storage [ Random Images Option ]
// Start Local Storage [ Repeat Option ]

let repeatOptionLocal = localStorage.getItem("repeatOptionLocal");

if (repeatOptionLocal !== null) {
	if (repeatOptionLocal === "true") {
		sliderImgsCont.dataset.repeat = "yes";
		galleryCont.dataset.repeat = "yes";
		activeStatus(".repeat-option .on");
	} else {
		sliderImgsCont.dataset.repeat = "no";
		galleryCont.dataset.repeat = "no";
		activeStatus(".repeat-option .off");
	}
}

// End Local Storage [ Repeat Option ]
// Start Local Storage [ Background Color Option ]

let bgColorOptionLocal = localStorage.getItem("bgColorOptionLocal");
let bgColorCustomeIcon = document.querySelector(".bg-color-option .custome i");

if (bgColorOptionLocal !== null) {
	let element = document.querySelector(
		`.bg-color-option .colors div[data-color="${bgColorOptionLocal}"]`
	);
	if (element === null) {
		activeStatus(`.bg-color-option .colors .custome`);
		bgColorCustomeIcon.style.color = bgColorOptionLocal;
	} else {
		activeStatus(element, 2);
	}
	document.documentElement.style.setProperty("--bg-color", bgColorOptionLocal);
}

// End Local Storage [ Background Color Option ]
// Start Local Storage [ Forground Color Option ]

let fgColorOptionLocal = localStorage.getItem("fgColorOptionLocal");
let fgColorCustomeIcon = document.querySelector(".fg-color-option .custome i");

if (fgColorOptionLocal !== null) {
	let element = document.querySelector(
		`.fg-color-option .colors div[data-color="${fgColorOptionLocal}"]`
	);
	if (element === null) {
		activeStatus(`.fg-color-option .colors .custome`);
		fgColorCustomeIcon.style.color = fgColorOptionLocal;
	} else {
		activeStatus(element, 2);
	}
	document.documentElement.style.setProperty("--fg-color", fgColorOptionLocal);
}

// End Local Storage [ Forground Color Option ]
// Start Local Storage [ Main Color Option ]

let mainColorOptionLocal = localStorage.getItem("mainColorOptionLocal");
let mainColorCustomeIcon = document.querySelector(
	".main-color-option .custome i"
);

if (mainColorOptionLocal !== null) {
	let element = document.querySelector(
		`.main-color-option .colors div[data-color="${mainColorOptionLocal}"]`
	);
	if (element === null) {
		activeStatus(`.main-color-option .colors .custome`);
		mainColorCustomeIcon.style.color = mainColorOptionLocal;
	} else {
		activeStatus(element, 2);
	}
	document.documentElement.style.setProperty(
		"--main-color",
		mainColorOptionLocal
	);
}

// End Local Storage [ Main Color Option ]
// Start Local Storage [ Style Option ]

let styleOptionLocal = localStorage.getItem("styleOptionLocal");

if (styleOptionLocal !== null) {
	if (styleOptionLocal === "fade") {
		activeStatus(".style-option .fade");
		sliderImgsCont.classList.remove("slide");
		sliderImgsCont.classList.add("fade");
	} else {
		activeStatus(".style-option .slide");
		sliderImgsCont.classList.remove("fade");
		sliderImgsCont.classList.add("slide");
	}
}

// End Local Storage [ Style Option ]
// Start Controls [ Click ]

let guidClose = document.querySelector("#close");
guidClose.onclick = toggleGuide;

sliderImgs.forEach((ele) => {
	ele.onclick = toggleFullView;
});

let openSettingsBtn = document.querySelector("#settingsBtn");
openSettingsBtn.addEventListener("click", toggleSettings);

let closeSettingsBtn = document.querySelector("#closeSettingsBtn");
closeSettingsBtn.addEventListener("click", toggleSettings);

let resetBtn = document.getElementById("resetSettingsBtn");
resetBtn.addEventListener("click", resetSettings);

let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextSlide);

let prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", prevSlide);

randomBtn.addEventListener("click", toggleRandom);

let firstBtn = document.getElementById("firstBtn");
firstBtn.addEventListener("click", firstSlide);

let lastBtn = document.getElementById("lastBtn");
lastBtn.addEventListener("click", lastSlide);

let galleryBtn = document.getElementById("galleryBtn");
galleryBtn.addEventListener("click", toggleGallery);

// End Controls [ Click ]
// Start Controls [ Keyboard ]

window.addEventListener("keyup", (e) => {
	switch (e.keyCode) {
		case 72: // H
			toggleGuide();
			break;
		case 70: // F
			toggleFullView();
			break;
		case 83: // S
			toggleSettings();
			break;
		case 27: // Esc
			!guideCont.classList.contains("hide") ? toggleGuide() : null;
			settingsCont.classList.contains("show") ? toggleSettings() : null;
			galleryCont.classList.contains("show") ? toggleGallery() : null;
			break;
		case 82: // R
			resetSettings();
			break;
		case 39: // Right Arrow
			!settingsCont.classList.contains("show") ? nextSlide() : null;
			break;
		case 37: // Left Arrow
			!settingsCont.classList.contains("show") ? prevSlide() : null;
			break;
		case 38: // Up Arrow
			!settingsCont.classList.contains("show") ? firstSlide() : null;
			break;
		case 40: // Down Arrow
			!settingsCont.classList.contains("show") ? lastSlide() : null;
			break;
		case 13: // Enter
			!settingsCont.classList.contains("show") ? toggleRandom() : null;
			break;
		case 71: // G
			!settingsCont.classList.contains("show") ? toggleGallery() : null;
			break;
	}
});

// End Controls [ Keyboard ]
// Start Controls Functions

function toggleGuide() {
	guideCont.classList.toggle("hide");
	closeGallery();
	settingsCont.classList.contains("show") ? toggleSettings() : null;
}

function toggleFullView() {
	if (!galleryCont.classList.contains("show")) {
		if (controlsCont.classList.contains("hide")) {
			controlsCont.classList.remove("hide");
			activeStatus(".full-view-option .off");
			setLocalStorage("fullViewOptonLocal", false);
		} else {
			controlsCont.classList.add("hide");
			activeStatus(".full-view-option .on");
			setLocalStorage("fullViewOptonLocal", true);
		}
	}
}

function toggleSettings() {
	if (guideCont.classList.contains("hide")) {
		settingsCont.classList.toggle("show");
	}
	closeGallery();
}

function resetSettings() {
	localStorage.clear();
	window.location.reload();
}

function nextSlide() {
	setLocalStorage("randomOptionLocal", false);
	if (currentSlide !== sliderImgsLength - 1) {
		currentSlide++;
		checkerFunction();
		closeGallery();
		disableRandomImages();
	} else {
		if (sliderImgsCont.dataset.repeat === "yes") {
			currentSlide = 0;
			checkerFunction();
			closeGallery();
			disableRandomImages();
		}
	}
}

function prevSlide() {
	setLocalStorage("randomOptionLocal", false);
	if (currentSlide !== 0) {
		currentSlide--;
		checkerFunction();
		closeGallery();
		disableRandomImages();
	} else {
		if (sliderImgsCont.dataset.repeat === "yes") {
			currentSlide = sliderImgsLength - 1;
			checkerFunction();
			closeGallery();
			disableRandomImages();
		}
	}
}

function toggleRandom() {
	checkerFunction();
	if (!randomBtn.classList.contains("fa-play")) {
		disableRandomImages();
		setLocalStorage("randomOptionLocal", false);
	} else {
		enableRandomImages();
		setLocalStorage("randomOptionLocal", true);
	}
}

function firstSlide() {
	currentSlide = 0;
	checkerFunction();
	closeGallery();
	disableRandomImages();
	setLocalStorage("randomOptionLocal", false);
}

function lastSlide() {
	currentSlide = sliderImgsLength - 1;
	checkerFunction();
	closeGallery();
	disableRandomImages();
	setLocalStorage("randomOptionLocal", false);
}

function toggleGallery() {
	if (guideCont.classList.contains("hide")) {
		galleryCont.classList.toggle("show");
	}
}

document.addEventListener("click", () => {
	closeGallery();
});

stopPropagationFunc(controlsCont);
stopPropagationFunc(galleryCont);

// End Controls Functions
// Start Random Image

function randomImgsFunc() {
	randomImgs = setInterval(() => {
		if (!randomBtn.classList.contains("fa-play")) {
			let random = Math.floor(Math.random() * 10);
			currentSlide = random;
			checkerFunction();
		}
	}, randomTime);
}

if (
	randomOptionLocal === null ||
	randomOptionLocal === "true" ||
	randomOptionLocal === "false"
) {
	let random = Math.floor(Math.random() * 10);
	currentSlide = random;
	checkerFunction();
}

function enableRandomImages() {
	randomImgsFunc();
	randomBtn.classList.remove("fa-play");
	randomBtn.classList.add("fa-pause");
	activeStatus(".slider-options .random-option .on");
}

function disableRandomImages() {
	if (!randomBtn.classList.contains("fa-play")) {
		clearInterval(randomImgs);
		randomBtn.classList.add("fa-play");
		randomBtn.classList.remove("fa-pause");
		activeStatus(".slider-options .random-option .off");
	}
}

// End Random Image
// Start Gallery

galleryImgs.forEach((ele) => [
	ele.addEventListener("click", (e) => {
		currentSlide = e.target.dataset.number;
		checkerFunction();
		disableRandomImages();
		setLocalStorage("randomOptionLocal", e.target.getAttribute("src"));
	}),
]);

// End Gallery
// Start Active Class Status In Settings

document.querySelectorAll(".options .options-choice div").forEach((ele) => {
	ele.addEventListener("click", (e) => {
		activeStatus(e.target, 2);
	});
});

// End Active Class Status In Settings
// Start Slider Colors Options

let bgColorOption = settingsCont.querySelectorAll(
	".bg-color-option .colors div"
);
let fgColorOption = settingsCont.querySelectorAll(
	".fg-color-option .colors div"
);
let mainColorOption = settingsCont.querySelectorAll(
	".main-color-option .colors div"
);

let bgColorCustome = settingsCont.querySelectorAll(
	".bg-color-option .custome input"
);
let fgColorCustome = settingsCont.querySelectorAll(
	".fg-color-option .custome input"
);
let mainColorCustome = settingsCont.querySelectorAll(
	".main-color-option .custome input"
);

function changeColor(element, event, target, icon, localKey) {
	element.forEach((ele) => {
		ele.addEventListener(event, (e) => {
			if (event == "click") {
				icon.style.color = "#fff";
			} else {
				activeStatus(e.target.parentElement, 2);
				e.target.dataset.color = e.target.value;
				icon.style.color = e.target.dataset.color;
			}
			document.documentElement.style.setProperty(
				target,
				e.target.dataset.color
			);
			setLocalStorage(localKey, e.target.dataset.color);
		});
	});
}

changeColor(
	bgColorOption,
	"click",
	"--bg-color",
	bgColorCustomeIcon,
	"bgColorOptionLocal"
);
changeColor(
	fgColorOption,
	"click",
	"--fg-color",
	fgColorCustomeIcon,
	"fgColorOptionLocal"
);
changeColor(
	mainColorOption,
	"click",
	"--main-color",
	mainColorCustomeIcon,
	"mainColorOptionLocal"
);

changeColor(
	bgColorCustome,
	"input",
	"--bg-color",
	bgColorCustomeIcon,
	"bgColorOptionLocal"
);
changeColor(
	fgColorCustome,
	"input",
	"--fg-color",
	fgColorCustomeIcon,
	"fgColorOptionLocal"
);
changeColor(
	mainColorCustome,
	"input",
	"--main-color",
	mainColorCustomeIcon,
	"mainColorOptionLocal"
);

// End Slider Colors Options
// Start Slider Save Local Option

let saveLocalOption = settingsCont.querySelectorAll(".save-option .state div");

saveLocalOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("off")) {
			localStorage.setItem("saveLocalOptionLocal", false);
		} else {
			localStorage.setItem("saveLocalOptionLocal", true);
		}
	});
});

// End Slider Save Local Option
// Start Slider Help Option

let helpOption = settingsCont.querySelectorAll(".help-option .state div");

helpOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("off")) {
			controlsCont.classList.remove("help");
			setLocalStorage("helpOptionLocal", false);
		} else {
			controlsCont.classList.add("help");
			setLocalStorage("helpOptionLocal", true);
		}
	});
});

// End Slider Help Option
// Start Slider Random Images Option

let randomOption = settingsCont.querySelectorAll(".random-option .state div");

randomOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("on")) {
			enableRandomImages();
			setLocalStorage("randomOptionLocal", true);
		} else {
			disableRandomImages();
			setLocalStorage("randomOptionLocal", false);
		}
	});
});

// End Slider Random Images Option
// Start Slider Repeat Images Option

let repeatOption = settingsCont.querySelectorAll(".repeat-option .state div");

repeatOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("off")) {
			sliderImgsCont.dataset.repeat = "no";
			galleryCont.dataset.repeat = "no";
			checkerFunction();
			setLocalStorage("repeatOptionLocal", false);
		} else {
			sliderImgsCont.dataset.repeat = "yes";
			galleryCont.dataset.repeat = "yes";
			checkerFunction();
			setLocalStorage("repeatOptionLocal", true);
		}
	});
});

// End Slider Repeat Images Option
// Start Slider Full View Option

let fullViewOption = settingsCont.querySelectorAll(
	".full-view-option .state div"
);

fullViewOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("off")) {
			controlsCont.classList.remove("hide");
			setLocalStorage("fullViewOptonLocal", false);
		} else {
			controlsCont.classList.add("hide");
			setLocalStorage("fullViewOptonLocal", true);
		}
	});
});

// End Slider Full View Option
// Start Slider Style Option

let styleOption = settingsCont.querySelectorAll(".style-option .state div");

styleOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.classList.contains("fade")) {
			sliderImgsCont.classList.remove("slide");
			sliderImgsCont.classList.add("fade");
			setLocalStorage("styleOptionLocal", "fade");
		} else {
			sliderImgsCont.classList.remove("fade");
			sliderImgsCont.classList.add("slide");
			checkerFunction();
			setLocalStorage("styleOptionLocal", "slide");
		}
	});
});

// End Slider Style Option
// Start Slider Random Time Option

let randomTimeOption = settingsCont.querySelectorAll(
	".random-time-option .times"
);

randomTimeOption.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		randomTime = e.target.dataset.time;
		if (randomBtn.classList.contains("fa-pause")) {
			disableRandomImages();
			enableRandomImages();
		}
		setLocalStorage("randomTimeOptionLocal", e.target.dataset.time);
	});
});

// End Slider Random Time Option
// Start Functions

function checkerFunction() {
	activeStatus(sliderImgs[currentSlide], 2);
	activeStatus(galleryImgs[currentSlide], 2);

	if (sliderImgsCont.classList.contains("slide")) {
		sliderImgsCont.querySelector(".active").scrollIntoView({
			behavior: "smooth",
		});
	}

	if (sliderImgsCont.classList.contains("fade")) {
		galleryImgs[currentSlide].scrollIntoView({
			behavior: "smooth",
		});
	}

	if (sliderImgsCont.dataset.repeat === "no") {
		if (currentSlide == 0) {
			prevBtn.classList.add("disabled");
		} else if (prevBtn.classList.contains("disabled")) {
			prevBtn.classList.remove("disabled");
		}

		if (currentSlide == sliderImgsLength - 1) {
			nextBtn.classList.add("disabled");
		} else if (nextBtn.classList.contains("disabled")) {
			nextBtn.classList.remove("disabled");
		}
	} else {
		if (prevBtn.classList.contains("disabled")) {
			prevBtn.classList.remove("disabled");
		}

		if (nextBtn.classList.contains("disabled")) {
			nextBtn.classList.remove("disabled");
		}
	}

	if (currentSlide == 0) {
		firstBtn.classList.add("disabled");
	} else if (firstBtn.classList.contains("disabled")) {
		firstBtn.classList.remove("disabled");
	}

	if (currentSlide == sliderImgsLength - 1) {
		lastBtn.classList.add("disabled");
	} else if (lastBtn.classList.contains("disabled")) {
		lastBtn.classList.remove("disabled");
	}
}

checkerFunction();

function closeGallery() {
	if (galleryCont.classList.contains("show")) {
		galleryCont.classList.remove("show");
	}
}

function activeStatus(target, type = 1) {
	if (type === 1) {
		target = document.querySelector(target);
		target.parentElement.querySelectorAll(".active").forEach((ele) => {
			ele.classList.remove("active");
		});
		target.classList.add("active");
	} else {
		target.parentElement.querySelectorAll(".active").forEach((ele) => {
			ele.classList.remove("active");
		});
		target.classList.add("active");
	}
}

function stopPropagationFunc(target) {
	target.addEventListener("click", (e) => {
		e.stopPropagation();
	});
}

function setLocalStorage(key, value) {
	if (
		document
			.querySelector(".slider-options .save-option .on")
			.classList.contains("active")
	) {
		localStorage.setItem(key, value);
	}
}

// End Functions 681

/*
 ** Idea By: Kirolos Mahfouz
 ** Designed By: Kirolos Mahfouz
 ** Frontend By: Kirolos Mahfouz
 */
