var qualitativeConfig = `
{
  "title": "Qualitative Scouting",
  "page_title": "Robot Behavior",
  "dataFormat": "tsv",
  "checkboxAs": "10",
  "prematch": {
    "title": "Pre-Match",
    "fields": [
      { "name": "Scouter",  "code": "s",  "type": "text", "size": 10, "maxSize": 20, "subtype": "scouter" },
      { "name": "Event",    "code": "e",  "type": "text", "size": 10, "maxSize": 20, "subtype": "event", "defaultValue": "2026TXHOU", "disabled": "true" },
      { "name": "Match",    "code": "m",  "type": "number", "size": 3, "maxSize": 3 },
      { "name": "Team #",   "code": "t",  "type": "number", "size": 5, "maxSize": 5 }
    ]
  },
  "sections": [
    {
      "title": "Robot Behavior",
      "fields": [
        {
          "name": "Driving Style",
          "code": "ds",
          "type": "radio",
          "choices": { "ag": "Aggressive", "def": "Defensive", "cau": "Cautious", "oth": "Other" }
        },
        {
          "name": "Defense Quality",
          "code": "dq",
          "type": "radio",
          "choices": { "ex": "Excellent", "gd": "Good", "fa": "Fair", "po": "Poor", "na": "N/A" }
        },
        {
          "name": "Recovery from Faults",
          "code": "rf",
          "type": "radio",
          "choices": { "qu": "Quick", "sl": "Slow", "no": "No Recovery" }
        },
        {
          "name": "Plays Well with Alliance",
          "code": "pa",
          "type": "checkbox"
        },
        {
          "name": "Frequently Disabled/Tipped",
          "code": "fd",
          "type": "checkbox"
        },
        {
          "name": "Notes",
          "code": "n",
          "type": "text",
          "size": 40,
          "maxSize": 200
        }
      ]
    }
  ]
}
`;