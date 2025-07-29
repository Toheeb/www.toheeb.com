---
layout: base.html
title: HTML Tips for Better Web Documents
titleAlias: HTML Tips
image: /en/media/og-html-tips.png
subtitle: Examples from the wild, tips for your sites
---

If you want a new tip in your inbox, [subscribe for tips.](https://toheeb.substack.com) If you need a full page audit, [request for audit.](https://tally.so/r/3q1vQ9)


<ol reversed>

<li>

Avoid blank links.

Users with sight may see an icon, but users without sight hears the link path and some mumbo-jumbo parameters.

<figure>
<p><video src="/en/media/mazerance-links.m4v" controls></video></p>
<figcaption>

Absence of anchor text at mazerance.com made NVDA read out the URL path and parameters; 2 issues:

- It doesn't complete the parameters because there's a character limit. 

- When a brand has the same username across social media, as it should be, NVDA reads the username without distinguishing the platforms.
</figcaption>
</figure>

<strong>Remember:</strong> every non-text media that is not a decoration should have an alternative text.

<strong>2 solutions:</strong> add a visually-hidden text; or use an ARIA label.
</li>

</ol>