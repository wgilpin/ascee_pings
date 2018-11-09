$(function() {
  // Handler for .ready() called.
  $('#sectionOut').hide();
  $('#sectionNojs').hide();
  $('#sectionForm').show();

  function optText(label, id) {
    var text = $(id).val();
    if (text) {
      return label + ': ' + text + '\n';
    } else {
      return '';
    }
  }

  $('#btnCopy').on('click', function(){
    $('#outText').select();
    document.execCommand('copy');
  });

  $('#btnGenerate').on('click', function(event) {
    event.preventDefault();
    var ping =
      '@reqbcast :siren: ' +
      $('#inHurf').val() +
      '\n\n' +
      optText('FC Name', '#inFC') +
      optText('Fleet Name', '#inFleetName') +
      optText('Reimbursement', '#inReimb') +
      optText('Comms', '#inComms') +
      optText('Doctrine', '#inDoctrine');
    $('#outText')
      .text(ping)
      .select();
    document.execCommand('copy');
    $('#sectionOut').show();
  $('#sectionOut').show();

  });
});
