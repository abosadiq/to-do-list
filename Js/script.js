// Check
$(document).ready(function() {
  $("ul").on("click", "li", function() {
    if ($("li").css("color") === "rgb(128, 128, 128)") {
      $(this).css({
        color: "black",
        textDecoration: "none"
      });
    } else {
      $(this).css({
        color: "gray",
        textDecoration: "line-through"
      });
    }
  });
  // delete list
  $("ul").on("click", ".delete", function(e) {
    e.stopPropagation();
    $(this)
      .parent()
      .fadeOut(function() {
        $(this).remove();
      });
  });
  $(".add-list").on("keypress", function(e) {
    if (e.which === 13) {
      let addedText = $(this).val();

      // to remove the text from input text after we hit eneter
      $(this).val("");
      // make a new li and add it to ul
      $("ul").append(
        `<li><svg class='delete'><use xlink:href="../img/sprite.svg#icon-bin"></use></svg> ${addedText}</li>`
      );
    }
  });

  // hiding the text input when click in + button
  $(".heading__btn").on("click", function() {
    $(".add-list").fadeToggle(1000);
  });
});
