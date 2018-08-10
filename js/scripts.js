$(document).ready(function() {
  $("form#surveyForm").submit(function(event) {
      var developer = $("input[name='developer']:checked").val();
      var company = $("input[name='company']:checked").val();
      var strength = $("input[name='strength']:checked").val();
      var hobby = $("input[name='hobby']:checked").val();
      var beatles = $("input[name='beatles']:checked").val();

      console.log(developer);
      console.log(company);
      console.log(strength);
      console.log(hobby);
      console.log(beatles);


      if (developer === 'frontEnd' && company === 'small' && strength === 'design') {
        $("#frontEndResult").show();
      } else if (developer === 'frontEnd' && company === 'medium' && strength === 'logic') {
        $("#fullStackResult").show();
      } else if (developer === 'frontEnd' && company === 'medium' && strength === 'logic') {
        $("#brilliant").show();

      } else if (developer === 'backEnd' && company === 'large' && strength === 'patience') {
        $("#backEndResult").show();
      } else if (developer === 'backEnd' && company === 'medium' && strength === 'patience') {
        $('#fullStackResult').show();
      } else if (developer === 'undecided' && company === 'small' && strength === 'design') {
        $('#frontEndResult').show();
      } else if (developer === 'undecided' && company === 'large' && strength === 'logic') {
        $('#backEndResult').show();
      } else if (developer === 'undecided' && company === 'medium' && strength === 'patience') {
        $('#fullStackResult').show();
      } else if (strength === 'logic' && hobby === 'boardGames' && beatles === 'john') {
        $('#backEndResult').show();

      } else {
        $('#brilliant').show();
      }


      event.preventDefault();
    });
  });
