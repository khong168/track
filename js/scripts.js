$(document).ready(function() {
    $("form#surveyForm").submit(function(event) {
      var results = ["#frontEndResult", "#fullStackResult", "#backEndResult"];
        results.forEach(function(result) {
          $(result).hide();
        });

      var tmnt = $("input[name='tmnt']:checked").val();
      var iceCream = $("input[name='iceCream']:checked").val();
      var strength = $("input[name='strength']:checked").val();
      var hobby = $("input[name='hobby']:checked").val();
      var beatles = $("input[name='beatles']:checked").val();
      var book = $("input[name='book']:checked").val();

      // console.log(tmnt);
      // console.log(iceCream);
      // console.log(strength);
      // console.log(hobby);
      // console.log(beatles);
      // console.log(book);


      if (tmnt === 'frontEnd' && iceCream === 'small' && strength === 'design') {
        $("#frontEndResult").show();
      } else if (tmnt === 'frontEnd' && iceCream === 'medium' && strength === 'logic') {
        $("#fullStackResult").show();
      } else if (tmnt === 'frontEnd' && iceCream === 'large' && strength === 'logic') {
        $("#frontEndResult").show();
      } else if (tmnt === 'backEnd' && iceCream === 'large' && strength === 'patience') {
        $("#backEndResult").show();
      } else if (tmnt === 'backEnd' && iceCream === 'large' && strength === 'logic') {
        $("#backEndResult").show();
      } else if (tmnt === 'backEnd' && iceCream === 'medium' && strength === 'patience') {
        $('#fullStackResult').show();
      } else if (tmnt === 'backEnd' && iceCream === 'small' && strength === 'logic') {
        $('#fullStackResult').show();
      } else if (tmnt === 'undecided' && iceCream === 'small' && strength === 'design') {
        $('#frontEndResult').show();
      } else if (tmnt === 'undecided' && iceCream === 'large' && strength === 'logic') {
        $('#fullStackResult').show();
      } else if (tmnt === 'undecided' && iceCream === 'large' && strength === 'design') {
        $('#frontEndResult').show();
      } else if (tmnt === 'undecided' && iceCream === 'medium' && strength === 'design') {
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
