---
layout: base.html
title: "CSS Spacing: Padding vs Margin vs Gap"
---

Padding spaces an element's content away from its border, while Margin and Gap spaces an element away from another. 

Unlike a Margin which applies to one element, Gap applies to many elements via the container. Each with its usecase.

In Document Mode, blocks are the focus — not containers. You can't guarantee that writers will use containers. As such, layout requires the use of margins.

In Custom Mode, containers become relevant and gap becomes handy to target children. With gap, existing margins become an intrusion — a reason why we do margin zero on the universal selector.