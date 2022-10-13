const infoVuelos = [
    {
        "id": "TK16~30-TK198~1",
        "departureTime": "23:50",
        "arrivalTime": "19:45",
        "duration": "31h 55m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "stopoversCount": 1,
        "price": "4789"
    },
    {
        "id": "UA818~30-UA2675~31-UA7983~1",
        "departureTime": "22:05",
        "arrivalTime": "05:30",
        "duration": "43h 25m",
        "airlinesNames": [
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "7293"
    },
    {
        "id": "DL110~30-DL515~31-DL7~1",
        "departureTime": "21:15",
        "arrivalTime": "15:10",
        "duration": "53h 55m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7407"
    },
    {
        "id": "LA2368~30-LA2478~31-LA7489~1",
        "departureTime": "19:35",
        "arrivalTime": "17:30",
        "duration": "57h 55m",
        "airlinesNames": [
            "LATAM Airlines Group SA"
        ],
        "stopoversCount": 2,
        "price": "5767"
    },
    {
        "id": "AZ681~30-AZ792~31",
        "departureTime": "13:50",
        "arrivalTime": "11:35",
        "duration": "33h 45m",
        "airlinesNames": [
            "ITA Airways"
        ],
        "stopoversCount": 1,
        "price": "10399"
    },
    {
        "id": "DL110~30-DL339~31-DL167~1",
        "departureTime": "21:15",
        "arrivalTime": "14:55",
        "duration": "53h 40m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7407"
    },
    {
        "id": "DL110~30-DL352~31-DL275~31",
        "departureTime": "21:15",
        "arrivalTime": "15:25",
        "duration": "30h 10m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7390"
    },
    {
        "id": "LA8125~30-LH501~30-LH714~1",
        "departureTime": "17:15",
        "arrivalTime": "09:05",
        "duration": "51h 50m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Lufthansa"
        ],
        "stopoversCount": 2,
        "price": "8657"
    },
    {
        "id": "UA818~30-UA1068~31-UA7925~31",
        "departureTime": "22:05",
        "arrivalTime": "21:10",
        "duration": "35h 05m",
        "airlinesNames": [
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "7293"
    },
    {
        "id": "UA818~30-UA1513~31-UA875~31",
        "departureTime": "22:05",
        "arrivalTime": "14:50",
        "duration": "28h 45m",
        "airlinesNames": [
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "13949"
    },
    {
        "id": "BA244~30-BA5~31",
        "departureTime": "15:25",
        "arrivalTime": "10:25",
        "duration": "31h",
        "airlinesNames": [
            "British Airways"
        ],
        "stopoversCount": 1,
        "price": "8823"
    },
    {
        "id": "LA1436~30-LA2476~31-LA7489~31",
        "departureTime": "07:35",
        "arrivalTime": "17:30",
        "duration": "45h 55m",
        "airlinesNames": [
            "LATAM Airlines Group SA"
        ],
        "stopoversCount": 2,
        "price": "7596"
    },
    {
        "id": "AA958~30-LH463~31-LH4948~1",
        "departureTime": "12:10",
        "arrivalTime": "08:40",
        "duration": "56h 30m",
        "airlinesNames": [
            "American Airlines",
            "Lufthansa"
        ],
        "stopoversCount": 2,
        "price": "22303"
    },
    {
        "id": "DL110~30-DL2504~31-DL167~1",
        "departureTime": "21:15",
        "arrivalTime": "14:55",
        "duration": "53h 40m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7390"
    },
    {
        "id": "LA2368~30-DL150~31-DL295~1",
        "departureTime": "19:35",
        "arrivalTime": "15:10",
        "duration": "55h 35m",
        "airlinesNames": [
            "Delta Air Lines",
            "LATAM Airlines Group SA"
        ],
        "stopoversCount": 2,
        "price": "10824"
    },
    {
        "id": "DL110~30-DL295~31",
        "departureTime": "21:15",
        "arrivalTime": "15:10",
        "duration": "29h 55m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 1,
        "price": "7390"
    },
    {
        "id": "TK16~30-TK194~31-TK198~2",
        "departureTime": "23:50",
        "arrivalTime": "19:45",
        "duration": "55h 55m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "stopoversCount": 2,
        "price": "6292"
    },
    {
        "id": "AC91~30-UA844~30-NH7009~31",
        "departureTime": "16:35",
        "arrivalTime": "17:00",
        "duration": "36h 25m",
        "airlinesNames": [
            "Air Canada",
            "All Nippon Airways",
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "7353"
    },
    {
        "id": "LA472~30-LA530~30-LA7464~31",
        "departureTime": "05:10",
        "arrivalTime": "17:15",
        "duration": "48h 05m",
        "airlinesNames": [
            "LATAM Airlines Group SA"
        ],
        "stopoversCount": 2,
        "price": "7671"
    },
    {
        "id": "DL110~30-DL334~31-DL167~31",
        "departureTime": "21:15",
        "arrivalTime": "14:55",
        "duration": "29h 40m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7390"
    },
    {
        "id": "UA818~30-UA469~31-UA7911~31",
        "departureTime": "22:05",
        "arrivalTime": "20:45",
        "duration": "34h 40m",
        "airlinesNames": [
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "13949"
    },
    {
        "id": "LH511~30-LH4912~31",
        "departureTime": "18:00",
        "arrivalTime": "17:55",
        "duration": "35h 55m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "stopoversCount": 1,
        "price": "5707"
    },
    {
        "id": "AC91~30-UA844~30-UA881~31",
        "departureTime": "16:35",
        "arrivalTime": "17:00",
        "duration": "36h 25m",
        "airlinesNames": [
            "Air Canada",
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "10212"
    },
    {
        "id": "UA818~30-UA2675~31-UA7925~31",
        "departureTime": "22:05",
        "arrivalTime": "21:10",
        "duration": "35h 05m",
        "airlinesNames": [
            "United Airlines"
        ],
        "stopoversCount": 2,
        "price": "7293"
    },
    {
        "id": "DL110~30-DL1423~31-DL275~1",
        "departureTime": "21:15",
        "arrivalTime": "15:25",
        "duration": "54h 10m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "stopoversCount": 2,
        "price": "7407"
    }
]

export default infoVuelos