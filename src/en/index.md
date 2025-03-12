---
layout: page.html
title: Site Index
siteNav: false
---

# {{title}}

- [HTML: How 8 elements create 31+2 kinds of metadata](/en/html-metadata-elements/)

<details>
<summary>Recycle Bin</summary>

1. [Unlocking the web's promise](/en/promise/)

2. [HTML by Contents (not Elements)](/en/html-resource/)

3. [30 HTML Content Metas](/en/html-content-metas/)

4. [132 HTML Content Attributes](/en/html-content-metas/)

{% for post in collections.all %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}
</details>
