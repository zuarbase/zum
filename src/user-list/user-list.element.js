class zUserList extends HTMLElement {
	constructor() {
      super();
      this._users = [];
      this._userClickCallback;
      this._shadowRoot = this.attachShadow({mode: 'open'});
      this.render();
    }

    render () {
    	let usersTemplates = '';
    	this._users.forEach(user => {
    		let activeClass = user.active ? 'active' : '';
    		usersTemplates += `<li class="user ${activeClass}" data-user-id="${user.id}">${user.name}</li>`;
    	});

     	let template = document.createElement('template');
    	template.innerHTML = `
	    	<section>
				<style>
					h2 {
						padding-left: 4px;
						font-family: 'Rubik', sans-serif;
					}
					ul {
						list-style: none none;
						padding: 0;
						margin: 0
					}
					li {
						margin: 0;
						padding: 6px 4px;
						cursor: pointer;

					}
					li:hover {
						background-color: #2274A5;
						color: #E9F1F7;
					}
					.active {
						font-weight: bolder;
						color: #2274A5;
					}
					.active::before {
						content: '> ';
					}
				</style>
				<h2>Users</h2>
				<ul>
					${usersTemplates}
				</ul>
			</section>`.trim();

		if (!this._shadowRoot.hasChildNodes()) {
      		this._shadowRoot.appendChild(template.content.firstChild.cloneNode(true));
  		} else {
  			this._shadowRoot.firstChild.replaceWith(template.content.firstChild.cloneNode(true));
  		}

  		this._shadowRoot.querySelectorAll('.user').forEach(userEl => {
  			userEl.onclick = (event) => {
  				event.preventDefault();
  				this.parentElement.classList.add('active');
  				let clickedUserId = Number.parseInt(userEl.dataset.userId, 10);
  				let user = this._users.find(user => user.id === clickedUserId);
  				if (typeof this._userClickCallback === 'function') {
		    		this._userClickCallback.call(this, user);
		    	}
			};
		});

    }

    // currently inlined
    onUserClick (event) {
    	if (typeof this._userClickCallback === 'function') {
    		this._userClickCallback.prototype.call(this, this._users.find(user => user.id === userId));
    	}
    }

    set users (user) {
    	console.debug('Setting users', user);
    	this._users = user;
    	this.render();
	}
	  
	get users () {
		return this._users;
	}

	set onUserClick (userClickCallback) {
    	this._userClickCallback = userClickCallback;
	}

}
window.customElements.define('z-user-list', zUserList);
