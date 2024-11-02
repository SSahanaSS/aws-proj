import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GroupExample from './Features';
import ChequeProcessingWorkflow from './Howwork';

function ControlledTabsExample() {
  const [key, setKey] = useState('Features');

  return (
    <>
      <Tabs
        defaultActiveKey="Features"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="justify-tab-example"
        className="custom-tabs mb-3"
        justify
      >
        <Tab eventKey="Features" title="Features">
          <GroupExample />
        </Tab>
        <Tab eventKey="Howwork" title="How It Works">
          <ChequeProcessingWorkflow />
        </Tab>
      </Tabs>

      <style jsx="true">{`
        .custom-tabs .nav-tabs {
          background-color: ; /* Set background color for the tabs */
          border-radius: 5px; /* Optional: Add border radius for rounded corners */
        }

        .custom-tabs .nav-link {
          color: #17153B; /* Text color for tab titles */
          font-weight: bold;
        }

        .custom-tabs .nav-link.active {
          color: #17153B; /* Text color for active tab */
          background-color: #f39c12; /* Optional: Slightly different background for active tab */
          border: none;
        }

        .custom-tabs .nav-link:hover {
          color: #17153B; /* Text color on hover */
        }
      `}</style>
    </>
  );
}

export default ControlledTabsExample;
