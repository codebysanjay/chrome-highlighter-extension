const mouseContainer = document.createElement("div");
const mousePointer = document.createElement("div");
mouseContainer.setAttribute("class", "mouse-higlighter-extension-container");
mousePointer.setAttribute("class", "mouse-higlighter-extension-pointer");

mouseContainer.appendChild(mousePointer);
document.body.appendChild(mouseContainer);

window.addEventListener("mousemove", (event) => {
	let x = event.clientX;
	let y = event.clientY;

	mousePointer.style.left = x + "px";
	mousePointer.style.top = y + "px";
});

window.addEventListener("keydown", (event) => {
	const mousePointerHeight = mousePointer.clientHeight;
	const mousePointerWidth = mousePointer.clientWidth;

	if (event.code === "KeyC" && event.shiftKey) {
		mouseContainer.style.display = "none";
	} else if (event.code === "KeyV" && event.shiftKey) {
		mouseContainer.style.display = "block";
	} else if (event.code === "KeyZ" && event.shiftKey) {
		mousePointer.style.width = mousePointerWidth - 5 + "px";
		mousePointer.style.height = mousePointerHeight - 5 + "px";
	} else if (event.code === "KeyX" && event.shiftKey) {
		mousePointer.style.width = mousePointerWidth + 5 + "px";
		mousePointer.style.height = mousePointerHeight + 5 + "px";
	}
});
