// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/branches',
        'api/sales-amount',
        {
          type: 'category',
          label: 'Data Pool',
          items: [
            'datapool/get-customers',
            'datapool/get-purchase-frequency',
            'datapool/customer-revenue',
            'datapool/customer-aov',
            'datapool/order-type-breakdown',
            'datapool/get-volume-metrics',
            'datapool/service-charges',
            'datapool/customer-lifetime-value',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
