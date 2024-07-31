
document.getElementById("clickSubmit").addEventListener("click", function() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    alert("Thanks " + name.value + " for your message!");
  });