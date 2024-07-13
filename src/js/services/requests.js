const postData = async (url, data) => {
	let res = await fetch(url, {
		method: 'Post',
		body: data
	});

	return await res.text();
};

const getResource = async url => {
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

export { getResource, postData };
