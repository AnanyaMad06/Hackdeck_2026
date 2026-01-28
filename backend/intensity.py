BONUSES = {
    "pickpocketing": 1,
    "snatching": 1,
    "theft": 2,
    "burglary": 3,
    "assault": 4,
    "robbery": 4,
    "riot": 4,
    "murder": 5,
    "rape": 5,
    "kidnapping": 5,
    "terror": 7,
}

def calculate_intensity(crime: str):
    intensity = 1;

    for key, value in BONUSES.items():
        if key in crime:
            intensity += value

    return intensity
