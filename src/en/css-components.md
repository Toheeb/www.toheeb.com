---
layout: base.html
title: CSS Components (draft)
---

For personalizable styles.

- [Color Tokens](#token-color)

- [Type Tokens](#token-type)

- [Space Tokens](#token-space)

- [Block Styles](#style-block)

- [Semantic CSS](#semantic-css)

- [Layout Mode](#mode-layout)

- [Indentation](#indentation)

- [Margin Top vs Margin Bottom](#margin-top-or-bottom)

- [Margin vs Padding vs Gap](#space-type)

<section id=token-color>
<hgroup>
<h2>Color Tokens</h2>
</hgroup>

Color builds on a hue token. It requires 2 functions to maintain expectations when hue changes in real-time. 

- calc() create multi-color design via hue deviation

- oklch() maintains contrast & hierachy via lightness and chroma
</section>

<section id=token-type>
<hgroup>
<h2>Typography Tokens</h2>
</hgroup>

Typography builds on 3 tokens: font family, font size, and font scale.

Font-family token expects a typeface to cover all design needs of the author: space, stretch, class, weight, style, variant, and stress.

Font-size and font-scale tokens create a geometric sequence of sizes for: asides, paragraphs, subheadings, and h6 to h1. 
</section>

<section id=token-space>
<hgroup>
<h2>Space Tokens</h2>
</hgroup>

Spacing builds on 3 tokens: line length, line height, and line scale.

Line-length token caps the width of blocks. Line-height token set appropriate vertical spacing relative to the font size of the block. Together with Line-scale token, they create a geometric sequence for margins on: block medias, paragraphs, followers, section 6 to 1.
</section>

<section id=style-block>
<hgroup>
<h2>Block Styles</h2>
</hgroup>

Primary Headings have 2 intrinsic properties: level and position. Both properties are best styled with a stacked tiered system; stacked because of low margin areas on mobile devices. For visual interest, the level property adds a size style to the component. 
</section>

<section id=semantic-css>
<hgroup>
<h2>Semantic CSS</h2>
</hgroup>


Web styles have semantics to cap creativity. Like glyphs, they need to look certain way to be what they are.

A link may have a text-underline. A button has an all-round border. A tab may have a bottom border on that of the tab list, or all-but-bottom-border sitting on the bottom border of the tab list. ![](/en/images/css-interactives.png)
</section>


<section id=space-type>
<hgroup>
  <h2>Padding vs Margin vs Gap</h2>
</hgroup>

Padding spaces an element's content away from its border, while Margin and Gap spaces an element away from another. 

Unlike a Margin which applies to one element, Gap applies to many elements via the container. Each with its usecase.

In Document Mode, blocks are the focus — not containers. You can't guarantee that writers will use containers. As such, layout requires the use of margins.

In Custom Mode, containers become relevant and gap becomes handy to target children. With gap, existing margins become an intrusion — a reason why we do margin zero on the universal selector.
</section>


<section id=margin-top-or-bottom>
<hgroup>
<h2>Margin Top or Bottom?</h2>
</hgroup>


You can specify both Margin Top and Margin Bottom and let Margin Collapse combine adjacent margins into the larger one.

But Margin Collapse has its rules — it won't work all the time. 

The reliable way is to use either margin top or margin bottom.

Margin Top can do one thing that Margin Bottom can't do. Margin Top can infer space heirarchy on heading levels.
</section>


<section id=indentation>
<hgroup>
<h2>Indentation</h2>
</hgroup>

In Document Layout, a reader may opt to read paragraphs with indent or not.

In Custom Layout, a reader is subjected to the choice of the author. An author may choose to do both in the same layout.

Base CSS should provide no settings of such in custom mode.
</section>


<section id=mode-layout>
<hgroup>
<h2>Document & Custom Layout</h2>
</hgroup>


A webpage is a web document that can be made to look like many things including an app.

There must be a Document Layout as it's a document. Users need not rely on opinionated Reader Modes of third parties.

There may be Custom Layouts in parts or full. Users should be able to switch or personalize layouts.

Meanwhile, Authors need not compromise with Classless Stylesheets for Document Layout only and Normalize Stylesheets for Custom Layouts only. Authors need a document stylesheet that is ready for custom stylesheets. 

</section>