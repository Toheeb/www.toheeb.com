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
