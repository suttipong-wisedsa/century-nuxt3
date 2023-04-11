const api = [
  {
    title: "Get Delivery Quotes",
    detail: "Get Delivery Quotes before you place an order",
    format: "POST /grab-express/v1/deliveries/quotes",
    endpoint: "Yes",
    endpointPartner: "Yes",
    defined: "GrabExpress",
    id: "api1",
  },
  {
    title: "Create Delivery Request",
    detail: "Once you get the quotes, use this API to place a booking request",
    format: "POST /grab-express/v1/deliveries",
    endpoint: "Yes",
    endpointPartner: "",
    defined: "GrabExpress",
    id: "api2",
  },
];

export default api;
