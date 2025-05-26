---
layout: base.html
title: HTML Boilerplate
---

Every web document needs the root element, the two branch elements, the primary window, the primary frame, and some metadata.

The set of metadata should include language meta, charset meta, viewport meta, title meta, color scheme meta, base style meta, and base settings meta. 

```html
<!-- Language Meta -->
<!DOCTYPE>

<!-- root element -->
<html>

  <!-- the first branch -->
  <head>

    <!-- Charset Meta -->
    <meta charset="UTF-8">

    <!-- Viewport Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Title Meta -->
    <title> <!-- ... --> </title>

    <!-- Color Scheme Meta -->
    <meta name="color-scheme" content="light dark">

    <!-- Base Style Meta -->
    <link rel="stylesheet" href="https://unpkg.com/@toheeb/base@x.x.x/base.css">

    <!-- Base Settings Meta -->
    <script src="https://unpkg.com/@toheeb/base@x.x.x/base-settings.js"></script>
  </head>

  <!-- the second branch -->
  <body>

    <!-- Primary Window -->
    <div>

      <!-- Primary Frame -->
      <main>

      </main>
      
    </div>
    
  </body>
</html>
```
