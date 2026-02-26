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
        "r3": "Red 3\n",
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
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Shooting Location",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
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
        "15": "Climbed\n",
        "a": "Attempted\n",
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
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
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
        "0": "Not Effective\n",
        "1": "Average\n",
        "2": "Very Effective\n",
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
        "10": "Level 1\n",
        "20": "Level 2\n",
        "30": "Level 3\n",
        "a": "Attempted",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Climb Position",
      "code": "tcs",
      "type": "radio",
      "choices": {
        "1": "Left\n",
        "2": "Center\n",
        "3": "Right"
      }
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "0": "Not Effective\n",
        "1": "Average\n",
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
        "1": "Low\n",
        "2": "Mid\n",
        "3": "High\n",
        "4": "Very High"
      }
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
