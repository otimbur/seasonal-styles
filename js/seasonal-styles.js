$("document").ready(function () {
  $(".seasons a").click(function (e) {
    //find all a tags inside class of seasons
    e.preventDefault(); //stop default submission
    var season = $(this).attr("href");

    switch (season) {
      case "Default":
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

$("document").ready(function () {
  $("#dateForm").submit(function (e) {
    //handle form submission event
    e.preventDefault(); //stop default submission
    var datetext = $("input[name=dateField]").val(); //grab data from textbox
    var month = new Date(datetext);
    month = month.getMonth();
    console.log(month);
    switch (month) {
      case 0:
        $("html ").css("background-color", "#005393");
        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        $("header h3").text("Jump into Winter Wear!");
        break;
      case 1:
        $("html ").css("background-color", "#005393");
        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        $("header h3").text("Jump into Winter Wear!");
        break;
      case 2:
        $("html ").css("background-color", "green");
        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        $("header h3").text("Jump into Spring  Wear!");
        break;
      case 3:
        $("html ").css("background-color", "green");
        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        $("header h3").text("Jump into Spring  Wear!");
        break;
      case 4:
        $("html ").css("background-color", "green");
        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        $("header h3").text("Jump into Spring  Wear!");
        break;
      case 5:
        $("html ").css("background-color", "#EBA52B");
        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        $("header h3").text("Jump into Summer Wear!");
        break;
      case 6:
        $("html ").css("background-color", "#EBA52B");
        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        $("header h3").text("Jump into Summer Wear!");
        break;
      case 7:
        $("html ").css("background-color", "#EBA52B");
        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        $("header h3").text("Jump into Summer Wear!");
        break;
      case 8:
        $("html ").css("background-color", "#A81124");
        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        $("header h3").text("Jump into Fall Wear!");
        break;
      case 8:
        $("html ").css("background-color", "#A81124");
        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        $("header h3").text("Jump into Fall Wear!");
        break;
      case 9:
        $("html ").css("background-color", "#A81124");
        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        $("header h3").text("Jump into Fall Wear!");
        break;
      default:
        $("html ").css("background-color", "#005393");
        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        $("header h3").text("Jump into Winter Wear!");
    }
  });
});
