const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/background-stars.svg","assets/geology-earth.png","assets/geology-jupiter.png","assets/geology-mars.png","assets/geology-mercury.png","assets/geology-neptune.png","assets/geology-saturn.png","assets/geology-uranus.png","assets/geology-venus.png","assets/icon-chevron.svg","assets/planet-earth-internal.svg","assets/planet-earth.svg","assets/planet-jupiter-internal.svg","assets/planet-jupiter.svg","assets/planet-mars-internal.svg","assets/planet-mars.svg","assets/planet-mercury-internal.svg","assets/planet-mercury.svg","assets/planet-neptune-internal.svg","assets/planet-neptune.svg","assets/planet-saturn-internal.svg","assets/planet-saturn.svg","assets/planet-uranus-internal.svg","assets/planet-uranus.svg","assets/planet-venus-internal.svg","assets/planet-venus.svg","favicon-32x32.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-07f27d52.js","js":["start-07f27d52.js","chunks/vendor-6f66b2fa.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/planets\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/planets.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: (m) => ({ planet: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/_planet_.js'))
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ planet: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
});
