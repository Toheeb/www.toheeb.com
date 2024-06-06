---
title: 1+ Content Style Guides for HTML
tags:
  - hc
  - hc-protocol

hcChapter: 14
---

# 1+ Content Style Guides for HTML

<section>
<h2 id="boilerplate">Start with this 7-content boilerplate</h2>

Every web document should begin with the following 7 contents because of their respective purposes.

- [Content Root](/en/html-content-root/)

- [Charset Meta](/en/html-content-metas/#meta-charset)

- [Viewport Meta](/en/html-content-metas/#meta-custom-text)

- [Title Meta](/en/html-content-metas/#meta-title)

- [Base Stylesheet](/en/prose/)

- [Primary Window](/en/html-content-windows/#window-primary)

- [Main View](/en/html-content-windows/#view-main)


In code, you'll be using the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!-- Document Title --></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@toheeb/prose@0.0.0/index.min.css">

    <!-- More Content Metas -->
  </head>
  <body>
    <div class="window-primary">
      <main>
        <!-- Content -->
      </main>
      <!-- Hidden Main Views -->
    </div>
    <!-- Secondary Windows -->
  </body>
</html>
```

<details>
<summary>Expectations</summary>

It is expected that you'll do the following:

- Change the value of the `lang` attribute on the `html` element to the primary language of the page

- Specify an appropriate Document Title

- Add more [Content Metas](/en/html-content-metas/) as you wish

- Add [Secondary Windows](/en/html-content-windows/#window-secondary) if need be

- Add hidden [Main Views](/en/html-content-windows/#view-main) if you so wish

- Write [Content Blocks,](/en/html-content-blocks/) optionally through [Content Mixes,](/en/html-content-mixes) within the [Main View.](/en/html-content-windows/#view-main)
</details>


</section>
