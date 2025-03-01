const menus = [
  {
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    label: "Products",
    to: "/products",
    children: [
      {
        label: "List",
        to: "/products/list",
      },
      {
        label: "Add",
        to: "/products/add",
        children: [
          {
            label: "Category A",
            to: "/products/add/category-a",
          },
          {
            label: "Category B",
            to: "/products/add/category-b",
            children: [
              {
                label: "Subcategory 1",
                to: "/products/add/category-b/subcategory-1",
              },
              {
                label: "Subcategory 2",
                to: "/products/add/category-b/subcategory-2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Customers",
    to: "/customers",
    children: [
      {
        label: "List",
        to: "/customers/list",
      },
      {
        label: "Add",
        to: "/customers/add",
      },
    ],
  },
  {
    label: "Orders",
    to: "/orders",
    children: [
      {
        label: "List",
        to: "/orders/list",
      },
      {
        label: "Details",
        to: "/orders/details/:orderId",
        children: [
          {
            label: "Items",
            to: "/orders/details/:orderId/items",
          },
          {
            label: "Shipping",
            to: "/orders/details/:orderId/shipping",
          },
        ],
      },
    ],
  },
  {
    label: "Reports",
    to: "/reports",
    children: [
      {
        label: "Sales",
        to: "/reports/sales",
      },
      {
        label: "Customers",
        to: "/reports/customers",
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
  },
];

export default menus;
