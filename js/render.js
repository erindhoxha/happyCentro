// RENDER DESIGNERS
var source   = $("#designers").html();
var template = Handlebars.compile(source);
var context = designerDetails;
var html = template(context);
$("#render-designers-here").html(html);
  
$(".designer-card").on('click', function() {
  var dataNr = $(this).attr('data-nr');
  console.log(dataNr);
  console.log(designerDetails.people[dataNr].behanceID)
})
// END OF RENDER DESIGNERS


// END OF RENDER PROJECTSa

$(".project-card").on('click', function() {
  var dataNr = $(this).attr('data-nr');
  console.log(dataNr);
  console.log(projectDetails.project[dataNr])
})