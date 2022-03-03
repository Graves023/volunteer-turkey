import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import VolunteerCenters from '../src/components/volunteer-centers/VolunteerCenters';
import IntlMessages from '../src/utils/IntlMessages';

const Events = () => {
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

export default Events;
