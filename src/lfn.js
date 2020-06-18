export const l = (name, props, ...rest) => {
	const children = [];
	const nametype = typeof name;
	const contains_attributes = typeof props === "object" && !(props instanceof Node);
	let el;
	let template = false;

	if (nametype !== "string") {
		el = document.createDocumentFragment();
		template = true;
		if (name instanceof Node) {
			children.push(name);
		}
	} else	if (name === "svg") {
		el = document.createElementNS("http://www.w3.org/2000/svg", name);
	} else {
		el = document.createElement(name);
	}

	if (props) {
		if (contains_attributes && !template) {
			Object.keys(props).forEach(prop => el.setAttribute(prop, props[prop]));
		} else {
			children.push(props);
		}
	}

	children.push(...rest);

	children.forEach(child => {
		const fn = typeof child === "string" ? "createTextNode" : "createElement";
		el.appendChild(child instanceof Node ? child : document[fn](child));
	});

	return el;
};
