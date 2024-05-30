---
title: The 2 Content Windows of HTML
tags:
  - hc
  - hc-preamble

hcChapter: 5

---


<header>
  <h1 id="content-window">The 2 Content Windows of HTML</h1>

  A Content Window relates a viewport of [Content Parts](/en/html-content-parts/) to users.

  <nav>
  <h2>Outline</h2>

  The 2 Content Windows are as follows:

  - [Primary Window](#window-primary)

  - [Secondary Window](#window-secondary)

  </nav>
</header>



<section>
  <h2 id="window-primary">Primary Window</h2>

  The Primary Window represents the default Content Window

  The syntax is one [`body` element](https://html.spec.whatwg.org/#the-body-element) per document with the following attributes and contents:

  - Zero or one count for each [Global Attribute](https://html.spec.whatwg.org/#global-attributes)

  - Zero or more counts for each of the following parts: [Main Part](/en/html-content-parts/#part-main), [Content Section,](/en/html-content-parts/#content-sections) [Header Part,](/en/html-content-parts/#part-header) and [Footer Part](/en/html-content-parts/#part-footer)

  ```html
  <body></body>
  ```
</section>


<section>
  <h2 id="window-secondary">Secondary Window</h2>

  A Secondary Window defines a temporary Content Window

  The syntax is a [`dialog` element](https://html.spec.whatwg.org/#the-dialog-element) with the following attributes and child elements:

  - Zero or one [`open` attribute](/en/html-content-attributes#open)

  - Zero or one count for each [Global Attribute](https://html.spec.whatwg.org/#global-attributes)

  - Zero or more counts for each of the following parts: [Content Section,](/en/html-content-parts/#content-sections) [Header Part,](/en/html-content-parts/#part-header) and [Footer Part](/en/html-content-parts/#part-footer)

  ```html
  <dialog>
    
  </dialog>
  ```
</section>


