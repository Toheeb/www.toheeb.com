- Base URL
- Base Target
- Application Name
- Author Name
- Description
- Generator
- Keywords
- Referrer
- Theme Color
- Color Scheme
- Viewport
- Robots
- Canonical URL
- OG Title
- OG URL
- OG Type
- OG Image
- Custom Name
- Stylesheet Default
- Redirect
- Security Policy
- External Script
- Embedded Script
- Module Script
- Import Map
- Data Block
- Stylesheet Embed
- Template
- Title
- Icon
- Manifest
- Next
- Pingback
- Search
- External Stylesheet
- Alternate Stylesheet
- Syndication Feed
- Reformation
- Translation
- Asset Module
- Asset Font
- Asset Image
- Asset General



- Noscript



## Meta Element

- Noscript

- Template
- Title
- Style
  - Embedded
- Base
  - Base Target
  - Base URL
- Script
  - Classic Script
  - Module Script
  - Import Map
  - Data Bloc
- Link
  - icon
  - manifest
  - next
  - pingback
  - search
  - stylesheet (external)

  - alternate
    - Alternate (Link) Stylesheet (alternate stylesheet)
    - Syndication Feed
    - Reformation
    - Translation

- Meta
  - Attributes
    - name, http-equiv, or charset
    - content
    - media if name = theme-color

  - Name Highlights
    - HTML Standard
      - application name
      - author name
      - description
      - generator
      - keywords
      - referrer
      - theme-color
      - color-scheme
    - CSS Standard
      - viewport
    - SEO Standard
      - robots: one or more of:: index, noindex, follow, nofollow. Default is index, follow
      - canonical

  - http-equiv
    - default-style
    - refresh (Redirect)
    - content-security-policy

    Ignore:
    - Open/Social Graph (compulsory by ogp.me)
      (rules pertaining to the). Same as Custom Name
    - content-type cos it's an alternative of charset attribute
    - content-language cos it's non-conforming
    - set-cookie because it is non-conforming
    - x-ua-compatible because it targets IE - a retired browser engine 

  - charset=utf-8; once per doc




Rel Supported Tokens:
- icon
- manifest
- next
- pingback
- search
- stylesheet (external)

- alternate
  - Alternate (Link) Stylesheet
  - Syndication Feed
  - Reformation
  - Translation

- dns-prefetch
- preconnect
- prefetch

- modulepreload
- preload


Asset 
- Module preload because `as` is optional
- image preload bcos it has specific attr image srcset, etc
- general preload for others




- link
href or/and imagesrset
rel or itemprop
crossorigin, referrerpolicy, fetchpriority - dns-prefetch, icon, manifest, modulepreload, pingback, preconnect, prefetch, preload, stylesheet 
media:
integrity:  stylesheet, preload, or modulepreload
hreflang
type
imagesrcset, imagesizes: rel=preload and as=image
sizes: icon
as: rel with preload or modulepreload.
blocking: rel with stylesheet or expect
? color:
disabled: rel of stylesheet






- Alt Document
- App
- App Manifest
- Author
- Base URL
- Canonical
- Charset
- Content Policy
- Color Scheme
- Color Theme
- Custom Meta
- Custom Link
- Description
- Feed
- Generator
- Icon
- Keywords
- Next Document
- Pingback Handler
- Referrer
- Robots
- Script Block
- Script Module
- Script Map
- Script Data
- Search App
- Style Alt
- Style Area
- Style Default
- Style Link
- Template
- Timeout
- Title
- Viewport



type
nomodule
defer

src
async
crossorigin
integrity
referrerpolicy

fetchpriority
blocking



- Base
- Template
- Style Area
- Title


- Icon
- App Manifest
- Next Document
- Pingback Handler
- Search App
- Style Link
- Canonical

- Style Alt
- Feed
- Alternate Document

- Custom Link


- Charset

- Timeout
- Style Default
- Content Policy

- Application
- Author
- Description
- Generator
- Keywords
- Referrer
- Theme Color
- Color Scheme

- Robots
- Viewport

- Custom Meta

- Script Block
- Script Module
- Script Map
- Script Data






A metadata spread across different element should not be merged for one reason. With different element, a global attribute can modify one and not the other. While most attributes are not for metadata, the `hidden` attribute is enough to respect the separacy.

Should one be splitted? No. Because, a global attribute may be applied to one part and not the other. Wrong, meta is splitted. It can be. To 2 mutually exclusives.



































# ?

There are 2 ways and no 2 ways to build for the web.

There are no 2 ways and 2 ways to build for the web.

No 2 ways than to use the languages of the web.

2 ways to speak those languages are by code or nocode.

Unfortunately, nocode tools of today are not as feature rich as code tools.

And that makes creators (99% of the world) depends on developers (1% of the world). Developers, in turn, works for enterpreneurers who submits to the government. Government controls the media and shackles our mind while.

The web is open by definition but closed in reality.

To break free, we need to democratize the web workflow to make creators independent of developers up to the government.

Technically, that is building a nocode software with the power of a code software.


## 3 web languages to bull on

There are 3 web languages and many alternatives.




<!--  -->

A base element must have one or both of href and target but this doesn't have to be the base field. If none of those aren't available


<!-- HTML Attribute -->

Zero or more HTML attributes are specified on an HTML element and each is a key-value data.

In a CLI editor, attributes must be specified in the start tag of the element. In a GUI editor, especially a freeform editor, specifying attributes within a body element is obstructive to the reading flow. A better way is to link an attribute set to an element irrespective of their visual connection. send off a representation not identifier.

The development is based on the web component standard. It uses the attributeChangedCallback to accepts markup representation and updates the skeleton GUI made in connectedCallback.
























<!-- Prose -->

Say you have an image to illustrate a second line. And another image for the 3rd line in same paragraph. The block space for the image will make it look like 3 paragraphs. But if you use indent, it explicitly marks a new paragraph and not line. Since image block space may make it look visually separating with a first-indent nospace, You might want to do a full-line and first indent together.