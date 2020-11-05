window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //ctx.lineWidth = 10;
   
    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap = 'round';

        ctx.lineTo(
            (e.targetTouches[0] ? e.targetTouches[0].pageX : e.changedTouches[e.changedTouches.length-1].pageX)
        , (e.targetTouches[0] ? e.targetTouches[0].pageY : e.changedTouches[e.changedTouches.length-1].pageY)
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(
            (e.targetTouches[0] ? e.targetTouches[0].pageX : e.changedTouches[e.changedTouches.length-1].pageX)
            , (e.targetTouches[0] ? e.targetTouches[0].pageY : e.changedTouches[e.changedTouches.length-1].pageY)
            );
    }

    //eventListeners

    ['mousedown', 'touchstart'].forEach(function(e) {
        window.addEventListener(e, startPosition);
      });

    ['mouseup', 'touchend'].forEach(function(e) {
        window.addEventListener(e, finishedPosition);
      });

    ['mousemove', 'touchmove'].forEach(function(e) {
        window.addEventListener(e, draw);
      });
     

    /*
    canvas.addEventListener("mousedown touchstart", startPosition);
    canvas.addEventListener("mouseup touchend", finishedPosition);
    canvas.addEventListener("mousemove touchmove", draw); */


});