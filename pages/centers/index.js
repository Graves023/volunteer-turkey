import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/components/layouts/Layout";
import VolunteerCenters from '../../src/components/volunteer-centers/VolunteerCenters';

const Centers = () => {
	return (
		<Layout>
			<PageBanner pageName="Volunteer Centers" />
			<section className="event-area section-gap-extra-bottom">
				<div className="container">
					<div className="event-items">
						<VolunteerCenters />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Centers;
