import React from 'react';
import Link from 'next/dist/client/link';

const VolunteerCenters = () => {
	return (
		<div
			className="single-event-item mb-30 wow fadeInUp"
			data-wow-delay="0s"
		>
			<div className="event-thumb">
				<img src="assets/img/event/01.jpg" alt="Image" />
			</div>
			<div className="event-content">
				<ul className="meta">
					<li>
						<Link href="/project-1">
							<a className="category">Music Party</a>
						</Link>
					</li>
					<li>
						<a href="#" className="date">
							<i className="fal fa-map-marker-alt" />
							25 Main Street ,New York
						</a>
					</li>
				</ul>
				<h4 className="event-title">
					<Link href="/project-details">
						Combining UX Design &amp; Psychology
					</Link>
				</h4>
				<p>
					Sed ut perspiciatis unde omnis iste natus error voluptatem
					accus laudantium totam rem aperiam eaque
				</p>
			</div>
			<div className="event-button">
				<Link href="/project-details">
					<a className="main-btn bordered-btn">
						Join Event <i className="far fa-arrow-right" />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default VolunteerCenters;