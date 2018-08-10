$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
      var developer = $("input[name='developer']:checked").val();
      var company = $("input[name='company']:checked").val();
      var strength = $("input[name='strength']:checked").val();
      var hobby = $("input[name='hobby']:checked").val();
      var beatles = $("input[name='strength']:checked").val();

      console.log(developer);
      console.log(company);

      if (developer == 'frontEnd' && company == 'small' && strength == 'design') {
        $("#frontEndResult").show();
      } else if (quality === 'kindness' && drunkFood === 'burritos') {
        $("#fabulous").show();
      } else if (quality === 'honesty' && drunkFood === 'burritos') {
        $("#brilliant").show();
      } else if (quality === 'bravery' && drunkFood === 'pizza') {
        $('#brilliant').show();
      } else if (quality === 'kindness' && drunkFood === 'pizza') {
        $('#positive').show();
      } else if (quality === 'honesty' && drunkFood === 'pizza') {
        $('#cool').show();
      } else if (quality === 'bravery' && drunkFood === 'fries') {
        $('#cool').show();
      } else if (quality === 'kindness' && drunkFood === 'fries') {
        $('#adventurous').show();
      } else {
        $('#brilliant').show();
      }


      event.preventDefault();
    });
  });
