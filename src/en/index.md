---
layout: page.html
title: Use the whole web via your own site
siteNav: false
headEnd: |
  <style>
  
    h1 + p {
      margin-bottom: 5em;
    }
    
    .cta {
      display: flex;
      gap: .5em;
      align-items: center;
      background: #000;
      color: #eee;
      width: fit-content;
      padding: .5em .7em;
      border-radius: 5em;
      line-height: 1;
      text-decoration: none;
      margin-block: 2em 1em;
      text-align: initial;
      border: 2px solid #000;
      transition: color .1s, background-color .1s;
    }

    .cta svg {
      color: #999;
    }

    .cta:hover {
      background: transparent;
      color: #333;
    }

    a > span {
      max-width: 9em;
    }

    @media screen and (min-width: 520px) {
      h1 {
        max-width: 10em;
        margin-inline: auto;
        text-align: center;
      }
  
      h1 + p {
        max-width: 25em;
        text-align: center;
        margin: 0 auto 4em;
      }

      .cta {
        margin-inline: auto;
      }
  
      h1 + p + p {
        text-align: center;
        font-weight: bold;
      }

      summary {
        text-align: center;
      }
    }
  </style>
---

# {{title}}

Web Creator will eventually help you use your site for communication, education, entertainment, and productivity; No need to visit another site. 
<small>
  <a class="cta" href="https://chromewebstore.google.com/detail/web-creator/dhdpccbjfpiaghjacjndbidocacmaina">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
    <span>Download on Chrome Web Store</span>
  </a>
  <span>
    or <a href="/en/play">try it in a playground</a>
  </span>
</small>


<details>
  <summary>Notes on Development</summary>

  - Base Design System

    - [Markup](/en/html-intro/)
      
      - [HTML Attribute Reference](/en/html-attribute-reference)

    - [Reset Stylesheet](/en/base-css/)


  - [Studio](/en/studio/)

  - [How to use Framer and Web Creator](/en/and-framer)

  - [How to use Webflow and Web Creator](/en/and-webflow)

  - Rethinking HTML for Creators

    - [How 8 elements create 31+2 kinds of metadata](/en/html-metadata-elements/)

  - Journal

    - [Marketing Web Creator](/en/marketing)

  - [Sponsors](/en/sponsors)
</details>





