import React from 'react';

const AppContext = React.createContext({
	locale: {
		locale: 'en',
		label: 'English',
		icon: 'us',
	},
	setLocale: () => {},
});

export default AppContext;
