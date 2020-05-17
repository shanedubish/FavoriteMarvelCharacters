console.log("hello world");
$(() => {
  $(".leftbutton").hide();
  $(".rightbutton").hide();
  $(".noname").hide();
  $("#info").on("click", () => {
    event.preventDefault();
    $(".picture").empty();
    $(".info").empty();

    let nameInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cors-anywhere.herokuapp.com/superheroapi.com/api/10215488179708651/search/${nameInput}`,
      type: "Get",
    })
      .then((info) => {
        console.log(info.results[0]);
        $(".leftbutton").show();
        $(".rightbutton").show();
        const $stats = $(".info");
        const $statlist = $("<div>").appendTo($stats).addClass("stat");
        const $name = $("<p>").text(info.results[0].name).appendTo($statlist);

        const $strength = $("<p>")
          .text(`Strength: ${info.results[0].powerstats.strength}`)
          .appendTo($statlist);

        const $speed = $("<p>")
          .text(`Speed: ${info.results[0].powerstats.speed}`)
          .appendTo($statlist);

        const $power = $("<p>")
          .text(`Power: ${info.results[0].powerstats.power}`)
          .appendTo($statlist);

        const $intelligence = $("<p>")
          .text(`Intelligence: ${info.results[0].powerstats.intelligence}`)
          .appendTo($statlist);

        const $imagePlace = $(".picture");
        const $image = $("<img>")
          .attr("src", info.results[0].image.url)
          .addClass("coolpic")
          .appendTo($imagePlace);
      })
      .catch((err) => {
        console.log(err);
        $(".noname").toggle();
        const errorMessage = $("<p>")
          .text("Name not found")
          .appendTo(".picture");
      });
  });
});
