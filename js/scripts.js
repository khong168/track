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


      if (developer === 'frontEnd' && company === 'small' && strength === 'design' && hobby === 'drawing' && beatles === 'paul') {
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
      } else if (strength === 'design' && hobby === 'drawing' && beatles === 'george') {
        $('#FrontEndResult').show();
      } else if (strength === 'patience' && hobby === 'bicycle' && beatles === 'paul') {
        $('#fullStackResult').show();
      } else if (company === 'small' && hobby === 'boardGames' && beatles === 'john') {
        $('#backEndResult').show();
      } else if (company === 'medium' && hobby === 'bicycle' && beatles === 'paul') {
        $('#fullStackResult').show();
      } else if (company === 'large' && hobby === 'drawing' && beatles === 'george') {
        $('#frontEndResult').show();
      } else if (developer === 'frontEnd' && devel === 'boardGames' && beatles === 'john') {
        $('#backEndResult').show();

      } else {
        $('#fullStackResult').show();

      }


      event.preventDefault();
    });
  });
