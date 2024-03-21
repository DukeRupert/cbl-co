export interface Route {
	id: string;
	url: string;
}

export interface Phone {
	pretty: string;
	tel: string;
	intl: number;
	area: number;
	prefix: number;
	line: number;
}

export interface Site_Data {
	name: string;
	url: string;
	phone: Phone;
	email: string;
	routes: Route[];
}

export const SITE_DATA: Site_Data = {
	name: "Christian Brother's Lining Co.",
	url: 'https://cblining.com/',
	phone: {
		pretty: '(661) 816-4291',
		tel: '+16618164291',
		intl: 1,
		area: 661,
		prefix: 816,
		line: 4291
	},
	email: 'tom@cblining.com',
	routes: [{ id: 'what is CIPP?', url: '/what-is-cipp' }]
};
