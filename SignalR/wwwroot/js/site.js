// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(() => {
    LoadProdData();
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalrServer").build();
    connection.start();

    connection.on("LoadProducts", function () {
        LoadProdData();
    });

    function LoadProdData() {
        var tr = '';
        $.ajax({
            url: "/Products/GetProducts",
            type: "GET",
            success: function (result) {
                $.each(result, function (k, v) {
                    console.log(v);
                    tr += `<tr>
                            <td>${v.prodId}</td>
                            <td>${v.prodName}</td>
                            <td>${v.category}</td>
                            <td>${v.unitPrice}</td>
                            <td>${v.stockQty}</td>
                            <td>
                                <a href="../Products/Edit?id=${v.prodId}">Edit</a> |
                                <a href="../Products/Details?id=${v.prodId}">Details</a> |
                                <a href="../Products/Delete?id=${v.prodId}">Delete</a>
                            </td>
                           </tr>`;
                });
                $('#tableBody').html(tr); // Assuming you have a <tbody> with id="tableBody"
            },
            error: function (error) {
                console.log(error);
            }
        }); // This was missing
    }
}); // This was missing
