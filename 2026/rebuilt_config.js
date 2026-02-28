var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025casf",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red 1",
        "r2": "Red 2",
        "r3": "Red 3[break]",
        "b1": "Blue 1",
        "b2": "Blue 2",
        "b3": "Blue 3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "1 5",
      "allowableResponses": "1 2 3 4 5",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Shooting Location",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "2 3",
      "allowableResponses": "1 2 3 4 5 6",
      "expectedMax": 5,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Scored",
      "code": "afs",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "apn",
      "expectedMax": 60,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "15": "Climbed[break]",
        "a": "Attempted[break]",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Shooting Locations",
      "code": "tsl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "2 3",
      "allowableResponses": "1 2 3 4 5 6",
      "expectedMax": 25,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Scored",
      "code": "tfs",
      "expectedMax": 150,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pickup from Floor",
      "code": "tff",
      "type": "bool"
    },
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "0": "Not Effective[break]",
        "1": "Average[break]",
        "2": "Very Effective[break]",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Defense (Inactive Period)",
      "code": "din",
      "type": "bool"
    },
    { "name": "Defense (Active Period)",
      "code": "dac",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "10": "Level 1[break]",
        "20": "Level 2[break]",
        "30": "Level 3[break]",
        "f": "Failed[break]",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Climb Position",
      "code": "tcs",
      "type": "radio",
      "choices": {
        "1": "Left[break]",
        "2": "Center[break]",
        "3": "Right"
      }
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "0": "Not Effective[break]",
        "1": "Average[break]",
        "2": "Very Effective"
      },
      "defaultValue": "1"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Unstable / Beached",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Petition to DNP?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Fuel Accuracy",
      "code": "pct",
      "type": "radio",
      "choices": {
        "1": "Low[break]",
        "2": "Mid[break]",
        "3": "High[break]",
        "4": "Very High"
      }
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 200,
      "rows": 5
    }
  ]
}`;
