import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

class Logistics extends React.Component {
  constructor() {
    super();
    this.state = {
      activeKey: '1'
    };
  }
  handleSelect(activeKey) {
    this.setState({ activeKey });
  }
  render() {
    return (
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
        <Panel header="The Location" eventKey="1">
          <p>Meteor Camp is being held this year in midtown Manhattan in New York City on the extraterritorial world headquarters of the United Nations at 405 East 42nd Street. We’re an independent camp running as part of the larger two-week <a target="_blank" href="http://opencamps.org/">Open Camps</a> (July 8 — 17) offering. Check them out if you’re interested in learning more.</p>
          <p>New York City is served by three major international airports (Newark, JFK, and LaGuardia airports), public rail and roadway transit systems, and private car services. If you need more information about getting around, please let us know and we’ll endeavor to help out.</p>
        </Panel>
        <Panel header="Staying in NYC for Meteor Camp NYC 2016" eventKey="2">
          <p>Accommodations are numerous in NYC, with prices varying greatly. Discounts are available at many nearby options.</p>

          <p>We've worked to coordinate the discounted rates at nearby lodging that are outlined below.</p>

          <p>When booking please mention "Open Camps" as the discount code or conference, and try too book soon a rates/discounts are likely only available until Jun 16.</p>

          <p><a target="_blank" href="http://www.marriott.com/hotels/travel/nycea-new-york-marriott-east-side/">The New York Marriott East Side</a> (+1.212.755.4000) has offered a rate of $199 for double rooms , which can be booked with the code "Open Camps" or preferrably booked online at with <a target="_blank" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Open%20Camps%20Inc%20Room%20Block%5ENYCEA%60opcopcd%60199%60USD%60false%603%607/7/16%607/17/16%606/16/16&app=resvlink&stop_mobi=yes">this custom Marriott page</a></p>

          <p><a target="_blank" href="http://www.thepodhotel.com/pod-discount-hotel-locations/">The Pod 39 & 51 hotels</a> (+1.212.865.5700) has offered the following rates:</p>
          <ul>
            <li>Double Pod rooms at $145/night</li>
            <li>Queen Pod rooms at $155/night (one queen size bed, accommodates up to two people)</li>
            <li>Mini Bunk Bed Pod rooms at at $135 (two twin size level beds, accommodates two people)</li>
            <li>Bunk Bed Pod rooms at $155 (two twin size level beds, accommodates two people)</li>
          </ul>
          <p><a target="_blank" href="http://opencamps.org/Hampton%20Inn%20Manhattan/United%20Nations">The Hampton Inn Manhattan/United Nations</a></p>
          <p><a target="_blank" href="http://www.ymcanyc.org/association/guest-rooms/vanderbiltrooms">The Vanderbilt YMCA</a> (+1212.912.2506) has offered the following rates:</p>
          <ul>
            <li>$96/night for bunk room for 2</li>
            <li>$85/night for single room</li>
          </ul>
          <p><a target="_blank" href="http://hamptoninn3.hilton.com/en/hotels/new-york/hampton-inn-manhattan-united-nations-NYCUNHX/index.html">Hampton Inn Manhattan/United Nations</a> is also a good nearby option. We are still seeking a discounted rate form them and will update if/once that's available.</p>

          <p><a target="_blank" href="http://www.hiltonmanhattan.com/">Hilton Manhattan East</a> is also nearby and often has good rates. We're still seeking a discounted rate form them and will update if/once that's available.</p>

          <p><a target="_blank" href="https://www.millenniumhotels.com/en/new-york/one-un-new-york/">The ONE UN New York</a> is the closest hotel to the venue and located directly accross from the UN. We were unable to secure a discounted rate that ONE UN New York hotel where rates are currently start at $212/night.</p>

          <p>Excellent affordable options are also often available on Airbnb and Booking.com.</p>
        </Panel>
        <Panel header="Staying Nourished at Meteor Camp NYC" eventKey="3">
          Food and light snacks will be served to all on-site attendees at Meteor Camp NYC. This will generally include fruit and pastries in the morning and during session breaks, and a light lunch or dinner of sandwiches or salad along with snacks (fruit, cookies, chips, etc.). Beverages are available at all times, including water and coffee/tea, as well as juice and sodas during lunch/dinner/breaks. If we have contribution sprints, food will also be available for participants of these activities.
        </Panel>
      </PanelGroup>
    );
  }
}

export default Logistics;
