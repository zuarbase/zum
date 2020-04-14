class ZUM {
	constructor ({base}) {
		this.base = base;
	}
	
	fetchUsers () {
		return fetch(this.base + '/users')
			.then(response => {
				return response.json();
			});
	}
}

export default ZUM;
