class zAuth {

	fetchUsers () {
		let promise = new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						name: 'Dylan Spurgin',
						email: 'dylan@dylanspurgin.com'
					},
					{
						id: 2,
						name: 'Matt Laue',
						email: 'matt@zuar.com'
					},
					{
						id: 3,
						name: 'Justin Freels',
						email: 'j.for.reelz@zuar.com'
					},
					{
						id: 4,
						name: 'Andy Klier',
						email: 'pander@bloodyflapper.com'
					}
				]);
			}, 2000);
		});
		return promise;
	}
}

export default zAuth;
