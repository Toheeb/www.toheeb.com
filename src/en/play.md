---
layout: page.html
title: Write HTML without Code, Right Now!
canonical: https://www.toheeb.com/en/play
siteNav: false
headEnd: |
  <script src="/en/js/web-creator.js"></script>
  <style>
    body {
      padding: 0 2em;
    }

    h1 {
      font: bold 2rem/1.2 system-ui, sans-serif;
      max-width: 12em;
      margin: 2em auto 0;
      text-align: center;
    }

    p {
      text-align: center;
      max-width: 20em;
      margin: 1em auto 5em;
    }

    p button {
      display: block;
      width: fit-content;
      margin: 2em auto 0;
      padding: .5em 1em .6em;
      background-color: #000;
      color: #fff;
      border-radius: 2em;
      border: 2px solid #000;
      transition: background-color .2s, color .2s;
    }

    p button:hover {
      background-color: transparent;
      color: #000;
      cursor: pointer;
    }

    a {
      color: inherit;
    }
  </style>

---


# {{title}}

Try out Web Creator in a playground to create metadata of a webpage. <button onclick="run_wc('head', true)">Open Playground</button>

<a href="/en">Home</a>