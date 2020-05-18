console.log("hello world");
$(() => {
  let currentIndex = 0;

  $(".leftbutton").hide();
  $(".rightbutton").hide();

  const start = () => {
    event.preventDefault();
    $(".picture").empty();
    $(".info").empty();

    let nameInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cors-anywhere.herokuapp.com/superheroapi.com/api/10215488179708651/search/${nameInput}`,
      type: "Get",
    })
      .then((info) => {
        const slideNum = info.results.length - 1;
        $(".rightbutton").on("click", () => {
          console.log(currentIndex);
          $(".picture").empty();
          $(".info").empty();
          if (currentIndex < slideNum) {
            currentIndex++;
          } else {
            currentIndex = 0;
          }
          currentIndex;
          getStuff();
        });

        $(".leftbutton").on("click", () => {
          console.log(currentIndex);
          $(".picture").empty();
          $(".info").empty();
          if (currentIndex > 0) {
            currentIndex--;
          } else {
            currentIndex = slideNum;
          }
          currentIndex;
          getStuff();
        });

        console.log(info.results[currentIndex]);
        const getStuff = () => {
          $(".leftbutton").show();
          $(".rightbutton").show();
          const $stats = $(".info");
          const $statlist = $("<div>").appendTo($stats).addClass("stat");
          const $name = $("<p>")
            .text(info.results[currentIndex].name)
            .appendTo($statlist);

          const $strength = $("<p>")
            .text(`Strength: ${info.results[currentIndex].powerstats.strength}`)
            .appendTo($statlist);

          const $speed = $("<p>")
            .text(`Speed: ${info.results[currentIndex].powerstats.speed}`)
            .appendTo($statlist);

          const $power = $("<p>")
            .text(`Power: ${info.results[currentIndex].powerstats.power}`)
            .appendTo($statlist);

          const $intelligence = $("<p>")
            .text(
              `Intelligence: ${info.results[currentIndex].powerstats.intelligence}`
            )
            .appendTo($statlist);

          const $imagePlace = $(".picture");
          const $image = $("<img>")
            .attr("src", info.results[currentIndex].image.url)
            .addClass("coolpic")
            .appendTo($imagePlace);
        };
        getStuff();
      })
      .catch((err) => {
        console.log(err);
        const errorimg = $("<img>")
          .attr("src", "img/skull.png")
          .appendTo(".noname");
        const errorMessage = $("<p>")
          .text("Name not found")
          .addClass("not-found")
          .appendTo(".picture");
      });
  };
  $("#info").on("click", start);
});
