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

Don't fake buttons.

It may look, receive focus, and perform an action like a button; still, it won't be called a button. Users using screen readers won't know they can perform an action. It becomes useless.

<figure>
<p>
  <video 
    src="/en/media/kree8-target.m4v" 
    poster="/en/media/pt-kree8-btn.png"
    controls>
  </video>
</p>
<figcaption>

Beside other errors: when the <i>Fake Button</i> recieved focus, it wasn't called a button.

<strong>One other error:</strong> After pronuncing "For" as a word, it pronunced "SAAS LEADERS" by characters.
</figcaption>
</figure>

One <strong>poor solution</strong> is to name it a button. It begs the question, why re-engineer an element?

The <strong>true solution</strong> is to simply use a button element if it should really be a button.
</li>

<li>

Avoid blank links.

Users with sight see the platform's icon, but users without sight hears the link path and some mumbo-jumbo parameters – not the platform's name.

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