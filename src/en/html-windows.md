---
layout: base.html
title: 2 HTML Windows and 2 HTML Frames
---


A window provides the viewport for contents. A web document needs a primary window and any secondary window.

The primary window is the <code>body</code> element. 

A secondary window is a <code>dialog</code> element opened with <code>showModal().</code>

<p id="frames">
Each window needs a primary frame and any secondary frame.
</p> 

The primary frame is a <code>main</code> element without a <code>hidden</code> attribute.

A secondary frame is a <code>main</code> element with a <code>hidden</code> attribute.

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

