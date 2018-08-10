$(document).ready(function() {
    $("form#surveyForm").submit(function(event) {
      var developer = $("input[name='developer']:checked").val();
      var company = $("input[name='company']:checked").val();
      var strength = $("input[name='strength']:checked").val();
      var hobby = $("input[name='hobby']:checked").val();
      var beatles = $("input[name='beatles']:checked").val();
      var book = $("input[name='book']:checked").val();

      // console.log(developer);
      // console.log(company);
      // console.log(strength);
      // console.log(hobby);
      // console.log(beatles);
      // console.log(book);


      if (developer === 'frontEnd' && company === 'small' && strength === 'design') {
        $("#frontEndResult").show();
      } else if (developer === 'frontEnd' && company === 'medium' && strength === 'logic') {
        $("#fullStackResult").show();
      } else if (developer === 'frontEnd' && company === 'large' && strength === 'logic') {
        $("#frontEndResult").show();
      } else if (developer === 'backEnd' && company === 'large' && strength === 'patience') {
        $("#backEndResult").show();
      } else if (developer === 'backEnd' && company === 'large' && strength === 'logic') {
        $("#backEndResult").show();
      } else if (developer === 'backEnd' && company === 'medium' && strength === 'patience') {
        $('#fullStackResult').show();
      } else if (developer === 'backEnd' && company === 'small' && strength === 'logic') {
        $('#fullStackResult').show();
      } else if (developer === 'undecided' && company === 'small' && strength === 'design') {
        $('#frontEndResult').show();
      } else if (developer === 'undecided' && company === 'large' && strength === 'logic') {
        $('#fullStackResult').show();
      } else if (developer === 'undecided' && company === 'large' && strength === 'design') {
        $('#frontEndResult').show();
      } else if (developer === 'undecided' && company === 'medium' && strength === 'design') {
        $('#fullStackResult').show();
      } else if (book === '1984' && hobby === 'boardGames' && beatles === 'john') {
        $('#backEndResult').show();
      } else if (book === 'pi' && hobby === 'drawing' && beatles === 'paul') {
        $('#fullStackResult').show();
      } else if (book === 'war' && hobby === 'bicycle' && beatles === 'george') {
        $('#frontEndResult').show();
      } else if (book === '1984' && hobby === 'boardGames' && beatles === 'john') {
        $('#fullStackResult').show();
      } else if (book === 'pi' && hobby === 'drawing' && beatles === 'george') {
        $('#frontEndResult').show();
      } else if (book === 'war' && hobby === 'bicycle' && beatles === 'john') {
        $('#fullStackResult').show();
      } else if (book === '1984' && hobby === 'boardGames' && beatles === 'paul') {
        $('#fullStackResult').show();
      } else if (book === 'pi' && hobby === 'bicycle' && beatles === 'george') {
        $('#frontEndResult').show();
      } else if (book === 'war' && hobby === 'drawing' && beatles === 'john') {
        $('#backEndResult').show();
      } else {
        $('#fullStackResult').show();
      }

      event.preventDefault();
    });
  });
