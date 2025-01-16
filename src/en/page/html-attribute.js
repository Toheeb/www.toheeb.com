class ToheebElement extends HTMLElement {

  constructor() {
    super()

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
        "label": "App Name",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-manifest": {
        "label": "App Manifest",
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
      "meta-author": {
        "label": "Author Name",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-base": {
        "label": "Base URL",
        "singleton": true,
        "noscript": false,
        "comp_attrs": [],
        "opt_attrs": [
          "href",
          "target",
        ],
      },
      "meta-canonical": {
        "label": "Canonical URL",
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
        "label": "Description Text",
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
        "label": "Icon",
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
      "meta-next": {
        "label": "Next Document",
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
        "label": "Robot Options",
        "singleton": false,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-scheme": {
        "label": "Color Scheme",
        "singleton": true,
        "noscript": true,
        "comp_attrs": ["content"],
        "opt_attrs": [],
      },
      "meta-scriptarea": {
        "label": "Script Area",
        "singleton": false,
        "noscript": false,
        "comp_attrs": ["content"],
        "opt_attrs": [
          "async",
          "blocking",
          "crossorigin",
          "fetchpriority",
          "nomodule",
          "referrerpolicy",
          "type",
        ],
      },
      "meta-scriptlink": {
        "label": "Script Link",
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
          "type",
        ],
      },
      "meta-importmap": {
        "label": "Script Map",
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
        "label": "Security Policy",
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
        "label": "Title",
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
    this.classList.add("attr")
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

export {ToheebElement}
customElements.define('html-attribute', ToheebElement)
