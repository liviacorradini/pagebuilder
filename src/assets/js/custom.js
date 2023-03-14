//MENU LATERAL

document.addEventListener('DOMContentLoaded', (event) => {

    let checkblock = document.getElementById('btn-block');
    let block_button = document.getElementById('components-button');
    let block = document.getElementById('blocks');

    let checklayer = document.getElementById('btn-layer');
    let layer_button = document.getElementById('layers-button');
    let layer = document.getElementById('layers');

    let checkconfig = document.getElementById('btn-config');
    let config_button = document.getElementById('config-button');
    let config = document.getElementById('config-manager');

    let checkstyle = document.getElementById('btn-style');
    let style_button = document.getElementById('style-button');
    let style = document.getElementById('style-manager');

    checkblock.addEventListener("click", (event) => {
        if (checkblock.checked) {
            block.classList.add('display-block');
            block_button.classList.add('active');

            layer.classList.remove('display-block');
            layer_button.classList.remove('active');
            config.classList.remove('display-block');
            config_button.classList.remove('active');
            style.classList.remove('display-block');
            style_button.classList.remove('active');

        } else {
            block.classList.remove('display-block');
            block_button.classList.remove('active');
        }
    }
    );

    checklayer.addEventListener("click", (event) => {
        if (checklayer.checked) {
            layer.classList.add('display-block');
            layer_button.classList.add('active');

            block.classList.remove('display-block');
            block_button.classList.remove('active');
            config.classList.remove('display-block');
            config_button.classList.remove('active');
            style.classList.remove('display-block');
            style_button.classList.remove('active');

        } else {
            layer.classList.remove('display-block');
            layer_button.classList.remove('active');
        }
    }
    );

    checkconfig.addEventListener("click", (event) => {
        if (checkconfig.checked) {
            config.classList.add('display-block');
            config_button.classList.add('active');

            block.classList.remove('display-block');
            block_button.classList.remove('active');
            layer.classList.remove('display-block');
            layer_button.classList.remove('active');
            style.classList.remove('display-block');
            style_button.classList.remove('active');

        } else {
            config.classList.remove('display-block');
            config_button.classList.remove('active');
        }
    }
    );
    checkstyle.addEventListener("click", (event) => {
        if (checkstyle.checked) {
            style.classList.add('display-block');
            style_button.classList.add('active');

            block.classList.remove('display-block');
            block_button.classList.remove('active');
            layer.classList.remove('display-block');
            layer_button.classList.remove('active');
            config.classList.remove('display-block');
            config_button.classList.remove('active');

        } else {
            style.classList.remove('display-block');
            style_button.classList.remove('active');
        }
    }
    );

});


// DEVICES MENU  

document.addEventListener('DOMContentLoaded', (event) => {
    let desktop = document.getElementById("desktop");
    let note = document.getElementById('notebook');
    let tablet = document.getElementById('tablet');
    let mobile = document.getElementById('mobile'); 

    desktop.addEventListener("click", (event) => {
      desktop.classList.add('active');
      note.classList.remove('active');
      tablet.classList.remove('active');
      mobile.classList.remove('active');

    }
    );

    note.addEventListener("click", (event) => {
        note.classList.add('active');
        desktop.classList.remove('active');
        mobile.classList.remove('active');
        tablet.classList.remove('active');
              
      }
      );
      tablet.addEventListener("click", (event) => {
        tablet.classList.add('active');
        desktop.classList.remove('active');
        mobile.classList.remove('active');
        note.classList.remove('active');
              
      }
      );

      mobile.addEventListener("click", (event) => {
        mobile.classList.add('active');
        desktop.classList.remove('active');
        note.classList.remove('active');
        tablet.classList.remove('active');
              
      }
      );
});