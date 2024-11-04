const parentFontSize = window.getComputedStyle(
	document.querySelector("h1").parentElement
  ).fontSize;
  console.log(parentFontSize);
