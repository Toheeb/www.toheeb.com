
class ToheebElement extends HTMLElement {

  constructor() {
    super()

    this.p = "parent property"
    this.legacy_mode = false
    // this.legacy_mode = true
    
    this.meta_contents = {
      "": {
        "label": "Add Meta",
        "opt_attrs": [
          "accesskey", 
          "autocapitalize",
          "autofocus",
          "contenteditable",
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
          "data-",
        ],
      },
      "meta-appname": {
        "label": "Application Name",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-author": {
        "label": "Author",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-target": {
        "label": "Base Target",
        "singleton": true,
        "noscript": false,
        "comp_attrs": ["target"],
        "opt_attrs": [],
      },      
      "meta-url": {
        "label": "Base URL",
        "singleton": true,
        "noscript": false,
        "comp_attrs": ["href"],
        "opt_attrs": [],
      },
      "meta-canonical": {
        "label": "Canonical Address",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "hreflang",
          "media",
          "type",
        ],
      },
      "meta-charset": {
        "label": "Character Set",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["charset"],
        "opt_attrs": [],
      },
      "meta-description": {
        "label": "Description",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-feed": {
        "label": "Feed",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "hreflang",
          "media",
        ],
      },
      "meta-generator": {
        "label": "Generator",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-icon": {
        "label": "Icon Address",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "crossorigin",
          "fetchpriority",
          "hreflang",
          "media",
          "type",
          "referrerpolicy",
          "sizes",
        ],
      },
      "meta-keywords": {
        "label": "Keywords",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-manifest": {
        "label": "Manifest",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "crossorigin",
          "fetchpriority",
          "hreflang",
          "media",
          "type",
          "referrerpolicy",
        ],
      },
      "meta-next": {
        "label": "Next Document Address",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "hreflang",
          "media",
          "type",
        ],
      },
      "meta-pingback": {
        "label": "Pingback Handler",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "crossorigin",
          "fetchpriority",
          "hreflang",
          "media",
          "type",
          "referrerpolicy",
        ],
      },
      "meta-redirect": {
        "label": "Redirect",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-referrer": {
        "label": "Referrer",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-reform": {
        "label": "Reform",
        "singleton": false,
        "noscript": true,
        "comp_attrs": [
          "href",
          "type",
        ],
        "opt_attrs": [
          "hreflang",
          "media",
        ],
      },
      "meta-robots": {
        "label": "Rebort",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-scheme": {
        "label": "Scheme",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-scriptarea": {
        "label": "Embedded Script",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "blocking",
          "crossorigin",
          "fetchpriority",
          "nomodule",
          "referrerpolicy",
        ],
      },
      "meta-scriptlink": {
        "label": "External Script",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["src"],
        "opt_attrs": [
          "async",
          "blocking",
          "crossorigin",
          "defer",
          "fetchpriority",
          "integrity",
          "nomodule",
          "referrerpolicy",
        ],
      },
      "meta-modulearea": {
        "label": "Script Module Area",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "async",
          "blocking",
          "crossorigin",
          "fetchpriority",
          "referrerpolicy",
        ],
      },
      "meta-modulelink": {
        "label": "Script Module Link",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["src"],
        "opt_attrs": [
          "async",
          "blocking",
          "crossorigin",
          "fetchpriority",
          "integrity",
          "referrerpolicy",
        ],
      },
      "meta-importmap": {
        "label": "Script Import Map",
        "singleton": true,
        "noscript": false,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "blocking",
          "fetchpriority",
        ],
      },
      "meta-scriptdata": {
        "label": "Script Data",
        "singleton": false,
        "noscript": false,
        "comp_attrs": [
          "type",
          "content",
        ],
        "opt_attrs": [],

      },
      "meta-search": {
        "label": "Search Tool",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "hreflang",
          "media",
          "type",
        ],
      },
      "meta-security": {
        "label": "Content Security Policy",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-stylealt": {
        "label": "Style Alternative",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "blocking",
          "crossorigin",
          "disabled",
          "fetchpriority",
          "hreflang",
          "integrity",
          "media",
          "referrerpolicy",
          "type",
        ],
      },
      "meta-stylearea": {
        "label": "Style Area",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "blocking",
          "media",
        ],
      },
      "meta-styledef": {
        "label": "Style Default",
        "singleton": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-stylelink": {
        "label": "Style Link",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "blocking",
          "crossorigin",
          "disabled",
          "fetchpriority",
          "hreflang",
          "integrity",
          "media",
          "referrerpolicy",
          "type",
        ],
      },
      "meta-template": {
        "label": "Template",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["href"],
        "opt_attrs": [
          "shadowrootmode",
          "shadowrootdelegatesfocus",
          "shadowrootclonable",
          "shadowrootserializable",
        ],
      },
      "meta-theme": {
        "label": "Theme",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": ["media"],
      },
      "meta-title": {
        "label": "Document Title",
        "singleton": true,
        "noscript": false,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-translation": {
        "label": "Translation",
        "singleton": false,
        "noscript": true,
        "comp_attrs": [
          "href",
          "hreflang",
        ],
        "opt_attrs": [
          "media",
          "type",
        ],
      },
      "meta-viewport": {
        "label": "Viewport",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-noscript": {
        "label": "Noscript",
        "singleton": false,
        "noscript": false,
        "comp_attrs": [],
        "opt_attrs": [],
      },
      "meta-custom": {
        "label": "Custom Meta",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["data-element"],
        "opt_attrs": [
          "abbr",
          "accept",
          "accept-charset",
          "action",
          "allow",
          "allowfullscreen",
          "alt",
          "as",
          "async",
          "autocomplete",
          "autoplay",
          "blocking",
          "charset",
          "check",
          "cite",
          "class",
          "color",
          "cols",
          "colspan",
          "content",
          "controls",
          "coords",
          "crossorigin",
          "data",
          "data-",
          "datetime",
          "decoding",
          "default",
          "defer",
          "dirname",
          "disabled",
          "download",
          "enctype",
          "fetchpriority",
          "for",
          "form",
          "formaction",
          "formenctype",
          "formmethod",
          "formnovalidate",
          "formtarget",
          "headers",
          "height",
          "high",
          "href",
          "hreflang",
          "http-equiv",
          "id",
          "imagesizes",
          "imagesrcset",
          "integrity",
          "ismap",
          "kind",
          "label",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "mute",
          "multiple",
          "name",
          "nomodule",
          "novalidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "playsinline",
          "popovertarget",
          "popovertargetaction",
          "poster",
          "preload",
          "readonly",
          "referrerpolicy",
          "rel",
          "required",
          "reversed",
          "rows",
          "sandbox",
          "scope",
          "selected",
          "shadowrootdelegatefocus",
          "shadowrootmode",
          "shadowrootmode",
          "shape",
          "size",
          "sizes",
          "slot",
          "span",
          "src",
          "srclang",
          "srcset",
          "start",
          "step",
          "target",
          "type",
          "usemap",
          "value",
          "width",
          "wrap",
        ]
      }
    }

    this.meta_elements = {
      "": {
        "label": "Add Legacy Meta",
        "comp_attrs": [],
        "opt_attrs": [
          "accesskey", 
          "autocapitalize",
          "autofocus",
          "contenteditable",
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
          "data-",
        ],
      },
      "base": {
        "label": "Base",
        "noscript": false,
        "singleton": true,
        "comp_attrs": [],
        "opt_attrs": [
          "href",
          "target",
        ]
      },
      "link": {
        "label": "Link",
        "noscript": true,
        "singleton": false,
        "comp_attrs": [],
        "opt_attrs": [
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
          "fetchpriority",
        ],
      },
      "meta": {
        "label": "Meta",
        "noscript": true,
        "singleton": false,
        "comp_attrs": [],
        "opt_attrs": [
          "name",
          "http-equiv",
          "content",
          "charset",
          "media",
        ],
      },
      "noscript": {
        "label": "Noscript",
        "noscript": false,
        "singleton": false,
        "comp_attrs": [],
        "opt_attrs": [],
      },
      "script": {
        "label": "Script",
        "noscript": false,
        "singleton": false,
        "comp_attrs": [],
        "opt_attrs": [
          "src",
          "type",
          "nomodule",
          "async",
          "defer",
          "crossorigin",
          "integrity",
          "referrerpolicy",
          "blocking",
          "fetchpriority",
        ],
      },
      "style": {
        "label": "Style",
        "noscript": true,
        "singleton": false,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "media",
          "blocking",
        ],
      },
      "template": {
        "label": "Template",
        "noscript": false,
        "singleton": false,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "title": {
        "label": "Title",
        "noscript": false,
        "singleton": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      }
    }

    // this.get_metas() = this.legacy_mode
    // ? {
    //   "": {
    //     "label": "Add Legacy Meta",
    //     "comp_attrs": [],
    //     "opt_attrs": [
    //       "accesskey", 
    //       "autocapitalize",
    //       "autofocus",
    //       "contenteditable",
    //       "dir",
    //       "draggable",
    //       "enterkeyhint",
    //       "hidden",
    //       "inert",
    //       "inputmode",
    //       "is",
    //       "itemid",
    //       "itemprop",
    //       "itemref",
    //       "itemscope",
    //       "itemtype",
    //       "lang",
    //       "nonce",
    //       "popover",
    //       "spellcheck",
    //       "style",
    //       "tabindex",
    //       "title",
    //       "translate",
    //       "data-",
    //     ],
    //   },
    //   "base": {
    //     "label": "Base",
    //     "noscript": false,
    //     "singleton": true,
    //     "comp_attrs": [],
    //     "opt_attrs": [
    //       "href",
    //       "target",
    //     ]
    //   },
    //   "link": {
    //     "label": "Link",
    //     "noscript": true,
    //     "singleton": false,
    //     "comp_attrs": [],
    //     "opt_attrs": [
    //       "href",
    //       "crossorigin",
    //       "rel",
    //       "media",
    //       "integrity",
    //       "hreflang",
    //       "type",
    //       "referrerpolicy",
    //       "sizes",
    //       "imagesrcset",
    //       "imagesizes",
    //       "as",
    //       "blocking",
    //       "color",
    //       "disabled",
    //       "fetchpriority",
    //     ],
    //   },
    //   "meta": {
    //     "label": "Meta",
    //     "noscript": true,
    //     "singleton": false,
    //     "comp_attrs": [],
    //     "opt_attrs": [
    //       "name",
    //       "http-equiv",
    //       "content",
    //       "charset",
    //       "media",
    //     ],
    //   },
    //   "noscript": {
    //     "label": "Noscript",
    //     "noscript": false,
    //     "singleton": false,
    //     "comp_attrs": [],
    //     "opt_attrs": [],
    //   },
    //   "script": {
    //     "label": "Script",
    //     "noscript": false,
    //     "singleton": false,
    //     "comp_attrs": [],
    //     "opt_attrs": [
    //       "src",
    //       "type",
    //       "nomodule",
    //       "async",
    //       "defer",
    //       "crossorigin",
    //       "integrity",
    //       "referrerpolicy",
    //       "blocking",
    //       "fetchpriority",
    //     ],
    //   },
    //   "style": {
    //     "label": "Style",
    //     "noscript": true,
    //     "singleton": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [
    //       "media",
    //       "blocking",
    //     ],
    //   },
    //   "template": {
    //     "label": "Template",
    //     "noscript": false,
    //     "singleton": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "title": {
    //     "label": "Title",
    //     "noscript": false,
    //     "singleton": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   }
    // }
    // : {
    //   "": {
    //     "label": "Add Meta",
    //     "opt_attrs": [
    //       "accesskey", 
    //       "autocapitalize",
    //       "autofocus",
    //       "contenteditable",
    //       "dir",
    //       "draggable",
    //       "enterkeyhint",
    //       "hidden",
    //       "inert",
    //       "inputmode",
    //       "is",
    //       "itemid",
    //       "itemprop",
    //       "itemref",
    //       "itemscope",
    //       "itemtype",
    //       "lang",
    //       "nonce",
    //       "popover",
    //       "spellcheck",
    //       "style",
    //       "tabindex",
    //       "title",
    //       "translate",
    //       "data-",
    //     ],
    //   },
    //   "meta-appname": {
    //     "label": "Application Name",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-author": {
    //     "label": "Author",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-target": {
    //     "label": "Base Target",
    //     "singleton": true,
    //     "noscript": false,
    //     "comp_attrs": ["target"],
    //     "opt_attrs": [],
    //   },      
    //   "meta-url": {
    //     "label": "Base URL",
    //     "singleton": true,
    //     "noscript": false,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [],
    //   },
    //   "meta-canonical": {
    //     "label": "Canonical Address",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "hreflang",
    //       "media",
    //       "type",
    //     ],
    //   },
    //   "meta-charset": {
    //     "label": "Character Set",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["charset"],
    //     "opt_attrs": [],
    //   },
    //   "meta-description": {
    //     "label": "Description",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-feed": {
    //     "label": "Feed",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "hreflang",
    //       "media",
    //     ],
    //   },
    //   "meta-generator": {
    //     "label": "Generator",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-icon": {
    //     "label": "Icon Address",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "crossorigin",
    //       "fetchpriority",
    //       "hreflang",
    //       "media",
    //       "type",
    //       "referrerpolicy",
    //       "sizes",
    //     ],
    //   },
    //   "meta-keywords": {
    //     "label": "Keywords",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-manifest": {
    //     "label": "Manifest",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "crossorigin",
    //       "fetchpriority",
    //       "hreflang",
    //       "media",
    //       "type",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-next": {
    //     "label": "Next Document Address",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "hreflang",
    //       "media",
    //       "type",
    //     ],
    //   },
    //   "meta-pingback": {
    //     "label": "Pingback Handler",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "crossorigin",
    //       "fetchpriority",
    //       "hreflang",
    //       "media",
    //       "type",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-redirect": {
    //     "label": "Redirect",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-referrer": {
    //     "label": "Referrer",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-reform": {
    //     "label": "Reform",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": [
    //       "href",
    //       "type",
    //     ],
    //     "opt_attrs": [
    //       "hreflang",
    //       "media",
    //     ],
    //   },
    //   "meta-robots": {
    //     "label": "Rebort",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-scheme": {
    //     "label": "Scheme",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-scriptarea": {
    //     "label": "Embedded Script",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [
    //       "blocking",
    //       "crossorigin",
    //       "fetchpriority",
    //       "nomodule",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-scriptlink": {
    //     "label": "External Script",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": ["src"],
    //     "opt_attrs": [
    //       "async",
    //       "blocking",
    //       "crossorigin",
    //       "defer",
    //       "fetchpriority",
    //       "integrity",
    //       "nomodule",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-modulearea": {
    //     "label": "Script Module Area",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [
    //       "async",
    //       "blocking",
    //       "crossorigin",
    //       "fetchpriority",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-modulelink": {
    //     "label": "Script Module Link",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": ["src"],
    //     "opt_attrs": [
    //       "async",
    //       "blocking",
    //       "crossorigin",
    //       "fetchpriority",
    //       "integrity",
    //       "referrerpolicy",
    //     ],
    //   },
    //   "meta-importmap": {
    //     "label": "Script Import Map",
    //     "singleton": true,
    //     "noscript": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [
    //       "blocking",
    //       "fetchpriority",
    //     ],
    //   },
    //   "meta-scriptdata": {
    //     "label": "Script Data",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": [
    //       "type",
    //       "content",
    //     ],
    //     "opt_attrs": [],

    //   },
    //   "meta-search": {
    //     "label": "Search Tool",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "hreflang",
    //       "media",
    //       "type",
    //     ],
    //   },
    //   "meta-security": {
    //     "label": "Content Security Policy",
    //     "singleton": true,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-stylealt": {
    //     "label": "Style Alternative",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "blocking",
    //       "crossorigin",
    //       "disabled",
    //       "fetchpriority",
    //       "hreflang",
    //       "integrity",
    //       "media",
    //       "referrerpolicy",
    //       "type",
    //     ],
    //   },
    //   "meta-stylearea": {
    //     "label": "Style Area",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [
    //       "blocking",
    //       "media",
    //     ],
    //   },
    //   "meta-styledef": {
    //     "label": "Style Default",
    //     "singleton": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-stylelink": {
    //     "label": "Style Link",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "blocking",
    //       "crossorigin",
    //       "disabled",
    //       "fetchpriority",
    //       "hreflang",
    //       "integrity",
    //       "media",
    //       "referrerpolicy",
    //       "type",
    //     ],
    //   },
    //   "meta-template": {
    //     "label": "Template",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": ["href"],
    //     "opt_attrs": [
    //       "shadowrootmode",
    //       "shadowrootdelegatesfocus",
    //       "shadowrootclonable",
    //       "shadowrootserializable",
    //     ],
    //   },
    //   "meta-theme": {
    //     "label": "Theme",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": ["media"],
    //   },
    //   "meta-title": {
    //     "label": "Document Title",
    //     "singleton": true,
    //     "noscript": false,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-translation": {
    //     "label": "Translation",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": [
    //       "href",
    //       "hreflang",
    //     ],
    //     "opt_attrs": [
    //       "media",
    //       "type",
    //     ],
    //   },
    //   "meta-viewport": {
    //     "label": "Viewport",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["content"],
    //     "opt_attrs": [],
    //   },
    //   "meta-noscript": {
    //     "label": "Noscript",
    //     "singleton": false,
    //     "noscript": false,
    //     "comp_attrs": [],
    //     "opt_attrs": [],
    //   },
    //   "meta-custom": {
    //     "label": "Custom Meta",
    //     "singleton": false,
    //     "noscript": true,
    //     "comp_attrs": ["data-element"],
    //     "opt_attrs": [
    //       "abbr",
    //       "accept",
    //       "accept-charset",
    //       "action",
    //       "allow",
    //       "allowfullscreen",
    //       "alt",
    //       "as",
    //       "async",
    //       "autocomplete",
    //       "autoplay",
    //       "blocking",
    //       "charset",
    //       "check",
    //       "cite",
    //       "class",
    //       "color",
    //       "cols",
    //       "colspan",
    //       "content",
    //       "controls",
    //       "coords",
    //       "crossorigin",
    //       "data",
    //       "data-",
    //       "datetime",
    //       "decoding",
    //       "default",
    //       "defer",
    //       "dirname",
    //       "disabled",
    //       "download",
    //       "enctype",
    //       "fetchpriority",
    //       "for",
    //       "form",
    //       "formaction",
    //       "formenctype",
    //       "formmethod",
    //       "formnovalidate",
    //       "formtarget",
    //       "headers",
    //       "height",
    //       "high",
    //       "href",
    //       "hreflang",
    //       "http-equiv",
    //       "id",
    //       "imagesizes",
    //       "imagesrcset",
    //       "integrity",
    //       "ismap",
    //       "kind",
    //       "label",
    //       "list",
    //       "loading",
    //       "loop",
    //       "low",
    //       "max",
    //       "maxlength",
    //       "media",
    //       "method",
    //       "min",
    //       "minlength",
    //       "mute",
    //       "multiple",
    //       "name",
    //       "nomodule",
    //       "novalidate",
    //       "open",
    //       "optimum",
    //       "pattern",
    //       "ping",
    //       "placeholder",
    //       "playsinline",
    //       "popovertarget",
    //       "popovertargetaction",
    //       "poster",
    //       "preload",
    //       "readonly",
    //       "referrerpolicy",
    //       "rel",
    //       "required",
    //       "reversed",
    //       "rows",
    //       "sandbox",
    //       "scope",
    //       "selected",
    //       "shadowrootdelegatefocus",
    //       "shadowrootmode",
    //       "shadowrootmode",
    //       "shape",
    //       "size",
    //       "sizes",
    //       "slot",
    //       "span",
    //       "src",
    //       "srclang",
    //       "srcset",
    //       "start",
    //       "step",
    //       "target",
    //       "type",
    //       "usemap",
    //       "value",
    //       "width",
    //       "wrap",
    //     ]
    //   }
    // }

    this.attrs = {
      "": {
        "label": "Add Attribute...",
      },
      "abbr": {
        "label": "Abbreviation",
        "global": false,
      },
      "accept": {
        "label": "Acceptable Upload",
        "global": false,
      },
      "accept-charset": {
        "label": "Form Character Set",
        "global": false,
      },
      "accesskey": {
        "label": "Access Key(s)",
        "global": true,
      },
      "action": {
        "label": "Form Handler",
        "global": false,
      },
      "allow": {
        "label": "Permission Policy",
        "global": false,
      },
      "allowfullscreen": {
        "label": "Allow Fullscreen",
        "global": false,
      },
      "alt": {
        "label": "Alternative Text",
        "global": false,
      },
      "as": {
        "label": "Preload Type",
        "global": false,
      },
      "async": {
        "label": "Load Ascrynchronously",
        "global": false,
      },
      "autocapitalize": {
        "label": "Auto Capitalize",
        "global": true,
      },
      "autocomplete": {
        "label": "Auto Complete",
        "global": false,
      },
      "autofocus": {
        "label": "Auto Focus",
        "global": true,
      },
      "autoplay": {
        "label": "Auto Play",
        "global": false,
      },
      "blocking": {
        "label": "Block",
        "global": false,
      },
      "charset": {
        "label": "Character Set",
        "global": false,
      },
      "check": {
        "label": "Check Form",
        "global": false,
      },
      "cite": {
        "label": "Citation Source",
        "global": false,
      },
      "class": {
        "label": "Class ID",
        "global": false,
      },
      "color": {
        "label": "Icon Color",
        "global": false,
      },
      "cols": {
        "label": "Line Width",
        "global": false,
      },
      "colspan": {
        "label": "Column Span",
        "global": false,
      },
      "content": {
        "label": "Content",
        "global": false,
      },
      "controls": {
        "label": "Show Controls",
        "global": false,
      },
      "coords": {
        "label": "Coordinates",
        "global": false,
      },
      "contenteditable": {
        "label": "Enable Editing",
        "global": true,
      },
      "crossorigin": {
        "label": "Cross Origin",
        "global": false,
      },
      "data": {
        "label": "Data",
        "global": false,
      },
      "data-": {
        "label": "Custom Attribute",
        "global": true,
      },
      "data-element": {
        "label": "Element",
        "global": false,
      },
      "datetime": {
        "label": "Date and Time",
        "global": false,
      },
      "decoding": {
        "label": "Decoding Model",
        "global": false,
      },
      "default": {
        "label": "Set Default",
        "global": false,
      },
      "defer": {
        "label": "Defer Script",
        "global": false,
      },
      "dir": {
        "label": "Direction",
        "global": true,
      },
      "dirname": {
        "label": "Dirname",
        "global": false,
      },
      "disabled": {
        "label": "Disable Form",
        "global": false,
      },
      "download": {
        "label": "Enable Download",
        "global": false,
      },
      "draggable": {
        "label": "Allow Dragging",
        "global": true,
      },
      "enctype": {
        "label": "Encoding Type",
        "global": false,
      },
      "enterkeyhint": {
        "label": "Enter Key Hint",
        "global": true,
      },
      "fetchpriority": {
        "label": "Fetch Priority",
        "global": false,
      },
      "for": {
        "label": "Form",
        "global": false,
      },
      "form": {
        "label": "Form Container",
        "global": false,
      },
      "formaction": {
        "label": "Form Handler",
        "global": false,
      },
      "formenctype": {
        "label": "Data Format",
        "global": false,
      },
      "formmethod": {
        "label": "Form Method",
        "global": false,
      },
      "formnovalidate": {
        "label": "Disable Validation",
        "global": false,
      },
      "formtarget": {
        "label": "Target Window",
        "global": false,
      },
      "headers": {
        "label": "Table Headers",
        "global": false,
      },
      "height": {
        "label": "Height",
        "global": false,
      },
      "hidden": {
        "label": "Hide Content",
        "global": true,
      },
      "high": {
        "label": "High Point",
        "global": false,
      },
      "href": {
        "label": "Address",
        "global": false,
      },
      "hreflang": {
        "label": "Address Language",
        "global": false,
      },
      "http-equiv": {
        "label": "Pragma Directive",
        "global": false,
      },
      "id": {
        "label": "ID",
        "global": false,
      },
      "imagesizes": {
        "label": "Source Sizes",
        "global": false,
      },
      "imagesrcset": {
        "label": "Source Descriptors",
        "global": false,
      },
      "inert": {
        "label": "Inert",
        "global": true,
      },
      "inputmode": {
        "label": "Input Mode",
        "global": true,
      },
      "integrity": {
        "label": "Integrity Text",
        "global": false,
      },
      "is": {
        "label": "Custom Element Name",
        "global": true,
      },
      "ismap": {
        "label": "Access Map",
        "global": false,
      },
      "itemid": {
        "label": "Item ID",
        "global": true,
      },
      "itemprop": {
        "label": "Item Name",
        "global": true,
      },
      "itemref": {
        "label": "Item References",
        "global": true,
      },
      "itemscope": {
        "label": "Item Scope",
        "global": true,
      },
      "itemtype": {
        "label": "Item Type",
        "global": true,
      },
      "kind": {
        "label": "Type",
        "global": false,
      },
      "label": {
        "label": "Label",
        "global": false,
      },
      "lang": {
        "label": "Language",
        "global": true,
      },
      "list": {
        "label": "Data List",
        "global": false,
      },
      "loading": {
        "label": "Loading Mechanism",
        "global": false,
      },
      "loop": {
        "label": "Loop",
        "global": false,
      },
      "low": {
        "label": "Low Point",
        "global": false,
      },
      "max": {
        "label": "Maximum Point",
        "global": false,
      },
      "maxlength": {
        "label": "Maximum Length",
        "global": false,
      },
      "media": {
        "label": "Media",
        "global": false,
      },
      "method": {
        "label": "Form Method",
        "global": false,
      },
      "min": {
        "label": "Minimum Point",
        "global": false,
      },
      "minlength": {
        "label": "Minimum Length",
        "global": false,
      },
      "mute": {
        "label": "Mute",
        "global": false,
      },
      "multiple": {
        "label": "Allow Multiple",
        "global": false,
      },
      "name": {
        "label": "Name",
        "global": false,
      },
      "nomodule": {
        "label": "No Module",
        "global": false,
      },
      "nonce": {
        "label": "Nonce",
        "global": true,
      },
      "novalidate": {
        "label": "Disable Validation",
        "global": false,
      },
      "open": {
        "label": "Open",
        "global": false,
      },
      "optimum": {
        "label": "Optimum Point",
        "global": false,
      },
      "pattern": {
        "label": "Pattern",
        "global": false,
      },
      "ping": {
        "label": "Ping Addresses",
        "global": false,
      },
      "placeholder": {
        "label": "Placeholder",
        "global": false,
      },
      "playsinline": {
        "label": "Play Inline",
        "global": false,
      },
      "popover": {
        "label": "Enable Popover",
        "global": true,
      },
      "popovertarget": {
        "label": "Popover Target",
        "global": false,
      },
      "popovertargetaction": {
        "label": "Popover Target Visibility",
        "global": false,
      },
      "poster": {
        "label": "Poster",
        "global": false,
      },
      "preload": {
        "label": "Preload",
        "global": false,
      },
      "readonly": {
        "label": "Readonly",
        "global": false,
      },
      "referrerpolicy": {
        "label": "Referrer Policy",
        "global": false,
      },
      "rel": {
        "label": "Relation",
        "global": false,
      },
      "required": {
        "label": "Required",
        "global": false,
      },
      "reversed": {
        "label": "Reversed",
        "global": false,
      },
      "rows": {
        "label": "Rows",
        "global": false,
      },
      "sandbox": {
        "label": "Sandbox",
        "global": false,
      },
      "scope": {
        "label": "Scope",
        "global": false,
      },
      "selected": {
        "label": "Selected",
        "global": false,
      },
      "shadowrootdelegatefocus": {
        "label": "Shadowroot Focus",
        "global": false,
      },
      "shadowrootmode": {
        "label": "Shadowroot Mode",
        "global": false,
      },
      "shape": {
        "label": "Shape",
        "global": false,
      },
      "size": {
        "label": "Size",
        "global": false,
      },
      "sizes": {
        "label": "Sizes",
        "global": false,
      },
      "slot": {
        "label": "Slot",
        "global": false,
      },
      "span": {
        "label": "Span",
        "global": false,
      },
      "spellcheck": {
        "label": "Check Spelling",
        "global": true,
      },
      "src": {
        "label": "Source",
        "global": false,
      },
      "srclang": {
        "label": "Source Language",
        "global": false,
      },
      "srcset": {
        "label": "Source Descriptors",
        "global": false,
      },
      "start": {
        "label": "Start",
        "global": false,
      },
      "step": {
        "label": "Step",
        "global": false,
      },
      "style": {
        "label": "Style",
        "global": true,
      },
      "tabindex": {
        "label": "Tab Index",
        "global": true,
      },
      "target": {
        "label": "Target Window",
        "global": false,
      },
      "title": {
        "label": "Title",
        "global": true,
      },
      "translate": {
        "label": "Translate",
        "global": true,
      },
      "type": {
        "label": "Type",
        "global": false,
      },
      "usemap": {
        "label": "Map",
        "global": false,
      },
      "value": {
        "label": "Value",
        "global": false,
      },
      "width": {
        "label": "Width",
        "global": false,
      },
      "wrap": {
        "label": "Wrap Mode",
        "global": false,
      }
    }
    
    this.token_values = {
      "charset": "UTF-8",
      "blocking": "render",
      "accept-charset": "UTF-8",
    }

    this.token_bases = {
      "enctype": {
        "application/x-www-form-urlencoded": "Encoded",
        "multipart/form-data": "Multipart",
        "text/plain": "Plain",
      },
      "method": {
        "post": "Post",
        "get": "Get",
        "dialog": "Dialog",
      },
      "lang": {
        "af": "Afrikaans",
        "am": "Amharic",
        "ar": "Arabic",
        "arn": "Mapudungun",
        "as": "Assamese",  
      },
      "target": {
        "_blank": "Blank",
        "_self": "Self",
        "_parent": "Parent",
        "_top": "Top",
      }
    }

    this.tokens = {
      'as': {
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
      },
      'autocapitalize': {
        "none": "None",
        "sentences": "Sentences",
        "word": "Word",
        "characters": "Characters",
      },
      "autocomplete": {
        "on": "On",
        "off": "Off",
      },
      "contenteditable": {
        "true": "True",
        "false": "False",
        "plaintext-only": "Plain Text",
      },
      "crossorigin": {
        "anonymous": "Anonymous",
        "use-credentials": "Use Credentials",
      },
      "data-element": {
        "base": "Base", 
        "link": "Link", 
        "meta": "Meta", 
        "noscript": "Noscript", 
        "script": "Script", 
        "style": "Style", 
        "template": "Template", 
        "title": "Title", 
      },
      "decoding": {
        "auto": "Auto",
        "async": "Async",
        "sync": "Sync",
      }, 
      "dir": {
        "auto": "Auto",
        "ltr": "Left to Right",
        "rtl": "Right to Left",
      },
      "draggable": {
        "true": "True",
        "false": "False",
      },
      "enctype": this.token_bases["enctype"],
      "enterhintkey": {
        "enter": "Enter",
        "done": "Done",
        "go": "Go",
        "next": "Next",
        "previous": "Previous",
        "search": "Search",
        "send": "Send",
      },
      "fetchpriority": {
        "auto": "Auto",
        "low": "Low",
        "high": "High",
      },
      "formenctype": this.token_bases["enctype"],
      "formmethod": this.token_bases["method"],
      "hidden": {
        "hidden": "Until removed",
        "until-found": "Until Found",
      },
      "hreflang": this.token_bases["lang"],
      "http-equiv": {
        "content-type": "Content Type",
        "default-style": "Default Style",
        "refresh": "Refresh",
        "content-security-policy": "Content Security Policy",
      },
      "inputmode": {
        "none": "None",
        "text": "Text",
        "url": "URL",
        "email": "Email",
        "tel": "Telephone",
        "decimal": "Decimals",
        "numeric": "Numbers",
        "search": "Search",
      },
      "kind": {
        "metadata": "Metadata",
        "subtitles": "Subtitles",
        "captions": "Captions",
        "descriptions": "Descriptions",
        "chapters": "Chapters",
      },
      "lang": this.token_bases["lang"],
      "loading": {
        "lazy": "Lazy",
        "eager": "Eager",
      },
      "method": this.token_bases["method"],
      "popover": {
        "manual": "Manual",
        "auto": "Auto",
      },
      "popovertargetaction": {
        "toggle": "Toggle",
        "show": "Show",
        "hide": "Hide",
      },
      "preload": {
        "metadata": "Metadata",
        "none": "None",
        "auto": "Auto",
      },
      "referrerpolicy": {
        "": "Inherit or No Referrer when downgrade",
        "no-referrer": "No Referrer",
        "unsafe-url": "Unsafe URL",
        "no-referrer-when-downgrade": "No referrer when downgrade",
        "origin": "Origin",
        "strict-origin": "Strict Origin",
        "same-origin": "Same Origin",
        "origin-when-cross-origin": "Origin when Cross Origin",
        "strict-origin-when-cross-origin": "Strict Origin when Cross Origin",
      },
      // rel for a, area, and form
      "rel": {
        "noreferrer": "No Referrer",
        "noopener": "No Opener",
        "opener": "Opener",
      },
      "scope": {
        "auto": "Auto",
        "col": "Column",
        "colgroup": "Column Group",
        "row": "Row",
        "rowgroup": "Row Group",
      },
      "shadowrootmode": {
        "open": "Open",
        "closed": "Closed",
      },
      "shape": {
        "rect": "Rectangle",
        "circle": "Circle",
        "poly": "Polygonal",
        "default": "Whole Shape",
      },
      "spellcheck": {
        "true": "True",
        "false": "False",
      },
      "srclang": this.token_bases["lang"],
      "translate": {
        "yes": "Yes",
        "no": "No",
      },
      "wrap": {
        "soft": "Soft",
        "hard": "Hard",
      }
    }
  }

  get_metas() {
    const mode = this.closest("[data-legacy-mode]")

    if (mode) {
      return this.meta_elements
    } else {
      return this.meta_contents
    }

  }
  
  connectedCallback() {
    this.catch_events()
  }
  
  static get observedAttributes() {
    return ["data-meta-name", "data-meta-attrs"]
  }

  attributeChangedCallback(name) {
    switch (name) {
      case "data-meta-attrs":
      case "data-meta-name":
        requestAnimationFrame(() => {
          this.init_attrs()
        })

        break
    }
  }
  
  attr_item(attr_name, attr_value) {
    const p = document.createElement("p")
    const attr_select = this.attr_select(attr_name)
    const input = document.createElement("input")
    const select = document.createElement("select")
    const textarea = document.createElement('textarea')

    
    input.value = attr_value || ""
    select.value = attr_value || ""
    textarea.value = attr_value || ""

    input.required = true
    select.required = true
    textarea.required = true

    input.classList.add("attr-value")
    select.classList.add("attr-value")
    textarea.classList.add("attr-value")
    
    p.classList.add("attr-item")
    p.append(attr_select)

    switch (attr_name) {
      case "abbr":
      case "accesskey":
      case "accept":
      case "allow":
      case "alt":
      case "class":
      case "content":
      case "coords":
      case "data-":
      case "dirname":
      case "enterkeyhint":
      case "for":
      case "form":
      case "headers":
      case "id":
      case "imagesizes":
      case "imagesrcset":
      case "integrity":
      case "is":
      case "itemprop":
      case "itemref":
      case "label":
      case "list":
      case "media":
      case "name":
      case "nonce":
      case "pattern":
      case "placeholder":
      case "popovertarget":
      case "sandbox":
      case "slot":
      case "srcset":
      case "step":
      case "target":
      case "title":
      case "type":
      case "usemap":
      case "value":
        input.type = "text"
        p.append(input)
  
        break
  
      // url
      case "action":
      case "cite":
      case "data":
      case "formaction":
      case "href":
      case "itemid":
      case "itemtype":
      case "ping":
      case "poster":
      case "src":
        input.type = "url"
        p.append(input)
  
        break
  
  
      // Enumerated Attributes
      case "as":
      case "autocapitalize":
      case "autocomplete":
      case "contenteditable":
      case "crossorigin":
      case "data-element":
      case "decoding":
      case "dir":
      case "draggable": 
      case "enctype":
      case "enterhintkey":
      case "fetchpriority":
      case "formenctype":
      case "formmethod":
      case "hidden":
      case "hreflang":
      case "inputmode":
      case "kind":
      case "lang":
      case "loading":
      case "method":
      case "popover":
      case "popovertargetaction":
      case "preload":
      case "referrerpolicy":
      case "rel":
      case "scope":
      case "shadowrootmode":
      case "shape":
      case "spellcheck":
      case "srclang":
      case "translate":
      case "wrap":
  
      {
        for (const key in this.tokens[attr_select.value]) {
          if (Object.hasOwnProperty.call(this.tokens[attr_select.value], key)) {
            const element = this.tokens[attr_select.value][key];
            
            const option = document.createElement('option')
            select.append(option)
            option.value = key
            option.textContent = element
          }
        }
  
        p.append(select)
        break
      }
  
  
      // Boolean Attributes
      case 'allowfullscreen':
      case 'async':
      case 'autofocus': 
      case 'autoplay':
      case 'checked':
      case 'control':
      case "default":
      case "defer":
      case "disabled":
      case "download":
      case "formvalidate":
      case "inert":
      case "ismap":
      case "itemscope":
      case "loop":
      case "multiple":
      case "muted":
      case "nomodule":
      case "novalidate":
      case "open":
      case "playsinline":
      case "readonly":
      case "required":
      case "reversed":
      case "selected":
      case "shadowrootdelegatefocus":
        input.type = "text"
        input.value = "true"
        input.disabled = true
        p.append(input)
        break
  
  
      // single values
      case "accept-charset":
      case "blocking":
      case "charset":
        input.type = "text"
        input.value = this.token_values[attr_select.value]
        input.disabled = true
        p.append(input)
        break
  
      // Floating point
      case "high":
      case "low":
      case "max":
      case "min":
      case "optimum":
      // case "tabindex":
        input.type = "number"
        p.append(input)
  
        break
  
      // Integer
      case "start":
      case "tabindex":
        input.type = "number"
        input.step = 1
        p.append(input)
  
        break
  
  
      // non-negative integer
      case "cols":
      case "height": 
      case "maxlength":
      case "minlength":
      case "rows":
      case "size":
      case "span":
      case "width":
        input.type = "number"
        input.step = 1
        input.min = 0
  
        switch(attr_select.value) {
          case "cols":
            input.min = 1
            input.value = 20
            break
  
          case "colspan":
          case "span":
            input.min = 1
            input.max = 1000
            break
  
          case "rows":
            input.min = 1
            input.value = 2
            break
  
        }
  
        p.append(input)
  
        break
  
  
      case "color":
        input.type = "color"
        p.append(input)
  
        break
  
      case "datetime":
        input.type = "datetime"
        p.append(input)
  
        break
  
      case "srcdoc":
      case 'style': 
      {  
        p.append(textarea)
        break
      }
  
  
  
      default:
        input.type = "text"
        input.disabled = true
        p.append(input)
  
    }

    return p
  }

  attr_select(value = "") {
    const meta_name = this.getAttribute("data-meta-name")
    const select = document.createElement("select")
    const meta_attrs = ["", ...this.get_metas()[meta_name]["comp_attrs"], ...this.get_metas()[meta_name]["opt_attrs"], ...this.get_metas()[""]["opt_attrs"]]
    const optgroup_global = document.createElement("optgroup")
    const optgroup_local = document.createElement("optgroup")

    optgroup_global.label = "Global Attributes"
    optgroup_local.label = "Local Attributes"

    select.classList.add("attr-name")
    select.append(optgroup_local, optgroup_global)

    meta_attrs.forEach(attr => {
      const option = document.createElement("option")

      option.value = attr
      option.textContent = this.attrs[attr]["label"]
      
      if (attr === "") {
        option.hidden = "hidden"
        option.selected = true
        select.append(option)
      } else if (this.attrs[attr]["global"]) {
        optgroup_global.append(option)
      } else {
        optgroup_local.append(option)
      }
    })

    select.value = value
    select.disabled = this.get_metas()[meta_name]["comp_attrs"].includes(value)
    return select
  }

  init_attrs() {
    const attr_list = document.createElement("div")
    const attr_menu = document.createElement("p")
  
    attr_list.classList.add("attr-list")
    attr_menu.classList.add("attr-menu")
    attr_menu.append(this.attr_select())

    const meta_name = this.getAttribute("data-meta-name")
    const all_meta_attrs = [...this.get_metas()[meta_name]["comp_attrs"], ...this.get_metas()[meta_name]["opt_attrs"],...this.get_metas()[""]["opt_attrs"]]
    const meta_attrs = JSON.parse(this.getAttribute("data-meta-attrs"))

    for (const attr_name in meta_attrs) {
      if (Object.hasOwnProperty.call(meta_attrs, attr_name)) {
        const attr_value = meta_attrs[attr_name];

        if (all_meta_attrs.includes(attr_name)) {
          attr_list.append(this.attr_item(attr_name, attr_value))
        }
      }
    }

    this.innerHTML = ""
    this.append(attr_list, attr_menu)
    this.shake_attr_selects()
  }
  
  catch_events() {

    this.addEventListener("change", e => {
      const is_attr_select = e.target.matches(".attr-menu .attr-name")

      if (is_attr_select) {
        const attr_select = e.target
        const p = this.attr_item(attr_select.value)
  
        this.querySelector(".attr-list").append(p)
        attr_select.value = ""
      }

      this.shake_attr_selects()
    })
  }

  shake_attr_selects() {
    const attr_select_list = this.querySelectorAll(".attr-name")
    const added_attrs = [];

    attr_select_list.forEach(attr => {
      added_attrs.push(attr.value)
    });

    attr_select_list.forEach(attr_select => {
      const options = attr_select.querySelectorAll("option")

      options.forEach(option => {
        const option_value = option.value
  
        if (added_attrs.includes(option_value)) {
          option.disabled = true
        } else {
          option.disabled = false
        }

      })
    })
  }
}

customElements.define('html-attribute', ToheebElement)

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

    // this.innerHTML = this.skeleton()
    this.insertAdjacentHTML("afterbegin", `
      <style>
        /* f9f8ef e9d6bd fb4f14 104a65 13181b */
  
      </style>
    `)
    
    this.catch_events()
    
    // Init the skeleton
    this.init_skeleton()
    this.insert_meta_menu()
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
            const base_metas = ["target", "href",]
         
            base_metas.forEach(attr => {
              
              const meta_for = {"href": "meta-url", "target": "meta-target"}
  
              if (element.hasAttribute(attr)) {
  
                const meta_type = meta_for[attr]
  
                div.append(this.meta_item(meta_type, element_attributes))
              }
            })
  
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
  
            if (element.type.trim() === "") {
              if (element.src) {
                div.append(this.meta_item("meta-scriptlink", element_attributes))
              } else {
                element_attributes ["content"] = element.textContent
                div.append(this.meta_item("meta-scriptarea", element_attributes))
              }
            } else if (element.type === "module") {
              if (element.src) {
                div.append(this.meta_item("meta-modulelink", element_attributes))
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

      item_menu.style.position = "absolute"

      if(is_item_menu) {
      } else if (attr_item) {
        const base_attr = attr_item.querySelector(".attr-menu .attr-name")
        const related_target = e.relatedTarget && attr_item.contains(e.relatedTarget)
        
        if (base_attr || related_target) return
        
        item_menu.classList.add("show")
        
        const menu_dim = item_menu.getBoundingClientRect()
        const box_dim = attr_item.getBoundingClientRect()
        const hamb_dim = item_menu_caller.getBoundingClientRect()
        
        item_menu.style.top = `${box_dim.top + window.scrollY}px`
        item_menu.style.left = `${box_dim.left - hamb_dim.width / 2}px`
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
        
        item_menu.style.top = `${box_dim.top + window.scrollY}px`
        item_menu.style.left = `${box_dim.left - hamb_dim.width / 2}px`
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
  
      case "meta-target":
      case "meta-url":
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

      case "meta-modulearea":
        element = document.createElement("script")
        element.setAttribute("type", "module")
        element.innerHTML = meta_attrs["content"]
        delete meta_attrs["content"]

        break

      case "meta-modulelink":
        element = document.createElement("script")
        element.setAttribute("type", "module")

        break

      case "meta-scriptlink":
        element = document.createElement("script")

        break

      case "meta-scriptlink":
        element = document.createElement("script")
        element.setAttribute("type", "module")

        break

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


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "showAlert") {
    
    
    const content_meta = document.querySelector("content-meta");
    
    if (content_meta) {
      content_meta.remove()
    } else {
      const content_meta = document.createElement("content-meta")
      document.body.append(content_meta)
    }

  }
})



// class ContentMeta extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = "<p>Hello World</p>"
//   }
// }


// window.customElements.define('content-meta', ContentMeta)


// const content_meta = document.createElement("content-meta")
// // content_meta.innerText = "Hello"
// document.body.append(content_meta)

