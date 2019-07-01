$(document).ready(function(){
   $("#home").click(function(){
      $( "#prod_est" ).hide();
      $( "#prod_cad" ).hide();
      $( "#prod_sai" ).hide();
      $( "#fornecedores" ).hide();
      $( "#escolas" ).hide();
      $( "#minha_conta" ).hide();
      $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).hide();
   });
}); 

$(document).ready(function(){
    $("#estoque").click(function(){
       $( "#prod_est" ).show();
       $( "#prod_cad" ).hide();
       $( "#prod_sai" ).hide();
       $( "#fornecedores" ).hide();
       $( "#escolas" ).hide();
       $( "#minha_conta" ).hide();
       $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).hide();
    });
 }); 

 $(document).ready(function(){
    $("#cadastrar").click(function(){
       $( "#prod_est" ).hide();
       $( "#prod_cad" ).show();
       $( "#prod_sai" ).hide();
       $( "#fornecedores" ).hide();
       $( "#escolas" ).hide();
       $( "#minha_conta" ).hide();
       $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).hide();
    });
 }); 

 $(document).ready(function(){
    $("#forn").click(function(){
       $( "#prod_est" ).hide();
       $( "#prod_cad" ).hide();
       $( "#prod_sai" ).hide();
       $( "#fornecedores" ).show();
       $( "#escolas" ).hide();
       $( "#minha_conta" ).hide();
       $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).hide();
    });
 }); 

 $(document).ready(function(){
    $("#esc").click(function(){
       $( "#prod_est" ).hide();
       $( "#prod_cad" ).hide();
       $( "#prod_sai" ).hide();
       $( "#fornecedores" ).hide();
       $( "#escolas" ).show();
       $( "#minha_conta" ).hide();
       $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).hide();
    });
 }); 

 $(document).ready(function(){
   $("#sol_ent").click(function(){
      $( "#prod_est" ).hide();
      $( "#prod_cad" ).hide();
      $( "#prod_sai" ).hide();
      $( "#fornecedores" ).hide();
      $( "#escolas" ).hide();
      $( "#minha_conta" ).hide();
      $( "#entregas_feitas" ).hide();
      $( "#ent_sol" ).show();
   });
}); 

$(document).ready(function(){
   $("#ent_feita").click(function(){
      $( "#prod_est" ).hide();
      $( "#prod_cad" ).hide();
      $( "#prod_sai" ).hide();
      $( "#fornecedores" ).hide();
      $( "#escolas" ).hide();
      $( "#minha_conta" ).hide();
      $( "#entregas_feitas" ).show();
      $( "#ent_sol" ).hide();
   });
}); 

