---
layout: base.html
title: CSS Components
---


<section>
<hgroup>
<h2>Semantic CSS</h2>
</hgroup>


Web styles have semantics to cap creativity. Like glyphs, they need to look certain way to be what they are.

A link may have a text-underline. A button has an all-round border. A tab may have a bottom border on that of the tab list, or all-but-bottom-border sitting on the bottom border of the tab list. ![](/en/images/css-interactives.png)
</section>


<section>
<hgroup>
  <h2>Padding vs Margin vs Gap</h2>
</hgroup>

Padding spaces an element's content away from its border, while Margin and Gap spaces an element away from another. 

Unlike a Margin which applies to one element, Gap applies to many elements via the container. Each with its usecase.

In Document Mode, blocks are the focus — not containers. You can't guarantee that writers will use containers. As such, layout requires the use of margins.

In Custom Mode, containers become relevant and gap becomes handy to target children. With gap, existing margins become an intrusion — a reason why we do margin zero on the universal selector.
</section>


<section>
<hgroup>
<h2>Margin Top or Bottom?</h2>
</hgroup>


You can specify both Margin Top and Margin Bottom and let Margin Collapse combine adjacent margins into the larger one.

But Margin Collapse has its rules — it won't work all the time. 

The reliable way is to use either margin top or margin bottom.

Margin Top can do one thing that Margin Bottom can't do. Margin Top can infer space heirarchy on heading levels.
</section>


<section>
<hgroup>
<h2>Indentation</h2>
</hgroup>

In Document Layout, a reader may opt to read paragraphs with indent or not.

In Custom Layout, a reader is subjected to the choice of the author. An author may choose to do both in the same layout.

Base CSS should provide no settings of such in custom mode.
</section>


<section>
<hgroup>
<h2>Document & Custom Layout</h2>
</hgroup>


A webpage is a web document that can be made to look like many things including an app.

There must be a Document Layout as it's a document. Users need not rely on opinionated Reader Modes of third parties.

There may be Custom Layouts in parts or full. Users should be able to switch or personalize layouts.

Meanwhile, Authors need not compromise with Classless Stylesheets for Document Layout only and Normalize Stylesheets for Custom Layouts only. Authors need a document stylesheet that is ready for custom stylesheets. 

</section>