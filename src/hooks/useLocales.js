import { useRouter } from 'next/router';

const LANGS = [
	{
		label: 'English',
		value: 'en',
		icon: 'US',
	},
	{
		label: 'Turkey',
		value: 'tr',
		icon: 'TR',
	},
	{
		label: 'Russian',
		value: 'ru',
		icon: 'RU',
	},
];

export default function useLocales() {
	const router = useRouter();
	const currentLang = LANGS.find((_lang) => _lang.value === router.locale) || LANGS[0];
	
	const handleChangeLanguage = (newlang) => {
		console.log(newlang)
	};
	
	return {
		onChangeLang: handleChangeLanguage,
		currentLang,
		allLang: LANGS,
	};
}
