---
layout: base.html
title: 33+2 Metadata in HTML
---

HTML Metadata provides information about a document via text or links in the [<code>head</code> element.](/en/html-overview#branch)

Via text, it specifies Title, Application Name, Author Name, Charset Name, Color Scheme, Color Theme, Description Text, Generator Name, Key Words, Referrer Policy, Robot Policy, Security Policy, Redirect Time, Default Stylesheet, Stylesheet Area, Markup Template, Script Data, Script Map, Script Block Area, Script Module Area, or Custom Text. 

Via links, it specifies Base URL, Canonical Document, Alternative Stylesheet, Alternative Document, Alternative Feed, Icon, Manifest, Next document, Pingback, Searcher, Stylesheet, Script Block, Script Module, or Custom Link.


<details id="method">
<summary>How 8 elements creates 33+2 metadata in HTML</summary>

The 8 metadata elements in HTML are `base`, `link`, `meta`, `noscript`, `script`, `style`, `template`, and `title`.

The `base`, `style`, `template`, and `title` elements create one metadata each.

The `link` element, via some keywords of its `rel` attribute, creates 9 standard metadata and any custom link. Those keywords are `icon`, `manifest`, `next`, `pingback`, `search`, and `stylesheet`. Furthermore, the `alternate` keyword creates 3 metadata depending on the presence of a `stylesheet` keyword and whether the `type` attribute specifies an application Mime Type.

The `meta` element creates a total of 14 standard metadata and any custom text. One metadata via its `charset` attribute. Three via the valid keywords in `http-equiv` attribute: `content-security-policy`, `default-style`, and `refresh`. Ten via the `name` attribute: `application-name`, `author`, `description`, `generator`, `keywords`, `referrer`, `theme-color`, `color-scheme`, `viewport` (by CSS Standard,) `robots` (by SEO standard.)

The `script` element creates 6 metadata via a combination of its `type` and `src` attributes.

</details>