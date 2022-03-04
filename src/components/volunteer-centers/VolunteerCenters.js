import React, { useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useDispatch, useSelector } from 'react-redux';
import { getCenters } from '../../redux/actions/Centers';
import VolunteerCenterItem from './VolunteerCenterItem';

const VolunteerCenters = () => {
	const dispatch = useDispatch();
	const {centers} = useSelector(({centersReducer}) => centersReducer);
	
	useEffect(() => {
		dispatch(getCenters())
	}, [dispatch])
	return (
		<div>
			{centers.length > 0 &&
				centers.map( center => <VolunteerCenterItem center={center}/>)
			}
		</div>
	);
};

export default VolunteerCenters;