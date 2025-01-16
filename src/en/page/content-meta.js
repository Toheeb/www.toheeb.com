import {ToheebElement} from "./html-attribute.js"

class ContentMeta extends ToheebElement {

  constructor() {
    super()

    this.item = null
  }

  connectedCallback() {
    const dialog = document.createElement("dialog")

    this.append(dialog)
    dialog.innerHTML = this.skeleton()
    dialog.showModal()
    dialog.blur()

    // this.innerHTML = this.skeleton()
    // this.insertAdjacentHTML("afterbegin", `
    //   <style>
    //     /* f9f8ef e9d6bd fb4f14 104a65 13181b */

    //     .meta {
    //       padding: 1.5em 1.25em;
    //       border-radius: .5em;
    //       background-color: #f9f8ef;
    //       color: #104a65;
    //       font-family: Arial, sans-serif;
    //       font-size: .875em;
    //       margin: 3em auto;
    //       max-width: 50em;
    //     }
    
    //     .meta-ancestor {
    //       display: grid;
    //       gap: 2em;
    //     }
    
    //     .meta-list {
    //       display: grid;
    //       gap: 1.5em;
    //     }
    
    //     select, button, input, textarea, label {
    //       font: inherit;
    //       accent-color: #104a65;
    //       cursor: pointer;
    //     }
    
    //     select {
    //       appearance: none;
    //       padding: .45em 3em .5em .75em;
    //       background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(16,74,101)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
    //       background-size: 1.3em;
    //       background-repeat: no-repeat;
    //       background-position: calc(100% - .4em) 50%;
    //       border-radius: .25em;
    //       background-color: hsl(54deg 45% 98%);
    //       color: #104a65;
    //       cursor: pointer;
    //     }
    
    //     select:focus {
    //       outline-color: #fb4f14;
    //     }
    
    //     button {
    //       cursor: pointer;
    //     }
    
    //     option {
    //       color: #104a65;
    //     }
        
    //     option[disabled] {
    //       color: hsl(199, 23%, 63%);
    //     }
    
    
    //     /* ITEM MENU */
    
    //     .item-menu.show {
    //       display: grid;
    //     }
    
    //     .item-menu {
    //       display: none;
    //       margin: 0;
    //       padding: .75em 0;
    //       border-radius: .25em;
    //       width: fit-content;
    //     }
    
    //     .item-menu.show .item-menu-caller:hover + .item-menu-btn-list,
    //     .item-menu-btn-list:hover {
    //       visibility: visible;
    //     }
    
    //     .item-menu-btn-list {
    //       visibility: hidden;
    //       display: grid;
    //       padding: .25em;
    //       gap: .5em;
    //       background: #fafafa;
    //     }
        
    //     .item-menu-btn {
    //       display: flex;
    //       padding: 0.15em;
    //       background: transparent;
    //       border: 1px solid;
    //       border-radius: .25em;
    //       color: hsl(199, 73%, 23%);
    //     }
    
    //     .item-menu-btn[hidden] {
    //       display: none;
    //     }
    
    //     .item-menu-btn[disabled] {
    //       color: hsl(199, 23%, 63%);
    //       cursor: no-drop;
    //     }
    
    //     .item-menu-btn:not(:is([disabled], .item-menu-caller)):hover {
    //       color: #fb4f14;
    //     }
        
    //     .item-menu-caller {
    //       border: none;
    //       justify-content: start;
    //       padding: .15em .3em .5em 0;
    //     } 
    
    
    //     /* META MENU */
    
        
    //     .meta-menu {
    //       margin: 0;
    //       display: flex;
    //       flex-flow: row wrap;
    //       gap: 1.5em 2em;
    //     }
    
    //     .meta-menu label {
    //       display: flex;
    //       align-items: center;
    //       gap: .25em;
    //     }
    
    //     .meta-menu select {
    //       border-color: #fb4f14;
    //       color: #fb4f14;
    //     }
    
    //     .meta-menu button {
    //       background: none;
    //       border: none;
    //       padding: 0;
    //       color: #104a65;
    //     }
    
    //     .meta-menu svg {
    //       vertical-align: text-top;
    //     }
    
    
    //     /* META ITEM */
        
    //     .meta-item {
    //       padding: 1em 1.25em 1.5em;
    //       border: 1px solid hsl(34, 50%, 73%);
    //       border-radius: .25em;
    //     }
    
    
    //     /* ATTR ITEM */
        
    //     .attr-item {
    //       margin: 0;
    //       padding: .5em 0;
    //       display: flex;
    //       gap: .5em;
    //       flex-flow: row wrap;
    //     }
    
    //     .attr-item > * {
    //       flex: 1 1 0;
    //     }
    
    //     .attr-name {
    //       color: #104a65;
    //     }
    
    //     .attr-value {
    //       appearance: none;
    //       border: 1px solid;
    //       background-color: transparent;
    //       padding: .45em .75em .5em;
    //       border-radius: .25em;
    //       color: #104a65;
    //     }     
  
    //   </style>
    // `)
    
    this.catch_events()
    
    // Init the skeleton
    this.init_skeleton()
    this.insert_meta_menu()

    document.activeElement.blur()
  }
  
  static get observedAttributes() {
    return ["data-legacy-mode"]
  }

  attributeChangedCallback(name, old_value, new_value) {
    switch (name) {
      case "data-legacy-mode":
        const head = this.publish()

        this.querySelector(".meta-list").innerHTML = ""
        
        this.init_skeleton(head)
        this.insert_meta_menu()
        break
    }
  }

  skeleton() {
    return `
      <form class="meta meta-ancestor">
        <div class="meta-list">
        </div>
        <p class="meta-menu">
          <label>
            <input type="checkbox" class="meta-menu-btn" id="meta-menu-legacy">
            <span>Legacy Mode</span>
          </label>
          <button class="meta-menu-btn" id="meta-menu-publish">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <span>Publish</span>
          </button>
          <button class="meta-menu-btn" id="meta-menu-delete" type="button">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            <span>Delete All</span>
          </button>
        </p>
        <p class="item-menu">
          <button class="item-menu-btn item-menu-caller" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
          </button>
          <span class="item-menu-btn-list">
            <button disabled class="item-menu-btn" id="item-menu-up" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button class="item-menu-btn" id="item-menu-down" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <button class="item-menu-btn" id="item-menu-right" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <button class="item-menu-btn" id="item-menu-left" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="item-menu-btn" id="item-menu-del" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>  
          </span>
        </p>
      </form>
    `
  }

  // Can be called before or after init
  insert_meta_menu() {
    // prepend a meta_adder to meta_menu
    const meta_menu = this.querySelector("dialog > .meta-ancestor > .meta-menu")
    // const meta_menu = this.querySelector(":scope > .meta-ancestor > .meta-menu")
    const meta_select_new = this.meta_select()
    
    const base_meta_select = meta_menu.querySelector(".meta-select")

    if (base_meta_select) {
      base_meta_select.replaceWith(meta_select_new)
    } else {
      meta_menu.prepend(meta_select_new)
    }
    
    this.shake_meta_selects(meta_select_new)

  }

  init_skeleton(node = document.head, fieldset = this, when) {
    const meta_elements = node.querySelectorAll(":scope > *")
    const div = document.createElement("div")
    
    meta_elements.forEach(element => {
      const element_name = element.nodeName.toLowerCase()
      const element_attributes = {}
      
      const attributes = element.attributes
  
      for (const index in attributes) {
        if (parseInt(index) >= 0) {
          const attr = attributes[index]
          
          if (attr.nodeName.startsWith("data-")) {
            const new_name = "data-"
            const new_value = attr.nodeName.slice(attr.nodeName.indexOf("-") + 1) + ", " + attr.nodeValue
            
            element_attributes[new_name] = new_value
          } else {
            element_attributes[attr.nodeName] = attr.nodeValue
          }
  
        }
      }

      const legacy_mode = this.closest("[data-legacy-mode]")

      if (legacy_mode) {

        if (["style", "template", "title"].includes(element_name)) {
          element_attributes["content"] = element.textContent
        } else if (element_name === "script" && !element.src) {
          element_attributes["content"] = element.textContent
        } else if (element_name === "noscript") {
          const head = document.createElement("head")
  
          head.innerHTML = element.innerHTML

          const fieldset = this.meta_item("noscript", element_attributes)
          const base_meta = fieldset.querySelector(".meta-menu .meta-select")

          div.append(fieldset)
          this.init_skeleton(head, fieldset, "2nd")
          this.shake_meta_selects(base_meta)
        }

        if (element_name !== "noscript") {
          // add element_name to top of obj
          const attributes = {
            "data-element": element_name,
            ...element_attributes
          }
  
          element_attributes["data-element"] = element_name
          div.append(this.meta_item(element_name, attributes))
        }
      } else {

        switch(element_name) {
          case "base": {
            div.append(this.meta_item("meta-base", element_attributes))  
            break
          }
  
          case "style":
          case "title": 
          case "template":
          {
            const meta_for = {"style": "meta-stylearea", "title": "meta-title", "template": "meta-template"}
            const meta_type = meta_for[element_name]
  
            element_attributes["content"] = element.textContent
  
            div.append(this.meta_item(meta_type, element_attributes))
            break
          }
  
          case "script":
          {
            if (["", "module"].includes(element.type.trim())) {
              if (element.src) {
                div.append(this.meta_item("meta-scriptlink", element_attributes))
              } else {
                element_attributes ["content"] = element.textContent
                div.append(this.meta_item("meta-scriptarea", element_attributes))
              }
            } else if (element.type === "importmap") {
              div.append(this.meta_item("meta-importmap", element_attributes))
            } else {
              element_attributes ["content"] = element.textContent
              div.append(this.meta_item("meta-scriptdata", element_attributes))
            }
  
            break
          }
  
          case "meta": 
          {
            if (element.attributes.charset) {
              div.append(this.meta_item("meta-charset", element_attributes))
            } else if (element.httpEquiv) {
              if (element.httpEquiv.trim() === "refresh") {
                div.append(this.meta_item("meta-redirect", element_attributes))
              } else if (element.httpEquiv.trim() === "default-style") {
                div.append(this.meta_item("meta-styledef", element_attributes))
              } else if (el.httpEquiv.trim() === "content-security-policy") {
                div.append(this.meta_item("meta-security", element_attributes))
              } 
            } else if (element.name) {
              switch(element.name.trim()) {
                case "application-name": {
                  div.append(this.meta_item("meta-appname", element_attributes))
                  break
                }
                
                case "author": {
                  div.append(this.meta_item("meta-author", element_attributes))
                  break
                }
                
                case "description": {
                  div.append(this.meta_item("meta-description", element_attributes))
                  break
                }
                
                case "generator": {
                  div.append(this.meta_item("meta-generator", element_attributes))
                  break
                }
                
                case "keywords": {
                  div.append(this.meta_item("meta-keywords", element_attributes))
                  break
                }
                
                case "referrer": {
                  div.append(this.meta_item("meta-referrer", element_attributes))
                  break
                }
                
                case "theme-color": {
                  div.append(this.meta_item("meta-theme", element_attributes))
                  break
                }
                
                case "color-scheme": {
                  div.append(this.meta_item("meta-scheme", element_attributes))
                  break
                }
                
                case "robots": {
                  div.append(this.meta_item("meta-robots", element_attributes))
                  break
                }
                
                case "canonical": {
                  div.append(this.meta_item("meta-canonical", element_attributes))
                  break
                }
                
                case "viewport": {
                  div.append(this.meta_item("meta-viewport", element_attributes))
                  break
                }
              }
            } else {
              div.append(this.meta_item("meta-custom", element_attributes))
            }
  
            break
          }
  
          case "link": 
          {
            const rel = element.rel.trim()
  
            if (rel === "icon") {
              div.append(this.meta_item("meta-icon", element_attributes))
            } else if (rel === "manifest") {
              div.append(this.meta_item("meta-manifest", element_attributes))
            } else if (rel === "next") {
              div.append(this.meta_item("meta-next", element_attributes))
            } else if (rel === "pingback") {
              div.append(this.meta_item("meta-pingback", element_attributes))
            } else if (rel === "search") {
              div.append(this.meta_item("meta-search", element_attributes))
            } else if (rel === "stylesheet") {
              div.append(this.meta_item("meta-stylelink", element_attributes))
            } else if (["alternate stylesheet", "stylesheet alternate"].includes(rel)) {
              div.append(this.meta_item("meta-stylealt", element_attributes))
            } else if (rel === "alternate" && element.type && !element.hreflang) {
              if (["application/rss+xml", "application/atom+xml"].includes(el.type.trim())) {
                div.append(this.meta_item("meta-feed", element_attributes))
              } else {
                div.append(this.meta_item("meta-reform", element_attributes))
              }
            } else if (rel === "alternate" && element.hreflang && !element.type) {
              div.append(this.meta_item("meta-translation", element_attributes))
            } else {
              div.append(this.meta_item("meta-custom", element_attributes))
            }
  
            break
          }
  
          case "noscript": 
          {
            const noscript = document.createElement("head")
  
            noscript.innerHTML = element.innerHTML
  
            const fieldset = this.meta_item("meta-noscript", element_attributes)
            const base_meta = fieldset.querySelector(".meta-menu .meta-select")
        
            div.append(fieldset)
            this.init_skeleton(noscript, fieldset)
            this.shake_meta_selects(base_meta)
  
            break
          }
        }
      }

      fieldset.querySelector(".meta-list").append(...div.childNodes) 
    })
  }

  set_ancestor(node) {
    const p = document.createElement("p")
    const div = document.createElement("div")

    node.classList.add("meta-ancestor")
    div.classList.add("meta-list")
    p.classList.add("meta-menu")
    
    node.append(div, p)
    p.append(this.meta_select())
  }
  
  meta_item(meta_name, meta_attrs) {
    const fieldset = document.createElement("fieldset")
    const legend = document.createElement("legend")
    const html_attribute = document.createElement("html-attribute")
    const select = this.meta_select()

    fieldset.classList.add("meta-item")
    fieldset.append(legend, html_attribute)
    legend.append(select)
    
    select.value = meta_name
    html_attribute.setAttribute("data-meta-name", meta_name)
    
    if (meta_attrs) {
      html_attribute.setAttribute("data-meta-attrs", JSON.stringify(meta_attrs))
    }

    if (["meta-noscript", "noscript"].includes(meta_name)) {
      this.set_ancestor(fieldset)
    } else {
      fieldset.classList.remove("meta-ancestor")
    }

    return fieldset
  }
  
  meta_select() {
    const select = document.createElement("select")

    select.classList.add("meta-select")

    for (const key in this.get_metas()) {
      if (Object.hasOwnProperty.call(this.get_metas(), key)) {
        const option = document.createElement("option")
  
        select.append(option)

        option.value = key
        option.textContent = this.get_metas()[key]["label"]

        if (key === "") {
          option.hidden = "hidden"
          option.selected = true
        }
      }
    }

    return select
  }

  catch_events() {

    this.addEventListener("submit", e => {
      e.preventDefault()

      const head = this.publish()
      document.head.innerHTML = head.innerHTML
    })

    this.addEventListener("change", e => {
      const is_meta_select = e.target.classList.contains("meta-select")

      if (is_meta_select) {
        const meta_select = e.target
        const meta_name = meta_select.value
        const meta_select_new = meta_select.closest(".meta-menu") !== null
        const attr_obj = this.get_metas()[meta_name]["comp_attrs"].reduce( (acc, key) => ({...acc, [key]: ''}), {})

        if (meta_select_new) {
          const meta_list = meta_select.closest(".meta-ancestor").querySelector(".meta-list")
          const meta_item = this.meta_item(meta_name, attr_obj)
          
          meta_list.append(meta_item)
          meta_select.value = ""

          // avoid down arrow key creating new meta instead of (hopeful) scrolling down
          meta_select.blur()
          requestAnimationFrame(() => {
            meta_select.scrollIntoView({behavior: "smooth"})
          })
        } else {
          const meta_item = meta_select.closest(".meta-item")
          const html_attribute = meta_item.querySelector("html-attribute")
  
          html_attribute.setAttribute("data-meta-name", meta_name)
          html_attribute.setAttribute("data-meta-attrs", JSON.stringify(attr_obj))

          const select_value = e.target.value

          if (select_value === "meta-noscript") {
            this.set_ancestor(meta_item)
          } else {
            meta_item.querySelector(".meta-menu")?.remove()
            meta_item.querySelector(".meta-list")?.remove()
            meta_item.classList.remove("meta-ancestor")
          }
        }

        this.shake_meta_selects(meta_select)
      }
    })
    
    this.addEventListener("mouseover", e => {
      const attr_item = e.target.closest(".attr-item")
      const meta_item = e.target.closest(".meta-item")
      const item_menu = document.querySelector(".item-menu")
      const item_menu_caller = document.querySelector(".item-menu-caller")
      const is_item_menu = e.target.closest(".item-menu")
      const dialog = e.target.closest("dialog")
      const dim_dialog = dialog.getBoundingClientRect()

      // item_menu.style.position = "absolute"

      if(is_item_menu) {
      } else if (attr_item) {
        const base_attr = attr_item.querySelector(".attr-menu .attr-name")
        const related_target = e.relatedTarget && attr_item.contains(e.relatedTarget)
        
        if (base_attr || related_target) return
        
        item_menu.classList.add("show")
        
        const menu_dim = item_menu.getBoundingClientRect()
        const box_dim = attr_item.getBoundingClientRect()
        const hamb_dim = item_menu_caller.getBoundingClientRect()
        
        item_menu.style.top = `${box_dim.top - dim_dialog.top + window.scrollY + dialog.scrollTop}px`
        item_menu.style.left = `${box_dim.left - dim_dialog.left - hamb_dim.width / 2}px`
        this.target = attr_item
        this.set_item_menu("attr")
      } else if (meta_item) {
        const base_meta = meta_item.querySelector(".meta-menu .meta-select")
        const related_target = e.relatedTarget && meta_item.contains(e.relatedTarget)
        
        if (base_meta ) return
        
        // item_menu.removeAttribute("hidden")
        item_menu.classList.add("show")
        const box_dim = meta_item.getBoundingClientRect()
        const hamb_dim = item_menu_caller.getBoundingClientRect()
        
        item_menu.style.top = `${box_dim.top - dim_dialog.top + window.scrollY + dialog.scrollTop + 8}px`
        item_menu.style.left = `${box_dim.left - dim_dialog.left - hamb_dim.width / 2}px`
        this.target = meta_item
        this.set_item_menu("meta")
      } else {
        item_menu.classList.remove("show")
      }
    })

    this.addEventListener("mouseout", e => {
      const is_item_menu = e.target.classList.contains("item-menu")

      if (is_item_menu) {
        const item_menu = document.querySelector(".item-menu")

        item_menu.classList.remove("show")
      }
    })

    this.addEventListener("click", e => {

      // ITEM MENU
      {
        const item_menu_btn = e.target.closest(".item-menu-btn")
  
        if (item_menu_btn) {
          const id = item_menu_btn?.id
          const item_menu = document.querySelector(".item-menu")
          const meta_select = this.target.closest(".meta-ancestor").querySelector(":scope > .meta-menu .meta-select")
    
          switch(id) {
            case "item-menu-up":
              this.target.previousElementSibling.before(this.target)
              break
    
            case "item-menu-down":
              this.target.nextElementSibling.after(this.target)
              break
    
            case "item-menu-del":
              this.target.remove()
              this.shake_meta_selects(meta_select)
              this.shake_attr_selects()
              break
    
            case "item-menu-left":
              {
                if (this.target.matches(":first-child")) {
                  const noscript = this.target.closest(".meta-ancestor")
      
                  noscript.before(this.target)
                } else {
                  const noscript_fields = this.target.previousElementSibling.querySelector(".meta-list")
      
                  noscript_fields.append(this.target)
                }
    
                this.shake_meta_selects(meta_select)
                
                const current_meta_select = this.target.closest(".meta-ancestor").querySelector(":scope > .meta-menu .meta-select")
                this.shake_meta_selects(current_meta_select)
                break
              }
              
            case "item-menu-right": {
              if (this.target.matches(":last-child")) {
                const noscript = this.target.closest(".meta-ancestor")
    
                noscript.after(this.target)
              } else {
                const noscript_fields = this.target.nextElementSibling.querySelector(".meta-list")
    
                noscript_fields.prepend(this.target)
              }
    
              this.shake_meta_selects(meta_select)
  
              const current_meta_select = this.target.closest(".meta-ancestor").querySelector(":scope > .meta-menu .meta-select")
              this.shake_meta_selects(current_meta_select)
              break
            }
          }
  
          item_menu.classList.remove("show")
        }
      }

      // META MENU
      {
        const meta_menu_btn = e.target.closest(".meta-menu-btn")

        if (meta_menu_btn) {
          const id = meta_menu_btn.id

          switch(id) {
            case "meta-menu-delete":
              const meta_fields = this.querySelector(".meta-list")
    
              meta_fields.innerHTML = ""
              document.head.innerHTML = ""

              const meta_select = this.querySelector(".meta-menu .meta-select")
              this.shake_meta_selects(meta_select)
              break

            case "meta-menu-legacy":
              const checkbox = e.target

              if (checkbox.checked) {
                this.setAttribute("data-legacy-mode", "true")
              } else {
                this.removeAttribute("data-legacy-mode")
              }
              
              // this.init_skeleton(this.publish())
              break
          }
        }
      }
    })
  }
  
  shake_meta_selects(meta_select) {
    const meta_ancestor = meta_select.closest(".meta-ancestor")
    const meta_select_list = meta_ancestor.querySelectorAll(":scope > .meta-list > .meta-item > legend > .meta-select, :scope > .meta-menu .meta-select")
    const added_metas = [];

    meta_select_list.forEach(meta => {
      added_metas.push(meta.value)
    });

    meta_select_list.forEach(meta_select => {
      const options = meta_select.querySelectorAll("option")

      options.forEach(option => {
        const option_value = option.value
        const option_exists = added_metas.includes(option_value)      
        const option_is_singleton = this.get_metas()[option_value]["singleton"] === true
  
        if (option_exists && option_is_singleton) {
          option.disabled = true
        } else {
          option.disabled = false
        }
      })
    })
  }

  set_item_menu(target) { 
    const up = document.querySelector("#item-menu-up")
    const up2 = document.querySelector("#item-menu-left")
    const down = document.querySelector("#item-menu-down")
    const down2 = document.querySelector("#item-menu-right")
    const del = document.querySelector("#item-menu-del")

    if (target === "meta") {

      del.disabled = false
      up2.hidden = ""
      down2.hidden = ""

      const first_meta = this.target.matches(".meta-item:first-child")
      const last_meta = this.target.matches(".meta-item:last-child")
  
      if (first_meta) {
        up.disabled = true
      } else {
        up.disabled = false
      }

      if (last_meta) {
        down.disabled = true
      } else {
        down.disabled = false
      }

      const first_meta_of_noscript = this.target.matches(".meta-ancestor .meta-ancestor .meta-item:first-child")
      const meta_after_noscript = this.target.matches(".meta-ancestor + .meta-item")

      if (meta_after_noscript) {
        const meta_name = this.target.querySelector(".meta-select").value

        if (this.get_metas()[meta_name]["noscript"]) {
          if (this.get_metas()[meta_name]["singleton"]) {
            const prev_fields = this.target.previousElementSibling.querySelector(".meta-list")
            const meta_selects = prev_fields.querySelectorAll(":scope > .meta-item > legend > .meta")
            const prev_has_singleton = Array.from(meta_selects).some(select => select.value === meta_name)
            
            if (prev_has_singleton) {
              up2.disabled = true
            } else {
              up2.disabled = false
            }
          } else {
            up2.disabled = false
          }
        } else {
          up2.disabled = true
        }
      } else if (first_meta_of_noscript) {
        const meta_name = this.target.querySelector(".meta-select").value

        if (this.get_metas()[meta_name]["singleton"]) {
          const grand_fields = this.target.closest(".meta-ancestor").closest(".meta-list")
          const meta_selects = grand_fields.querySelectorAll(":scope > .meta-item > legend > .meta")
          const grand_has_singleton = Array.from(meta_selects).some(select => select.value === meta_name)
          
          if (grand_has_singleton) {
            up2.disabled = true
          } else {
            up2.disabled = false
          }
        } else {
          up2.disabled = false
        }
      } else {
        up2.disabled = true
      }
      
      const last_meta_of_noscript = this.target.matches(".meta-ancestor .meta-ancestor .meta-item:last-child")
      const meta_before_noscript = this.target.matches(".meta-item:has(+.meta-ancestor)")

      if (meta_before_noscript) {
        const meta_name = this.target.querySelector(".meta-select").value
        
        if (this.get_metas()[meta_name]["noscript"]) {
          if (this.get_metas()[meta_name]["singleton"]) {
            const next_fields = this.target.nextElementSibling.querySelector(".meta-list")
            const meta_selects = next_fields.querySelectorAll(":scope > .meta-item > legend > .meta")
            const next_has_singleton = Array.from(meta_selects).some(select => select.value === meta_name)
      
            if (next_has_singleton) {
              down2.disabled = true
            } else {
              down2.disabled = false
            }
          } else {
            down2.disabled = false
          }
        } else {
          down2.disabled = true
        }
      } else if (last_meta_of_noscript) {
        const meta_name = this.target.querySelector(".meta-select").value
  
        if (this.get_metas()[meta_name]["singleton"]) {
          const grand_fields = this.target.closest(".meta-ancestor").closest(".meta-list")
          const meta_selects = grand_fields.querySelectorAll(":scope > .meta-item > legend > .meta")
          const grand_has_singleton = Array.from(meta_selects).some(select => select.value === meta_name)
          
          if (grand_has_singleton) {
            down2.disabled = true
          } else {
            down2.disabled = false
          }
        } else {
          down2.disabled = false
        }
      } else {
        down2.disabled = true
      }

    }

    if (target === "attr") {
      const first_attr = this.target.matches(".attr-item:first-child")

      up2.hidden = "hidden"
      down2.hidden = "hidden"
      
      if (first_attr) {
        up.disabled = true
      } else {
        up.disabled = false
      }
      
      const last_attr = this.target.matches(".attr-item:last-child")

      if (last_attr) {
        down.disabled = true
      } else {
        down.disabled = false
      }

      const attr_name_disabled = this.target.querySelector(".attr-name[disabled]")

      if (attr_name_disabled) {
        del.disabled = true
      } else {
        del.disabled = false
      }
    }
  } 
  
  publish(node = this) {
    const meta_items = node.querySelector(".meta-list").querySelectorAll(":scope > .meta-item")
    const head = document.createElement("head")

    meta_items.forEach(meta_item => {
      const meta_name = meta_item.querySelector(".meta-select").value
      const attr_items = meta_item.querySelectorAll(":scope > html-attribute .attr-item")
      const attributes = {}

      attr_items.forEach(item => {
        const attr_name = item.querySelector(":scope > :first-child").value
        const attr_value = item.querySelector(":scope > :last-child").value

        attributes[attr_name] = attr_value
      })

      const meta_element = this.meta_element(meta_name, attributes)

      head.append(meta_element)

      const is_meta_noscript = meta_item.classList.contains("meta-ancestor")

      if (is_meta_noscript) {
        meta_element.append(...this.publish(meta_item).childNodes)
      }
    })

    return head
  }

  meta_element(meta_name, meta_attrs) {
    let element = null
    const element_meta = {
      "meta-appname": "application-name",
      "meta-author": "author",
      "meta-description": "description",
      "meta-generator": "generator",
      "meta-keywords": "keywords",
      "meta-redirect": "refresh",
      "meta-referrer": "referrer",
      "meta-robots": "robots",
      "meta-scheme": "color-scheme",
      "meta-security": "content-security-policy",
      "meta-styledef": "default-style",
      "meta-theme": "theme-color",
      "meta-viewport": "viewport",
    }

    const element_link = {
      "meta-canonical": "canonical",
      "meta-icon": "icon",
      "meta-manifest": "manifest",
      "meta-next": "next",
      "meta-pingback": "pingback",
      "meta-search": "search",
      "meta-stylealt": "alternate stylesheet",
      "meta-stylelink": "stylesheet",
    }

    const element_non_void = {
      "meta-template": "template",
      "meta-title": "title",
    }

    switch (meta_name) {
      case "meta-appname":
      case "meta-author":
      case "meta-description":
      case "meta-generator":
      case "meta-keywords":
      case "meta-referrer":
      case "meta-robots":
      case "meta-scheme":
      case "meta-theme":
      case "meta-viewport":
        element = document.createElement("meta")
        element.setAttribute("name", element_meta[meta_name])
        break

      case "meta-redirect":
      case "meta-security":
      case "meta-styledef":
        element = document.createElement("meta")
        element.setAttribute("http-equiv", element_meta[meta_name])

        break
  
      case "meta-base":
        element = document.createElement("base")
        break

      case "meta-canonical":
      case "meta-icon":
      case "meta-manifest":
      case "meta-next":
      case "meta-pingback":
      case "meta-search":
      case "meta-stylealt":
      case "meta-stylelink":
        element = document.createElement("link")
        element.setAttribute("rel", element_link[meta_name])
        break

      case "meta-charset":
        element = document.createElement("meta")
        break

      case "meta-feed":
        element = document.createElement("link")
        element.setAttribute("rel", "alternate")
        element.setAttribute("type", "application/rss+xml")

        brviewport
      case "meta-reform":
      case "meta-translation":
        element = document.createElement("link")
        element.setAttribute("rel", "alternate")

        break

      case "meta-scriptarea":
        element = document.createElement("script")
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]

        break

      // case "meta-modulearea":
      //   element = document.createElement("script")
      //   element.setAttribute("type", "module")
      //   element.innerHTML = meta_attrs["content"]
      //   delete meta_attrs["content"]

      //   break

      // case "meta-modulelink":
      //   element = document.createElement("script")
      //   element.setAttribute("type", "module")

      //   break

      case "meta-scriptlink":
        element = document.createElement("script")

        break

      // case "meta-scriptlink":
      //   element = document.createElement("script")
      //   element.setAttribute("type", "module")

      //   break

      case "meta-importmap":
        element = document.createElement("script")
        element.setAttribute("type", "importmap")
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]

        break

      case "meta-scriptdata":
        element = document.createElement("script")
        element.innerHTML = attributes["content"]
        delete attributes["content"]

        break

      case "meta-stylearea":
        element = document.createElement("style")
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]

        break

      case "meta-template":
      case "meta-title":
        element = document.createElement(element_non_void[meta_name])
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]

        break

      case "meta-noscript":
        element = document.createElement("noscript")

        break

      case "meta-custom":
        element = document.createElement(meta_attrs["data-element"])
        delete meta_attrs["data-element"]

      
      case "base":
      case "link":
      case "meta":
      case "noscript":
      case "script":
        element = document.createElement(meta_name)

        break
      case "style":
      case "template":
      case "title":
        element = document.createElement(meta_name)
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]
        break
    } 

    for (const key in meta_attrs) {
      if (Object.hasOwnProperty.call(meta_attrs, key)) {
        const value = meta_attrs[key];
        let attr_name, attr_value

        if (key === "data-") {
          attr_name = "data-" + value.slice(0, value.indexOf(","))
          attr_value = value.slice(value.indexOf(",") + 1).trim()
        } else {
          attr_name = key
          attr_value = value
        }

        if (element) {
          element.setAttribute(attr_name, attr_value)
        }
      }
    }

    return element
  }
}

customElements.define('content-meta', ContentMeta)
