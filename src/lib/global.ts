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
		pretty: '(661) 645-9724',
		tel: '+1-661-645-9724',
		intl: 1,
		area: 661,
		prefix: 645,
		line: 9724
	},
	email: 'jared@cblining.com',
	routes: [{ id: 'CIPP Pipe Lining', url: '/services/cipp-pipe-lining' },
	{ id: 'Manhole Rehabilitation', url: '/services/manhole-rehabilitation' }]
};
