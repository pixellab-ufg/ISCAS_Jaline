window.onload = window.onresize = () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //ctx.lineWidth = 10;
   
    //variables
    let painting = false;

    function startPosition(){
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

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //eventListeners
    canvas.addEventListener("mousedown touchstart", startPosition);
    canvas.addEventListener("mouseup touchend", finishedPosition);
    canvas.addEventListener("mousemove touchmove", draw);


});