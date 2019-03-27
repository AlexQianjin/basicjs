class App {
    static modules = [];

    constructor(options) {
        this.options = options;
        this.init();
    }

    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.initModules();
            this.options.onReady(this);
        })
    }

    static use(modules) {
        Array.isArray(modules) ? modules.map(item => App.use(item)) : App.modules.push(modules);
    }

    initModules() {
        App.modules.map(module => module.init && typeof module.init === 'function' && module.init(this));
    }
}

// modules/Router.js
import Router from 'path/to/Router';
export default {
    init(app) {
        app.router = new Router(app.options.router);
        app.router.to('home');
    }
}

// modules/Track.js
import Track from 'path/to/Track';
export default {
    init(app) {
        app.track = new Track(app.options.track);
        app.track.tracking();
    }
}

// index.js
import App from 'path/to/App';
import Router from './modules/Router';
import Track from './modules/Track';

App.use([Router, Track]);

new App({
    router: {
        mode: 'history'
    },
    track: {
        // ...
    },
    onReady(app) {
        // app.option ...
    }
});

// 
// For another module
//

// modules/Share.js
import Share from 'path/to/Share';
export default {
    init(app) {
        app.share = new Share();
        app.setShare = data => app.share.setShare(data);
    }
};

// index.js
App.use(Share);
new App({
    // ...
    onReady(app) {
        app.setShare({
            title: 'Hello IoC.',
            description: 'description here...'
            // some other data here
        })
    }
});
