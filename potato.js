function onSubmitHandler(e) {
  e.preventDefault();
  changeState();
}

document
  .querySelector("#login-form")
  .addEventListener("submit", onSubmitHandler);

function changeState() {
  const LOCAL_STORGE_KEY = "Username";

  if (localStorage.getItem(LOCAL_STORGE_KEY) === null) {
    // * Show the form
    document.querySelector("#login-form").classList.remove("hidden");
    document.querySelector("h1").classList.add("hidden");

    document
      .querySelector("#login-form button")
      .addEventListener("click", () => {
        localStorage.setItem(
          "Username",
          document.querySelector("#login-form input").value
        );
      });
  } else {
    // * Hide the form
    document.querySelector("#login-form").classList.add("hidden");
    document.querySelector("h1").innerText = `Hello, ${localStorage.getItem(
      LOCAL_STORGE_KEY
    )}`;
    document.querySelector("h1").classList.remove("hidden");
  }
}

changeState();
