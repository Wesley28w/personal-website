(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("post");

  if (!slug || !BLOG_DATA[slug]) {
    document.getElementById("post-title").textContent = "Post not found";
    document.getElementById("post-date").textContent = "";
    document.getElementById("post-body").innerHTML =
      '<p class="gallery-empty">This post does not exist.</p>';
    return;
  }

  var post = BLOG_DATA[slug];
  document.title = post.title;
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-date").textContent = post.date;

  var html = marked.parse(post.content);
  document.getElementById("post-body").innerHTML = html;

  renderMathInElement(document.getElementById("post-body"), {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
})();
