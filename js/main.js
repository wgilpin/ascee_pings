$(function() {
  // Handler for .ready() called.
  $("#sectionOut").hide();
  function optText (label, id){
    var text = $(id).val();
    if (text){
      return label + ': ' + text + '\n'
    } else {
      return '';
    }
  }

  function copyPing() {
    /* Get the text field */
    var $copyText =$("#outText");
  
    /* Select the text field */
    $copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
  }

  $("#btnGenerate").on('click', function(){
    var ping = "@reqbcast :siren: "+
      $("#inHurf").val()+'\n\n'+
      optText('FC Name', '#inFC')+
      optText('Fleet Name', '#inFleetName')+
      optText('Reimbursement', '#inReimb')+
      optText('Comms', '#inComms')+
      optText('Doctrine', '#inDoctrine');
    $("#outText").text(ping);
    copyPing()
    $("#sectionOut").show();
  })
});
