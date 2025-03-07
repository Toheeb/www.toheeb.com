class WebCreator extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({"mode": "open"});
    this.node = null;
    this.node_kinds = {
      "": {
        "label": "Add Content",
        "category": "",
        "attributes": [
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
          "id",
          "class"
        ]
      },
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
      "meta-canonical": {
        "label": "Canonical",
        "category": ["metadata", "noscript"],
        "content": "void",
        "singleton": true,
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
      "meta-robots": {
        "label": "Robots",
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
      "meta-template": {
        "label": "Template",
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
      "": {
        "label": "Add Element",
        "category": [],
        "attributes": [
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
          "data-"
        ]
      },
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
    this.node_attributes = {
      "": {
        "label": "Add Attribute...",
        "type": "",
        "values": {}
      },
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
      "accesskey": {
        "label": "Access Key(s)",
        "type": "global",
        "values": {}
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
      "autocomplete": {
        "label": "Auto Complete",
        "type": "local",
        "values": {
          "on": "On",
          "off": "Off"
        }
      },
      "autofocus": {
        "label": "Auto Focus",
        "type": "global",
        "values": {}
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
      "contenteditable": {
        "label": "Enable Editing",
        "type": "global",
        "values": {
          "true": "True",
          "false": "False",
          "plaintext-only": "Plain Text"
        }
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
      "data-": {
        "label": "Custom Attribute",
        "type": "global",
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
      "dir": {
        "label": "Direction",
        "type": "global",
        "values": {
          "auto": "Auto",
          "ltr": "Left to Right",
          "rtl": "Right to Left"
        }
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
      "draggable": {
        "label": "Allow Dragging",
        "type": "global",
        "values": {
          "true": "True",
          "false": "False"
        }
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
      "hidden": {
        "label": "Hide Content",
        "type": "global",
        "values": {
          "hidden": "Until removed",
          "until-found": "Until Found"
        }
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
      "integrity": {
        "label": "Integrity Text",
        "type": "local",
        "values": {}
      },
      "is": {
        "label": "Custom Element Name",
        "type": "global",
        "values": {}
      },
      "ismap": {
        "label": "Access Map",
        "type": "local",
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
      "nonce": {
        "label": "Nonce",
        "type": "global",
        "values": {}
      },
      "novalidate": {
        "label": "Disable Validation",
        "type": "local",
        "values": {}
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
      "popover": {
        "label": "Enable Popover",
        "type": "global",
        "values": {
          "manual": "Manual",
          "auto": "Auto"
        }
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
      "spellcheck": {
        "label": "Check Spelling",
        "type": "global",
        "values": {
          "true": "True",
          "false": "False"
        }
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
      }
    };
    this.node_names = {};
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <dialog class="node-window">

        <form class="node-form" novalidate>
          ${this.nocode_parent().outerHTML}

          <p class="list-menu">
            <label>
              <input type="checkbox" id="dev-mode">
              <span>Dev Mode</span>
            </label>
            <button class="meta-menu-btn" id="publish" type="button">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>Publish</span>
            </button>
            <button class="meta-menu-btn" id="delete-all" type="button">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              <span>Delete All</span>
            </button>
            <a href="">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <span>Learn</span>
            </a>
            <button type="button" class="show-stats">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </button>
            <button type="button" class="close-dialog">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </p>
          <p class="item-menu">
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="12" r="1" />
                <circle cx="9" cy="5" r="1" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="15" cy="12" r="1" />
                <circle cx="15" cy="5" r="1" />
                <circle cx="15" cy="19" r="1" />
              </svg>
            </button>
            <span class="item-menu-actions">
              <button id="item-menu-up" type="button">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
              <button id="item-menu-down" type="button">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button id="item-menu-right" type="button">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button id="item-menu-left" type="button">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button id="item-menu-del" type="button">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </span>
          </p>
        </form>
      </dialog>
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
    
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
    
        .node-window {
          --space: .5em;
          --radius-base: .25em;
          --radius-factor: .25;
    
          padding: calc(6 * var(--space));
          padding-top: calc(8 * var(--space));

          box-sizing: border-box;
          border-radius: calc(5 * var(--space));
          background-color: #fafafa;
          color: #555;
          font: .875rem/1.6 Arial, sans-serif;
          width: 46em;
          margin: auto;
          max-width: 94%;
          border: none;
          position: fixed;
          transition: background-color .2s;
        }

        .node-window::backdrop {
          background: hsla(0, 0%, 0%, 0.2);
        }

        .node-window.show-loader::after {
          content: "";
          display: block;
          height: 5px;
          position: sticky;
          bottom: calc(-6 * var(--space));
          background-image: linear-gradient(to right, transparent, #000, transparent);
          width: 50%;
          animation: oscillate 3s ease-in-out infinite alternate;
        }

        @keyframes oscillate {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        } 
        
            
        select,
        input,
        textarea,
        button {
          font: inherit;
          color: inherit;
          accent-color: #555;
          background-color: transparent;
          border-radius: var(--radius-base);
          border: 1px solid #888;
        }
    
        :is(select, textarea, button, label):not([disabled]):hover {
          color: #000;
          cursor: pointer;
        }
    
        input:not([disabled]):hover {
          color: #000;
        }
    
        select {
          appearance: none;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(85,85,85)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
          background-size: 1.3em;
          background-repeat: no-repeat;
          background-position: calc(100% - .4em) 50%;
          color: #555;
          padding: .25em 2em .3em .75em;
        }
    
        option {
          color: #555;
          cursor: pointer;
        }
    
        option[disabled] {
          color: #888;
        }
    
        input {
          padding: .25em .75em .3em;
        }
    
        textarea {
          display: flex;
          width: 100%;
          min-height: 6em;
          padding: .25em .75em .3em;
        }
    
        a {
          color: inherit;
        }
    
        a:hover {
          color: #000;
        }
    
    
        .close-dialog,
        .show-stats {
          border: 0;
          background: none;
          display: flex;
          padding: .25em;
          position: absolute;
          top: 1em;
        }
        
        .close-dialog {
          right: 1em;
        }

        .show-stats {
          left: 1em;
        }
    

        
        .node-stats {
          display: flex;
          flex-flow: row wrap;
          gap: 4em 3em;
          padding: 2em 3em 4em;
          justify-content: space-between;
        }

        .node-stats li {
          display: grid;
          justify-items: center;
          gap: 1em;
          flex-basis: 8em;
        }

        .node-stats span:first-child {
          font: bold 3em/1 serif;
        }

        .node-stats-title,
        .node-stats span:last-child {
          text-transform: uppercase;
          font-size: .75em;
          letter-spacing: .05em;
          text-align: center;
        }
    

        

    
        .attr-name {
          flex: .6 1 auto;
          width: 14em;
        }
    
        .attr-value {
          flex: 1 1 auto;
          width: 16em;
        }
    
        .node-name {
          border-radius: calc(var(--radius-base) + (.5em * var(--radius-factor)));
          width: 14em;
        }
    
    
        .attr-card {
          display: flex;
          flex-flow: row wrap;
          align-items: start;
          gap: calc(1 * var(--space));
        }
    
    
        .attr-set,
        .node-attrs,
        .node-card,
        .node-set,
        .node-fork,
        .node-form {
          display: grid;
        }
    
        .attr-set > .attr-card {
          padding: calc(1 * var(--space));
        }
    
        .attr-menu {
          padding: calc(1 * var(--space));
        }
    
    
        .node-attrs {
          padding: calc(1 * var(--space));
          gap: calc(1 * var(--space));
        }
        

        /* .node-attrs + .node-fork will be unavailable when there's no .node-attrs */
        .node-card > .node-fork {
          padding: calc(2 * var(--space));
        }
    
    
        .node-card {
          gap: calc(2 * var(--space));
          padding: calc(2 * var(--space));
          border: 1px solid #ccc;
          border-radius: calc(var(--radius-base) + (2em * var(--radius-factor)));
        }
    
    
        .node-set,
        .node-fork {
          gap: calc(8 * var(--space));
        }
    
    
        .node-form {
          gap: calc(10*var(--space));
        }

        
    
    
    
        .node-card {
          animation: fade_in .25s forwards;
        }
    
        @keyframes fade_in {
          0% {
            opacity: 0;
          }
    
          100% {
            opacity: 1;
          } 
        }
    
    
    
    
    
    
    
        .list-menu {
          display: flex;
          flex-flow: row wrap;
          gap: calc(4*var(--space)) calc(5*var(--space));
          justify-content: end;
        }
    
        .list-menu > * {
          border: none;
          text-decoration: none;
          display: flex;
          gap: calc(.5*var(--space));
          padding: var(--space);
          align-items: center;
        }
    
    
    
    
    
        .item-menu {
          position: absolute;
          display: grid;
          gap: .5em;
          width: fit-content;
          align-items: start;
        }
    
        .item-menu-actions {
          background-color: #fdfdfd;
          padding: .25em;
          border-radius: .25em;
          display: grid;
          gap: .5em;
        }
    
        .item-menu button {
          display: flex;
          background: transparent;
          padding: .2em;
          border: 1px solid;
          border-radius: .25em;
        }
    
        .item-menu button[disabled] {
          opacity: .5;
        }
    
        :is(.item-menu, .flyout-actions)> :is(:nth-child(1)) {
          border: none;
        }
    
    
        /* When there's  show, hide all children */
        .item-menu:not(.show)>* {
          display: none;
        }
    
        /* When flyout has show but not hover, hide all children but not the first child */
        .item-menu.show:not(:hover)>*:not(:first-child) {
          display: none;
        }
    
      </style>
  
    `;

    this.shadowRoot.querySelector("dialog").showModal();

    {
      this.shadowRoot.addEventListener("keydown", e => {
        if (e.key === "Escape") {
          e.target.closest("dialog").remove();
        }
      })

      this.shadowRoot.addEventListener("click", e => {

        if (e.target.closest(".show-stats")) {
          this.show_stats();
        }

        if (e.target.closest(".close-dialog")) {
          e.target.closest("dialog").remove();
        }

        if (e.target.closest("#publish")) {
          window_node.innerHTML = this.code_parent(this.shadowRoot).innerHTML
        }

        if (e.target.closest("#dev-mode")) {
          const legacy_mode = e.target;

          this.setAttribute("data-dev-mode", legacy_mode.checked ? "true" : "");

          const window_node = this.code_parent(this.shadowRoot);

          this.load_window(window_node);
          this.shadowRoot.querySelector("#dev-mode").checked = legacy_mode.checked;
        }
  
        if (e.target.closest("#delete-all")) {
          const node_set = this.shadowRoot.querySelector(".node-set");
  
          node_set.innerHTML = "";
        }

        if (e.target.closest("#item-menu-up")) {
          this.node.previousElementSibling.before(this.node);
          this.shadowRoot.querySelector(".item-menu").classList.remove("show");
        }

        if (e.target.closest("#item-menu-down")) {
          this.node.nextElementSibling.after(this.node);
          this.shadowRoot.querySelector(".item-menu").classList.remove("show");
        }

        if (e.target.closest("#item-menu-left")) {
          const old_node_fork = this.node.closest(".node-fork");

          if (this.node.matches(":first-child")) {
            const parent_card = this.node.parentNode.closest(".node-card");

            parent_card.before(this.node);
          } else {
            const prev_rich_node = this.node.previousElementSibling.querySelector(".node-set")

            prev_rich_node.append(this.node);
          }

          const new_node_fork = this.node.closest(".node-fork");

          this.modify_node_names(old_node_fork);
          this.modify_node_names(new_node_fork);
          this.shadowRoot.querySelector(".item-menu").classList.remove("show");
        }

        if (e.target.closest("#item-menu-right")) {
          const old_node_fork = this.node.closest(".node-fork");

          if (this.node.matches(":last-child")) {
            const parent_card = this.node.parentNode.closest(".node-card");

            parent_card.after(this.node);
          } else {
            const prev_rich_node = this.node.nextElementSibling.querySelector(".node-set")

            prev_rich_node.prepend(this.node);
          }

          const new_node_fork = this.node.closest(".node-fork");

          this.modify_node_names(old_node_fork);
          this.modify_node_names(new_node_fork);
          this.shadowRoot.querySelector(".item-menu").classList.remove("show");
        }
                
        if (e.target.closest("#item-menu-del")) {
          const node_parent = this.node.parentNode;
          const is_node = this.node.classList.contains("node-card");

          this.node.remove();
          this.shadowRoot.querySelector(".item-menu").classList.remove("show");

          if (is_node) {
            const node_fork = node_parent.closest(".node-fork");

            this.modify_node_names(node_fork);
          } else {
            const node_attrs = node_parent.closest(".node-attrs");

            this.modify_attr_names(node_attrs);
          }


        }

      });
      
      this.shadowRoot.addEventListener("change", (e) => {

        if (e.target.matches(".node-name")) {
          let node_name__form = null;
          const node_name__selector = e.target;
          const node_name = node_name__selector.value;
          const node_fork = node_name__selector.closest(".node-fork");

          if (e.target.value === "-") {
            const dom = document.createElement("div");
            // const value = child.nodeName.slice(child.nodeName.indexOf("-") + 1)
            
            dom.innerHTML = `
            <input class="node-name" type="text">
            `;

            node_name__form = dom.querySelector(".node-name"); 
          } else {
            node_name__form = node_name__selector.cloneNode(true);
            node_name__form.value = node_name;
          }

          if (e.target.matches(".node-menu > .node-name")) {
            const node_object = this.code_child(node_name);
            const node_card = this.nocode_child(node_object, node_name__form);
            const node_set = node_name__selector.closest(".node-fork").querySelector(".node-set");

            node_set.append(node_card);
            node_name__selector.value = "";
          } else {
            const old_node_card = node_name__selector.closest(".node-card");
            const old_attr_cards = old_node_card.querySelector(".attr-set")?.querySelectorAll(".attr-card");
            let new_node_object = null;

            if (old_attr_cards) {
              const attr_card__object = Array.from(old_attr_cards).reduce((acc, attr) => {
                const attr_name = attr.querySelector(".attr-name")
                const attr_value = attr.querySelector(".attr-value")  
        
                if (attr_name.nodeName === "INPUT") {
                  acc["data-" + attr_name.value.trim()] = attr_value.value;
                } else {
                  acc[attr_name.value] = attr_value.value;
                }
        
                return acc;
              }, {});
              new_node_object = this.code_child(node_name, attr_card__object);
            } else {
              new_node_object = this.code_child(node_name);
            }

            const new_node_card = this.nocode_child(new_node_object, node_name__form)

            old_node_card.replaceWith(new_node_card);
          }

          this.modify_node_names(node_fork);
        }

        if (e.target.matches(".attr-name")) {
          const attr_name__selector = e.target;

          if (e.target.nodeName === "INPUT") {

          } else {
            let attr_name__form = null;

            if ("data-" === attr_name__selector.value) {
              const dom = document.createElement("div");
              
              dom.innerHTML = `
              <input class="node-name" type="text">
              `;
  
              attr_name__form = dom.querySelector(".node-name"); 
            } else {
              attr_name__form = attr_name__selector.cloneNode(true);
              attr_name__form.value = attr_name__selector.value;
            }

            const new_attr_card = this.nocode_attr(attr_name__form, "");
            
            if (e.target.matches(".attr-menu > .attr-name")) {
              const attr_set = attr_name__selector.closest(".node-attrs").querySelector(".attr-set");

              attr_set.append(new_attr_card);
              attr_name__selector.value = "";
            } else {
              const old_attr_card = attr_name__selector.closest(".attr-card");

              old_attr_card.replaceWith(new_attr_card);
            }
          }

          const node_attrs = attr_name__selector.closest(".node-attrs");
          this.modify_attr_names(node_attrs);
        }
  
      });

      this.shadowRoot.addEventListener("mouseover", e => {
        const item_menu = this.shadowRoot.querySelector(".item-menu");
        const dialog_node = this.shadowRoot.querySelector(".node-window");
        const dialog_dimension = dialog_node.getBoundingClientRect();

        if (e.target.closest(".item-menu")) {
          item_menu.classList.add("show");

          const up = this.shadowRoot.querySelector("#item-menu-up")
          const left = this.shadowRoot.querySelector("#item-menu-left")
          const down = this.shadowRoot.querySelector("#item-menu-down")
          const right = this.shadowRoot.querySelector("#item-menu-right")

          if (this.node.classList.contains("attr-card")) {
            left.style.display = "none";
            right.style.display = "none";

            {
              if (this.node.matches(".attr-card:first-child")) {
                up.disabled = true;
              } else {
                up.disabled = false;
              }
            }

            {
              if (this.node.matches(".attr-card:last-child")) {
                down.disabled = true;
              } else {
                down.disabled = false;
              }
            }

          } else if (this.node.classList.contains("node-card")) {
            left.style.display = "inherit";
            right.style.display = "inherit";
           
            // Up
            {
              if (this.node.matches(".node-card:first-child")) {
                up.disabled = true;
              } else {
                up.disabled = false;
              }
            }
           
            // Down
            {
              if (this.node.matches(".node-card:last-child")) {
                down.disabled = true;
              } else {
                down.disabled = false;
              }
            }

            // right
            {
              const node_before_fork = this.node.matches(".node-card:has(+ .node-card .node-menu)");
              const node_at_end_of_sub_fork = this.node.matches(".node-card .node-card:last-child");

              if (node_before_fork) {
                const current_node_name_form = this.node.querySelector(".node-name");
  
                if (current_node_name_form.nodeName !== "SELECT") {
                  right.disabled = false;
                } else if (current_node_name_form.value === "!") {
                  right.disabled = false;
                } else {
                  const current_node_name = current_node_name_form.value;
                  const next_node_name_adder = this.node.nextElementSibling.querySelector(":scope > .node-fork > .node-menu > .node-name");
                  
                  if (next_node_name_adder.querySelector(`[value="${current_node_name}"]:not([disabled])`)) {
                    right.disabled = false;
                  } else {
                    right.disabled = true;
                  }
                }

              } else if (node_at_end_of_sub_fork) {
                const current_node_name_form = this.node.querySelector(".node-name");
                const current_node_name = current_node_name_form.value;

                if (current_node_name_form.nodeName !== "SELECT") {
                  right.disabled = false;
                } else if (current_node_name === "!") {
                  right.disabled = false;
                } else {
                  const parent_fork = this.node.closest(".node-fork").parentNode.closest(".node-fork");
                  const parent_node_name_adder = parent_fork.querySelector(":scope > .node-menu > .node-name");
                  
                  if (parent_node_name_adder.querySelector(`[value="${current_node_name}"]:not([disabled])`)) {
                    right.disabled = false;
                  } else {
                    right.disabled = true;
                  }
                }
              } else {
                right.disabled = true;
              }
            }

            // left
            {
              const node_after_fork = this.node.matches(".node-card:has(.node-menu) + .node-card");
              const node_at_start_of_sub_fork = this.node.matches(".node-card .node-card:first-child");

              if (node_after_fork) {
                const current_node_name_form = this.node.querySelector(".node-name");
  
                if (current_node_name_form.nodeName !== "SELECT") {
                  left.disabled = false;
                } else if (current_node_name_form.value === "!") {
                  left.disabled = false;
                } else {
                  const current_node_name = current_node_name_form.value;
                  const prev_node_name_adder = this.node.previousElementSibling.querySelector(":scope > .node-fork > .node-menu > .node-name");
                  
                  if (prev_node_name_adder.querySelector(`[value="${current_node_name}"]:not([disabled])`)) {
                    left.disabled = false;
                  } else {
                    left.disabled = true;
                  }
                }

              } else if (node_at_start_of_sub_fork) {
                const current_node_name_form = this.node.querySelector(".node-name");
                const current_node_name = current_node_name_form.value;

                if (current_node_name_form.nodeName !== "SELECT") {
                  left.disabled = false;
                } else if (current_node_name === "!") {
                  left.disabled = false;
                } else {
                  const parent_fork = this.node.closest(".node-fork").parentNode.closest(".node-fork");
                  const parent_node_name_adder = parent_fork.querySelector(":scope > .node-menu > .node-name");
                  
                  if (parent_node_name_adder.querySelector(`[value="${current_node_name}"]:not([disabled])`)) {
                    left.disabled = false;
                  } else {
                    left.disabled = true;
                  }
                }

              } else {
                left.disabled = true;
              }
            }

          }

        } else if (e.target.closest(".attr-card")) {
          item_menu.classList.add("show");
          this.node = e.target.closest(".attr-card");

          const attr_card_dimension = this.node.closest(".attr-card").getBoundingClientRect();
          
          item_menu.style.top = `${attr_card_dimension.top - dialog_dimension.top + dialog_node.scrollTop + 10}px`;
          item_menu.style.left = `${attr_card_dimension.left - dialog_dimension.left - 12}px`
        } else if (e.target.closest(".node-card")) {
          this.node = e.target.closest(".node-card");
          item_menu.classList.add("show");

          const node_card_dimension = this.node.closest(".node-card").getBoundingClientRect();

          item_menu.style.top = `${node_card_dimension.top - dialog_dimension.top + dialog_node.scrollTop + 20}px`;
          item_menu.style.left = `${node_card_dimension.left - dialog_dimension.left - 18}px`
        } else {
          item_menu.classList.remove("show");
          this.node = null;
        }
      })
    }

    {
      const window_node = document.querySelector(`#${this.dataset.window}`);
  
      this.load_window(window_node);
    }
  }

  load_window(node) {
    const node_window = this.shadowRoot.querySelector(".node-window")

    node_window.classList.add("show-loader");
    node_window.inert = true;
    
    setTimeout(() => {
      this.shadowRoot.querySelector(".node-fork")
      .replaceWith(this.nocode_parent(node));
      
      node_window.inert = false;
      node_window.classList.remove("show-loader");
    }, 0)
  }

  nocode_parent(parent) {
    const dom = document.createElement("div");

    dom.innerHTML = `
      <div class="node-fork">
        <div class="node-set">
          ${this.nocode_child().outerHTML}
        </div>
        <p class="node-menu">
          <select disabled class="node-name"></select>
        </p>
      </div>
    `;

    if (parent) {

      {
        if (this.dataset.devMode) {
          this.node_names = this.node_elements;
        } else {
          this.node_names = this.node_kinds;
        }
      }

      const parent_name = parent.nodeName.toLowerCase();
      const node_name__selector = (parent_name => {
        const dom = document.createElement("div");

        dom.innerHTML = `
          <select class="node-name">
            <option value="" hidden>${this.node_names[""]["label"]}</option>
          </select>
        `;

        const node_name = dom.querySelector(".node-name");
        const parent_category = (element_name => {

          if (element_name === "head") {
            return "metadata";
          } else if (element_name === "noscript") {
            return "noscript";
          } 
        })(parent_name);

        

        // Iterate all elements in the resolved category
        for (const key in this.node_names) {
          if (this.node_names[key]["category"].includes(parent_category)) {
            const option = document.createElement("option")

            node_name.append(option)
            option.value = key
            option.textContent = this.node_names[key]["label"]
          } else {
          }
        }

        return dom.querySelector(".node-name");
      })(parent_name);

      {
        const old_node_name_selector = dom.querySelector(".node-fork > .node-menu > .node-name");

        old_node_name_selector.replaceWith(node_name__selector);
      }

      {
        const node_set = dom.querySelector(".node-set");
        node_set.innerHTML = ""; 

        // Make noscript iterable
        if (parent_name === "noscript") {
          const div = document.createElement("div");

          div.innerHTML = parent.innerHTML;
          parent = div;
        }

        const children = parent.querySelectorAll(":scope > *");

        for (const child of children) {

          const is_comment_node = child.nodeType === 8;
          const is_element_node = child.nodeType === 1;

          if (is_comment_node || is_element_node) {
            const child_name = child.nodeName.toLowerCase();
            let node_name__form = null;

            if (child_name.indexOf("-") !== -1) {
              const dom = document.createElement("div");
              const value = child.nodeName.slice(child.nodeName.indexOf("-") + 1)
  
              dom.innerHTML = `
                <input class="node-name" type="text" value="${value}">
              `;
  
              node_name__form = dom.querySelector(".node-name");  
            } else {
              node_name__form = node_name__selector.cloneNode(true);
  
              const node_name = ((node) => {
                const node_name = node.nodeName.toLowerCase();
                let target = "";
  
                if ("#comment" === node_name) {
                  target = "!";
                } else if (this.dataset.devMode) {
                  target = node_name;
                } else {
                  if ("base" === node_name) {
                    target = "meta-base";
                  } else if ("link" === node_name) {
                    const rel = node?.rel.trim();
  
                    if (rel.split(" ").includes("alternate")) {
                      const type = node?.type.trim().split(" ");
  
                      if (rel.split(" ").includes("stylesheet")) {
                        target = "meta-stylesheet";
                      } else if (type) {
                        if (type.includes("application/rss+xml") || type.includes("application/atom+xml")) {
                          target = "meta-feed";
                        } else {
                          target = "meta-altdoc";
                        }
                      } else if (node.hreflang) {
                        target = "meta-altdoc";
                      }
                    } else if (rel == "icon") {
                      target = "meta-icon";
                    } else if (rel == "manifest") {
                      target = "meta-appmanifest";
                    } else if (rel == "next") {
                      target = "meta-next";
                    } else if (rel == "pingback") {
                      target = "meta-pingback";
                    } else if (rel == "search") {
                      target = "meta-search";
                    } else if (rel == "stylesheet") {
                      target = "meta-stylelink";
                    } else if (rel == "canonical") {
                      target = "meta-canonical";
                    } else {
                      target = "meta-customlink";
                    }
                  } else if ("meta" === node_name) {
                    const meta = node;
  
                    if (meta.hasAttribute("charset")) {
                      target = "meta-charset";
                    } else if (meta.hasAttribute("http-equiv")) {
                      const meta_http_equiv = meta.httpEquiv.trim()
  
                      if ("refresh" === meta_http_equiv) {
                        target = "meta-timeout";
                      } else if ("default-style" === meta_http_equiv) {
                        target = "meta-styledef";
                      } else if ("content-security-policy" === meta_http_equiv) {
                        target = "meta-contentpolicy";
                      } else {
                        target = "meta-custommeta";
                      }
                    } else if (meta.hasAttribute("name")) {
                      const meta_name = meta.name.trim();
                      const meta_name_list = {
                        "application-name": "meta-appname",
                        "author": "meta-author",
                        "description": "meta-description",
                        "generator": "meta-generator",
                        "keywords": "meta-keywords",
                        "referrer": "meta-referrer",
                        "theme-color": "meta-colortheme",
                        "color-scheme": "meta-colorscheme",
                        "robots": "meta-robots",
                        "viewport": "meta-viewport"
                      }
  
                      if (meta_name in meta_name_list) {
                        return meta_name_list[meta_name];
                      } else {
                        target = "meta-custommeta";
                      }
                    } else {
                      target = "meta-custommeta";
                    }
                  } else if ("noscript" === node_name) {
                    target = "meta-noscript";
                  } else if ("script" === node_name) {
                    const type = node.type?.trim();
                    const js_mime_types = [""];

                    if ("importmap" === type) {
                      target = "meta-scriptmap";
                    } else if ("module" === type) {
                      target = "meta-scriptmodule";
                    } else if (type === null || js_mime_types.includes(type)) {
                      target = "meta-scriptblock";
                    } else {
                      target = "meta-scriptdata";
                    }
                  } else if ("style" === node_name) {
                    target = "meta-stylearea";
                  } else if ("template" === node_name) {
                    target = "meta-template";
                  } else if ("title" === node_name) {
                    target = "meta-title";
                  }
                }
  
                return target;
              })(child)
  
              node_name__form.value = node_name;
            }

            node_set.append(this.nocode_child(child, node_name__form));  
          } else {
            continue;
          }

        }
      }

      this.modify_node_names(node_name__selector.closest(".node-fork"));
    }

    return dom.querySelector(".node-fork");
  }

  nocode_child(node, node_name__form) {
    const dom = document.createElement("div");

    dom.innerHTML = `
      <fieldset class="node-card">
        <legend class="node-title">
          <select disabled class="node-name"></select>
        </legend>
        <div class="node-attrs">
          <div class="attr-set">
            ${this.nocode_attr().outerHTML}
          </div>
          <p class="attr-menu">
            <select disabled class="attr-name"></select>
          </p>
        </div>
        <div class="node-fork">
          <p>
            <textarea class="node-content"></textarea>
          </p>
        </div>
      </fieldset>
    `;

    if (node && node_name__form) {

      {
        dom.querySelector(".node-name").replaceWith(node_name__form);

        // For cases where node_name__form does not set value by default
        // When data are not empty and needs not be fetched
        node_name__form.querySelector(`[value="${node_name__form.value}"]`)?.setAttribute("selected", "selected")
      }

      const node_name = node_name__form.value;
      const is_comment_node = node.nodeType === 8;
      const is_element_node = node.nodeType === 1;

      {
        const node_attrs = dom.querySelector(".node-attrs");

        if (is_comment_node) {
          node_attrs.remove();
        } else if (is_element_node) {
          const attr_name__selector = (element_name => {
            const dom = document.createElement("div");
    
            dom.innerHTML = `
              <select class="attr-name">
                <option value="" selected hidden>Add Attribute</option>
                <optgroup class="local-attr" label="Local Attributes"></optgroup>
                <optgroup class="global-attr" label="Global Attributes"></optgroup>
                <optgroup class="event-attr" label="Event Attributes"></optgroup>
              </select>
            `;
            const local_attr_node = dom.querySelector(".local-attr");
            const local_attrs = this.node_names[element_name]["attributes"];
    
            // Add content to (data) for plain elements
            if (this.node_names[element_name]["content"] === "plain") {
              local_attrs.push("content");
            }
    
            // Include local attributes
            local_attrs.forEach(local_attr => {
              const option = document.createElement("option")
    
              option.value = local_attr
              option.textContent = this.node_attributes[local_attr]["label"]
              local_attr_node.append(option)
            })
    
            
            const global_attr_node = dom.querySelector(".global-attr");
            
            for (const [key, value] of Object.entries(this.node_attributes)) {
              if (value["type"].trim() === "global") {
                const option = document.createElement("option");

                option.value = key;
                option.textContent = value["label"];
                global_attr_node.append(option);
              } else {}
            }

            const event_attr_node = dom.querySelector(".event-attr");

            for (const [key, value] of Object.entries(this.node_attributes)) {
              if (value["type"].trim() === "event") {
                const option = document.createElement("option");

                option.value = key;
                option.textContent = value["label"];
                event_attr_node.append(option);
              } else {}
            }
    
            return dom.querySelector(".attr-name");
          })(node_name);

          {
            const old_attr_name_selector = dom.querySelector(".attr-menu > .attr-name");

            old_attr_name_selector.replaceWith(attr_name__selector);
          }
    
          {
            this.node_names[node_name]["frontiers"].forEach(item => {
              if ( !(item in node.attributes) ) {
                node.setAttribute(item, "");
              }
            })

            const attr_set = dom.querySelector(".attr-set");
            attr_set.innerHTML = "";     
    
            for (const attribute of node.attributes) {
              let attr_name__form = null;
              const attr_name = attribute.nodeName;
  
              if (attr_name.startsWith("data-")) {
                const dom = document.createElement("div");
                const value = attr_name.slice(attr_name.indexOf("-") + 1)
  
                dom.innerHTML = `
                  <input class="attr-name" type="text" value="${value}">
                `;
    
                attr_name__form = dom.querySelector(".attr-name");  
              } else {
                const attr_name__selector = dom.querySelector(".attr-menu > .attr-name").cloneNode(true);
  
                if (attr_name__selector.querySelector(`option[value=${attr_name}]`)) {
                  attr_name__form = attr_name__selector;
                  attr_name__form.value = attr_name;
                } else {
                  continue;
                }
              }

              attr_set.append(this.nocode_attr(attr_name__form, attribute.nodeValue));
            }
          }

          const node_attrs = attr_name__selector.closest(".node-attrs");

          this.modify_attr_names(node_attrs);
        }
      }

      {

        if (is_comment_node) {
          dom.querySelector(".node-content").innerHTML = node.textContent;
          // dom.querySelector(".node-content").value = node.textContent;
        } else if (is_element_node) {
          const content_model = this.node_names[node_name]["content"];
  
          if ("void" === content_model) {
            dom.querySelector(".node-fork").remove();
          } else if ("rich" === content_model) {
            const old_node_fork = dom.querySelector(".node-fork")
            const new_node_fork = this.nocode_parent(node)

            old_node_fork.replaceWith(new_node_fork);
          } else if ("plain" === content_model) {
            dom.querySelector(".node-content").innerHTML = node.innerHTML;
            // dom.querySelector(".node-content").value = node.innerHTML;
          }
        }


      }

    } else {}

    return dom.querySelector(".node-card");
  }

  nocode_attr(attr_name__form, attr_value = "") {
    const dom = document.createElement("div");

    dom.innerHTML = `
      <p class="attr-card">
        <select class="attr-name"></select>
        <input class="attr-value" disabled>
      </p>
    `;

    if (attr_name__form) {
      {
        dom.querySelector(".attr-name").replaceWith(attr_name__form);

        // For cases where node_name__form does not set value by default
        // When data are not empty and needs not be fetched
        attr_name__form.querySelector(`[value=${attr_name__form.value}]`)?.setAttribute("selected", "selected")        
      }

      {
        const attr_name = attr_name__form.value;

        switch (attr_name) {
          case "abbr":
          case "accesskey":
          case "accept":
          case "allow":
          case "alt":
          case "class":
          case "coords":
          case "content":
          case "data-":
          case "dirname":
          case "enterkeyhint":
          case "for":
          case "form":
          case "headers":
          case "http-equiv":
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
          case "rel":
          case "sandbox":
          case "slot":
          case "srcset":
          case "step":
          case "target":
          case "title":
          case "type":
          case "usemap":
          case "value":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="text" value="${attr_value}" class="attr-value"></input>
            `
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
            dom.querySelector(".attr-value").outerHTML = `
              <input type="url" value="${attr_value}" class="attr-value"></input>
            `
            break
    
    
          // Enumerated Attributes
          case "accept-charset":
          case "as":
          case "autocapitalize":
          case "autocomplete":
          case "blocking":
          case "charset":
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
          case "inputmode":
          case "kind":
          case "lang":
          case "loading":
          case "method":
          case "popover":
          case "popovertargetaction":
          case "preload":
          case "referrerpolicy":
          case "scope":
          case "shadowrootmode":
          case "shape":
          case "spellcheck":
          case "srclang":
          case "translate":
          case "wrap":
            {
              dom.querySelector(".attr-value").outerHTML = `
                <select class="attr-value"></select>
              `;

              let data = this.node_attributes[attr_name]["values"];

              if (typeof(data) == "string") {
                data = this.node_attributes[data]["values"];
              }
    
              for (const key in data) {
                const value = data[key];
                const option = document.createElement('option')
    
                dom.querySelector(".attr-value").append(option)
                option.value = key
                option.textContent = value
    
                if (key == attr_value) {

                  // option.selected = true
                  option.setAttribute("selected", "selected")
                }
              }
            }
    
            break
    
    
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
            dom.querySelector(".attr-value").outerHTML = `
              <input type="text" value="true" disabled class="attr-value"></input>
            `
            break
    
    
          // Floating point
          case "high":
          case "low":
          case "max":
          case "min":
          case "optimum":
          // case "tabindex":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" value="${attr_value}" class="attr-value"></input>
            `
            break
    
          // Integer
          case "start":
          case "tabindex":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" step="1" value="${attr_value}" class="attr-value"></input>
            `
            break
    
          case "cols":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" step="1" min="1"  value="${attr_value || 20}" class="attr-value"></input>
            `
            break;
    
          case "colspan":
          case "rowspan":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" step="1" min="1" max="1000" value="${attr_value}" class="attr-value"></input>
            `
            break;
    
          case "rows":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" step="1" min="1" value="${attr_value || 2}" class="attr-value"></input>
            `
            break;
    
          // non-negative integer
          case "height":
          case "maxlength":
          case "minlength":
          case "size":
          case "span":
          case "width":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="number" step="1" min="0" value="${attr_value}" class="attr-value"></input>
            `
            break;
    
    
          case "color":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="color" value="${attr_value}" class="attr-value"></input>
            `
            break;
    
          case "datetime":
            dom.querySelector(".attr-value").outerHTML = `
              <input type="datetime" value="${attr_value}" class="attr-value"></input>
            `
            break;
    
          case "srcdoc":
          case 'style':
            dom.querySelector(".attr-value").outerHTML = `
              <textarea class="attr-value">${attr_value}</textarea>
            `
            break;

          default:
            dom.querySelector(".attr-value").outerHTML = `
              <input type="text" value="${attr_value}" class="attr-value"></input>
            `;

        }  
      }
    }

    return dom.querySelector(".attr-card")
  }

  modify_node_names(node_fork) {
    const node_name__form_list = node_fork.querySelectorAll(":scope > .node-set > .node-card > .node-title > .node-name, :scope > .node-menu .node-name");
    const added_node_names = [];

    node_name__form_list.forEach(form => {
      added_node_names.push(form.value);
    })

    node_name__form_list.forEach(form => {
      const options = form.querySelectorAll("option");

      options.forEach(option => {
        const option_value = option.value
        const option_exists = added_node_names.includes(option_value)      
        const option_is_singleton = this.node_names[option_value]["singleton"] === true
  
        if (option_exists && option_is_singleton) {
          option.disabled = true
        } else {
          option.disabled = false
        }
      })
    })
  }
  
  modify_attr_names(node_attrs) {
    const attr_name_nodes = node_attrs.querySelectorAll(".attr-name");
    const added_attrs = [];

    attr_name_nodes.forEach(attr_name => {
      added_attrs.push(attr_name.value);
    });
    
    attr_name_nodes.forEach(attr_name => {
      const options = attr_name.querySelectorAll("option");

      options.forEach(option => {
        if (added_attrs.includes(option.value)) {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      })
    });
  }

  code_parent(node) {
    const node_set = node.querySelector(".node-set").querySelectorAll(":scope > .node-card")
    const window_name = document.querySelector(`#${this.dataset.window}`).nodeName;
    const div = document.createElement(window_name);

    node_set.forEach(node_card => {

      const node_name = node_card.querySelector(".node-name").value

      if ("!" === node_name) {
        const comment_value = node_card.querySelector(".node-content").value;
        const comment = document.createComment(comment_value);

        div.append(comment);
      } else {
        const node_attrs = Array.from(node_card.querySelectorAll(":scope > .node-attrs .attr-card")).reduce((acc, attr) => {
          const attr_name = attr.querySelector(".attr-name")
          const attr_value = attr.querySelector(".attr-value")  
  
          if (attr_name.nodeName === "INPUT") {
            acc["data-" + attr_name.value] = attr_value.value;
          } else {
            acc[attr_name.value] = attr_value.value;
          }
  
          return acc;
        }, {});
        let node_content = "";
        const content_model = this.node_names[node_name]["content"];

        if ("plain" === content_model) {
          node_content = node_card.querySelector(".node-content").value;
        }

        const element = this.code_child(node_name, node_attrs, node_content);
        
        if ("rich" === content_model) {
          // append children
          element.append(...this.code_parent(node_card).childNodes)
        }

        div.append(element)
      }


    })

    return div;
  }

  code_child(meta_name, meta_attrs = {}, node_content = "") {
    let element = null;

    const element_meta = {
      "meta-appname": "application-name",
      "meta-author": "author",
      "meta-description": "description",
      "meta-generator": "generator",
      "meta-keywords": "keywords",
      "meta-timeout": "refresh",
      "meta-referrer": "referrer",
      "meta-robots": "robots",
      "meta-colorscheme": "color-scheme",
      "meta-contentpolicy": "content-security-policy",
      "meta-styledef": "default-style",
      "meta-colortheme": "theme-color",
      "meta-viewport": "viewport",
    }

    const element_link = {
      "meta-canonical": "canonical",
      "meta-icon": "icon",
      "meta-appmanifest": "manifest",
      "meta-next": "next",
      "meta-pingback": "pingback",
      "meta-search": "search",
      "meta-stylelink": "stylesheet",
      "meta-stylealt": "alternate stylesheet",
      "meta-altdoc": "alternate",
    }

    const element_non_void = {
      "meta-template": "template",
      "meta-title": "title",
      "meta-stylearea": "style"
    }

    switch (meta_name) {

      case "!":
        element = document.createComment("");
        break;

      case "-":
        element = document.createElement("x-");
        break;

      case "meta-noscript":
        element = document.createElement("noscript")
        break
      
      case "meta-base":
        element = document.createElement("base")
        break
        
      case "meta-scriptblock":
      case "meta-scriptmap":
      case "meta-scriptmodule":
      case "meta-scriptdata":
        element = document.createElement("script")
        break

      case "meta-stylearea":
      case "meta-template":
      case "meta-title":
        element = document.createElement(element_non_void[meta_name])

        break



      case "meta-icon":
      case "meta-appmanifest":
      case "meta-next":
      case "meta-pingback":
      case "meta-search":
      case "meta-stylelink":
      case "meta-stylealt":
      case "meta-canonical":
      case "meta-altdoc":
        element = document.createElement("link")
        element.setAttribute("rel", element_link[meta_name])
        break

      case "meta-feed":
        element = document.createElement("link")
        element.setAttribute("rel", "alternate")
        element.setAttribute("type", "application/rss+xml")
        break;
          
        

      case "meta-appname":
      case "meta-author":
      case "meta-description":
      case "meta-generator":
      case "meta-keywords":
      case "meta-referrer":
      case "meta-robots":
      case "meta-colorscheme":
      case "meta-colortheme":
      case "meta-viewport":
        element = document.createElement("meta")
        element.setAttribute("name", element_meta[meta_name])
        break

        
      case "meta-charset":
        element = document.createElement("meta")
        break

      case "meta-timeout":
      case "meta-contentpolicy":
      case "meta-styledef":
        element = document.createElement("meta")
        element.setAttribute("http-equiv", element_meta[meta_name])

        break
        
      case "meta-customlink":
        element = document.createElement("link");
        break;

      case "meta-custommeta":
        element = document.createElement("meta");
        break;
      
      case "base":
      case "link":
      case "meta":
      case "noscript":
      case "script":
      case "style":
      case "template":
      case "title":
        element = document.createElement(meta_name)
        
        if (this.node_elements[meta_name]["content"] === "plain") {
          element.innerHTML = meta_attrs["content"]
          delete meta_attrs["content"]
        }
    }

    if ("!" === meta_name) {
      element.nodeValue = node_content;
    } else {
      for (const attr_name in meta_attrs) {
        if (Object.hasOwnProperty.call(meta_attrs, attr_name)) {
  
          if (attr_name.trim() === "") continue;
  
          const attr_value = meta_attrs[attr_name];
  
          if (element) {
            element.setAttribute(attr_name, attr_value)
          }
        }
      }    

      element.innerHTML = node_content;
    }

    return element;
  }
  
  show_stats() {
    const node_selectors = this.shadowRoot.querySelectorAll(".node-name:not(.node-menu > .node-name)")
    const node_obj = {}

    for (const selector of node_selectors) {
      const node_name = selector.value;

      if (node_name in node_obj) {
        node_obj[node_name]++;
      } else {
        node_obj[node_name] = 1;
      }
    }

    const dialog = document.createElement("dialog");

    dialog.classList.add("node-window");

    dialog.innerHTML = `
      <p>
        <button class="close-dialog">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </p>

      <p class="node-stats-title"><span id="node-count">?</span> Metadata</p>
      <ul class="node-stats">
      </ul>
    `;

    const ul = dialog.querySelector("ul");
    let cummulative_count = 0;

    for (const [name, count] of Object.entries(node_obj)) {
      const li = document.createElement("li");
      const count_span = document.createElement("span");
      const space = document.createTextNode(" ");
      const name_span = document.createElement("span");

      ul.append(li);
      li.append(count_span, space, name_span);
      count_span.textContent = count;
      name_span.textContent = this.node_names[name]["label"];
      cummulative_count += count;
    }

    dialog.querySelector("#node-count").innerHTML = cummulative_count;
    this.shadowRoot.append(dialog);
    dialog.showModal();
  }
}

customElements.define("web-creator", WebCreator);

window.browser = window.msBrowser || window.browser || window.chrome

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "showCreator") {
      
    const web_creator = document.querySelector("web-creator");
    
    if (web_creator) {
      web_creator.remove();
    } else {
      const web_creator = document.createElement("web-creator");

      web_creator.setAttribute("data-window", request.data.window_id);
      document.body.append(web_creator);
    }
  }
})



