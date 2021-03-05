console.log("hello world");
$(() => {
  $(".leftbutton").hide();
  $(".rightbutton").hide();

  const start = (event) => {
    event.preventDefault();
    $(".picture").empty();
    $("#nameid").empty();
    $("#statsid").empty();
    $(".info").empty();
    let currentIndex = 0;
    let nameInput = $('input[type="text"]').val();

    //$.ajax({

    // url: `https://thingproxy.freeboard.io/fetch/https://superheroapi.com/api/10215488179708651/search/${nameInput}`,

    //  type: "Get",
      
    //})
    $.getJSON(`https://api.allorigins.win/get?url=https%3A//superheroapi.com/api/10215488179708651/search/${nameInput}&callback=?`, function (data) {
	
   // })
      //.then((info) => {
        
        data = JSON.parse(data.contents)
        let info = data
        console.log(info);
        const slideNum = info.results.length - 1;
        $(".rightbutton").on("click", () => {
          console.log(currentIndex);
          $(".picture").empty();
          $("#nameid").empty();
          $("#statsid").empty();
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
          $("#nameid").empty();
          $("#statsid").empty();
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
          $(".num").empty();
          $(".leftbutton").show();
          $(".rightbutton").show();

          const $stats = $("#statsid");
          const curNum = currentIndex;
          const addNum = curNum + 1;

          const $numDiv = $("<span>")
            .text(`${addNum} of ${info.results.length}`)
            .appendTo(".num")
            .css("background", "black")
            .css("border-radius", "4px");

          const $name = $("<h3>")
            .text(info.results[currentIndex].name)
            .appendTo("#nameid")
            .addClass("name stat");

          const $statlist1 = $("<div>").appendTo($stats).addClass("stat");
          const $statlist2 = $("<div>").appendTo($stats).addClass("stat");
          const $statlist3 = $("<div>").appendTo($stats).addClass("stat");

          const $h1 = $("<button>")
            .text("Powerstats")
            .appendTo($statlist1)
            .addClass("statButtons")
            .css("cursor", "pointer")
            .on("click", () => {
              $statlist1.children().toggle();
              $h1.toggle();
            });
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

          const $h2 = $("<button>")
            .text("Biography")
            .appendTo($statlist2)
            .addClass("statButtons")
            .css("cursor", "pointer")
            .on("click", () => {
              $statlist2.children().toggle();
              $h2.toggle();
            });
          const text2_1 = $("<p>")
            .text(
              `Full Name:  ${info.results[currentIndex].biography["full-name"]}`
            )

            .appendTo($statlist2)
            .hide();
          const text2_2 = $("<p>")
            .text(
              `Alter Egos:  ${info.results[currentIndex].biography["alter-egos"]} `
            )

            .appendTo($statlist2)
            .hide();
          const text2_3 = $("<p>")
            .text(
              `Place of Birth:  ${info.results[currentIndex].biography["place-of-birth"]}`
            )

            .appendTo($statlist2)
            .hide();
          const text2_4 = $("<p>")
            .text(
              `First Appearance:  ${info.results[currentIndex].biography["first-appearance"]}`
            )

            .appendTo($statlist2)
            .hide();

          const $h3 = $("<button>")
            .text("Appearance")
            .appendTo($statlist3)
            .addClass("statButtons")
            .css("cursor", "pointer")
            .on("click", () => {
              $statlist3.children().toggle();
              $h3.toggle();
            });
          const text3_1 = $("<p>")
            .text(`Gender:  ${info.results[currentIndex].appearance.gender}`)

            .appendTo($statlist3)
            .hide();
          const text3_2 = $("<p>")
            .text(`Race:  ${info.results[currentIndex].appearance.race}`)

            .appendTo($statlist3)
            .hide();
          const text3_3 = $("<p>")
            .text(`Height:  ${info.results[currentIndex].appearance.height}`)

            .appendTo($statlist3)
            .hide();
          const text3_4 = $("<p>")
            .text(`Weight:  ${info.results[currentIndex].appearance.weight}`)

            .appendTo($statlist3)
            .hide();

          const text3_5 = $("<p>")
            .text(
              `Eye Color:  ${info.results[currentIndex].appearance["eye-color"]}`
            )

            .appendTo($statlist3)
            .hide();
          const text3_6 = $("<p>")
            .text(
              `Hair Color:  ${info.results[currentIndex].appearance["hair-color"]}`
            )

            .appendTo($statlist3)
            .hide();

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
  $("#reset").on("click", () => {
    location.reload(true);
  });
});
