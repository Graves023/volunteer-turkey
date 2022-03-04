import React from 'react';
import Link from 'next/dist/client/link';

const VolunteerCenterItem = ({center}) => {
	return (
		<div
			className="single-event-item mb-30 wow fadeInUp"
			data-wow-delay="0s"
			key={center.id}
		>
			{center.photo.length > 0 && <div className="event-thumb">
				<img src={process.env.ADMIN_URL + center.photo[0].url} alt="Image"/>
			</div>}
			<div className="event-content">
				<ul className="meta">
					<li>
						<Link href="/project-1">
							<a className="category">{center.city}</a>
						</Link>
					</li>
					<li>
						<a href="#" className="date">
							<i className="fal fa-map-marker-alt" />
							{center.address}
						</a>
					</li>
				</ul>
				<h4 className="event-title">
					<Link href="/project-details">
						{center.title}
					</Link>
				</h4>
				<p>
					{center.description}
				</p>
			</div>
			<div className="event-button">
				{center.contacts.length > 0 &&
					center.contacts.map( (item, index) => <div key={index}><b>{item.type}</b>: {item.value}</div>)
				}
				{/*<Link href="/project-details">*/}
				{/*	<a className="main-btn bordered-btn">*/}
				{/*		Contact Center <i className="far fa-arrow-right" />*/}
				{/*	</a>*/}
				{/*</Link>*/}
			</div>
		</div>
	);
};

export default VolunteerCenterItem;