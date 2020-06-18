export const l = (name, props, ...rest) => {
	const children = [];
	let el;

	if (name === "svg") {
		el = document.createElementNS("http://www.w3.org/2000/svg", name);
	} else {
		el = document.createElement(name);
	}

	if (typeof props === "object") {
		for (const prop in props) {
			el.setAttribute(prop, props[prop]);
		}
	} else if (props) {
		children[0] = props;
	}

	children.push(...rest);

	children.forEach(node => {
		const fn = typeof node === "string" ? "createTextNode" : "createElement";
		el.appendChild(node instanceof Node ? node : document[fn](node));
	});

	return el;
};
