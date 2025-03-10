---
layout: page.html
title: "HTML: How 8 elements create 32+2 kinds of metadata"
canonical: https://www.toheeb.com/en/html-metadata-elements/
---


<section>

# HTML: How 8 elements create 32+2 kinds of metadata

The 8 metadata elements in HTML are `base`, `link`, `meta`, `noscript`, `script`, `style`, `template`, and `title`.

`base`, `style`, `template`, and `title` creates one metadata respectively; `link` creates 10 standard metadata and any custom link; `meta` creates 14 standard metadata and any custom meta; `noscript` does not create metadata but modifies some metadata; and `script` creates 4 metadata. In total, that's 32 standard metadata and 2 custom metadata.


<section>

## How `link` element creates 10+1 standard metadata

A `link` element accepts sixteen local attributes. Only `rel` attribute creates metadata but all attributes modify those metadata.

The `rel` attribute accepts 13 keywords by HTML standard, 1 keyword by SEO standard, and any [custom keyword.](https://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions) 

`dns-prefetch`, `expect`, `modulepreload`, `preconnect`, `prefetch`, or `preload` keyword creates no metadata but modify other metadata. 

`icon`, `manifest`, `next`, `pingback`, `search`, `stylesheet`, or `canonical` keyword creates a metadata. 

`alternate` keyword creates 3 metadata depending on the presence of a `stylesheet` keyword; a `type` attribute, and an `hreflang` attribute.
</section>



<section>

## How `meta` element creates 14+1 standard metadata

A `meta` element accepts five local attributes. Only `charset`, `http-equiv`, and `name` creates metadata while others modify them.

`charset` attribute creates 1 metadata, `http-equiv` creates 3 metadata, and `name` attribute creates 10 standard metadata and any custom meta.

`http-equiv` attribute accepts seven values. `content-security-policy`, `default-style`, and `refresh` value creates a metadata respectively; `content-language` and `set-cookie` are non-conforming; `content-type` value is an alternative for the `charset` attribute; while `x-ua-compatible` is for the now-defaunct Internet Explorer.

`name` attribute accept 8 values by HTML standard, 1 value (`viewport`) by CSS standard, 1 value (`robots`) by SEO standard, and any custom value. Each non-custom value creates a metadata.
</section>


<section>

## How `script` element creates 4 metadata

A `script` element accepts 9 local attributes but only the `type` attribute creates the 4 metadata while others modify those metadata.

`type` attribute creates a metadata when the value is: an `importmap`; a `module`; omitted, empty, or has a javascript mime type; or any other mime type value.

</section>

</section>