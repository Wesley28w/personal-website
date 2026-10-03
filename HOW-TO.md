# How to use your portfolio site

Everything you edit lives in the `content/` folder. After any change, double-click `build.cmd` (or run `python build.py`) to rebuild.


## Your info, experience, and projects

Edit **`content/site.json`**. It controls your entire site.

```json
{
  "name": "Your Name",
  "tagline": "One-liner about you.",
  "photo": "photo.jpg",
  "resume": "resume.pdf",
  "about": "A few sentences about you.",
  "highlights": [
    "Dean's List, University of X",
    "Built XYZ — 10k+ users",
    "Studying Computer Science"
  ],
  "social": {
    "github": "https://github.com/you",
    "linkedin": "https://linkedin.com/in/you"
  },
  "experience": [ ... ],
  "projects": [ ... ],
  "email": "you@email.com"
}
```

### Add an experience

Add an object to the `"experience"` array:

```json
{
  "title": "Software Engineer",
  "company": "Cool Corp",
  "date": "2024 – Present",
  "description": "What you did there.",
  "gallery": "cool-corp"
}
```

The `"gallery"` field is optional. If included, it should match a folder name in `content/gallery/`.

### Add a project

Add an object to the `"projects"` array:

```json
{
  "name": "My App",
  "url": "https://github.com/you/my-app",
  "date": "2024",
  "description": "What it does.",
  "gallery": "my-app"
}
```

`"url"` and `"gallery"` are both optional.


## Profile photo and CV

Drop your photo and resume into the `content/` folder:

```
content/
  photo.jpg       <-- your profile photo (any name, update site.json to match)
  resume.pdf      <-- your CV
```


## Galleries

1. Create a folder inside `content/gallery/` named after the project:
   ```
   content/gallery/my-app/
   ```
2. Drop images into it (`.jpg`, `.png`, `.gif`, `.webp`, `.svg`, `.avif`).
3. Run `build.cmd`.

That's it. The gallery page auto-detects every image in the folder. Images display in alphabetical order by filename, so prefix with numbers to control order (`01.png`, `02.png`, etc.).

Make sure the folder name matches the `"gallery"` field in `site.json`.


## Blog posts

1. Create a `.md` file inside `content/posts/`:
   ```
   content/posts/my-new-post.md
   ```
2. Start the file with this header (copy-paste and fill in):
   ```
   ---
   title: My Post Title
   date: October 2026
   preview: First sentence or two that shows on the main page...
   ---
   ```
3. Write your post below the `---` in regular Markdown.
4. Run `build.cmd`.

The post automatically appears on your site. Posts are listed newest-first by filename, so name them with a date prefix to control order: `2026-10-01-my-post.md`.

### What you can use in posts

- **Bold**, *italic*, ~~strikethrough~~
- [Links](https://example.com)
- `inline code` and fenced code blocks with syntax highlighting
- Lists (bulleted and numbered)
- Blockquotes
- Images: `![alt text](path/to/image.png)`
- LaTeX math: `$E = mc^2$` for inline, `$$..$$` for display
- YouTube embeds: `<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>`
- Local video: `<video controls width="100%"><source src="path/to/video.mp4" type="video/mp4"></video>`
- Any HTML works inside the markdown


## After any change

1. Double-click **`build.cmd`** (or run `python build.py` in terminal).
2. Refresh your browser.

The build generates three files in `js/` — don't edit those by hand.


## Deploying

The site is static files. Upload the whole folder to any host:

- **GitHub Pages**: push to a repo, enable Pages in settings
- **Netlify / Vercel**: drag and drop the folder
- **Any web server**: just copy the files

Make sure to include the `content/` folder since it holds your images, resume, and post content.


## File structure

```
content/                    <-- YOU EDIT THIS
  site.json                 <-- your info, experience, projects
  photo.jpg                 <-- profile photo
  resume.pdf                <-- your CV
  posts/                    <-- blog posts (markdown files)
    my-post.md
  gallery/                  <-- gallery images (one folder per project)
    my-project/
      01.png
      02.png

build.py                    <-- run this after changes
build.cmd                   <-- double-click this on Windows

index.html                  <-- don't edit (template)
post.html                   <-- don't edit (template)
gallery.html                <-- don't edit (template)
css/style.css               <-- don't edit (unless restyling)
js/                         <-- don't edit (auto-generated + templates)
```
