import('./user-list/user-list.element.js');
import('./user/user.element.js');
import ZAuth from './z-auth/z-auth.js';

(function () {

	const zAuth = new ZAuth();
	var users = [];
	var zUserList = document.querySelector('z-user-list');
	var zUser = document.querySelector('z-user');

	zAuth.fetchUsers().then(usrs => {
		users = usrs;
		// Wait for z-user-list to be upgraded.
		customElements.whenDefined('z-user-list').then(() => {
			users[0].active = true;
			zUserList.users = users;
			zUserList.onUserClick = onUserClick;
		});
		customElements.whenDefined('z-user-list').then(() => {
			zUser.user = users[0];
		});
	});

	const onUserClick = (user) => {
		users.forEach(u => {
			u.active = u.id === user.id;
		});
		zUserList.users = users;
		zUser.user = user;
	}

})();
