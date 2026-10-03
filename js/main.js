(function () {
  var site = SITE_DATA;

  document.title = site.name;
  document.getElementById("site-name").textContent = site.name;
  document.getElementById("site-tagline").textContent = site.tagline;

  var photoEl = document.getElementById("site-photo");
  if (site.photo) {
    photoEl.src = "content/" + site.photo;
  } else {
    photoEl.style.display = "none";
  }

  var socialHTML = "";
  if (site.social && site.social.github) {
    socialHTML += '<a href="' + site.social.github + '" target="_blank" rel="noopener">GitHub</a>';
  }
  if (site.social && site.social.linkedin) {
    socialHTML += '<a href="' + site.social.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>';
  }
  if (site.social && site.social.openreview) {
    socialHTML += '<a href="' + site.social.openreview + '" target="_blank" rel="noopener">OpenReview</a>';
  }
  if (site.resume) {
    socialHTML += '<a href="content/' + site.resume + '">CV</a>';
  }
  document.getElementById("social-links").innerHTML = socialHTML;

  document.getElementById("about-text").innerHTML = site.about;

  var highlightsEl = document.getElementById("highlights");
  if (site.highlights && site.highlights.length) {
    var hlHTML = "";
    site.highlights.forEach(function (item) {
      hlHTML += "<li>" + item + "</li>";
    });
    highlightsEl.innerHTML = hlHTML;
  } else {
    highlightsEl.style.display = "none";
  }

  var expHTML = "";
  (site.experience || []).forEach(function (exp) {
    expHTML += '<li class="entry"><div class="entry-header">';
    expHTML += "<h3>" + exp.title + " &mdash; " + exp.company + "</h3>";
    expHTML += '<span class="entry-date">' + exp.date + "</span>";
    expHTML += "</div>";
    expHTML += "<p>" + exp.description + "</p>";
    if (exp.gallery && GALLERY_DATA[exp.gallery]) {
      expHTML += '<a href="gallery.html?project=' + exp.gallery + '" class="gallery-link">View gallery &rarr;</a>';
    }
    expHTML += "</li>";
  });
  document.getElementById("experience-list").innerHTML = expHTML;

  var projHTML = "";
  (site.projects || []).forEach(function (proj) {
    var nameHTML = proj.url
      ? '<a href="' + proj.url + '" target="_blank" rel="noopener">' + proj.name + "</a>"
      : proj.name;
    projHTML += '<li class="entry"><div class="entry-header">';
    projHTML += "<h3>" + nameHTML + "</h3>";
    projHTML += '<span class="entry-date">' + proj.date + "</span>";
    projHTML += "</div>";
    projHTML += "<p>" + proj.description + "</p>";
    if (proj.gallery && GALLERY_DATA[proj.gallery]) {
      projHTML += '<a href="gallery.html?project=' + proj.gallery + '" class="gallery-link">View gallery &rarr;</a>';
    }
    projHTML += "</li>";
  });
  document.getElementById("projects-list").innerHTML = projHTML;

  var writingHTML = "";
  Object.keys(BLOG_DATA).forEach(function (slug) {
    var post = BLOG_DATA[slug];
    writingHTML += '<li class="entry"><div class="entry-header">';
    writingHTML += '<h3><a href="post.html?post=' + slug + '">' + post.title + "</a></h3>";
    writingHTML += '<span class="entry-date">' + post.date + "</span>";
    writingHTML += "</div>";
    if (post.preview) {
      writingHTML += "<p>" + post.preview + "</p>";
    }
    writingHTML += "</li>";
  });
  var writingEl = document.getElementById("writing-list");
  if (writingHTML) {
    writingEl.innerHTML = writingHTML;
  } else {
    writingEl.parentElement.style.display = "none";
  }

  if (site.email) {
    document.getElementById("contact-info").innerHTML =
      '<a href="mailto:' + site.email + '">' + site.email + "</a>";
  }
})();
