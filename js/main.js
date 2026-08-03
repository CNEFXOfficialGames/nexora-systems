/* ==========================================
   NEXORA SYSTEMS - MAIN JAVASCRIPT
   Global Interface Controls
========================================== */


/* ==========================
   WAIT FOR PAGE LOAD
========================== */

document.addEventListener("DOMContentLoaded", () => {



    /* ==========================
       SIDEBAR CONTROL
    ========================== */


    const sidebar = document.getElementById("sidebar");

    const toggleButton =
        document.getElementById("sidebar-toggle");



    // Stop if sidebar does not exist
    if (!sidebar || !toggleButton) {
        return;
    }




    /* ==========================
       LOAD SAVED STATE
    ========================== */


    const savedState =
        localStorage.getItem(
            "nexora-sidebar"
        );



    if (savedState === "collapsed") {

        sidebar.classList.add(
            "collapsed"
        );

        toggleButton.textContent = ">";

    }






    /* ==========================
       TOGGLE SIDEBAR
    ========================== */


    toggleButton.addEventListener(
        "click",
        () => {


            sidebar.classList.toggle(
                "collapsed"
            );



            const isCollapsed =
                sidebar.classList.contains(
                    "collapsed"
                );



            if (isCollapsed) {


                toggleButton.textContent = ">";


                localStorage.setItem(
                    "nexora-sidebar",
                    "collapsed"
                );


            } else {


                toggleButton.textContent = "<";


                localStorage.setItem(
                    "nexora-sidebar",
                    "expanded"
                );


            }


        }
    );





    /* ==========================
       KEYBOARD SHORTCUT
       CTRL + B
       Toggle Sidebar
    ========================== */


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
