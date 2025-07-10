---
layout: plain.html
title: HTML Components
pageStyle: |
  <style>
    :root {
      --base-line-length: 40rem;
    }

    ul {
      display: flex;
      column-gap: 2rem;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    li {
      flex: 0 1 10.5rem;
    }
  </style>
---


<section>
<hgroup>
<h1>{{title}}</h1>
<p>A spellbook that matches your mental model</p>
</hgroup>

Authors conjure elements to create components in HTML. 

Meanwhile, HTML is so tolerant that you can ignore or misuse some elements and still have a working document.

It takes some wizardry to use the right element, at the right time, in the right place for a semantic, consistent, and future-proofed document. 

You need magic because HTML learning resources are counterintuitive; they organize HTML by elements when you think in components.

This resource organizes HTML by components — not elements. It spells all 138 components HTML creates. You will browse, choose, and see the element, attributes, and conditions to create a specific component. 

No need to rethink in elements.

<section>
<hgroup>
<h2>Overview</h2>
</hgroup>

A web document has one root and two branches, like the letter Y. The root is the html element and the branches are the head element and the body element.

The head element contains Metadata — optionally, via a noscript element; the body element contains Windows. Windows contain Frames; Frames contain Blocks and Mix of Blocks; and Blocks contain Media, Forms, and Breaks — optionally, via a Phrase.

<details>
<summary>Style Guide</summary>

Every web document must start with a doctype, charset, and title. Then, continue with metadata for viewport, color scheme, and base design system.

Since the body element, a primary window, must be the root of all windows, a div should act like the primary window to contain primary content.

Secondary Windows should follow the Primary Window, under the Window Root, rather than being scattered deep in the Window Root.

A window should have a Main Landmark that is not hidden.

A Main Landmark should have heading level 1 to relate content of the title element (meant for user agents) to users.
</details>
</section>


<section>
<hgroup>
<h2>Metadata</h2>
</hgroup>

HTML has 35 Metadata components:

- Alternative Document

- Alternative Feed

- Application Name

- Application Manifest

- Author Name

- Base URL

- Charset Name

- Color Scheme

- Color Theme

- Description Text

- General Link

- General Data

- Generator Name

- Icon

- Keywords

- Language

- Next Document

- Noscript

- Pingback Handler

- Security Policy

- Script Block

- Script Data

- Script Map

- Script Module

- Search Document

- Style Alternative

- Style Area

- Style Default

- Style Link

- Redirect Policy

- Referrer Policy

- Robot Policy

- Title

- Template

- Viewport

A Noscript Metadata must not contain the following metadata:

- Base URL

- Language

- Script Block

- Script Data

- Script Map

- Script Module

- Template

- Title

</section>


<section>
<hgroup>
<h2>Windows</h2>
</hgroup>

HTML has 2 window components:

- Primary Window

- Secondary Window

</section>



<section>
<hgroup>
<h2>Frames</h2>
</hgroup>

Frames are parts of a Window or Section.

HTML has 7 frame components. The first 3 are contextual primary frames while the other 4 are secondary frames.

- Main Frame

- General Section

- Independent Section

- Navigation Frame

- Complementary Frame

- Header Frame

- Footer Frame

In window context, primary frame is Main Frame. In Main Frame context, primary frame is General Section. In General Frame context, primary frame is a General Frame or an Independent Frame.

One Main Frame must be active at a time, others must have a `hidden` attribute each.

Of these frames: General, Independent, Navigation, and Complementary Frames are Sections; All except Independent Frame are landmarks in the context of a window.

<details>
<summary>Style</summary>

There should be no Navigational or Complementary Frames if there's no General or Independent Frame. What's there to navigate or complement?

Similarly, there should be no header or footer Frames if there's no General or Independent Frame.

The section that makes the Main Frame of a document can't be independent of the document; it should be a General Frame. Heading Level 1 should always use a General Frame.

</details>
</section>


<section>
<hgroup>
<h2>Mixes</h2>
</hgroup>

Mixes build Frames of a Window with a set of Blocks. 

HTML has 17 mixes; 12 are simple mixes called Cards, and 5 are compound mixes called Layers.

- Address Card

- Anchor Card

- Deletion Card

- Description Layer

- Details Card

- Fieldset Card

- Form Card

- General Card

- Insertion Card

- Map Card

- Menu List Layer

- Noscript Card

- Ordered List Layer

- Quote Card

- Search Card

- Table Layer

- Unordered List Layer


Each Layer eventually contain cards.

List Layers contain Item Cards.

Description Layer contains Description Items. Description Items contain one or more Description Titles, and one or more Description Cards.

Table Layers contain optional Table-caption cards, zero or more Table-column Reference, optional Table Head, zero or more Table Body, and optional Table Foot. Table-column Reference contains Table-column Items if there's no <code>span</code> attribute. Table Head, Table Body, and Table Foot contains Table Rows. Table Rows contain Table Titles if in Table Head, otherwise contain Table Data Cards.
</section>


<section>
<hgroup>
<h2>Blocks</h2>
</hgroup>

Blocks build Frames with Medias, Forms, Breaks, and Phrases.

HTML has 14 Blocks; 2 are Paragraph Blocks, 4 are Title Blocks, and 8 are Heading Blocks. Of 8 Heading Blocks, all level (L#) headings are primary headings and others are secondary headings.

- Column Title

- Description Title

- Details Title

- Fieldset Title

- Kicker Heading

- L1 Heading

- L2 Heading

- L3 Heading

- L4 Heading

- L5 Heading

- L6 Heading

- Subheading

- Preformatted Paragraph

- Plain Paragraph

Secondary Blocks are Kicker Blocks and Subheading Blocks. Both are Plain Paragraphs. But a Kicker Block is comes before the Heading Block while a Subheading Block comes after.


<details>
<summary>Style</summary>

A Primary Heading may have Secondary Headings if there's a hgroup parent element. By the Open-Close principle, don't delay the use of hgroup. 

An heading should have an explicit section. Explicit section, unlike implied section, can cover content that precedes the heading or that follows a sub section. 

Per document, there should be only one heading level one (h1) — the root heading — like we have only one root window (body) and root element (html). It's illogical to have 2 roots in a document.

A sub heading should have its section as a child of its parent section; you can't section a non-sectioning element.

Also, a sub heading must be the next in line to avoid missing section. 

Like description title and column titles, other titles should bound their content with a wrapper for consistency.

There should be no titles and paragraphs outside of a section, a section header, and a section footer of a document. Section makes document; anything outside of a section and its relatives is outside of the document.

When a block has no boundary, it becomes an implied paragraph; open for transparent elements to cross; open to different meanings. To avoid misinterpretations, use a specific block or a plain paragraph.
</details>
</section>


<section>
<hgroup>
<h1>Phrases</h1>
</hgroup>

Phrases build Blocks with a set of Media, Forms, and Breaks.

HTML has 31 phrases for content types:

- Abbreviation

- Bidirection

- Button

- Citation

- Code

- Complementary

- Data

- Definition

- Deletion

- Dormancy

- Emphasis

- General

- Highlight

- Hyperlink

- Idiom

- Input

- Insertion

- Keyword

- Label

- Meter

- Noscript

- Output

- Progress

- Quote 

- Ruby

- Strong

- Subscript

- Superscript

- Time

- Vague

- Variable

Button Phrase must contain non-interactive Forms, Media, and Breaks.

<details>
<summary>Style Guide</summary>

When a block have both text and non-breaking content as siblings, that text becomes an anonymous content. You can't target anonymous content with CSS or JS; you should use a span to wrap that text so it'll be targetable. 
</details>
</section>



<section>
<hgroup>
<h2>Media</h2>
</hgroup>

Media present information in Blocks. 

HTML has 9 media components:

- Audio Media

- Canvas Image

- Math Text

- General Text

- General Media

- Raster Image

- Vector Image

- Video Media

- Web Document

Math Text and Vector Images contain elements defined in their namespaces.

Audio and Video Media must contain Sources if no `src` attribute, then zero or more Tracks. Either media must not contain a media.

Canvas Image must not contain these interactive elements: Details Title; Web Document; Audio and Video Media without `controls` attribute; Forms except Buttons, Checkbox Forms, Radio Forms and Select Forms with a <code>multiple</code> attribute or a display size greater than one.

General Media may contain content as fallback.

---

Technically, there's Embed Media that relies on browser plugins to render its source. Since most modern browsers no longer support plug-ins, this media is like-obsolete. You should use an appropriate Media element.
</section>


<section>
<hgroup>
<h2>Forms</h2>
</hgroup>

Forms accept information in Blocks.

HTML has 20 form components for content types:

- Checkbox

- Color

- Date

- Datetime

- Email

- File

- Month

- Number

- Password

- Program

- Radio

- Range

- Search

- Selection

- Telephone

- Textarea

- Textline

- Time

- URL

- Week

Selection Forms contain zero or more of Options, Option Groups and Separators. Options contain nothing if there's both label and value attribute; otherwise, text. Option Groups contain zero or more Options.

Textarea Forms contain General Text as the default value.

<details>
<summary>Style</summary>

There are Button Forms but they do not allow rich text like Button Phrase. Both have same functionality. Button Forms has no compatibility advantage since IE Browsers are now obsolete. You should use Button Phrases.

</details>
</section>


<section>
<hgroup>
<h2>Breaks</h2>
</hgroup>

Breaks change composition within a Block.

HTML has 3 breaks:

- Word Break

- Text Break

- Thematic Break

Thematic Break also changes composition between paragraph blocks.
</section>
</section>

<aside>

<details id="method">
<summary>How 8 elements creates 33+2 metadata in HTML</summary>

The 8 metadata elements in HTML are `base`, `link`, `meta`, `noscript`, `script`, `style`, `template`, and `title`.

The `base`, `style`, `template`, and `title` elements create one metadata each.

The `link` element, via some keywords of its `rel` attribute, creates 9 standard metadata and any custom link. Those keywords are `icon`, `manifest`, `next`, `pingback`, `search`, and `stylesheet`. Furthermore, the `alternate` keyword creates 3 metadata depending on the presence of a `stylesheet` keyword and whether the `type` attribute specifies an application Mime Type.

The `meta` element creates a total of 14 standard metadata and any custom text. One metadata via its `charset` attribute. Three via the valid keywords in `http-equiv` attribute: `content-security-policy`, `default-style`, and `refresh`. Ten via the `name` attribute: `application-name`, `author`, `description`, `generator`, `keywords`, `referrer`, `theme-color`, `color-scheme`, `viewport` (by CSS Standard,) `robots` (by SEO standard.)

The `script` element creates 6 metadata via a combination of its `type` and `src` attributes.

</details>
</aside>