export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.16833be6.js","imports":["_app/immutable/entry/start.16833be6.js","_app/immutable/chunks/index.c5e23121.js","_app/immutable/chunks/singletons.6d46b78a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ceed5575.js","imports":["_app/immutable/entry/app.ceed5575.js","_app/immutable/chunks/index.c5e23121.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home/settings",
				pattern: /^\/home\/settings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
