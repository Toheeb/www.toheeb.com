---
layout: base.html
title: HTML Harmony
---

You can ignore, delay, imply, misuse, or scatter some elements and still have a valid web document; HTML is tolerant. But you'll get anonymous, unstable, vague, improper, or disorganized markup.

HTML Harmony helps authors and authoring tools pick up any markup. It proffers the use of elements for explicit, semantic, and orderly markup.

<section>
<hgroup>
<h2>Boilerplate</h2>
</hgroup>

Every web document must start with a doctype, charset, and title. Then, continue with metadata for viewport, color scheme, and base design system.

Since the body element, a primary window, must be the root of all windows, a div should act like the primary window to contain primary content.

Secondary Windows should follow the Primary Window, under the Window Root, rather than being scattered deep in the Window Root.

A window should have a Main Landmark that is not hidden.

A Main Landmark should have heading level 1 to relate content of the title element (meant for user agents) to users.
</section>


<section>
<hgroup>
<h2>Sections</h2>
</hgroup>

There should be no Navigational or Complementary Section if there's no General or Independent Section. What's there to navigate or complement?

In the same vein, there should be no header or footer if there's no General or Independent Section.

The main section of the document can't be independent of the document; it should be a General Section. Heading Level 1 should always use a General Section.

</section>


<section>
<hgroup>
<h2>Headings</h2>
</hgroup>

A Primary Heading may have Secondary Headings if there's a hgroup parent element. By the Open-Close principle, don't delay the use of hgroup. 

An heading should have an explicit section. Explicit section, unlike implied section, can cover content that precedes the heading or that follows a sub section. 

Per document, there should be only one heading level one (h1) — the root heading — like we have only one root window (body) and root element (html). It's illogical to have 2 roots in a document.

A sub heading should have its section as a child of its parent section; you can't section a non-sectioning element.

Also, a sub heading must be the next in line to avoid missing section. 

</section>


<section>
<hgroup>
<h2>
Titles
</h2>
</hgroup>

Like description title and column titles, other titles should bound their content with a wrapper for consistency.

There should be no titles outside of a section, a section header, and a section footer of a document. Section makes document; anything outside of a section and its relatives is outside of the document.
</section>


<section>
<hgroup>
<h2>Paragraphs</h2>
</hgroup>

When a block has no boundary, it becomes an implied paragraph; open for transparent elements to cross; open to different meanings. To avoid misinterpretations, use a specific block or a plain paragraph.
</section>


<section>
<hgroup>
<h2>Phrases</h2>
</hgroup>

Button Phrases are like Button Forms with the ability to contain rich text. Button Forms has no compatibility advantage anymore since IE Browsers are now obsolete. Use Button Phrases.

When a block have both text and non-breaking content as siblings, that text becomes an anonymous content. You can't target anonymous content with CSS or JS; you should use a span to wrap that text so it'll be targetable. 
</section>



<section>
<hgroup>
<h2>
Media
</h2>
</hgroup>

Embed elements rely on browser plug-ins to render their sources. Since most modern browsers no longer support plug-ins, this element is like-obsolete. You should use an appropriate Media element.
</section>


