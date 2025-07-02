$(document).ready(function(){

    $("header button").click(function(){
        $("#conteudo").slideDown();
    })

    $("#botao-cancelar").click(function(){
        $("#conteudo").slideUp();
    })

    
    $("ul").on("click", ".itensTarefa", function(){
        $(this).css("text-decoration", "line-through");
        $(this).css("background-color", "#3CB371");
    });

    $("form").on("submit", function(e){
        e.preventDefault();
        const nomeTarefaNova = $("#nome-tarefa-nova").val();
        const novaTarefa = $('<li class="itensTarefa" style="display: none"></li>');
        novaTarefa.text(nomeTarefaNova);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000)
        $('#nome-tarefa-nova').val('');

    })
})
