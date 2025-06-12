---
layout: base.html
title: 2 HTML Windows
---


A window provides the viewport for contents. A web document needs a primary window and any secondary window.

The primary window is the <code>body</code> element. 

A secondary window is a <code>dialog</code> element opened with <code>showModal().</code>

<details>
<summary>Style guide</summary>

Since the <code>body</code> element doubles as the container for all windows, a <code>div</code> should contain contents of the primary window. 

```html
<body>

  <!-- primary window -->
  <div>

  </div>

  <!-- secondary window -->
  <dialog>

  </dialog>

</body>
```

</details>

