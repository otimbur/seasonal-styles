$("document").ready(function () {
  $(".seasons a").click(function (e) {
    //find all a tags inside class of seasons
    e.preventDefault(); //stop default submission
    var season = $(this).attr("href");

    switch (season) {
      case "Deafault":
        $("html ").css("background-color", "Black");
        $("#wear").attr("src", "images/300x400.png");
        $("#logo").attr("src", "images/four-seasons.gif");
        $("header h3").text("Outfitter for All Seasons!");
        break;

      case "Spring":
        $("html ").css("background-color", "green");
        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        $("header h3").text("Jump into Spring  Wear!");
        break;
      case "Summer":
        $("html ").css("background-color", "#EBA52B");
        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        $("header h3").text("Jump into Summer Wear!");

        break;
      case "Fall":
        $("html ").css("background-color", "#A81124");
        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        $("header h3").text("Jump into Fall Wear!");

        break;
      case "Winter":
        $("html ").css("background-color", "#005393");
        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        $("header h3").text("Jump into Winter Wear!");

        break;
      default:
        console.log("Error");
        break;
    }
  });
});
