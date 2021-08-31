window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple,{
           
              
        });
    }
});
// searchable: true,
// fixedHeight: true,
// layout: {
//     top: "{select}{search}",
//     bottom: "{info}{pager}"
// },
// labels: {
//     placeholder: "search",
//     perPage: "{select}",
//     noRows: "Nothing",
//     info: "Showing {start} to {end} of {rows} data (Page {page} of {pages} pages)",
// },