window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    setup();
    make_tiles();
  });
  function make_tiles() {
    const data = get_JSON();
    console.log("loading tiles");
    for (let i = 0; i < data.naam.length; i++) {
      console.log("loading " + data.naam[i]);
  
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
    console.log(type);
    if (type == "0") {
      console.log("normal");
  
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
      console.log("wigit");
      // Get the original tile
      var originalTile = document.getElementById("wigit");
      var clonedTile = originalTile.cloneNode(true);
      clonedTile.id = link;
  
      clonedTile.querySelector("script").src = link;
  
      // Append the cloned tile to the container
      document.getElementById("container").appendChild(clonedTile);
    }
  }
  function remove_the_placeholder() {
    var originalTile = document.getElementById("tile");
    originalTile.remove();
    var originalTile = document.getElementById("wigit");
    originalTile.remove();
  }
  function get_JSON() {
    const data = JSON.parse(localStorage.getItem("main"));
    return data;
  }
  function setup() {
    if (localStorage.length === 0) {
      // hoera voor de hotfix
      localStorage.setItem(
        "main",
        '{"naam":["google"],"link":["https://google.com"],"icon":{"icondata":["fa-thumbs-up fa-solid"],"icontype":[""]},"type":["0"],"info":{"V":1.1}}',
      );
    }
  }
  
