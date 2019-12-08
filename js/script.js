const callButton = document.querySelector('.call__bnt'),
    orderWindow = document.querySelector('.order__call'),
    overlay = document.querySelector('.main__overlay'),
    submit = document.querySelector('.submit__consult'),
    quickButton = document.querySelector('.quick__button'),
    submitButton = document.querySelector('.submit__btn'),
    submitQuick = document.querySelector('.quick__btn'),
    tnxWindow = document.querySelector('.order__tnx'),
    quickWindow = document.querySelector('.order__quick');
    
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
      
        return {
          top: pageYOffset
        };
      }

callButton.addEventListener('click', () => {

   let callCoords = getCoords(callButton);

    document.body.style.overflow = "hidden";
    overlay.style.display = 'block';
    orderWindow.style.display = 'flex';
    orderWindow.style.top = callCoords + 'px';
    tnxWindow.style.display = '';
    quickWindow.style.display = '';
    
});

quickButton.addEventListener('click', (event) => {
    event.preventDefault();

    let quickCoords = getCoords(quickButton);

    document.body.style.overflow = "hidden";
    quickWindow.style.display = 'flex';
    quickWindow.style.top = quickCoords.top + 'px';
    
    overlay.style.display = 'block';
    tnxWindow.style.display = '';
    orderWindow.style.display = '';
});

overlay.addEventListener('click', (event) => {

    if (event.target.className != 'del') {
        return;
    }

    if (event.target.closest('.order__call') != null && event.target.closest('.order__call').className == 'order__call') {
            overlay.style.display = '';
            document.body.style.overflow = "";
            return;
        }

        if (event.target.closest('.order__tnx') != null &&
        event.target.closest('.order__tnx').className == 'order__tnx' ) {
            overlay.style.display = '';
            document.body.style.overflow = "";
            return;
        }

        if (event.target.closest('.order__quick') != null &&
        event.target.closest('.order__quick').className == 'order__quick' ) {
            overlay.style.display = '';
            document.body.style.overflow = "";
            return;
        }
   
});

// del2.addEventListener('click', () => {
//     overlay.style.display = '';
//     document.body.style.overflow = "";
// });

// del3.addEventListener('click', () => {
//     overlay.style.display = '';
//     document.body.style.overflow = "";
// });

submitButton.addEventListener('click', () => {

    let coords = getCoords(submitButton);
    orderWindow.style.display = '';
    tnxWindow.style.display = 'flex';
    tnxWindow.style.top = coords.top + 'px';
    quickWindow.style.display = '';

});

submitQuick.addEventListener('click', () => {

    let coordsQuick = getCoords(submitQuick);

    orderWindow.style.display = '';
    tnxWindow.style.top = coordsQuick.top + 'px';
    tnxWindow.style.display = 'flex';
   
    quickWindow.style.display = '';
});

submit.addEventListener('click', (event) => {
    event.preventDefault();

    let subCoords = getCoords(submit);
    document.body.style.overflow = "hidden";
    overlay.style.display = 'block';
    tnxWindow.style.display = 'flex';
    tnxWindow.style.top = subCoords.top + 'px';
    orderWindow.style.display = '';
    quickWindow.style.display = '';
});

