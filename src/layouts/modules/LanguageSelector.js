import { useState } from 'react';
import { MenuItem, Stack } from '@mui/material';
import MenuPopover from './MenuPopover';
import IconButtonAnimate from './IconButtonAnimate';
import Flag from 'react-world-flags';
import useLocales from '../../hooks/useLocales';

export default function LanguageSelector() {
	const { allLang, currentLang, onChangeLang } = useLocales();
	
	const [open, setOpen] = useState(null);
	
	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};
	
	const handleClose = () => {
		setOpen(null);
	};
	
	return (
		<>
			<IconButtonAnimate
				onClick={handleOpen}
				sx={{
					width: 40,
					height: 40,
					...(open && { bgcolor: 'action.selected' }),
				}}
			>
				<Flag code={currentLang.icon} width={24}/>
			</IconButtonAnimate>
			
			<MenuPopover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				sx={{
					mt: 1.5,
					ml: 0.75,
					width: 180,
					'& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
				}}
			>
				<Stack spacing={0.75}>
					{allLang.map((option) => (
						<MenuItem
							key={option.value}
							selected={option.value === currentLang.value}
							onClick={() => {
								onChangeLang(option.value);
								handleClose();
							}}
						>
							<Flag code={option.icon} width={24} className={'mr-2'}/>
							{option.label}
						</MenuItem>
					))}
				</Stack>
			</MenuPopover>
		</>
	);
}


// import * as React from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Flag from 'react-world-flags';
//
// const LanguageSelector = () => {
// 	const [language, setLanguage] = React.useState('');
//
// 	const handleChange = (event) => {
// 		setLanguage(event.target.value);
// 	};
//
// 	return (
// 		<div>
// 			<FormControl sx={{ m: 1, minWidth: 120 }} size={'small'} variant={'outlined'}>
// 				<Select
// 					value={language}
// 					onChange={handleChange}
// 				>
// 					<MenuItem value={'en'}><Flag code='US' width={21}/> EN</MenuItem>
// 					<MenuItem value={'tr'}><Flag code='TR' width={21}/> TR</MenuItem>
// 					<MenuItem value={'ru'}><Flag code='RU' width={21}/> RU</MenuItem>
// 				</Select>
// 			</FormControl>
// 		</div>
// 	);
// };
// export default LanguageSelector;
