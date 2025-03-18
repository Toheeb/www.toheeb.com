---
layout: page.html
title: HTML Attribute Reference
canonical: https://www.toheeb.com/en/html-attribute-reference
siteNav: false
siteStyle: false
headEnd: |
  <style>
              
    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-track {
      background-color: #eee;
      border-radius: .5em;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #777;
      border-radius: .5em;
    }

    h1 {
      font: 600 2em/1.2 sans-serif;
      text-align: center;
      max-width: 8em;
      margin: 1.5em auto .5em;
    }

    h1+p {
      max-width: 17em;
      text-align: center;
      margin: auto;
    }

    body {
      margin: 0;
      font: .9275rem/1.7 arial, sans-serif;
      color: #555;
      background-color: #fefefe;
    }

    .menu {
      margin: 2em;
    }

    .menu a {
      color: inherit;
    }

    html-attrset {
      display: grid;
      gap: 3em;
      padding: 1em 8%;
      max-width: 70em;
      margin: 3em auto;
    }


    .attr-form {
      display: flex;
      gap: .5em;
      justify-content: center;
    }

    .attr-mix {
      display: grid;
      gap: 1em;
    }

    .attr-counter {
      font-size: .875rem;
      text-align: center;
    }

    label {
      display: grid;
      justify-items: center;
    }

    label span {
      font-size: .75rem;
      text-indent: .25em;
    }

    select {
      font-size: .875rem;
      color: inherit;
      accent-color: #555;
      background-color: transparent;
      border-radius: .25em;
      border: 1px solid #888;
      padding: .45em 2em .5em .75em;
      min-width: 10em;
      
      appearance: none;
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(85,85,85)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
      background-size: 1.3em;
      background-repeat: no-repeat;
      background-position: calc(100% - .4em) 50%;
    }

    option {
      color: #555;
      cursor: pointer;
    }

  
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      gap: 1em;
      list-style: none;
    }

    ::marker {
      font-size: .5em;
    }

    li {
      flex: 1 1 auto;
    }

    p {
      margin: 0;
    }
    
    html-attrset a {
      color: inherit;
      border: 1px solid #bbb;
      text-decoration: none;
      border-radius: .75em;
      display: grid;
      text-align: center;
      padding: 2em 1em;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .attr-name {
      font-size: .75em;
      color: #888;
    }

  </style>

  <script>
    class HTMLAttrSet extends HTMLElement {
      constructor() {
        super();

        this.global_attrs = [
          "accesskey",
          "autocapitalize",
          "autofocus",
          "contenteditable",
          "data-",
          "dir",
          "draggable",
          "enterkeyhint",
          "hidden",
          "inert",
          "inputmode",
          "is",
          "itemid",
          "itemprop",
          "itemref",
          "itemscope",
          "itemtype",
          "lang",
          "nonce",
          "popover",
          "spellcheck",
          "style",
          "tabindex",
          "title",
          "translate",
        ] 

        this.node_attributes = {
          "abbr": {
            "label": "Abbreviation",
            "type": "local",
            "values": {}
          },
          "accept": {
            "label": "Acceptable Upload",
            "type": "local",
            "values": {}
          },
          "accept-charset": {
            "label": "Form Character Set",
            "type": "local",
            "values": {
              "UTF-8": "UTF-8"
            }
          },
          "action": {
            "label": "Form Handler",
            "type": "local",
            "values": {}
          },
          "allow": {
            "label": "Permission Policy",
            "type": "local",
            "values": {}
          },
          "allowfullscreen": {
            "label": "Allow Fullscreen",
            "type": "local",
            "values": {}
          },
          "alt": {
            "label": "Alternative Text",
            "type": "local",
            "values": {}
          },
          "as": {
            "label": "Preload Type",
            "type": "local",
            "values": {
              "fetch": "Fetch",
              "audio": "Audio",
              "audioworklet": "Audio Worklet",
              "document": "Document",
              "embed": "Embed",
              "font": "Font",
              "frame": "Frame",
              "iframe": "iFrame",
              "json": "JSON",
              "manifest": "Manifest",
              "object": "Object",
              "paintworklet": "Paint Worklet",
              "report": "Report",
              "script": "Script",
              "serviceworker": "Service Worker",
              "sharedworker": "Shared Worker",
              "style": "Style",
              "track": "Track",
              "video": "Video",
              "webidentity": "Web Identity",
              "worker": "Worker",
              "xslt": "XSLT"
            }
          },
          "async": {
            "label": "Load Ascrynchronously",
            "type": "local",
            "values": {}
          },
          "autocomplete": {
            "label": "Auto Complete",
            "type": "local",
            "values": {
              "on": "On",
              "off": "Off"
            }
          },
          "autoplay": {
            "label": "Auto Play",
            "type": "local",
            "values": {}
          },
          "blocking": {
            "label": "Block",
            "type": "local",
            "values": {
              "render": "Render"
            }
          },
          "charset": {
            "label": "Character Set",
            "type": "local",
            "values": {
              "UTF-8": "UTF-8"
            }
          },
          "check": {
            "label": "Check Form",
            "type": "local",
            "values": {}
          },
          "cite": {
            "label": "Citation Source",
            "type": "local",
            "values": {}
          },
          "class": {
            "label": "Class ID",
            "type": "local",
            "values": {}
          },
          "color": {
            "label": "Icon Color",
            "type": "local",
            "values": {}
          },
          "cols": {
            "label": "Line Width",
            "type": "local",
            "values": {}
          },
          "colspan": {
            "label": "Column Span",
            "type": "local",
            "values": {}
          },
          "content": {
            "label": "Content",
            "type": "local",
            "values": {}
          },
          "controls": {
            "label": "Show Controls",
            "type": "local",
            "values": {}
          },
          "coords": {
            "label": "Coordinates",
            "type": "local",
            "values": {}
          },
          "crossorigin": {
            "label": "Cross Origin",
            "type": "local",
            "values": {
              "anonymous": "Anonymous",
              "use-credentials": "Use Credentials"
            }
          },
          "data": {
            "label": "Data",
            "type": "local",
            "values": {}
          },
          "data-element": {
            "label": "Element",
            "type": "local",
            "values": {
              "base": "Base", 
              "link": "Link", 
              "meta": "Meta", 
              "noscript": "Noscript", 
              "script": "Script", 
              "style": "Style", 
              "template": "Template", 
              "title": "Title"
            }
          },
          "datetime": {
            "label": "Date and Time",
            "type": "local",
            "values": {}
          },
          "decoding": {
            "label": "Decoding Model",
            "type": "local",
            "values": {
              "auto": "Auto",
              "async": "Async",
              "sync": "Sync"
            }
          },
          "default": {
            "label": "Set Default",
            "type": "local",
            "values": {}
          },
          "defer": {
            "label": "Defer Script",
            "type": "local",
            "values": {}
          },
          "dirname": {
            "label": "Dirname",
            "type": "local",
            "values": {}
          },
          "disabled": {
            "label": "Disable Form",
            "type": "local",
            "values": {}
          },
          "download": {
            "label": "Enable Download",
            "type": "local",
            "values": {}
          },
          "enctype": {
            "label": "Encoding Type",
            "type": "local",
            "values": {
              "application/x-www-form-urlencoded": "Encoded",
              "multipart/form-data": "Multipart",
              "text/plain": "Plain"
            }
          },
          "fetchpriority": {
            "label": "Fetch Priority",
            "type": "local",
            "values": {
              "auto": "Auto",
              "low": "Low",
              "high": "High"
            }
          },
          "for": {
            "label": "Form",
            "type": "local",
            "values": {}
          },
          "form": {
            "label": "Form Container",
            "type": "local",
            "values": {}
          },
          "formaction": {
            "label": "Form Handler",
            "type": "local",
            "values": {}
          },
          "formenctype": {
            "label": "Data Format",
            "type": "local",
            "values": "enctype"
          },
          "formmethod": {
            "label": "Form Method",
            "type": "local",
            "values": "method"
          },
          "formnovalidate": {
            "label": "Disable Validation",
            "type": "local",
            "values": {}
          },
          "formtarget": {
            "label": "Target Window",
            "type": "local",
            "values": "target"
          },
          "headers": {
            "label": "Table Headers",
            "type": "local",
            "values": {}
          },
          "height": {
            "label": "Height",
            "type": "local",
            "values": {}
          },
          "high": {
            "label": "High Point",
            "type": "local",
            "values": {}
          },
          "href": {
            "label": "Address",
            "type": "local",
            "values": {}
          },
          "hreflang": {
            "label": "Address Language",
            "type": "local",
            "values": {}
          },
          "http-equiv": {
            "label": "Pragma Directive",
            "type": "local",
            "values": {
              "content-type": "Content Type",
              "default-style": "Default Style",
              "refresh": "Refresh",
              "content-security-policy": "Content Security Policy"
            }
          },
          "id": {
            "label": "ID",
            "type": "local",
            "values": {}
          },
          "imagesizes": {
            "label": "Source Sizes",
            "type": "local",
            "values": {}
          },
          "imagesrcset": {
            "label": "Source Descriptors",
            "type": "local",
            "values": {}
          },
          "integrity": {
            "label": "Integrity Text",
            "type": "local",
            "values": {}
          },
          "ismap": {
            "label": "Access Map",
            "type": "local",
            "values": {}
          },
          "kind": {
            "label": "Type",
            "type": "local",
            "values": {
              "metadata": "Metadata",
              "subtitles": "Subtitles",
              "captions": "Captions",
              "descriptions": "Descriptions",
              "chapters": "Chapters"
            }
          },
          "label": {
            "label": "Label",
            "type": "local",
            "values": {}
          },
          "list": {
            "label": "Data List",
            "type": "local",
            "values": {}
          },
          "loading": {
            "label": "Loading Mechanism",
            "type": "local",
            "values": {
              "lazy": "Lazy",
              "eager": "Eager"
            }
          },
          "loop": {
            "label": "Loop",
            "type": "local",
            "values": {}
          },
          "low": {
            "label": "Low Point",
            "type": "local",
            "values": {}
          },
          "max": {
            "label": "Maximum Point",
            "type": "local",
            "values": {}
          },
          "maxlength": {
            "label": "Maximum Length",
            "type": "local",
            "values": {}
          },
          "media": {
            "label": "Media",
            "type": "local",
            "values": {}
          },
          "method": {
            "label": "Form Method",
            "type": "local",
            "values": {
              "post": "Post",
              "get": "Get",
              "dialog": "Dialog"
            }
          },
          "min": {
            "label": "Minimum Point",
            "type": "local",
            "values": {}
          },
          "minlength": {
            "label": "Minimum Length",
            "type": "local",
            "values": {}
          },
          "mute": {
            "label": "Mute",
            "type": "local",
            "values": {}
          },
          "multiple": {
            "label": "Allow Multiple",
            "type": "local",
            "values": {}
          },
          "name": {
            "label": "Name",
            "type": "local",
            "values": {}
          },
          "nomodule": {
            "label": "No Module",
            "type": "local",
            "values": {}
          },
          "novalidate": {
            "label": "Disable Validation",
            "type": "local",
            "values": {}
          },
          "open": {
            "label": "Open",
            "type": "local",
            "values": {}
          },
          "optimum": {
            "label": "Optimum Point",
            "type": "local",
            "values": {}
          },
          "pattern": {
            "label": "Pattern",
            "type": "local",
            "values": {}
          },
          "ping": {
            "label": "Ping Addresses",
            "type": "local",
            "values": {}
          },
          "placeholder": {
            "label": "Placeholder",
            "type": "local",
            "values": {}
          },
          "playsinline": {
            "label": "Play Inline",
            "type": "local",
            "values": {}
          },
          "popovertarget": {
            "label": "Popover Target",
            "type": "local",
            "values": {}
          },
          "popovertargetaction": {
            "label": "Popover Target Visibility",
            "type": "local",
            "values": {
              "toggle": "Toggle",
              "show": "Show",
              "hide": "Hide"
            }
          },
          "poster": {
            "label": "Poster",
            "type": "local",
            "values": {}
          },
          "preload": {
            "label": "Preload",
            "type": "local",
            "values": {
              "metadata": "Metadata",
              "none": "None",
              "auto": "Auto"
            }
          },
          "readonly": {
            "label": "Readonly",
            "type": "local",
            "values": {}
          },
          "referrerpolicy": {
            "label": "Referrer Policy",
            "type": "local",
            "values": {
              "": "Inherit or No Referrer when downgrade",
              "no-referrer": "No Referrer",
              "unsafe-url": "Unsafe URL",
              "no-referrer-when-downgrade": "No referrer when downgrade",
              "origin": "Origin",
              "strict-origin": "Strict Origin",
              "same-origin": "Same Origin",
              "origin-when-cross-origin": "Origin when Cross Origin",
              "strict-origin-when-cross-origin": "Strict Origin when Cross Origin"
            }
          },
          "rel": {
            "label": "Relation",
            "type": "local",
            "values": {
              "noreferrer": "No Referrer",
              "noopener": "No Opener",
              "opener": "Opener"
            }
          },
          "required": {
            "label": "Required",
            "type": "local",
            "values": {}
          },
          "reversed": {
            "label": "Reversed",
            "type": "local",
            "values": {}
          },
          "rows": {
            "label": "Rows",
            "type": "local",
            "values": {}
          },
          "sandbox": {
            "label": "Sandbox",
            "type": "local",
            "values": {}
          },
          "scope": {
            "label": "Scope",
            "type": "local",
            "values": {
              "auto": "Auto",
              "col": "Column",
              "colgroup": "Column Group",
              "row": "Row",
              "rowgroup": "Row Group"
            }
          },
          "selected": {
            "label": "Selected",
            "type": "local",
            "values": {}
          },
          "shadowrootclonable": {
            "label": "Shadowroot Clonable",
            "type": "local",
            "values": {}
          },
          "shadowrootdelegatesfocus": {
            "label": "Shadowroot Focus",
            "type": "local",
            "values": {}
          },
          "shadowrootmode": {
            "label": "Shadowroot Mode",
            "type": "local",
            "values": {
              "open": "Open",
              "closed": "Closed"
            }
          },
          "shadowrootserializable": {
            "label": "Shadowroot Serializable",
            "type": "local",
            "values": {}
          },
          "shape": {
            "label": "Shape",
            "type": "local",
            "values": {
              "rect": "Rectangle",
              "circle": "Circle",
              "poly": "Polygonal",
              "default": "Whole Shape"
            }
          },
          "size": {
            "label": "Size",
            "type": "local",
            "values": {}
          },
          "sizes": {
            "label": "Sizes",
            "type": "local",
            "values": {}
          },
          "slot": {
            "label": "Slot",
            "type": "local",
            "values": {}
          },
          "span": {
            "label": "Span",
            "type": "local",
            "values": {}
          },
          "src": {
            "label": "Source",
            "type": "local",
            "values": {}
          },
          "srclang": {
            "label": "Source Language",
            "type": "local",
            "values": "lang"
          },
          "srcset": {
            "label": "Source Descriptors",
            "type": "local",
            "values": {}
          },
          "start": {
            "label": "Start",
            "type": "local",
            "values": {}
          },
          "step": {
            "label": "Step",
            "type": "local",
            "values": {}
          },
          "target": {
            "label": "Target Window",
            "type": "local",
            "values": {
              "_blank": "Blank",
              "_self": "Self",
              "_parent": "Parent",
              "_top": "Top"
            }
          },
          "type": {
            "label": "Type",
            "type": "local",
            "values": {}
          },
          "usemap": {
            "label": "Map",
            "type": "local",
            "values": {}
          },
          "value": {
            "label": "Value",
            "type": "local",
            "values": {}
          },
          "width": {
            "label": "Width",
            "type": "local",
            "values": {}
          },
          "wrap": {
            "label": "Wrap Mode",
            "type": "local",
            "values": {
              "soft": "Soft",
              "hard": "Hard"
            }
          },
          "property": {
            "label": "Property",
            "type": "local",
            "values": {}
          },
          "accesskey": {
            "label": "Access Key(s)",
            "type": "global",
            "values": {}
          },
          "autocapitalize": {
            "label": "Auto Capitalize",
            "type": "global",
            "values": {
              "none": "None",
              "sentences": "Sentences",
              "word": "Word",
              "characters": "Characters"
            }
          },
          "autofocus": {
            "label": "Auto Focus",
            "type": "global",
            "values": {}
          },
          "contenteditable": {
            "label": "Enable Editing",
            "type": "global",
            "values": {
              "true": "True",
              "false": "False",
              "plaintext-only": "Plain Text"
            }
          },
          "data-": {
            "label": "Custom Attribute",
            "type": "global",
            "values": {}
          },
          "dir": {
            "label": "Direction",
            "type": "global",
            "values": {
              "auto": "Auto",
              "ltr": "Left to Right",
              "rtl": "Right to Left"
            }
          },
          "draggable": {
            "label": "Allow Dragging",
            "type": "global",
            "values": {
              "true": "True",
              "false": "False"
            }
          },
          "enterkeyhint": {
            "label": "Enter Key Hint",
            "type": "global",
            "values": {
              "enter": "Enter",
              "done": "Done",
              "go": "Go",
              "next": "Next",
              "previous": "Previous",
              "search": "Search",
              "send": "Send"
            }
          },
          "hidden": {
            "label": "Hide Content",
            "type": "global",
            "values": {
              "hidden": "Until removed",
              "until-found": "Until Found"
            }
          },
          "inert": {
            "label": "Inert",
            "type": "global",
            "values": {}
          },
          "inputmode": {
            "label": "Input Mode",
            "type": "global",
            "values": {
              "none": "None",
              "text": "Text",
              "url": "URL",
              "email": "Email",
              "tel": "Telephone",
              "decimal": "Decimals",
              "numeric": "Numbers",
              "search": "Search"
            }
          },
          "is": {
            "label": "Custom Element Name",
            "type": "global",
            "values": {}
          },
          "itemid": {
            "label": "Item ID",
            "type": "global",
            "values": {}
          },
          "itemprop": {
            "label": "Item Name",
            "type": "global",
            "values": {}
          },
          "itemref": {
            "label": "Item References",
            "type": "global",
            "values": {}
          },
          "itemscope": {
            "label": "Item Scope",
            "type": "global",
            "values": {}
          },
          "itemtype": {
            "label": "Item Type",
            "type": "global",
            "values": {}
          },
          "lang": {
            "label": "Language",
            "type": "global",
            "values": {
              "af": "Afrikaans",
              "am": "Amharic",
              "ar": "Arabic",
              "arn": "Mapudungun",
              "as": "Assamese"  
            }
          },
          "nonce": {
            "label": "Nonce",
            "type": "global",
            "values": {}
          },
          "popover": {
            "label": "Enable Popover",
            "type": "global",
            "values": {
              "manual": "Manual",
              "auto": "Auto"
            }
          },
          "spellcheck": {
            "label": "Check Spelling",
            "type": "global",
            "values": {
              "true": "True",
              "false": "False"
            }
          },
          "style": {
            "label": "Style",
            "type": "global",
            "values": {}
          },
          "tabindex": {
            "label": "Tab Index",
            "type": "global",
            "values": {}
          },
          "title": {
            "label": "Title",
            "type": "global",
            "values": {}
          },
          "translate": {
            "label": "Translate",
            "type": "global",
            "values": {
              "yes": "Yes",
              "no": "No"
            }
          },


          "onauxclick": {
            "label": "Auxiliary Click",
            "type": "event",
            "values": {}
          },
          "onbeforeinput": {
            "label": "Before Input",
            "type": "event",
            "values": {}
          },
          "onbeforematch": {
            "label": "Before Match",
            "type": "event",
            "values": {}
          },
          "onbeforetoggle": {
            "label": "Before Toggle",
            "type": "event",
            "values": {}
          },
          "onblur": {
            "label": "Blur",
            "type": "event",
            "values": {}
          },
          "oncancel": {
            "label": "Cancel",
            "type": "event",
            "values": {}
          },
          "oncanplay": {
            "label": "Can Play",
            "type": "event",
            "values": {}
          },
          "oncanplaythrough": {
            "label": "Can Play Through",
            "type": "event",
            "values": {}
          },
          "onchange": {
            "label": "Change",
            "type": "event",
            "values": {}
          },
          "onclick": {
            "label": "Click",
            "type": "event",
            "values": {}
          },
          "onclose": {
            "label": "Close",
            "type": "event",
            "values": {}
          },
          "oncontextlost": {
            "label": "Context Lost",
            "type": "event",
            "values": {}
          },
          "oncontextmenu": {
            "label": "Context Menu",
            "type": "event",
            "values": {}
          },
          "oncontextrestored": {
            "label": "Context Restored",
            "type": "event",
            "values": {}
          },
          "oncopy": {
            "label": "Copy",
            "type": "event",
            "values": {}
          },
          "oncuechange": {
            "label": "Cue Change",
            "type": "event",
            "values": {}
          },
          "oncut": {
            "label": "Cut",
            "type": "event",
            "values": {}
          },
          "ondblclick": {
            "label": "Double Click",
            "type": "event",
            "values": {}
          },
          "ondrag": {
            "label": "Drag",
            "type": "event",
            "values": {}
          },
          "ondragend": {
            "label": "Drag End",
            "type": "event",
            "values": {}
          },
          "ondragenter": {
            "label": "Drag Enter",
            "type": "event",
            "values": {}
          },
          "ondragleave": {
            "label": "Drag Leave",
            "type": "event",
            "values": {}
          },
          "ondragover": {
            "label": "Drag Over",
            "type": "event",
            "values": {}
          },
          "ondragstart": {
            "label": "Drag Start",
            "type": "event",
            "values": {}
          },
          "ondragdrop": {
            "label": "Drag Drop",
            "type": "event",
            "values": {}
          },
          "ondurationchange": {
            "label": "Duration Change",
            "type": "event",
            "values": {}
          },
          "onemptied": {
            "label": "Emptied",
            "type": "event",
            "values": {}
          },
          "onended": {
            "label": "Ended",
            "type": "event",
            "values": {}
          },
          "onerror": {
            "label": "Error",
            "type": "event",
            "values": {}
          },
          "onfocus": {
            "label": "Focus",
            "type": "event",
            "values": {}
          },
          "onformdata": {
            "label": "Form Data",
            "type": "event",
            "values": {}
          },
          "oninput": {
            "label": "Input",
            "type": "event",
            "values": {}
          },
          "oninvalid": {
            "label": "Invalid",
            "type": "event",
            "values": {}
          },
          "onkeydown": {
            "label": "Keydown",
            "type": "event",
            "values": {}
          },
          "onkeypress": {
            "label": "Keypress",
            "type": "event",
            "values": {}
          },
          "onkeyup": {
            "label": "Keyup",
            "type": "event",
            "values": {}
          },
          "onload": {
            "label": "Load",
            "type": "event",
            "values": {}
          },
          "onloadeddata": {
            "label": "Loaded Data",
            "type": "event",
            "values": {}
          },
          "onloadedmetadata": {
            "label": "Loaded Metadata",
            "type": "event",
            "values": {}
          },
          "onloadstart": {
            "label": "Load Start",
            "type": "event",
            "values": {}
          },
          "onmousedown": {
            "label": "Mouse Down",
            "type": "event",
            "values": {}
          },
          "onmouseenter": {
            "label": "Mouse Enter",
            "type": "event",
            "values": {}
          },
          "onmouseleave": {
            "label": "Mouse Leave",
            "type": "event",
            "values": {}
          },
          "onmousemove": {
            "label": "Mouse Move",
            "type": "event",
            "values": {}
          },
          "onmouseout": {
            "label": "Mouse Out",
            "type": "event",
            "values": {}
          },
          "onmouseover": {
            "label": "Mouse Over",
            "type": "event",
            "values": {}
          },
          "onmouseup": {
            "label": "Mouse Up",
            "type": "event",
            "values": {}
          },
          "onpaste": {
            "label": "Paste",
            "type": "event",
            "values": {}
          },
          "onpause": {
            "label": "Pause",
            "type": "event",
            "values": {}
          },
          "onplay": {
            "label": "Play",
            "type": "event",
            "values": {}
          },
          "onplaying": {
            "label": "Playing",
            "type": "event",
            "values": {}
          },
          "onprogress": {
            "label": "Progress",
            "type": "event",
            "values": {}
          },
          "onratechange": {
            "label": "Rate Change",
            "type": "event",
            "values": {}
          },
          "onreset": {
            "label": "Reset",
            "type": "event",
            "values": {}
          },
          "onresize": {
            "label": "Resize",
            "type": "event",
            "values": {}
          },
          "onscroll": {
            "label": "Scroll",
            "type": "event",
            "values": {}
          },
          "onscrollend": {
            "label": "Scrollend",
            "type": "event",
            "values": {}
          },
          "onsecuritypolicyviolation": {
            "label": "Security Policy Violation",
            "type": "event",
            "values": {}
          },
          "onseeked": {
            "label": "Seeked",
            "type": "event",
            "values": {}
          },
          "onseeking": {
            "label": "Seeking",
            "type": "event",
            "values": {}
          },
          "onselect": {
            "label": "Select",
            "type": "event",
            "values": {}
          },
          "onslotchange": {
            "label": "Slot Change",
            "type": "event",
            "values": {}
          },
          "onstalled": {
            "label": "Slalled",
            "type": "event",
            "values": {}
          },
          "onsubmit": {
            "label": "Submit",
            "type": "event",
            "values": {}
          },
          "onsuspend": {
            "label": "Suspend",
            "type": "event",
            "values": {}
          },
          "ontimeupdate": {
            "label": "Time Update",
            "type": "event",
            "values": {}
          },
          "ontoggle": {
            "label": "Toggle",
            "type": "event",
            "values": {}
          },
          "onvolumechange": {
            "label": "Volume Change",
            "type": "event",
            "values": {}
          },
          "onwaiting": {
            "label": "Waiting",
            "type": "event",
            "values": {}
          },
          "onwheel": {
            "label": "Wheel",
            "type": "event",
            "values": {}
          },
        };
        this.node_kinds = {
          "!": {
            "label": "Comment",
            "category": ["metadata", "noscript"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [],
            "frontiers": []
          },
          "meta-altdoc": {
            "label": "Alt Document",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "hreflang",
              "media",
              "type"
            ],
            "frontiers": ["href", "hreflang"]
          },
          "meta-appname": {
            "label": "App",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-appmanifest": {
            "label": "App Manifest",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "crossorigin",
              "fetchpriority",
              "hreflang",
              "media",
              "type",
              "referrerpolicy"
            ],
            "frontiers": ["href"]
          },
          "meta-asset": {
            "label": "Asset",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "as",
              "crossorigin",
              "fetchpriority",
              "href",
              "hreflang",
              "integrity",
              "media",
              "referrerpolicy",
              "type",
            ],
            "frontiers": ["as"]
          },
          "meta-author": {
            "label": "Author",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-base": {
            "label": "Base URL",
            "category": ["metadata"],
            "content": "void",
            "singleton": true,
            "noscript": false,
            "void": true,
            "attributes": [
              "href",
              "target"
            ],
            "frontiers": ["href"]
          },
          "meta-charset": {
            "label": "Charset",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "charset"
            ],
            "frontiers": ["charset"]
          },
          "meta-contentpolicy": {
            "label": "Content Policy",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-colorscheme": {
            "label": "Color Scheme",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-colortheme": {
            "label": "Color Theme",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content",
              "media"
            ],
            "frontiers": ["content"]
          },
          "meta-custommeta": {
            "label": "Custom Meta",
            "category": ["metadata"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "name",
              "http-equiv",
              "content",
              "charset",
              "media",
              "property"
            ],
            "frontiers": []
          },
          "meta-customlink": {
            "label": "Custom Link",
            "category": ["metadata"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "crossorigin",
              "rel",
              "media",
              "integrity",
              "hreflang",
              "type",
              "referrerpolicy",
              "sizes",
              "imagesrcset",
              "imagesizes",
              "as",
              "blocking",
              "color",
              "disabled",
              "fetchpriority"
            ],
            "frontiers": [
              "rel",
              "href"
            ]
          },
          "meta-description": {
            "label": "Description",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-feed": {
            "label": "Feed",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "hreflang",
              "media"
            ],
            "frontiers": ["href"]
          },
          "meta-generator": {
            "label": "Generator",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-icon": {
            "label": "Icon",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "crossorigin",
              "fetchpriority",
              "hreflang",
              "media",
              "type",
              "referrerpolicy",
              "sizes"
            ],
            "frontiers": ["href"]
          },
          "meta-keywords": {
            "label": "Keywords",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-markuptemplate": {
            "label": "Markup Template",
            "category": ["metadata"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [
              "shadowrootmode",
              "shadowrootdelegatesfocus",
              "shadowrootclonable",
              "shadowrootserializable"
            ],
            "frontiers": []
          },
          "meta-next": {
            "label": "Next Document",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "hreflang",
              "media",
              "type"
            ],
            "frontiers": ["href"]
          },
          "meta-noscript": {
            "label": "Noscript Metas",
            "category": ["metadata"],
            "content": "rich",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [],
            "frontiers": []
          },
          "meta-pingback": {
            "label": "Pingback Handler",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "crossorigin",
              "fetchpriority",
              "hreflang",
              "media",
              "type",
              "referrerpolicy"
            ],
            "frontiers": ["href"]
          },
          "meta-referrer": {
            "label": "Referrer",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-scriptblock": {
            "label": "Script Block",
            "category": ["metadata"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [
              "async",
              "blocking",
              "crossorigin",
              "defer",
              "fetchpriority",
              "integrity",
              "nomodule",
              "referrerpolicy",
              "src"
            ],
            "frontiers": []
          },
          "meta-scriptmodule": {
            "label": "Script Module",
            "category": ["metadata"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [
              "async",
              "blocking",
              "crossorigin",
              "fetchpriority",
              "integrity",
              "referrerpolicy",
              "src"
            ],
            "frontiers": []
          },
          "meta-scriptmap": {
            "label": "Script Map",
            "category": ["metadata"],
            "content": "plain",
            "singleton": true,
            "noscript": false,
            "void": false,
            "attributes": [
              "blocking",
              "fetchpriority",
            ],
            "frontiers": []
          },
          "meta-scriptdata": {
            "label": "Script Data",
            "category": ["metadata"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [
              "blocking",
            ],
            "frontiers": []
          },
          "meta-search": {
            "label": "Search App",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "hreflang",
              "media",
              "type"
            ],
            "frontiers": ["href"]
          },
          "meta-stylealt": {
            "label": "Style Alt",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "blocking",
              "crossorigin",
              "disabled",
              "fetchpriority",
              "hreflang",
              "integrity",
              "media",
              "referrerpolicy",
              "type"
            ],
            "frontiers": ["href"]
          },
          "meta-stylearea": {
            "label": "Style Area",
            "category": ["metadata", "noscript"],
            "content": "plain",
            "singleton": false,
            "noscript": true,
            "void": false,
            "attributes": [
              "blocking",
              "media"
            ],
            "frontiers": []
          },
          "meta-styledef": {
            "label": "Style Default",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-stylelink": {
            "label": "Style Link",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "href",
              "blocking",
              "crossorigin",
              "disabled",
              "fetchpriority",
              "hreflang",
              "integrity",
              "media",
              "referrerpolicy",
              "type"
            ],
            "frontiers": ["href"]
          },
          "meta-timeout": {
            "label": "Timeout",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": true,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          },
          "meta-title": {
            "label": "Title",
            "category": ["metadata"],
            "content": "plain",
            "singleton": true,
            "noscript": false,
            "void": false,
            "attributes": [],
            "frontiers": []
          },
          "meta-viewport": {
            "label": "Viewport",
            "category": ["metadata", "noscript"],
            "content": "void",
            "singleton": false,
            "noscript": true,
            "void": true,
            "attributes": [
              "content"
            ],
            "frontiers": ["content"]
          }
        };
        this.node_elements = {
          "!": {
            "label": "Comment",
            "category": ["metadata", "noscript"],
            "content": "plain",
            "singleton": false,
            "noscript": false,
            "void": false,
            "attributes": [],
            "frontiers": []
          },
          "base": {
            "label": "Base",
            "category": ["metadata"],
            "content": "void",
            "noscript": false,
            "singleton": true,
            "void": true,
            "attributes": [
              "href",
              "target"
            ],
            "frontiers": []
          },
          "link": {
            "label": "Link",
            "category": ["metadata", "noscript"],
            "content": "void",
            "noscript": true,
            "singleton": false,
            "void": true,
            "attributes": [
              "href",
              "crossorigin",
              "rel",
              "media",
              "integrity",
              "hreflang",
              "type",
              "referrerpolicy",
              "sizes",
              "imagesrcset",
              "imagesizes",
              "as",
              "blocking",
              "color",
              "disabled",
              "fetchpriority"
            ],
            "frontiers": [
              "rel", 
              "href"
            ]
          },
          "meta": {
            "label": "Meta",
            "category": ["metadata", "noscript"],
            "content": "void",
            "noscript": true,
            "singleton": false,
            "void": true,
            "attributes": [
              "name",
              "http-equiv",
              "content",
              "charset",
              "media"
            ],
            "frontiers": [
              "name",
              "content"
            ]
          },
          "noscript": {
            "label": "Noscript",
            "category": ["metadata"],
            "content": "rich",
            "noscript": false,
            "singleton": false,
            "void": false,
            "attributes": [],
            "frontiers": []
          },
          "script": {
            "label": "Script",
            "category": ["metadata"],
            "content": "plain",
            "noscript": false,
            "singleton": false,
            "void": false,
            "attributes": [
              "src",
              "type",
              "nomodule",
              "async",
              "defer",
              "crossorigin",
              "integrity",
              "referrerpolicy",
              "blocking",
              "fetchpriority"
            ],
            "frontiers": []
          },
          "style": {
            "label": "Style",
            "category": ["metadata", "noscript"],
            "content": "plain",
            "noscript": true,
            "singleton": false,
            "void": false,
            "attributes": [
              "media",
              "blocking"
            ],
            "frontiers": []
          },
          "template": {
            "label": "Template",
            "category": ["metadata"],
            "content": "plain",
            "noscript": false,
            "singleton": false,
            "void": false,
            "attributes": [
              "shadowrootmode",
              "shadowrootdelegatesfocus",
              "shadowrootclonable",
              "shadowrootserializable"
            ],
            "frontiers": []
          },
          "title": {
            "label": "Title",
            "category": ["metadata"],
            "content": "plain",
            "noscript": false,
            "singleton": true,
            "void": false,
            "attributes": [],
            "frontiers": []
          }
        };
      }

      connectedCallback() {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <p class="attr-form">
            <label>
              <span>Attribute Type</span>
              ${this.attr_type__selector().outerHTML}
            </label>
            <label>
              <span>Node Name</span>
              ${this.node_name__selector().outerHTML}
            </label>
          </p>
          <div class="attr-mix">
            <p class="attr-counter">showing <span id="node-name-count">?</span> attribute(s)</p>
            <ul>
            </ul>
          </div>
        `;

        const ul = dom.querySelector("ul");
        let count = 0;

        for (const [name, {label}] of Object.entries(this.node_attributes)) {

          if (name === "") {
          } else {
            count++
            ul.append(this.attr_item(name, label));
          }
        }
        
        dom.querySelector("#node-name-count").innerHTML = count;
        
        this.append(...dom.childNodes);

        this.addEventListener("change", e => {
          if (["node_name__selector", "attr_type__selector"].includes(e.target.id)) {
            const node_name = document.querySelector("#node_name__selector").value;
            const attr_type = document.querySelector("#attr_type__selector").value;
            const attr_nodes = this.querySelectorAll("a");
            let count = 0;
            let local_attrs = [];

            if (node_name === "") {
            } else if (node_name.startsWith("meta-")) {
              local_attrs = this.node_kinds[node_name]["attributes"];
            } else {
              local_attrs = this.node_elements[node_name]["attributes"];
            }

            for (const node of attr_nodes) {
              const li = node.closest("li");
              const id = node.id;

              if (node_name === "") {
                if (["", this.node_attributes[id]["type"]].includes(attr_type)) {
                  li.hidden = "";
                  count++
                } else {
                  li.hidden = "hidden";
                }
              } else {
                let local_attrs = [];

                if (node_name.startsWith("meta-")) {
                  local_attrs = this.node_kinds[node_name]["attributes"];
                } else {
                  local_attrs = this.node_elements[node_name]["attributes"];
                }

                if (attr_type === "") {
                  if (local_attrs.includes(id) || ["global", "event"].includes(this.node_attributes[id]["type"])) {
                    li.hidden = "";
                    count++
                  } else {
                    li.hidden = "hidden";
                  }
                } else if (attr_type === "local") {
                  if (local_attrs.includes(id)) {
                    li.hidden = "";
                    count++
                  } else {
                    li.hidden = "hidden";
                  }
                } else {
                  if (this.node_attributes[id]["type"] === attr_type) {
                    li.hidden = "";
                    count++
                  } else {
                    li.hidden = "hidden";
                  }
                }
              }
            }

            this.querySelector("#node-name-count").innerHTML = count;
          }
        })
      }

      attr_item(name, label) {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <li>
            <p>
              <a id="${name}">
                <span class="attr-name">${name}</span>
                <span class="attr-label">${label}</span>  
              </a>
            </p>  
          </li>
        `;

        return dom.querySelector("li");
      }
    
      node_name__selector() {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <select id="node_name__selector">
            <option value="">All</option>
            <optgroup label="elements"></optgroup>
            <optgroup label="kinds"></optgroup>
          </select>
        `;

        const optgroup_element = dom.querySelector("[label=elements]")
        
        for (const [name, details] of Object.entries(this.node_elements)) {

          if (["", "!"].includes(name)) {
          } else {
            const option = document.createElement("option");
  
            optgroup_element.append(option);
            option.textContent = details["label"];
            option.value = name;
          }
        }
        
        
        const optgroup_kinds = dom.querySelector("[label=kinds]")
        
        for (const [name, details] of Object.entries(this.node_kinds)) {

          if (["", "!"].includes(name)) {
          } else {
            const option = document.createElement("option");
    
            optgroup_kinds.append(option);
            option.textContent = details["label"];
            option.value = name;
          }
        }
      
        const selector = dom.querySelector("select");

        return selector;
      }
    
      attr_type__selector() {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <select id="attr_type__selector">
            <option value="">All</option>
            <option value="local">Local</option>
            <option value="global">Global</option>
            <option value="event">Event</option>
          </select>
        `;

        const selector = dom.querySelector("select");

        return selector;
      }
    }

    customElements.define("html-attrset", HTMLAttrSet)
  </script>
---

# {{title}}

Browse and filter all 204 HTML attributes by their scope and elements

<html-attrset></html-attrset>

<p class="menu">
  <a href="/en">Home</a>
</p>
