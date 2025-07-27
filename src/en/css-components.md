---
layout: base.html
title: CSS Components (draft)
---

This might seem a stretch but it isn't far-fetched:

Users should have the power to make every website look the same, to look their style if they want.

That has been both possible and impossible.

It's technically possible with User Stylesheets. Still, it's practically impossible for users to create stylesheets for billions of websites.

What's feasible — in fact, expected — is authors to write True CSS. By True CSS, stylesheets that cascade from the very top — the user's choices in the browser settings.

So: when a user changes their choices, their style reflects in websites they visit.

Meanwhile, CSS has its limitations and workarounds.

CSS provides rem unit for authors to cascade down dimensions from a user's choice of font size in the browser settings. But, it provides nothing to cascade down other settings like font family and line height. However, it provides custom properties to fill the gaps.

With custom properties, there are 2 needs:

- A browser plugin to expose personalization options to users

- A style guide for personalizable custom designs

<section>
<hgroup>
<h2>:root styles</h2>
</hgroup>
<div>

:root styles expects 4 properties of the 2 basic design elements: shape and space.

Users will modify those properties via the browser plugin to personalize design components on the webpage.

All 4 properties are from the primary shape — the typographic shape. One of these properties influences the implicit design element — space.

<section>
<hgroup>
<h3>Color Property</h3>
</hgroup>
<div>

Color Theme builds on a Color Hue for a Color Scheme. It requires 2 functions for personalizations:

- calc() creates multi-color design via hue deviation

- oklch() maintains contrast and hierarchy via lightness and chroma.

The Base Color Chroma must be ? for any lightness of a hue to be in any Color Space defined by oklch().
</div>
</section>

<section>
<hgroup>
<h3>Font Family Property</h3>
</hgroup>
<div>

A Font Family is a typeface and its fallbacks. 

Each typeface, of a script like Latin, should have characters (letters, punctuations, and numbers) in all font variants:

- space: monospace or proportional

- class: sans, serif, or cursive

- weight: 100 to 900

- width: ultra-condensed (50%) to ultra-expanded (200%)

- style: normal, and italic.

- case: smalls, caps, and small caps.

- context: caption, body, and display.

Authors may then use font-variant-alternates to create a multi-typeface design from a single-typeface. 

</div>
</section>

<section>
<hgroup>
  <h3>Font Size Property</h3>
</hgroup>
<div>

Font Size controls the dimension of characters. With a font scale token, it builds a size system for small and cap asides, block medias, mains, subheadings, and sections for h6 to h1. 
</div>
</section>


<section>
<hgroup>
<h3>Line Length Property</h3>
</hgroup>
<div>

Line Length caps the width of a text for easy reflow of the reader's eyes.
</div>
</section>


<section>
<hgroup>
<h3>Line Height Property</h3>
</hgroup>
<div>

Line Height creates a block space on a line of text. 

The lead it creates should build the padding, margin, and gap of blocks and mixes.

<details>
<summary>Padding vs Margin vs Gap</summary>
<div>

Padding spaces an element's content away from its border, while Margin and Gap spaces an element away from another. 

Unlike a Margin which applies to one element, Gap applies to many elements via the container. Each with its usecase.

In Document Mode, blocks are the focus — not containers. You can't guarantee that writers will use containers. As such, layout requires the use of margins.

In Custom Mode, containers become relevant and gap becomes handy to target children. With gap, existing margins become an intrusion — a reason why we do margin zero on the universal selector.
</div>
</details>

<details>
<summary>Margin Top or Bottom</summary>
<div>

You can specify both Margin Top and Margin Bottom and let Margin Collapse combine adjacent margins into the larger one.

But Margin Collapse has its rules — it won't work all the time. 

The reliable way is to use either margin top or margin bottom.

Margin Top can do one thing that Margin Bottom can't do. Margin Top can infer space heirarchy on heading levels.
</div>
</details>
</div>
</section>

</div>
</section>


<section>
<hgroup>
<h2>Heading Styles</h2>
</hgroup>
<div>

Primary Headings have 2 intrinsic properties: level and position. Both properties are best styled with a stacked tiered system; stacked because of low margin areas on mobile devices. For visual interest, the level property adds a size style to the component. 
</div>
</section>


<aside>
<hgroup>
<h2>Random Notes</h2>
</hgroup>
<div>

- [Semantic CSS](#semantic-css)

- [Layout Mode](#mode-layout)

- [Indentation](#indentation)


<section id=semantic-css>
<hgroup>
<h3>Semantic CSS</h3>
</hgroup>


Web styles have semantics to cap creativity. Like glyphs, they need to look certain way to be what they are.

A link may have a text-underline. A button has an all-round border. A tab may have a bottom border on that of the tab list, or all-but-bottom-border sitting on the bottom border of the tab list. ![](/en/images/css-interactives.png)
</section>


<section id=mode-layout>
<hgroup>
<h3>Document & Custom Layout</h3>
</hgroup>


A webpage is a web document that can be made to look like many things including an app.

There must be a Document Layout as it's a document. Users need not rely on opinionated Reader Modes of third parties.

There may be Custom Layouts in parts or full. Users should be able to switch or personalize layouts.

Meanwhile, Authors need not compromise with Classless Stylesheets for Document Layout only and Normalize Stylesheets for Custom Layouts only. Authors need a document stylesheet that is ready for custom stylesheets. 

</section>


<section id=indentation>
<hgroup>
<h3>Indentation</h3>
</hgroup>

In Document Layout, a reader may opt to read paragraphs with indent or not.

In Custom Layout, a reader is subjected to the choice of the author. An author may choose to do both in the same layout.

Base CSS should provide no settings of such in custom mode.
</section>


</div>
</aside>
