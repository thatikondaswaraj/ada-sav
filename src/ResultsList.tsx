import { AccessibilityAccordion } from "./components/AccessibilityAccordion";
import { PieChartAnalysis } from "./components/PieChartAnalysis";
import { COLORS } from "./Constants";
import { Category } from "./Models";
import Screenshot from "./components/Screenshot";

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

function ResultsList() {
  const pieData = Object.entries(accessibilityData)
    .filter((value: [string, Category]) => value[1].count > 0)
    .map(([key, category]) => ({
      name: category.description,
      value: category.count,
      color: COLORS[key as keyof typeof COLORS],
    }));

  return (
    <div className="max-w-6xl mx-auto p-1 bg-gray-900 rounded-2xl shadow-xl text-white">
      <div className="max-w-full mx-auto">
        <h1 className="text-xl font-semibold p-4">
          Accessibility Analysis
        </h1>

        <div className="space-y-4 p-4 overflow-y-auto h-[600px] scrollbar-thin">
          <Screenshot url="https://wave.webaim.org/" />

          <PieChartAnalysis accessibilityData={accessibilityData} />

          {Object.entries(accessibilityData)
            .filter((value: [string, Category]) => value[1].count > 0)
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