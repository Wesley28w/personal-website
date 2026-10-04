(function () {
  var canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  var dots = [];
  var mouse = { x: -1000, y: -1000 };
  var spacing = 28;
  var baseRadius = 1.5;
  var waveSpeed = 0.008;
  var waveAmp = 12;
  var mouseRadius = 120;
  var time = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDots();
  }

  function initDots() {
    dots = [];
    var cols = Math.ceil(canvas.width / spacing) + 2;
    var rows = Math.ceil(canvas.height / spacing) + 2;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        dots.push({
          baseX: c * spacing,
          baseY: r * spacing,
          x: c * spacing,
          y: r * spacing
        });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += waveSpeed;

    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];

      var wave1 = Math.sin(d.baseX * 0.015 + time) * waveAmp;
      var wave2 = Math.cos(d.baseY * 0.012 + time * 0.7) * waveAmp * 0.6;

      d.x = d.baseX + wave2 * 0.4;
      d.y = d.baseY + wave1 + wave2;

      var dx = mouse.x - d.x;
      var dy = mouse.y - d.y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      var radius = baseRadius;
      var alpha = 0.18;

      if (dist < mouseRadius) {
        var force = (1 - dist / mouseRadius);
        d.x -= dx * force * 0.3;
        d.y -= dy * force * 0.3;
        radius = baseRadius + force * 2.5;
        alpha = 0.18 + force * 0.45;
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(37, 99, 235, " + alpha + ")";
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  canvas.addEventListener("mouseleave", function () {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  canvas.addEventListener("touchmove", function (e) {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  canvas.addEventListener("touchend", function () {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
