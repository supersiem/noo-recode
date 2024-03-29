
    window.addEventListener("DOMContentLoaded", function () {
        console.log("DOM loaded");
        make_tiles();
    });
    function make_tiles() {
        data = get_JSON();
        console.log("loading tiles");
        for (let i = 0; i < data.naam.length; i++) {
            console.log("loading " + data.naam[i]);
            duplicateAndModify(
                data.naam[i],
                data.icon.icondata[i],
                data.type[i],
                i,
            );
        }
        remove_the_placeholder();
    }
    function duplicateAndModify(
        text,
        icondata,
        type,
        number_in_list,
    ) {
        console.log(type);
        if (true) {
            // Get the original tile
            var originalTile = document.getElementById("tile");

            // Clone the original tile, including its children
            var clonedTile = originalTile.cloneNode(true);
            clonedTile.id = number_in_list;
            // Change the URL and text of the cloned tile
            clonedTile.querySelector("p").innerText = text;
            const classNames = icondata;
            const Ielement = clonedTile.querySelector("i");
            Ielement.id = "skibedi_toilet";
            console.log(Ielement)

            const Aelemet = clonedTile;
            Aelemet.href = "javascript:remove(" + number_in_list + ");";


            // Append the cloned tile to the container
            document.getElementById("container").appendChild(clonedTile);
        }
    }
    function remove_the_placeholder() {
        var originalTile = document.getElementById("tile");
        originalTile.remove();
    }
    function get_JSON() {
        data = JSON.parse(localStorage.getItem("main"));
        return data;
    }
    function remove(num) {
        var json = get_JSON();
        json.naam.splice(num, 1);
        json.link.splice(num, 1);
        json.icon.icondata.splice(num, 1);
        json.icon.icontype.splice(num, 1);
        json.type.splice(num, 1);
        localStorage.setItem("main", JSON.stringify(json));
        location.reload();
    }
