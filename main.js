$("#grid").kendoGrid({
  toolbar: ["excel"],
  excel: {
    fileName: "Kendo UI Grid Export.xlsx",
  },
  columns: [
    { field: "Name" },
    { field: "jul2019" },
    { field: "jun2019" },
    { field: "aug2019" },
    { field: "sep2019" },
    { field: "oct2019" },
    { field: "nov2019" },
    { field: "dec2019" },
    { field: "Jan2020" },
    { field: "Feb2020" },
    { field: "Mar2020" },
    { field: "Apr2020" },
    { field: "May2020" },
    { field: "Jun2020" },
    { field: "Jul2020" },
    { field: "Aug2020" },
  ],
  dataSource: [
    {
      Name: "ObservedDemand",
      jul2019: "0.5874",
      jun2019: "0.491",
      aug2019: "0.5775",
      sep2019: "0.654",
      oct2019: "0.10123",
      nov2019: ".976",
      dec2019: "0.6544",
      Jan2020: "0.2544",
      Feb2020: "0.5444",
      Mar2020: "0.643",
      Apr2020: "0.221",
      May2020: "0.74844",
      Jun2020: "0.5444",
      Jul2020: "0.7885",
      Aug2020: "0.14256",
    },
    {
      Name: "Average Sales Potencial",
      jul2019: "0.5874",
      jun2019: "0.491",
      aug2019: "0.5775",
      sep2019: "0.675",
      oct2019: "0.213",
      nov2019: "0.645",
      dec2019: "0.6544",
      Jan2020: "0.2544",
      Feb2020: "0.5444",
      Mar2020: "0.643",
      Apr2020: "0.221",
      May2020: "0.74844",
      Jun2020: "0.5444",
      Jul2020: "0.7885",
      Aug2020: "0.14256",
    },
    {
      Name: "Effective Demand",
      jul2019: "0.5874",
      jun2019: "0.491",
      aug2019: "0.5775",
      sep2019: "0.532",
      oct2019: "0.654",
      nov2019: "0,765",
      dec2019: "0.6544",
      Jan2020: "0.2544",
      Feb2020: "0.5444",
      Mar2020: "0.643",
      Apr2020: "0.221",
      May2020: "0.74844",
      Jun2020: "0.5444",
      Jul2020: "0.7885",
      Aug2020: "0.14256",
    },
    {
      Name: "Casual 1 Demand",
      jul2019: "0",
      jun2019: "0.",
      aug2019: "0",
      sep2019: "0",
      oct2019: "0",
      nov2019: "0",
      dec2019: "0",
      Jan2020: "0",
      Feb2020: "0",
      Mar2020: "0",
      Apr2020: "0",
      May2020: "0",
      Jun2020: "0",
      Jul2020: "0",
      Aug2020: "0",
    },
    {
      Name: "Exaptional Demand",
      jul2019: "0",
      jun2019: "0",
      aug2019: "0",
      sep2019: "0",
      oct2019: "0",
      nov2019: "0",
      dec2019: "0",
      Jan2020: "0",
      Feb2020: "0",
      Mar2020: "0",
      Apr2020: "0",
      May2020: "0",
      Jun2020: "0",
      Jul2020: "0",
      Aug2020: "0",
    },
    {
      Name: "Comercial Forecast",
      jul2019: "0",
      jun2019: "0",
      aug2019: "0",
      sep2019: "0",
      oct2019: "0",
      nov2019: "0",
      dec2019: "0",
      Jan2020: "0",
      Feb2020: "0",
      Mar2020: "0",
      Apr2020: "0",
      May2020: "0.",
      Jun2020: "0",
      Jul2020: "0",
      Aug2020: "0",
    },
  ],
});

$("#grid .k-grid-content").css({
  "overflow-y": "hidden",
});





// SECOND GRID


$("#gridTwo").kendoGrid({
  dataSource: {
    transport: {
    read: {
    url: "http://demos.telerik.com/kendo-ui/service/products",
    dataType: "jsonp",
    }
  }
  } ,
     
  columns: [
    
    {
      field: "ProductName",
      title: "Name",
    },
    {
      field: "UnitPrice",
      title: "UnitPrice",
    },
    {
      field: "UnitsInStock",
      title: "UnitsInStock",
    },
  ],
  scrollable:false,

  pageable: {
    pageSize: 10
  }
  
});




// var dataSource = new kendo.data.DataSource({
//   transport: {
//     read: {
//       url: "https://demos.telerik.com/kendo-ui/service/products",
//       dataType: "jsonp"
//     }
//   },
//   pageSize: 10
// });

// $("#gridThree").kendoGrid({
//   dataSource: dataSource,
//   pageable: true
// });