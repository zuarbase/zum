class zUser extends HTMLElement {
    constructor() {
      super();
      this._user;
      this._shadowRoot = this.attachShadow({mode: 'open'});
      this.render();
    }

    render () {
        if (!this._user) {
            return;
        }
        let template = document.createElement('template');
        template.innerHTML = `
            <section>
                <style>
                    .name {
                        font-family: 'Rubik', sans-serif;
                        font-weight: bold
                    }
                    dl {
                        border: 2px solid #131B23;
                        border-radius: 3px;
                        padding: 0.5em;
                    }
                    dt {
                        float: left;
                        clear: left;
                        width: 100px;
                        text-align: right;
                        font-weight: bold;
                        color: #131B23;
                    }
                    dt::after {
                        content: ":";
                    }
                    dd {
                        margin: 0 0 0 110px;
                        padding: 0 0 0.5em 0;
                    }
                </style>
                <h1 class="name">${this._user.name}</h1>
                <dl>
                    <dt>ID</dt>
                    <dd>${this._user.id}</dd>
                    <dt>Email</dt>
                    <dd>${this._user.email}</dd>
                </dl>
            </section>`.trim();

        if (!this._shadowRoot.hasChildNodes()) {
            this._shadowRoot.appendChild(template.content.firstChild.cloneNode(true));
        } else {
            this._shadowRoot.firstChild.replaceWith(template.content.firstChild.cloneNode(true));
        }
    }

    set user (user) {
        this._user = user;
        this.render();
    }
      
    get user () {
        return this._user;
    }

}
window.customElements.define('z-user', zUser);
