// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
   $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault()

      var newBurger = {
         burger_name: $("#ca").val().trim(),
         devoured: false
      }
      console.log(newBurger)
      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(() => {
         console.log("Created a new burger")
         location.reload()
      })
   })

   $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");

      var newDevouredState = {
         devoured: devoured
      };

      // PUT request:
      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newDevouredState
      }).then(
         function () {
            console.log("changed devoured to", devoured);
            // Reload the page to get the updated list: 
            location.reload();
         }
      );
   });
   $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
         type: "DELETE"
      }).then(
         function () {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
         }
      );
   });
})