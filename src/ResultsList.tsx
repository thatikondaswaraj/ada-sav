import { ResultListItemData } from "./Models";
import ResultsListItem from "./ResultItem";

  
const accordionData: ResultListItemData[] = [
    {
        "description": "Errors",
        "count": 1,
        "items": {
            "aria_reference_broken": {
                "id": "aria_reference_broken",
                "description": "Broken ARIA reference",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[3]"
                ]
            }
        }
    },
    {
        "description": "Contrast Errors",
        "count": 0,
        "items": []
    },
    {
        "description": "Alerts",
        "count": 9,
        "items": {
            "alt_long": {
                "id": "alt_long",
                "description": "Long alternative text",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]/DIV[1]/IMG[1]"
                ]
            },
            "label_title": {
                "id": "label_title",
                "description": "Unlabeled form control with title",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/INPUT[2]"
                ]
            },
            "heading_possible": {
                "id": "heading_possible",
                "description": "Possible heading",
                "count": 4,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/A[1]/DIV[2]/DIV[1]/P[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/P[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]",
                    "/HTML/BODY[1]/FOOTER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]"
                ]
            },
            "link_suspicious": {
                "id": "link_suspicious",
                "description": "Suspicious link text",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[2]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/A[2]"
                ]
            },
            "underline": {
                "id": "underline",
                "description": "Underlined text",
                "count": 2,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/DIV[2]/P[2]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]/SPAN[1]"
                ]
            }
        }
    },
    {
        "description": "Features",
        "count": 32,
        "items": {
            "alt": {
                "id": "alt",
                "description": "Alternative text",
                "count": 13,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/IMG[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/BUTTON[1]/IMG[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[2]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[2]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[3]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[4]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/FOOTER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/FOOTER[1]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/FOOTER[1]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[2]/DIV[2]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/HEADER[1]/H1[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/SECTION[1]/FOOTER[1]/DIV[1]/DIV[1]/IMG[1]"
                ]
            },
            "alt_null": {
                "id": "alt_null",
                "description": "Null or empty alternative text",
                "count": 8,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/IMG[1]"
                ]
            },
            "alt_link": {
                "id": "alt_link",
                "description": "Linked image with alternative text",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/A[1]/DIV[1]/IMG[1]"
                ]
            },
            "label": {
                "id": "label",
                "description": "Form label",
                "count": 6,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[1]/FORM[1]/LABEL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/LABEL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/LABEL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/FIELDSET[1]/DIV[1]/DIV[1]/LABEL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/FIELDSET[1]/DIV[1]/DIV[2]/LABEL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[4]/DIV[1]/LABEL[1]"
                ]
            },
            "fieldset": {
                "id": "fieldset",
                "description": "Fieldset",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/FIELDSET[1]/LEGEND[1]"
                ]
            },
            "link_skip": {
                "id": "link_skip",
                "description": "Skip link",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/A[1]"
                ]
            },
            "link_skip_target": {
                "id": "link_skip_target",
                "description": "Skip link target",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]"
                ]
            },
            "lang": {
                "id": "lang",
                "description": "Language",
                "count": 1,
                "xpaths": [
                    "#"
                ]
            }
        }
    },
    {
        "description": "Structural Elements",
        "count": 58,
        "items": {
            "h1": {
                "id": "h1",
                "description": "Heading level 1",
                "count": 3,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/H1[1]",
                    "/HTML/BODY[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/H1[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/HEADER[1]/H1[1]"
                ]
            },
            "h2": {
                "id": "h2",
                "description": "Heading level 2",
                "count": 9,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[6]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[8]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[9]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/H2[1]"
                ]
            },
            "h3": {
                "id": "h3",
                "description": "Heading level 3",
                "count": 16,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]/LI[1]/DIV[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]/LI[2]/DIV[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]/LI[3]/DIV[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[1]/DIV[1]/HEADER[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[2]/DIV[1]/HEADER[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[3]/DIV[1]/HEADER[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[4]/DIV[1]/HEADER[1]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[6]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[6]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/H3[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[6]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/H3[1]"
                ]
            },
            "ul": {
                "id": "ul",
                "description": "Unordered list",
                "count": 20,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[3]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[3]/UL[1]/LI[1]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[3]/UL[1]/LI[2]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/UL[1]/LI[1]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/UL[1]/LI[2]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/UL[1]/LI[3]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/UL[1]/LI[4]/UL[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[4]/DIV[1]/DIV[1]/DIV[3]/DIV[1]/DIV[3]/DIV[1]/DIV[2]/UL[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/UL[1]"
                ]
            },
            "header": {
                "id": "header",
                "description": "Header",
                "count": 6,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[1]/DIV[1]/HEADER[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[2]/DIV[1]/HEADER[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[3]/DIV[1]/HEADER[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[4]/DIV[1]/HEADER[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/HEADER[1]"
                ]
            },
            "nav": {
                "id": "nav",
                "description": "Navigation",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]"
                ]
            },
            "search": {
                "id": "search",
                "description": "Search",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[1]/FORM[1]"
                ]
            },
            "main": {
                "id": "main",
                "description": "Main content",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/MAIN[1]"
                ]
            },
            "footer": {
                "id": "footer",
                "description": "Footer",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/FOOTER[1]"
                ]
            }
        }
    },
    {
        "description": "ARIA",
        "count": 48,
        "items": {
            "aria": {
                "id": "aria",
                "description": "ARIA",
                "count": 15,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/IMG[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]/SPAN[1]/svg[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[3]/BUTTON[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/BUTTON[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[1]/SPAN[1]",
                    "/HTML/BODY[1]/A[2]",
                    "/HTML/BODY[1]/DIV[2]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[4]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/BUTTON[1]/svg[1]"
                ]
            },
            "aria_label": {
                "id": "aria_label",
                "description": "ARIA label",
                "count": 11,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]/SPAN[1]/svg[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[1]/SPAN[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[1]/DIV[1]/DIV[3]/A[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[2]/DIV[1]/DIV[3]/A[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[3]/DIV[1]/DIV[3]/A[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[4]/DIV[1]/DIV[3]/A[1]",
                    "/HTML/BODY[1]/DIV[2]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/SECTION[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/BUTTON[1]"
                ]
            },
            "aria_describedby": {
                "id": "aria_describedby",
                "description": "ARIA description",
                "count": 4,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[2]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/INPUT[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/INPUT[1]"
                ]
            },
            "aria_tabindex": {
                "id": "aria_tabindex",
                "description": "ARIA tabindex",
                "count": 3,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/INPUT[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/INPUT[2]"
                ]
            },
            "aria_live_region": {
                "id": "aria_live_region",
                "description": "ARIA alert or live region",
                "count": 2,
                "xpaths": [
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[4]/DIV[1]/SPAN[1]"
                ]
            },
            "aria_button": {
                "id": "aria_button",
                "description": "ARIA button",
                "count": 1,
                "xpaths": [
                    "/HTML/BODY[1]/A[2]"
                ]
            },
            "aria_hidden": {
                "id": "aria_hidden",
                "description": "ARIA hidden",
                "count": 7,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/DIV[2]/P[2]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/IMG[1]",
                    "/HTML/BODY[1]/MAIN[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/INPUT[2]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/SECTION[1]/FOOTER[1]/DIV[1]/DIV[1]/IMG[1]",
                    "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/BUTTON[1]/svg[1]"
                ]
            },
            "aria_expanded": {
                "id": "aria_expanded",
                "description": "ARIA expanded",
                "count": 5,
                "xpaths": [
                    "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/BUTTON[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/BUTTON[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[3]/BUTTON[1]",
                    "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/UL[1]/LI[4]/BUTTON[1]"
                ]
            }
        }
    }


];
  
  function ResultsList() {
    return (
        <div className="max-w-2xl mx-auto">
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">esults</h1> */}
          {accordionData.map((item, index) => (
            <ResultsListItem key={index} data={item} />
          ))}
        </div>
    );
  }

  export default ResultsList;