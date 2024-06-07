---
title: 6 Content Style Guide for HTML
tags:
  - hc
  - hc-protocol

hcChapter: 14

---



<h1>6 HTML Stle Guides</h1>




<section>
  <h2>Avoid using a Content Section without an Heading Block</h2>  

  If a content section must convey independent, complementary, navigatory, or generic sections of a document; it must include an Heading Block.

  Content Sections were added to HTML for 2 purposes:
  - To reflect a nested logical structure of Heading Blocks in a nested DOM structure
  - To recalculate the level of an Heading Block in a template system

  In other words, it takes an Heading Block to define the scope of a Content Section. That section may then be independent, complementary, navigatory, or generic.

  Note: Browsers didn't implement the document outline algorithm to recalculate Heading Levels. So, the second purpose fell out but the first remains.

</section>


<section>
  <h2>Bound contents of an heading block</h2>

  An Heading Block, unlike a Title Block, has an implicit boundary for its content. The implicit boundary starts from one heading element to the next. This block-to-block brings forth a problem. You can't markup a set of concluding contents for a previous Heading Block. ? calls it the Donut ?

  The solution is to use an explicit content boundary like Title Block does. That is, an appropriate Content Section. Be it `article`, `aside`, `nav`, and `section`

  ```html
  <section>
    <h1>Heading one with a `section` container</h1>

    <aside>
      <h2>Heading two with an aside</h2>
    </aside>

    Concluding content is now technically for the section of an h1
  </section>
  ```  
</section>

