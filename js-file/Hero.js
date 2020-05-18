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

          const $name = $("<h3>")
            .text(info.results[currentIndex].name)
            .appendTo($stats)
            .addClass("name");

          const $statlist1 = $("<div>").appendTo($stats).addClass("stat");
          const $statlist2 = $("<div>").appendTo($stats).addClass("stat");
          const $statlist3 = $("<div>").appendTo($stats).addClass("stat");

          const $h1 = $("<button>").text("Powerstats").appendTo($statlist1);
          const text1 = $("<p>")
            .text(
              `Intelligence:  ${info.results[currentIndex].powerstats.intelligence}`
            )

            .appendTo($statlist1)
            .hide();
          const text2 = $("<p>")
            .text(
              `Strength:  ${info.results[currentIndex].powerstats.strength}`
            )

            .appendTo($statlist1)
            .hide();
          const text3 = $("<p>")
            .text(`Speed:  ${info.results[currentIndex].powerstats.speed}`)

            .appendTo($statlist1)
            .hide();
          const text4 = $("<p>")
            .text(`Power:  ${info.results[currentIndex].powerstats.power}`)

            .appendTo($statlist1)
            .hide();
          const $h2 = $("<button>").text("Biography").appendTo($statlist2);
          const $h3 = $("<button>").text("Appearance").appendTo($statlist3);

          // const $strength = $("<p>")
          //   .text(`Strength: ${info.results[currentIndex].powerstats.strength}`)
          //   .appendTo($statlist);
          //
          // const $speed = $("<p>")
          //   .text(`Speed: ${info.results[currentIndex].powerstats.speed}`)
          //   .appendTo($statlist);
          //
          // const $power = $("<p>")
          //   .text(`Power: ${info.results[currentIndex].powerstats.power}`)
          //   .appendTo($statlist);
          //
          // const $intelligence = $("<p>")
          //   .text(
          //     `Intelligence: ${info.results[currentIndex].powerstats.intelligence}`
          //   )
          //   .appendTo($statlist);

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
          .appendTo(".picture")
          .addClass("skull");
        const errorMessage = $("<p>")
          .text("Error not found!")
          .addClass("not-found")
          .appendTo(".picture");
      });
  };
  $("#info").on("click", start);
});
