$(document).ready(function () {
    $('#Emprestimos').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "Não há conteudo disponivel na tabela",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty": "mostrando 0 a 0 de 0 entradas",
            "infoFiltered": "(Filtrando de _MAX_ entradas no total)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Carregando ...",
            "processing": "",
            "search": "Procurar:",
            "zeroRecords": "Nenhum registro correspondente encontrado",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "orderable": "Ordenar por esta coluna",
                "orderableReverse": "Ordem inversa desta coluna"
            }
        }
    });
} )