---
layout: page.html
title: Sponsor a Democratic Web
canonical: https://www.toheeb.com/en/play
siteNav: false
headEnd: |
  <style>

    a {
      color: inherit;
    }

    h1 {
      font: bold 2.7em/1.2 sans-serif;
      margin-block: 1em 0;
    }

    .cta {
      display: flex;
      font-size: .9375em;
      color: #fff;
      background-color: #000;
      border: 2px solid #000;
      border-radius: 2em;
      text-decoration: none;
      width: fit-content;
      padding: .3em 1em .4em;
      margin: 1.5rem 0 0;
      transition: color .1s, background-color .2s;
    }

    .cta:hover {
      background-color: #fff;
      color: #000;
    }


    @media screen and (min-width: 520px) {
      h1 {
        max-width: 8em;
        text-align: center;
        margin-inline: auto;
      }

      h1 + p {
        max-width: 30em;
        margin: 1rem auto 0;
        text-align: center;
      }

      .cta {
        margin: 1.5rem auto 0;
      }
    }
  </style>

  <script>
    class SponsorList extends HTMLElement {

      constructor() {
        super();
        this.sponsors = [];
        this.total = 102;
        this.attachShadow({"mode": "open"});
      }

      connectedCallback() {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <ul></ul>
          <style>
            ul {
              list-style: none;
              padding: 0;
              display: flex;
              flex-flow: row wrap;
              gap: 1em;
              margin: 4em 0;
              justify-content: center;
            }

            li {
              background-color: #fafafa;
              border: 1px solid #ddd;
              width: 5em;
              aspect-ratio: 1;
              padding: 1em;
              box-sizing: border-box;
            }

            .brand {
              display: grid;
              margin: 0;
            }

            .brand-logo {
              width: 100%;
              height: auto;
            } 

            svg {
              animation: color-change 1s infinite alternate-reverse;
            }

            @keyframes color-change {
              0% {
                color: #888;
              }

              100% {
                color: #ccc;
              }
            }
  
          </style>
        `;

        const ul = dom.querySelector("ul");

        // Add skeleton
        this.sponsors.push("");
        this.total++

        for (let i = 0; i <= this.total; i++) {
          const dom = document.createElement("div");

          dom.innerHTML = `
            <li>
              ${
                this.sponsors[i] === undefined
                ? ""
                : `
                  <p class="brand">
                    ${
                      this.sponsors[i] === ""
                      ? `
                        <svg class="brand-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                      `
                      : `<img class="brand-logo" src=${this.sponsors[i]}>`
                    }
                  </p>
                `
              }  
            </li>
          `;
        
          ul.append(dom.querySelector("li"));
        }

        this.shadowRoot.append(...dom.childNodes);
      }
    }

    customElements.define("sponsor-list", SponsorList);
  </script>
---


# {{title}}

On the web, 99% of humans called Creators depend on 1% of humans called Developers. This power imbalance should change. I'm making the most powerful website builder to help Creators be <a href="/en">free and independent</a>; you can help bring the future faster. <a href="https://ko-fi.com/toheebdotcom" class="cta">Join the Sponsors.</a>

<sponsor-list></sponsor-list>

<a href="/en">Home</a>