window.addEventListener("DOMContentLoaded", function () {
    // console.log("DOM loaded");
    setup();
    make_tiles();
    load_banner();
  });
  function load_banner() {
    fetch("banner.json")
      .then(function(response) { return response.json(); })
      .then(function(data) {
        var now = Math.floor(Date.now() / 1000);
        if (now >= data.start && now <= data.end) {
          document.getElementById("banner-text").textContent = data.text;
          document.getElementById("banner").style.display = "block";
        }
      })
      .catch(function() {});
  }
  function make_tiles() {
    const data = get_JSON();
    for (let i = 0; i < data.naam.length; i++) {
  
      duplicateAndModify(
        data.link[i],
        data.naam[i],
        data.icon.icondata[i],
        data.type[i],
      );
    }
    remove_the_placeholder();
  }
  function duplicateAndModify(link, text, icon, type) {
    if (type == "0") {
      // console.log("normal");
  
      // Get the original tile
      var originalTile = document.getElementById("tile");
  
      // Clone the original tile, including its children
      var clonedTile = originalTile.cloneNode(true);
      clonedTile.id = link;
      // Change the URL and text of the cloned tile
      clonedTile.href = link;
      clonedTile.querySelector("p").innerText = text;
      const Ielement = clonedTile.querySelector("i");
      const classNames = icon;
      //console.log(Ielement.classList)
      Ielement.classList.remove("fa-solid");
      Ielement.classList.remove("fa-thumbs-down");

  
      classNames.split(" ").forEach((className) => {
        // Check if className is not empty before adding it
        if (className.trim() !== '') {
            Ielement.classList.add(className);
        }
    });
  
      // Append the cloned tile to the container
      document.getElementById("container").appendChild(clonedTile);
    } else {
      alert("widgets zijn verwijdert van het project, verwijder ze van je startscherm.")
    }
  }
  function remove_the_placeholder() {
    var originalTile = document.getElementById("tile");
    originalTile.remove();
  }
  function get_JSON() {
    const data = JSON.parse(localStorage.getItem("main"));
    return data;
  }
  function setup() {
    if (localStorage.length === 0) {
      localStorage.setItem(
        "main",
        '{"naam":["Siem"],"link":["https://siemvk.nl"],"icon":{"icondata":["fa-thumbs-up fa-solid"],"icontype":[""]},"type":["0"],"info":{"V":1.2}}',
      );
    }
    document.getElementById("welkom").innerText = "Welkom, "+localStorage.getItem("naam");
  }
  
