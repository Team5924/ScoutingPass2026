var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "How many fuel can hopper hold?",
      "code": "hcap",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve[break]",
        "t": "Tank[break]",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Speed",
      "code": "spd",
      "type": "number"
    },
    { "name": "Fits under trench?",
      "code": "fut",
      "type": "bool"
    },
    { "name": "Drives over ramp?",
      "code": "dor",
      "type": "bool"
    },
    { "name": "Ground Intake",
      "code": "gin",
      "type": "bool"
    },
    { "name": "Climb L1",
      "code": "l1",
      "type": "bool"
    },
    { "name": "Climb L2",
      "code": "l2",
      "type": "bool"
    },
    { "name": "Climb L3",
      "code": "l3",
      "type": "bool"
    },
    { "name": "How does it climb?",
      "code": "hwc",
      "type": "text",
      "size": 15,
      "maxSize": 250,
      "rows": 3
    },
    { "name": "Experience with shuffling?",
      "code": "shuf",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 15,
      "maxSize": 250,
      "rows": 5
    },
    { "name": "How does it shoot? (Vision assisted, turret, adjustable hood, etc)",
      "code": "hws",
      "type": "text",
      "size": 20,
      "maxSize": 250,
      "rows": 5
    },
    { "name": "Upload photo to Google Form!",
      "code": "upl",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 250,
      "rows": 5
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
