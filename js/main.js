/* ==========================================
   NEXORA SYSTEMS - MAIN JAVASCRIPT
   Global Interface Controls
========================================== */


document.addEventListener("DOMContentLoaded", () => {


    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("sidebar-toggle");


    // Prevent errors on pages without sidebar
    if (!sidebar || !toggleButton) {
        return;
    }



    /*
        Update button appearance
    */

    function updateToggleButton() {

        if (sidebar.classList.contains("collapsed")) {

            toggleButton.textContent = ">";

        } else {

            toggleButton.textContent = "<";

        }

    }




    /*
        Load saved sidebar setting
    */

    const savedState = localStorage.getItem(
        "nexora-sidebar-state"
    );


    if (savedState === "collapsed") {

        sidebar.classList.add("collapsed");

    }


    updateToggleButton();





    /*
        Sidebar toggle button
    */

    toggleButton.addEventListener(
        "click",
        () => {


            sidebar.classList.toggle(
                "collapsed"
            );


            const collapsed =
                sidebar.classList.contains(
                    "collapsed"
                );



            localStorage.setItem(
                "nexora-sidebar-state",
                collapsed
                    ? "collapsed"
                    : "expanded"
            );



            updateToggleButton();


        }
    );





    /*
        Keyboard shortcut
        CTRL + B
    */

    document.addEventListener(
        "keydown",
        (event) => {


            if (
                event.ctrlKey &&
                event.key.toLowerCase() === "b"
            ) {


                toggleButton.click();


            }


        }
    );



});
