import { AccessibilityAccordion } from "./components/AccessibilityAccordion";
import { PieChart } from "./components/PieChart";
import { Category } from "./Models";
// import ResultsListItem from "./ResultItem";

  
const accessibilityData = {
    error: {
      description: "Errors",
      count: 1,
      items: {
        "aria_reference_broken": {
          id: "aria_reference_broken",
          description: "Broken ARIA reference",
          count: 1,
          xpaths: ["/HTML/BODY[1]/DIV[3]"]
        }
      }
    },
    contrast: {
      description: "Contrast Errors",
      count: 0,
      items: {}
    },
    alert: {
      description: "Alerts",
      count: 9,
      items: {
        "alt_long": {
          id: "alt_long",
          description: "Long alternative text",
          count: 1,
          xpaths: ["/HTML/BODY[1]/MAIN[1]/DIV[1]/IMG[1]"]
        },
        "label_title": {
          id: "label_title",
          description: "Unlabeled form control with title",
          count: 1,
          xpaths: ["/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/INPUT[2]"]
        },
        "heading_possible": {
          id: "heading_possible",
          description: "Possible heading",
          count: 4,
          xpaths: [
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/A[1]/DIV[2]/DIV[1]/P[1]",
            "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/P[1]",
            "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]",
            "/HTML/BODY[1]/FOOTER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]"
          ]
        },
        "link_suspicious": {
          id: "link_suspicious",
          description: "Suspicious link text",
          count: 1,
          xpaths: ["/HTML/BODY[1]/DIV[2]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/A[2]"]
        },
        "underline": {
          id: "underline",
          description: "Underlined text",
          count: 2,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/DIV[2]/P[2]",
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]/SPAN[1]"
          ]
        }
      }
    },
    feature: {
      description: "Features",
      count: 32,
      items: {
        "alt": {
          id: "alt",
          description: "Alternative text",
          count: 13,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/DIV[1]/IMG[1]",
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/IMG[1]",
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/BUTTON[1]/IMG[1]",
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[2]/IMG[1]"
          ]
        },
        "alt_null": {
          id: "alt_null",
          description: "Null or empty alternative text",
          count: 8,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]",
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/IMG[1]"
          ]
        },
        "alt_link": {
          id: "alt_link",
          description: "Linked image with alternative text",
          count: 1,
          xpaths: [
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/A[1]/DIV[1]/IMG[1]"
          ]
        },
        "label": {
          id: "label",
          description: "Form label",
          count: 6,
          xpaths: [
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]/DIV[1]/DIV[1]/FORM[1]/LABEL[1]",
            "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/LABEL[1]"
          ]
        },
        "fieldset": {
          id: "fieldset",
          description: "Fieldset",
          count: 1,
          xpaths: [
            "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/FIELDSET[1]/LEGEND[1]"
          ]
        }
      }
    },
    structure: {
      description: "Structural Elements",
      count: 58,
      items: {
        "h1": {
          id: "h1",
          description: "Heading level 1",
          count: 3,
          xpaths: [
            "/HTML/BODY[1]/MAIN[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/H1[1]",
            "/HTML/BODY[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/H1[1]",
            "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/HEADER[1]/H1[1]"
          ]
        },
        "h2": {
          id: "h2",
          description: "Heading level 2",
          count: 9,
          xpaths: [
            "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/H2[1]",
            "/HTML/BODY[1]/MAIN[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/H2[1]"
          ]
        },
        "h3": {
          id: "h3",
          description: "Heading level 3",
          count: 16,
          xpaths: [
            "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]/LI[1]/DIV[1]/H3[1]",
            "/HTML/BODY[1]/MAIN[1]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/UL[1]/LI[2]/DIV[1]/H3[1]"
          ]
        },
        "header": {
          id: "header",
          description: "Header",
          count: 6,
          xpaths: [
            "/HTML/BODY[1]/HEADER[1]",
            "/HTML/BODY[1]/MAIN[1]/DIV[5]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/UL[1]/LI[1]/DIV[1]/HEADER[1]"
          ]
        },
        "nav": {
          id: "nav",
          description: "Navigation",
          count: 1,
          xpaths: ["/HTML/BODY[1]/HEADER[1]/DIV[1]/NAV[1]"]
        }
      }
    },
    aria: {
      description: "ARIA",
      count: 48,
      items: {
        "aria": {
          id: "aria",
          description: "ARIA",
          count: 15,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]",
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/IMG[1]"
          ]
        },
        "aria_label": {
          id: "aria_label",
          description: "ARIA label",
          count: 11,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]",
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/DIV[1]/P[1]/SPAN[1]/svg[1]"
          ]
        },
        "aria_describedby": {
          id: "aria_describedby",
          description: "ARIA description",
          count: 4,
          xpaths: [
            "/HTML/BODY[1]/DIV[2]/DIV[1]",
            "/HTML/BODY[1]/DIV[3]"
          ]
        },
        "aria_expanded": {
          id: "aria_expanded",
          description: "ARIA expanded",
          count: 5,
          xpaths: [
            "/HTML/BODY[1]/SECTION[1]/DIV[1]/HEADER[1]/DIV[1]/BUTTON[1]",
            "/HTML/BODY[1]/HEADER[1]/DIV[1]/DIV[1]/DIV[1]/BUTTON[1]"
          ]
        }
      }
    }
  } as {
    [key: string]: Category;
  };
  
  const COLORS = {
    error: '#ef4444',
    contrast: '#f97316',
    alert: '#eab308',
    feature: '#22c55e',
    structure: '#3b82f6',
    aria: '#8b5cf6',
  };
  
  function ResultsList() {
    const pieData = Object.entries(accessibilityData)
    .filter( (value: [string, Category]) => value[1].count > 0)
    .map(([key, category]) => ({
        name: category.description,
        value: category.count,
        color: COLORS[key as keyof typeof COLORS],
      }));
    return (
        <div className="min-h-screen max-w-2xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-xl text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-white-800 mb-6">
                    Accessibility Analysis
                </h1>

                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                    <PieChart data={pieData} />
                </div>

                <div className="space-y-4">
                    {Object.entries(accessibilityData)
                    .filter( (value: [string, Category]) => value[1].count > 0)
                    .map(([key, category]) => (
                        <AccessibilityAccordion
                            key={key}
                            title={category.description}
                            count={category.count}
                            items={category.items}
                            color={COLORS[key as keyof typeof COLORS]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  }

  export default ResultsList;