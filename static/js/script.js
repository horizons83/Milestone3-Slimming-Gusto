$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('select').formSelect();
  });

 // Add ingredient input line on the edit/add recipe form:
 $(".add-ingred").click(function () {
   $(".ingre-input").append('<input id="ingredients" name="ingredients" type="text" placeholder="ingredient" aria-label="ingredient input" required> ');
   $(".remove-ing").show();
 });

 // Add method input line on edit/add recipe form:
 $(".add-method").click(function () {
   $(".method-input").append(' <input id="method" name="method" type="text" placeholder="Add Method Step" aria-label="method input" required> ');
   $(".remove-met").show();
 });

 // Remove last ingredient  added on edit/add recipe form:
 $(".remove-ingred").click(function () {
   $(".ingredients").last().remove();
 });

 // Remove last method input on added add/edit recipe form:
 $(".remove-method").click(function () {
   $("#method").last().remove();

   // Show confirm (yes/no) delete buttons when delete recipe button is pressed:
   $(".delete-btn").click(function () {
     $(".del-confirm").show();
   });

   // Hide confirm (yes/no) delete buttons when "No" button is pressed:
   $(".cancel-delete-btn").click(function () {
     $(this).parent().hide();
   });
});