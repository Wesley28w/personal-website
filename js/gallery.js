(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("project");

  if (!slug || !GALLERY_DATA[slug]) {
    document.getElementById("gallery-title").textContent = "Project not found";
    document.getElementById("gallery-grid").innerHTML =
      '<p class="gallery-empty">No gallery exists for this project.</p>';
    return;
  }

  var project = GALLERY_DATA[slug];
  document.title = project.title + " — Gallery";
  document.getElementById("gallery-title").textContent = project.title;

  var grid = document.getElementById("gallery-grid");
  project.images.forEach(function (src) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    grid.appendChild(img);
  });
})();
