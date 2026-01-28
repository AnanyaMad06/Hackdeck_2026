ZONES = [
    ["jawahar nagar", "city centre"],
    ["best nagar", "motilal nagar"],
    ["bangur nagar", "link road"],
    ["aarey colony"],
    ["film city", "it parks"],
    ["gokuldham", "yashodham"],
    ["dindoshi", "nagari niwas"],
    ["oshiwara district centre"],
    ["goregaon-mulund link road"],
]

def find_zone(location):
    location = location.lower()

    for index, zone_identifiers in enumerate(ZONES):
        for zone_identifier in zone_identifiers:
            if zone_identifier in location:
                return index
