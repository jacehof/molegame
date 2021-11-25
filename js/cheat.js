
var mole = document.querySelectorAll('.mole');

window.addEventListener('keydown', v => {
    if (v.key == 'v') {
        window.addEventListener('keydown', i => {
            if (i.key == 'i') {
                window.addEventListener('keydown', n => {
                    if (n.key == 'n') {
                        window.addEventListener('keydown', a => {
                            if (a.key == 'a') {
                                window.addEventListener('keydown', y => {
                                    if (y.key == 'y') {
                                        mole.forEach(vinay => {
                                            vinay.style.backgroundImage = "url('./Assets/vinay.png')";
                                        });
                                        alert("Cheat Activated!!!")
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
  });