const roundTripExample = [
    {
        "id": "LH773~15-LH111~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 560,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 375,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH111",
                "departureDateTime": "2022-12-16T15:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T16:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR1301~15-AZ897~15-AZ680~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:10",
        "duration": "34h 05m",
        "airlinesNames": [
            "ITA Airways",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3810",
        "cabinClass": "Economy",
        "stopoversCount": 3,
        "stopoverAirportCodes": [
            "FCO",
            "CAI",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 55,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 225,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "CAI",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR1301",
                "departureDateTime": "2022-12-15T12:25:00.000+03:00",
                "arrivalDateTime": "2022-12-15T15:10:00.000+02:00"
            },
            {
                "durationMinutes": 220,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "CAI",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ897",
                "departureDateTime": "2022-12-15T17:55:00.000+02:00",
                "arrivalDateTime": "2022-12-15T20:35:00.000+01:00"
            },
            {
                "durationMinutes": 850,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ680",
                "departureDateTime": "2022-12-15T22:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:10:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH100~17-LH772~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "59h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH100~17-LH772~17=LX9059~15-LX177~16-LX92~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH97~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LX9061~15-LX9001~16-LX92~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LX9061~15-LX177~16-LX92~16",
            "LH511~15-LH100~17-LH772~17=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LX9067~15-LX9001~16-LX92~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH100~17-LH772~17=LH773~15-LH105~16-LH510~16"
        ],
        "price": "3009",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1385,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 690,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH100",
                "departureDateTime": "2022-11-17T10:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-17T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-18T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "TK16~15-TK68~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:00",
        "duration": "29h 10m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK16~15-TK68~17=TK69~15-TK800~16-AV87~16",
            "TK16~15-TK68~17=QR837~15-QR3073~15-AC96~16",
            "TK16~15-TK68~17=TG922~15-LH510~15",
            "TK16~15-TK68~17=QR831~15-QR3073~15-AC96~16",
            "TK16~15-TK68~17=TK69~15-TK800~16-CM500~17",
            "TK16~15-TK68~17=TK69~15-TK15~16",
            "TK16~15-TK68~17=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "TK16~15-TK68~17=TK65~15-TK15~16",
            "TK16~15-TK68~17=HX776~15-LX139~15-LX92~16",
            "TK16~15-TK68~17=TK69~15-TK800~16-CM279~17",
            "TK16~15-TK68~17=ET609~15-ET506~15",
            "TK16~15-TK68~17=PG275~15-EK379~15-EK247~16",
            "TK16~15-TK68~17=TG323~15-LH761~16-LH510~16",
            "TK16~15-TK68~17=KE658~15-KE35~16-DL101~16",
            "TK16~15-TK68~17=TK65~15-TK903~16-CM500~17",
            "TK16~15-TK68~17=EK375~15-EK247~16",
            "TK16~15-TK68~17=KL804~15-KL701~15",
            "TK16~15-TK68~17=EK363~15-EK247~16-EK247~16",
            "TK16~15-TK68~17=QR833~15-QR3073~16-AC96~17",
            "TK16~15-TK68~17=AF165~15-AF228~16",
            "TK16~15-TK68~17=QR833~15-QR779~16-ET506~16",
            "TK16~15-TK68~17=JL708~15-NH6450~15-UA819~15",
            "TK16~15-TK68~17=EK363~15-EK247~16",
            "TK16~15-TK68~17=QR833~15-LA5295~16-ET506~16",
            "TK16~15-TK68~17=PG273~15-EK379~15-EK247~16",
            "TK16~15-TK68~17=TK69~15-TK15~16-LA8036~17",
            "TK16~15-TK68~17=QR831~15-QR1301~15-AZ897~15-AZ680~15"
        ],
        "price": "3521",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 980,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-15T23:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T22:10:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK68",
                "departureDateTime": "2022-11-17T01:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T15:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "11:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "44h 45m",
        "airlinesNames": [
            "Cathay Pacific",
            "LATAM Airlines Group SA",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2962",
        "cabinClass": "Economy",
        "stopoversCount": 4,
        "stopoverAirportCodes": [
            "HKG",
            "ICN",
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 170,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKG",
                "airlineCode": "CX",
                "cabin": "economy",
                "designatorCode": "CX750",
                "departureDateTime": "2022-12-15T11:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:30:00.000+08:00"
            },
            {
                "durationMinutes": 215,
                "stopoverDurationMinutes": 190,
                "departureAirportCode": "HKG",
                "arrivalAirportCode": "ICN",
                "airlineCode": "CX",
                "cabin": "economy",
                "designatorCode": "CX416",
                "departureDateTime": "2022-12-15T16:40:00.000+08:00",
                "arrivalDateTime": "2022-12-15T21:15:00.000+09:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 180,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "DOH",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA6037",
                "departureDateTime": "2022-12-16T00:25:00.000+09:00",
                "arrivalDateTime": "2022-12-16T05:15:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "LA5261",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T19:25:00.000-03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK800~16-AV87~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "05:50",
        "duration": "40h 20m",
        "airlinesNames": [
            "Avianca",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4100",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IST",
            "BOG"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 180,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 400,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BOG",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK800",
                "departureDateTime": "2022-12-16T09:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T14:55:00.000-05:00"
            },
            {
                "durationMinutes": 375,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "BOG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AV",
                "cabin": "economy",
                "designatorCode": "AV87",
                "departureDateTime": "2022-12-16T21:35:00.000-05:00",
                "arrivalDateTime": "2022-12-17T05:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH118~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH118~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH118~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH118~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH118~16-LH772~16=LH6467~15-LH1235~16-LH510~16"
        ],
        "price": "3039",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 485,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH118",
                "departureDateTime": "2022-11-16T19:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T20:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH1243~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 825,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 100,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1243",
                "departureDateTime": "2022-12-16T19:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:35:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-TG923~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:45",
        "duration": "33h 45m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-TG923~16=TG922~15-LH510~15",
            "LH511~15-TG923~16=TG920~15-LH510~16"
        ],
        "price": "4224",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 585,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG923",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:45:00.000+07:00"
            }
        ]
    },
    {
        "id": "AZ681~15-GF26~16-GF152~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "08:55",
        "duration": "33h 05m",
        "airlinesNames": [
            "Gulf Air",
            "ITA Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-GF26~16-GF152~16=ET609~15-ET506~15",
            "AZ681~15-GF26~16-GF152~16=QR833~15-QR779~16-ET506~16",
            "AZ681~15-GF26~16-GF152~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-GF26~16-GF152~16=EK363~15-EK247~16-EK247~16",
            "AZ681~15-GF26~16-GF152~16=EK363~15-EK247~16",
            "AZ681~15-GF26~16-GF152~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-GF26~16-GF152~16=QR837~15-QR3073~15-AC96~16",
            "AZ681~15-GF26~16-GF152~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-GF26~16-GF152~16=EK373~15-EK247~16",
            "AZ681~15-GF26~16-GF152~16=EK375~15-EK247~16",
            "AZ681~15-GF26~16-GF152~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-GF26~16-GF152~16=QR831~15-QR3073~15-AC96~16"
        ],
        "price": "2815",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FCO",
            "BAH"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 325,
                "stopoverDurationMinutes": 230,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "BAH",
                "airlineCode": "GF",
                "cabin": "economy",
                "designatorCode": "GF26",
                "departureDateTime": "2022-11-16T11:10:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:35:00.000+03:00"
            },
            {
                "durationMinutes": 390,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "BAH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "GF",
                "cabin": "economy",
                "designatorCode": "GF152",
                "departureDateTime": "2022-11-16T22:25:00.000+03:00",
                "arrivalDateTime": "2022-11-17T08:55:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR3051~16-QR6915~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "46h 30m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3377",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 899,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3051",
                "departureDateTime": "2022-12-16T03:25:00.000+03:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-16T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH6331~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 105,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 815,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6331",
                "departureDateTime": "2022-12-16T07:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH104~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH104~16-LH772~16=QR831~15-QR151~15-IB6841~15",
            "LH511~15-LH104~16-LH772~16=QR831~15-QR151~15-QR6915~15",
            "LH511~15-LH104~16-LH772~16=QR833~15-QR3073~16-AC96~17",
            "LH511~15-LH104~16-LH772~16=QR837~15-QR149~15-QR6915~15",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=TK69~15-TK15~16-LA8036~17",
            "LH511~15-LH104~16-LH772~16=EK363~15-EK247~16-EK247~16",
            "LH511~15-LH104~16-LH772~16=PG275~15-EK379~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=QR833~15-QR3073~16-LA8036~17",
            "LH511~15-LH104~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=ET609~15-ET506~15",
            "LH511~15-LH104~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH104~16-LH772~16=QR831~15-QR3073~15-AC96~16",
            "LH511~15-LH104~16-LH772~16=QR833~15-QR151~16-QR6976~17",
            "LH511~15-LH104~16-LH772~16=PG273~15-EK379~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=QR831~15-QR3073~15-LA8014~16",
            "LH511~15-LH104~16-LH772~16=QR837~15-QR151~15-QR6915~15",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=QR833~15-QR3051~16-QR6976~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=QR837~15-QR3073~15-AC96~16",
            "LH511~15-LH104~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH104~16-LH772~16=LH773~15-LH111~16-LH510~16"
        ],
        "price": "2753",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 65,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 570,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH104",
                "departureDateTime": "2022-11-16T12:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T13:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "AA996~15-KE5032~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "20:55",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 25m",
        "airlinesNames": [
            "American Airlines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA996~15-KE5032~16-KE659~17=EK363~15-EK247~16",
            "AA996~15-KE5032~16-KE659~17=HX776~15-LX139~15-LX92~16",
            "AA996~15-KE5032~16-KE659~17=TK69~15-TK15~16",
            "AA996~15-KE5032~16-KE659~17=TK65~15-TK15~16",
            "AA996~15-KE5032~16-KE659~17=TG922~15-LH510~15",
            "AA996~15-KE5032~16-KE659~17=CX750~15-CX846~15-AA953~16",
            "AA996~15-KE5032~16-KE659~17=ET609~15-ET506~15"
        ],
        "price": "5719",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "DFW",
            "ICN"
        ],
        "segments": [
            {
                "durationMinutes": 678,
                "stopoverDurationMinutes": 323,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "DFW",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA996",
                "departureDateTime": "2022-11-15T20:55:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:13:00.000-06:00"
            },
            {
                "durationMinutes": 889,
                "stopoverDurationMinutes": 225,
                "departureAirportCode": "DFW",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "operatingAirlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "KE5032",
                "departureDateTime": "2022-11-16T10:36:00.000-06:00",
                "arrivalDateTime": "2022-11-17T16:25:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR6974~15-QR148~17-QR836~18",
        "departureAirportCode": "EZE",
        "departureTime": "22:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "14:00",
        "duration": "53h 35m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "QR6974~15-QR148~17-QR836~18=QR833~15-QR779~16-AC96~16",
            "QR6974~15-QR148~17-QR836~18=EK4522~15-EK379~15-EK247~16",
            "QR6974~15-QR148~17-QR836~18=EK363~15-EK247~16",
            "QR6974~15-QR148~17-QR836~18=EK375~15-EK247~16"
        ],
        "price": "3176",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 1065,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6974",
                "departureDateTime": "2022-11-15T22:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:35:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 635,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR148",
                "departureDateTime": "2022-11-17T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-17T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR836",
                "departureDateTime": "2022-11-18T03:40:00.000+03:00",
                "arrivalDateTime": "2022-11-18T14:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH1239~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 525,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 400,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1239",
                "departureDateTime": "2022-12-16T14:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T15:35:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK15~16-LA8036~17",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "17:00",
        "duration": "51h 30m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3127",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IST",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 1215,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T10:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T17:50:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA8036",
                "departureDateTime": "2022-12-17T14:05:00.000-03:00",
                "arrivalDateTime": "2022-12-17T17:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG924~15-TG7927~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "41h 15m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4301",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 715,
                "stopoverDurationMinutes": 75,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG924",
                "departureDateTime": "2022-12-15T00:50:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 790,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "operatingAirlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "TG7927",
                "departureDateTime": "2022-12-15T08:00:00.000+01:00",
                "arrivalDateTime": "2022-12-15T09:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF8228~17-AF8391~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "53h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF8228~17-AF8391~17=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF8228~17-AF8391~17=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF8228~17-AF8391~17=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF8228~17-AF8391~17=KL804~15-KL701~15",
            "AF229~15-AF8228~17-AF8391~17=AF165~15-AF228~16",
            "AF229~15-AF8228~17-AF8391~17=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF8228~17-AF8391~17=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF8228~17-AF8391~17=KL804~15-KL2013~15-KL2358~16"
        ],
        "price": "3291",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1065,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 595,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8228",
                "departureDateTime": "2022-11-17T09:30:00.000+01:00",
                "arrivalDateTime": "2022-11-17T11:00:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-17T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-18T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "EK385~15-EK261~15-LA8014~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "33h 10m",
        "airlinesNames": [
            "Emirates",
            "LATAM Airlines Group SA"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3022",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 415,
                "stopoverDurationMinutes": 245,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK385",
                "departureDateTime": "2022-12-15T01:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+04:00"
            },
            {
                "durationMinutes": 915,
                "stopoverDurationMinutes": 235,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "GRU",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK261",
                "departureDateTime": "2022-12-15T09:05:00.000+04:00",
                "arrivalDateTime": "2022-12-15T17:20:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8014",
                "departureDateTime": "2022-12-15T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-16T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH95~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3288",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 140,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 790,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH95",
                "departureDateTime": "2022-12-16T08:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T09:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AA954~15-KE82~16-KE5065~18",
        "departureAirportCode": "EZE",
        "departureTime": "23:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "21:10",
        "duration": "59h 40m",
        "airlinesNames": [
            "American Airlines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA954~15-KE82~16-KE5065~18=KE652~15-KE35~16-DL101~16"
        ],
        "price": "4163",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 220,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "JFK",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA954",
                "departureDateTime": "2022-11-15T23:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T08:20:00.000-05:00"
            },
            {
                "durationMinutes": 940,
                "stopoverDurationMinutes": 1410,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE82",
                "departureDateTime": "2022-11-16T12:00:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:40:00.000+09:00"
            },
            {
                "durationMinutes": 360,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE5065",
                "departureDateTime": "2022-11-18T17:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T21:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "JL708~15-NH6450~15-UA819~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:20",
        "duration": "35h 15m",
        "airlinesNames": [
            "All Nippon Airways",
            "Japan Airlines",
            "United Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4678",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "NRT",
            "IAH"
        ],
        "segments": [
            {
                "durationMinutes": 350,
                "stopoverDurationMinutes": 90,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "NRT",
                "airlineCode": "JL",
                "cabin": "economy",
                "designatorCode": "JL708",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:55:00.000+09:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 365,
                "departureAirportCode": "NRT",
                "arrivalAirportCode": "IAH",
                "airlineCode": "NH",
                "operatingAirlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "NH6450",
                "departureDateTime": "2022-12-15T17:25:00.000+09:00",
                "arrivalDateTime": "2022-12-15T14:15:00.000-05:00"
            },
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IAH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA819",
                "departureDateTime": "2022-12-15T20:20:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF1440~16-AF8389~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF1440~16-AF8389~16=KL2151~15-KL2258~15-KL702~16",
            "AF229~15-AF1440~16-AF8389~16=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF1440~16-AF8389~16=AF165~15-AF228~16",
            "AF229~15-AF1440~16-AF8389~16=KL804~15-KL701~15",
            "AF229~15-AF1440~16-AF8389~16=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF1440~16-AF8389~16=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF1440~16-AF8389~16=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF1440~16-AF8389~16=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF1440~16-AF8389~16=AF8386~15-AF1441~15-AF228~16"
        ],
        "price": "3289",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 50,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1440",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8389",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-QR774~16-QR836~17",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "14:00",
        "duration": "49h 15m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-QR774~16-QR836~17=QR831~15-QR3073~15-AC96~16",
            "LA8015~15-QR774~16-QR836~17=EK4520~15-EK379~15-EK247~16",
            "LA8015~15-QR774~16-QR836~17=EK4522~15-EK379~15-EK247~16",
            "LA8015~15-QR774~16-QR836~17=QR837~15-QR3073~15-AC96~16",
            "LA8015~15-QR774~16-QR836~17=QR837~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR836~17=TK69~15-TK15~16",
            "LA8015~15-QR774~16-QR836~17=TK65~15-TK15~16",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR3073~16-LA8036~17",
            "LA8015~15-QR774~16-QR836~17=QR831~15-QR773~16-LA8014~16",
            "LA8015~15-QR774~16-QR836~17=QR831~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR147~16-QR6976~16",
            "LA8015~15-QR774~16-QR836~17=EK375~15-EK247~16",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR773~16-LA8012~17",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR3073~16-AC96~17",
            "LA8015~15-QR774~16-QR836~17=EK363~15-EK247~16",
            "LA8015~15-QR774~16-QR836~17=QR831~15-QR3073~15-LA8014~16",
            "LA8015~15-QR774~16-QR836~17=QR837~15-QR773~15-AC96~16",
            "LA8015~15-QR774~16-QR836~17=QR833~15-QR3051~16-QR6976~16"
        ],
        "price": "2780",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 1315,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 280,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR774",
                "departureDateTime": "2022-11-16T03:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T23:00:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR836",
                "departureDateTime": "2022-11-17T03:40:00.000+03:00",
                "arrivalDateTime": "2022-11-17T14:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "IB7931~15-IB875~16-IB6845~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "58h 35m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3160",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 940,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7931",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 920,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB875",
                "departureDateTime": "2022-12-16T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6845",
                "departureDateTime": "2022-12-17T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-17T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "EK363~15-EK247~16-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:55",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "30h 45m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3457",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GIG",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 420,
                "stopoverDurationMinutes": 250,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK363",
                "departureDateTime": "2022-12-15T23:55:00.000+07:00",
                "arrivalDateTime": "2022-12-16T03:55:00.000+04:00"
            },
            {
                "durationMinutes": 860,
                "stopoverDurationMinutes": 105,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "GIG",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T15:25:00.000-03:00"
            },
            {
                "durationMinutes": 210,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GIG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T17:10:00.000-03:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7929~15-IB7902~16-IB6845~17",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "70h 55m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3276",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1235,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7929",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 1365,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7902",
                "departureDateTime": "2022-12-16T08:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T13:40:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6845",
                "departureDateTime": "2022-12-17T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-17T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "AA996~15-AA281~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "20:55",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 25m",
        "airlinesNames": [
            "American Airlines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA996~15-AA281~16-KE659~17=LX181~15-LX92~15-TK15~16",
            "AA996~15-AA281~16-KE659~17=OZ742~15-OZ222~15-AA953~15"
        ],
        "price": "6824",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "DFW",
            "ICN"
        ],
        "segments": [
            {
                "durationMinutes": 678,
                "stopoverDurationMinutes": 323,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "DFW",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA996",
                "departureDateTime": "2022-11-15T20:55:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:13:00.000-06:00"
            },
            {
                "durationMinutes": 889,
                "stopoverDurationMinutes": 225,
                "departureAirportCode": "DFW",
                "arrivalAirportCode": "ICN",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA281",
                "departureDateTime": "2022-11-16T10:36:00.000-06:00",
                "arrivalDateTime": "2022-11-17T16:25:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "BA246~15-QR780~15-QR830~16",
        "departureAirportCode": "EZE",
        "departureTime": "12:20",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "31h 45m",
        "airlinesNames": [
            "British Airways",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "BA246~15-QR780~15-QR830~16=QR833~15-QR3073~16-LA8036~17"
        ],
        "price": "5074",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 155,
                "stopoverDurationMinutes": 310,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA246",
                "departureDateTime": "2022-11-15T12:20:00.000-03:00",
                "arrivalDateTime": "2022-11-15T14:55:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR780",
                "departureDateTime": "2022-11-15T20:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "EY407~15-EY75~16-AR1133~16",
        "departureAirportCode": "BKK",
        "departureTime": "19:10",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "04:00",
        "duration": "42h 50m",
        "airlinesNames": [
            "Aerolineas Argentinas",
            "Etihad Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3494",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "AUH"
        ],
        "segments": [
            {
                "durationMinutes": 425,
                "stopoverDurationMinutes": 235,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AUH",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY407",
                "departureDateTime": "2022-12-15T19:10:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:15:00.000+04:00"
            },
            {
                "durationMinutes": 475,
                "stopoverDurationMinutes": 645,
                "departureAirportCode": "AUH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY75",
                "departureDateTime": "2022-12-16T03:10:00.000+04:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000+01:00"
            },
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AR",
                "cabin": "economy",
                "designatorCode": "AR1133",
                "departureDateTime": "2022-12-16T18:50:00.000+01:00",
                "arrivalDateTime": "2022-12-17T04:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG930~15-LA701~15-LA8014~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "58h 10m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3555",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 765,
                "stopoverDurationMinutes": 855,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG930",
                "departureDateTime": "2022-12-15T00:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 970,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA701",
                "departureDateTime": "2022-12-15T21:05:00.000+01:00",
                "arrivalDateTime": "2022-12-16T05:05:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8014",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX9059~15-LX177~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "15:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "54h 10m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3268",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "SIN"
        ],
        "segments": [
            {
                "durationMinutes": 155,
                "stopoverDurationMinutes": 290,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "SIN",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX9059",
                "departureDateTime": "2022-12-15T15:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:15:00.000+08:00"
            },
            {
                "durationMinutes": 785,
                "stopoverDurationMinutes": 995,
                "departureAirportCode": "SIN",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX177",
                "departureDateTime": "2022-12-16T00:05:00.000+08:00",
                "arrivalDateTime": "2022-12-16T06:10:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK9641~15-TK900~15-TK64~16",
        "departureAirportCode": "EZE",
        "departureTime": "11:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "36h 35m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK9641~15-TK900~15-TK64~16=TK69~15-TK15~16"
        ],
        "price": "4016",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 450,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "operatingAirlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "TK9641",
                "departureDateTime": "2022-11-15T11:35:00.000-03:00",
                "arrivalDateTime": "2022-11-15T17:05:00.000-05:00"
            },
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK900",
                "departureDateTime": "2022-11-15T19:50:00.000-05:00",
                "arrivalDateTime": "2022-11-16T16:30:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-16T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL804~15-KL701~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "07:25",
        "duration": "40h 55m",
        "airlinesNames": [
            "KLM"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3274",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 865,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL804",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL701",
                "departureDateTime": "2022-12-15T21:35:00.000+01:00",
                "arrivalDateTime": "2022-12-16T07:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7929~15-IB875~15-IB6841~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "34h 50m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3841",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7929",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB875",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6841",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF1140~16-AF8391~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF1140~16-AF8391~16=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF1140~16-AF8391~16=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF1140~16-AF8391~16=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF1140~16-AF8391~16=AF165~15-AF228~16",
            "AF229~15-AF1140~16-AF8391~16=KL804~15-KL701~15",
            "AF229~15-AF1140~16-AF8391~16=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF1140~16-AF8391~16=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF1140~16-AF8391~16=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF1140~16-AF8391~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "3289",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1140",
                "departureDateTime": "2022-11-16T16:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:20:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL2279~15-KL2022~16-KL803~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL2279~15-KL2022~16-KL803~16=KL804~15-KL701~15",
            "KL2279~15-KL2022~16-KL803~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "3378",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2279",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 80,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2022",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL803",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR147~16-QR6915~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "46h 30m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3377",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 1029,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR147",
                "departureDateTime": "2022-12-16T01:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-16T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH1242~16-LH6466~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:30",
        "duration": "35h 30m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH1242~16-LH6466~16=TK69~15-TK15~16-LA8036~17",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=EK363~15-EK247~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=TK65~15-TK15~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH1242~16-LH6466~16=EK375~15-EK247~16",
            "LH511~15-LH1242~16-LH6466~16=TK69~15-TK15~16",
            "LH511~15-LH1242~16-LH6466~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH1242~16-LH6466~16=ET609~15-ET506~15"
        ],
        "price": "3146",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 340,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 315,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1242",
                "departureDateTime": "2022-11-16T16:50:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:10:00.000+01:00"
            },
            {
                "durationMinutes": 605,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6466",
                "departureDateTime": "2022-11-16T23:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-QR774~16-QR830~17",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "65h 20m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-QR774~16-QR830~17=TK69~15-TK15~16",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR3073~16-BA247~17",
            "LA8015~15-QR774~16-QR830~17=TK69~15-TK800~16-CM279~17",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR773~16-BA247~17",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR773~16-LA8014~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR779~16-BA247~17",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR3073~16-AC96~17",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR151~15-QR6915~15",
            "LA8015~15-QR774~16-QR830~17=TK65~15-TK15~16",
            "LA8015~15-QR774~16-QR830~17=QR837~15-QR773~15-AC96~16",
            "LA8015~15-QR774~16-QR830~17=QR837~15-QR149~15-QR6915~15",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR147~16-QR6976~16",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR3073~15-LA8014~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR147~16-QR6976~16",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR3073~15-AC96~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR3051~16-QR6976~16",
            "LA8015~15-QR774~16-QR830~17=TK69~15-TK15~16-LA8036~17",
            "LA8015~15-QR774~16-QR830~17=QR837~15-QR151~15-QR6915~15",
            "LA8015~15-QR774~16-QR830~17=PG273~15-EK379~15-EK247~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR773~16-LA8012~17",
            "LA8015~15-QR774~16-QR830~17=QR831~15-QR773~16-BA247~17",
            "LA8015~15-QR774~16-QR830~17=QR833~15-QR3073~16-LA8036~17",
            "LA8015~15-QR774~16-QR830~17=QR837~15-QR779~16-AC96~16",
            "LA8015~15-QR774~16-QR830~17=QR837~15-QR3073~15-AC96~16"
        ],
        "price": "2784",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 1315,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 1245,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR774",
                "departureDateTime": "2022-11-16T03:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T23:00:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-17T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR3073~16-LA8036~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "17:00",
        "duration": "54h 35m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2449",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1165,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 615,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-16T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-17T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA8036",
                "departureDateTime": "2022-12-17T14:05:00.000-03:00",
                "arrivalDateTime": "2022-12-17T17:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "EK363~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:55",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "30h 45m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2659",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 420,
                "stopoverDurationMinutes": 250,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK363",
                "departureDateTime": "2022-12-15T23:55:00.000+07:00",
                "arrivalDateTime": "2022-12-16T03:55:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR3073~16-BA247~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:15",
        "duration": "47h 50m",
        "airlinesNames": [
            "British Airways",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2580",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1165,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 220,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-16T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-17T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA247",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR151~16-QR6915~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "46h 30m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3371",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 940,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-16T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-16T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7935~15-IB875~15-IB6841~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "41h 20m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3841",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 630,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7935",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB875",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6841",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG920~15-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 25m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8564",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 980,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG920",
                "departureDateTime": "2022-12-15T23:40:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:55:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH1247~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 45,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 875,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH1247",
                "departureDateTime": "2022-12-16T06:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T07:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH112~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH112~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=QR837~15-QR3073~15-AC96~16",
            "LH511~15-LH112~16-LH772~16=QR831~15-QR3073~15-AC96~16",
            "LH511~15-LH112~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=QR833~15-QR3073~16-LA8036~17",
            "LH511~15-LH112~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH112~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH112~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=QR831~15-QR3073~15-LA8014~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=QR833~15-QR3073~16-AC96~17",
            "LH511~15-LH112~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=TG922~15-LH510~15",
            "LH511~15-LH112~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH112~16-LH772~16=ET609~15-ET506~15"
        ],
        "price": "2762",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 305,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 330,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH112",
                "departureDateTime": "2022-11-16T16:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR147~16-QR6976~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "46h 55m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3302",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 825,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 335,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR147",
                "departureDateTime": "2022-12-16T01:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR151~15-QR6915~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "34h 50m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3298",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "KE660~15-KE5035~15-DL101~15",
        "departureAirportCode": "BKK",
        "departureTime": "09:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "33h 20m",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4585",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 340,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE660",
                "departureDateTime": "2022-12-15T09:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T17:20:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE5035",
                "departureDateTime": "2022-12-15T18:30:00.000+09:00",
                "arrivalDateTime": "2022-12-15T17:55:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL101",
                "departureDateTime": "2022-12-15T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK16~15-TK16~16-TK68~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:00",
        "duration": "29h 10m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK16~15-TK16~16-TK68~17=TK69~15-TK15~16-TK15~16",
            "TK16~15-TK16~16-TK68~17=TK65~15-TK15~16-TK15~16"
        ],
        "price": "3646",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 95,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-15T23:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T02:20:00.000-03:00"
            },
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-16T03:55:00.000-03:00",
                "arrivalDateTime": "2022-11-16T22:10:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK68",
                "departureDateTime": "2022-11-17T01:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T15:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR837~15-QR149~15-QR6915~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "41h 20m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3298",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR837",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 619,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR149",
                "departureDateTime": "2022-12-15T08:05:00.000+03:00",
                "arrivalDateTime": "2022-12-15T13:40:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK65~15-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "22:55",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "33h 30m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2941",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 260,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK65",
                "departureDateTime": "2022-12-15T22:55:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:45:00.000+03:00"
            },
            {
                "durationMinutes": 1100,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T10:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH96~17-LH772~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "59h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH96~17-LH772~17=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LX9059~15-LX177~16-LX92~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH97~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LX9061~15-LX9001~16-LX92~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LX9067~15-LX9001~16-LX92~16",
            "LH511~15-LH96~17-LH772~17=LX9061~15-LX177~16-LX92~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH96~17-LH772~17=LH6467~15-LH1239~16-LH510~16"
        ],
        "price": "3009",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1265,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 810,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH96",
                "departureDateTime": "2022-11-17T08:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T09:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-17T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-18T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-QR780~15-QR830~16",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "41h 20m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR773~16-BA247~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR779~16-BA247~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR149~16-QR6915~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR773~16-BA247~17",
            "LA8015~15-QR780~15-QR830~16=EK4520~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR151~15-QR6976~16",
            "LA8015~15-QR780~15-QR830~16=TK69~15-TK15~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR147~16-QR6915~16",
            "LA8015~15-QR780~15-QR830~16=EK4522~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR3073~16-AC96~17",
            "LA8015~15-QR780~15-QR830~16=TK65~15-TK15~16",
            "LA8015~15-QR780~15-QR830~16=ET609~15-ET506~15",
            "LA8015~15-QR780~15-QR830~16=TK69~15-TK15~16-LA8036~17",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR773~16-LA8014~16",
            "LA8015~15-QR780~15-QR830~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR147~16-QR6976~16",
            "LA8015~15-QR780~15-QR830~16=PG275~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR3051~16-QR6976~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-LA5295~16-ET506~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR151~15-QR6915~15",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR151~16-QR6976~17",
            "LA8015~15-QR780~15-QR830~16=EK363~15-EK247~16-EK247~16",
            "LA8015~15-QR780~15-QR830~16=EK375~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=EK363~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR3051~16-QR6915~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR773~16-LA8012~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR773~16-AC96~17",
            "LA8015~15-QR780~15-QR830~16=PG273~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR3073~15-AC96~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR3073~16-LA8036~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR3051~16-QR6976~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR151~16-QR6915~16",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR147~16-QR6976~16",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR779~16-LA8012~17",
            "LA8015~15-QR780~15-QR830~16=QR837~15-QR773~15-AC96~16",
            "LA8015~15-QR780~15-QR830~16=TK69~15-TK800~16-CM279~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR3073~16-BA247~17",
            "LA8015~15-QR780~15-QR830~16=QR833~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR830~16=QR837~15-QR151~15-QR6915~15",
            "LA8015~15-QR780~15-QR830~16=QR837~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR830~16=QR837~15-QR3073~15-AC96~16",
            "LA8015~15-QR780~15-QR830~16=QR837~15-QR149~15-QR6915~15",
            "LA8015~15-QR780~15-QR830~16=QR831~15-QR3073~15-LA8014~16"
        ],
        "price": "2780",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR780",
                "departureDateTime": "2022-11-15T20:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH1233~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 225,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 695,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1233",
                "departureDateTime": "2022-12-16T09:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T10:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH99~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 730,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH99",
                "departureDateTime": "2022-12-16T09:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T10:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF1240~17-AF8391~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "53h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF1240~17-AF8391~17=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF1240~17-AF8391~17=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF1240~17-AF8391~17=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF1240~17-AF8391~17=KL804~15-KL701~15",
            "AF229~15-AF1240~17-AF8391~17=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF1240~17-AF8391~17=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF1240~17-AF8391~17=AF165~15-AF228~16",
            "AF229~15-AF1240~17-AF8391~17=KL804~15-KL2013~15-KL2358~16"
        ],
        "price": "3290",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 925,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 740,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1240",
                "departureDateTime": "2022-11-17T07:10:00.000+01:00",
                "arrivalDateTime": "2022-11-17T08:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-17T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-18T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL2151~15-KL2258~15-KL702~16",
        "departureAirportCode": "BKK",
        "departureTime": "11:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:45",
        "duration": "37h 25m",
        "airlinesNames": [
            "KLM"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3853",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "SCL"
        ],
        "segments": [
            {
                "durationMinutes": 795,
                "stopoverDurationMinutes": 285,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2151",
                "departureDateTime": "2022-12-15T11:20:00.000+07:00",
                "arrivalDateTime": "2022-12-15T18:35:00.000+01:00"
            },
            {
                "durationMinutes": 860,
                "stopoverDurationMinutes": 190,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "SCL",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2258",
                "departureDateTime": "2022-12-15T23:20:00.000+01:00",
                "arrivalDateTime": "2022-12-16T09:40:00.000-03:00"
            },
            {
                "durationMinutes": 115,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "SCL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL702",
                "departureDateTime": "2022-12-16T12:50:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:45:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR773~16-BA247~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:15",
        "duration": "47h 50m",
        "airlinesNames": [
            "British Airways",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3012",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 505,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA247",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "KE652~15-KE35~16-DL101~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:15",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "43h 45m",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4163",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 325,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE652",
                "departureDateTime": "2022-12-15T23:15:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:40:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 700,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE35",
                "departureDateTime": "2022-12-16T09:45:00.000+09:00",
                "arrivalDateTime": "2022-12-16T09:10:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL101",
                "departureDateTime": "2022-12-16T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-17T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7931~15-IB7902~16-IB6845~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "58h 35m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3156",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 495,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7931",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 1365,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7902",
                "departureDateTime": "2022-12-16T08:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T13:40:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6845",
                "departureDateTime": "2022-12-17T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-17T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX181~15-LX92~15-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "13:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "43h 05m",
        "airlinesNames": [
            "Swiss",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8657",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 725,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX181",
                "departureDateTime": "2022-12-15T13:20:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:25:00.000+01:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 760,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-15T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-16T06:45:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T19:25:00.000-03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF165~15-AF228~16",
        "departureAirportCode": "BKK",
        "departureTime": "11:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "43h 05m",
        "airlinesNames": [
            "Air France"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3299",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 795,
                "stopoverDurationMinutes": 965,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF165",
                "departureDateTime": "2022-12-15T11:20:00.000+07:00",
                "arrivalDateTime": "2022-12-15T18:35:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF228",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH103~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 320,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 610,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH103",
                "departureDateTime": "2022-12-16T11:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T12:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB6856~15-IB7901~16-QR830~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "30h 15m",
        "airlinesNames": [
            "Iberia",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB6856~15-IB7901~16-QR830~16=IB7931~15-IB7900~16-IB6845~16",
            "IB6856~15-IB7901~16-QR830~16=IB7931~15-IB877~16-IB6845~16"
        ],
        "price": "3999",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 135,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6856",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:05:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 160,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7901",
                "departureDateTime": "2022-11-16T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "EK375~15-EK47~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "09:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "32h 35m",
        "airlinesNames": [
            "Emirates",
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3659",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK375",
                "departureDateTime": "2022-12-15T09:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T13:15:00.000+04:00"
            },
            {
                "durationMinutes": 420,
                "stopoverDurationMinutes": 170,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "FRA",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK47",
                "departureDateTime": "2022-12-15T15:25:00.000+04:00",
                "arrivalDateTime": "2022-12-15T19:25:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AV88~15-TK900~15-TK64~16",
        "departureAirportCode": "EZE",
        "departureTime": "07:20",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "40h 50m",
        "airlinesNames": [
            "Avianca",
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AV88~15-TK900~15-TK64~16=EK363~15-EK247~16",
            "AV88~15-TK900~15-TK64~16=TK69~15-TK15~16",
            "AV88~15-TK900~15-TK64~16=QR833~15-QR3073~16-AC96~17",
            "AV88~15-TK900~15-TK64~16=QR833~15-LA5295~16-ET506~16",
            "AV88~15-TK900~15-TK64~16=TK65~15-TK15~16"
        ],
        "price": "4277",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "BOG",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 360,
                "stopoverDurationMinutes": 305,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "BOG",
                "airlineCode": "AV",
                "cabin": "economy",
                "designatorCode": "AV88",
                "departureDateTime": "2022-11-15T07:20:00.000-03:00",
                "arrivalDateTime": "2022-11-15T11:20:00.000-05:00"
            },
            {
                "durationMinutes": 965,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "BOG",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK900",
                "departureDateTime": "2022-11-15T16:25:00.000-05:00",
                "arrivalDateTime": "2022-11-16T16:30:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-16T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "CM278~15-TK904~15-TK64~16",
        "departureAirportCode": "EZE",
        "departureTime": "05:23",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "42h 47m",
        "airlinesNames": [
            "Copa Airlines",
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "CM278~15-TK904~15-TK64~16=EK363~15-EK247~16"
        ],
        "price": "3691",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 447,
                "stopoverDurationMinutes": 655,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "PTY",
                "airlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "CM278",
                "departureDateTime": "2022-11-15T05:23:00.000-03:00",
                "arrivalDateTime": "2022-11-15T10:50:00.000-05:00"
            },
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK904",
                "departureDateTime": "2022-11-15T21:45:00.000-05:00",
                "arrivalDateTime": "2022-11-16T18:25:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-16T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ1463~16-LX1663~16-LX180~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:40",
        "duration": "34h 50m",
        "airlinesNames": [
            "ITA Airways",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=EK375~15-EK247~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=PG273~15-EK379~15-EK247~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR831~15-QR3073~15-AC96~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=EK363~15-EK247~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=PG275~15-EK379~15-EK247~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR833~15-QR779~16-ET506~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=EK373~15-EK247~16",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ1463~16-LX1663~16-LX180~16=QR837~15-QR3073~15-AC96~16"
        ],
        "price": "2785",
        "cabinClass": "Economy",
        "stopoversCount": 3,
        "stopoverAirportCodes": [
            "ZRH",
            "FCO",
            "VCE"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "VCE",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ1463",
                "departureDateTime": "2022-11-16T09:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:25:00.000+01:00"
            },
            {
                "durationMinutes": 70,
                "stopoverDurationMinutes": 120,
                "departureAirportCode": "VCE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "2L",
                "cabin": "economy",
                "designatorCode": "LX1663",
                "departureDateTime": "2022-11-16T14:50:00.000+01:00",
                "arrivalDateTime": "2022-11-16T16:00:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX180",
                "departureDateTime": "2022-11-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:40:00.000+07:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ2016~16-LX1629~16-LX180~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:40",
        "duration": "34h 50m",
        "airlinesNames": [
            "ITA Airways",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR831~15-QR3073~15-AC96~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=EK375~15-EK247~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=EK373~15-EK247~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=PG275~15-EK379~15-EK247~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR833~15-QR779~16-ET506~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=ET609~15-ET506~15",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=PG273~15-EK379~15-EK247~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=EK363~15-EK247~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ2016~16-LX1629~16-LX180~16=QR837~15-QR3073~15-AC96~16"
        ],
        "price": "2785",
        "cabinClass": "Economy",
        "stopoversCount": 3,
        "stopoverAirportCodes": [
            "LIN",
            "ZRH",
            "FCO"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 75,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 70,
                "stopoverDurationMinutes": 355,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "LIN",
                "airlineCode": "AZ",
                "operatingAirlineCode": "CT",
                "cabin": "economy",
                "designatorCode": "AZ2016",
                "departureDateTime": "2022-11-16T08:00:00.000+01:00",
                "arrivalDateTime": "2022-11-16T09:10:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 115,
                "departureAirportCode": "MXP",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "2L",
                "cabin": "economy",
                "designatorCode": "LX1629",
                "departureDateTime": "2022-11-16T15:05:00.000+01:00",
                "arrivalDateTime": "2022-11-16T16:05:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX180",
                "departureDateTime": "2022-11-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:40:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH115~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 680,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 255,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH115",
                "departureDateTime": "2022-12-16T17:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T18:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7935~15-IB7902~15-IB6841~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "41h 20m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3918",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7935",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 619,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7902",
                "departureDateTime": "2022-12-15T08:05:00.000+03:00",
                "arrivalDateTime": "2022-12-15T13:40:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6841",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR837~15-QR3073~15-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "46h 45m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2413",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 855,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR837",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 465,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-15T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX9061~15-LX177~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "18:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "51h 45m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3268",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "SIN"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "SIN",
                "airlineCode": "LX",
                "operatingAirlineCode": "SQ",
                "cabin": "economy",
                "designatorCode": "LX9061",
                "departureDateTime": "2022-12-15T18:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T21:35:00.000+08:00"
            },
            {
                "durationMinutes": 785,
                "stopoverDurationMinutes": 995,
                "departureAirportCode": "SIN",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX177",
                "departureDateTime": "2022-12-16T00:05:00.000+08:00",
                "arrivalDateTime": "2022-12-16T06:10:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH6335~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 705,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6335",
                "departureDateTime": "2022-12-16T17:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T18:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "UA818~15-NH6451~16-AC7412~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:05",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "22:30",
        "duration": "38h 25m",
        "airlinesNames": [
            "Air Canada",
            "All Nippon Airways",
            "United Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "UA818~15-NH6451~16-AC7412~17=TG676~15-NH174~15-UA819~15"
        ],
        "price": "8404",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IAH",
            "NRT"
        ],
        "segments": [
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 280,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "IAH",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA818",
                "departureDateTime": "2022-11-15T22:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:35:00.000-05:00"
            },
            {
                "durationMinutes": 855,
                "stopoverDurationMinutes": 120,
                "departureAirportCode": "IAH",
                "arrivalAirportCode": "NRT",
                "airlineCode": "NH",
                "operatingAirlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "NH6451",
                "departureDateTime": "2022-11-16T11:15:00.000-05:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+09:00"
            },
            {
                "durationMinutes": 420,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "NRT",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AC",
                "operatingAirlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "AC7412",
                "departureDateTime": "2022-11-17T17:30:00.000+09:00",
                "arrivalDateTime": "2022-11-17T22:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR773~16-LA8012~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:25",
        "duration": "48h",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2951",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 505,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8012",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH117~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3446",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 740,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 195,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH117",
                "departureDateTime": "2022-12-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T19:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "ET609~15-ET506~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "19:55",
        "duration": "28h 05m",
        "airlinesNames": [
            "Ethiopian Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2674",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "ADD"
        ],
        "segments": [
            {
                "durationMinutes": 520,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ADD",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET609",
                "departureDateTime": "2022-12-15T01:50:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 965,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ADD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET506",
                "departureDateTime": "2022-12-15T09:50:00.000+03:00",
                "arrivalDateTime": "2022-12-15T19:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL2279~15-KL2022~16-KL843~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL2279~15-KL2022~16-KL843~16=KL804~15-KL2009~15-KL2358~16",
            "KL2279~15-KL2022~16-KL843~16=KL2151~15-KL2258~15-KL702~16",
            "KL2279~15-KL2022~16-KL843~16=AF8386~15-AF1641~15-AF228~16",
            "KL2279~15-KL2022~16-KL843~16=KL804~15-KL2023~15-KL2358~16",
            "KL2279~15-KL2022~16-KL843~16=KL804~15-KL2013~15-KL2358~16",
            "KL2279~15-KL2022~16-KL843~16=KL804~15-KL701~15",
            "KL2279~15-KL2022~16-KL843~16=AF165~15-AF228~16"
        ],
        "price": "3378",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2279",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 50,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2022",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL843",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "EK373~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "34h 20m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2659",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 435,
                "stopoverDurationMinutes": 450,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK373",
                "departureDateTime": "2022-12-15T20:20:00.000+07:00",
                "arrivalDateTime": "2022-12-16T00:35:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "EY4396~15-EY76~16-EY402~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "07:55",
        "duration": "32h 30m",
        "airlinesNames": [
            "Etihad Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "EY4396~15-EY76~16-EY402~16=LX181~15-LX92~15-LA8014~16",
            "EY4396~15-EY76~16-EY402~16=TK65~15-TK15~16",
            "EY4396~15-EY76~16-EY402~16=EK4518~15-EK379~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=EK373~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=TK69~15-TK800~16-CM279~17",
            "EY4396~15-EY76~16-EY402~16=QR831~15-QR3073~15-LA8014~16",
            "EY4396~15-EY76~16-EY402~16=TK69~15-TK15~16-LA8036~17",
            "EY4396~15-EY76~16-EY402~16=EK4522~15-EK379~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=TK69~15-TK15~16",
            "EY4396~15-EY76~16-EY402~16=PG273~15-EK379~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=EK363~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=EK375~15-EK247~16",
            "EY4396~15-EY76~16-EY402~16=QR833~15-QR3073~16-LA8036~17",
            "EY4396~15-EY76~16-EY402~16=QR833~15-QR3073~16-BA247~17",
            "EY4396~15-EY76~16-EY402~16=EY407~15-EY75~16-AR1133~16",
            "EY4396~15-EY76~16-EY402~16=LX181~15-LX92~15-LX9702~16"
        ],
        "price": "2694",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "AUH"
        ],
        "segments": [
            {
                "durationMinutes": 705,
                "stopoverDurationMinutes": 275,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "EY",
                "operatingAirlineCode": "UX",
                "cabin": "economy",
                "designatorCode": "EY4396",
                "departureDateTime": "2022-11-15T13:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:10:00.000+01:00"
            },
            {
                "durationMinutes": 400,
                "stopoverDurationMinutes": 205,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "AUH",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY76",
                "departureDateTime": "2022-11-16T09:45:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:25:00.000+04:00"
            },
            {
                "durationMinutes": 365,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AUH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY402",
                "departureDateTime": "2022-11-16T22:50:00.000+04:00",
                "arrivalDateTime": "2022-11-17T07:55:00.000+07:00"
            }
        ]
    },
    {
        "id": "LX9067~15-LX9001~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "49h 50m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3268",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "SIN"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 120,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "SIN",
                "airlineCode": "LX",
                "operatingAirlineCode": "SQ",
                "cabin": "economy",
                "designatorCode": "LX9067",
                "departureDateTime": "2022-12-15T20:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:30:00.000+08:00"
            },
            {
                "durationMinutes": 800,
                "stopoverDurationMinutes": 895,
                "departureAirportCode": "SIN",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "SQ",
                "cabin": "economy",
                "designatorCode": "LX9001",
                "departureDateTime": "2022-12-16T01:30:00.000+08:00",
                "arrivalDateTime": "2022-12-16T07:50:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB6856~15-IB7903~16-IB7928~17",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "54h 15m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB6856~15-IB7903~16-IB7928~17=IB7931~15-IB7900~16-IB6845~16",
            "IB6856~15-IB7903~16-IB7928~17=TK69~15-TK15~16",
            "IB6856~15-IB7903~16-IB7928~17=TK69~15-TK800~16-CM279~17",
            "IB6856~15-IB7903~16-IB7928~17=IB7931~15-IB7902~16-IB6845~17",
            "IB6856~15-IB7903~16-IB7928~17=PG273~15-EK379~15-EK247~16",
            "IB6856~15-IB7903~16-IB7928~17=IB7931~15-IB877~16-IB6845~16",
            "IB6856~15-IB7903~16-IB7928~17=TK65~15-TK15~16",
            "IB6856~15-IB7903~16-IB7928~17=QR833~15-QR3073~16-LA8036~17",
            "IB6856~15-IB7903~16-IB7928~17=IB7931~15-IB875~16-IB6845~17",
            "IB6856~15-IB7903~16-IB7928~17=QR833~15-QR3073~16-BA247~17",
            "IB6856~15-IB7903~16-IB7928~17=QR831~15-QR3073~15-LA8014~16",
            "IB6856~15-IB7903~16-IB7928~17=IB7929~15-IB7902~16-IB6845~17",
            "IB6856~15-IB7903~16-IB7928~17=TK69~15-TK15~16-LA8036~17"
        ],
        "price": "2753",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 545,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6856",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:05:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 1190,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7903",
                "departureDateTime": "2022-11-16T15:10:00.000+01:00",
                "arrivalDateTime": "2022-11-16T23:55:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7928",
                "departureDateTime": "2022-11-17T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH101~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 260,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 670,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH101",
                "departureDateTime": "2022-12-16T10:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T11:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK800~16-CM279~17",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:29",
        "duration": "58h 59m",
        "airlinesNames": [
            "Copa Airlines",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3162",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 180,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 1000,
                "stopoverDurationMinutes": 1263,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK800",
                "departureDateTime": "2022-12-16T09:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T18:10:00.000-05:00"
            },
            {
                "durationMinutes": 436,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "EZE",
                "airlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "CM279",
                "departureDateTime": "2022-12-17T15:13:00.000-05:00",
                "arrivalDateTime": "2022-12-18T00:29:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL804~15-KL2013~15-KL2358~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "KLM"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3309",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 460,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL804",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 1110,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2013",
                "departureDateTime": "2022-12-15T14:50:00.000+01:00",
                "arrivalDateTime": "2022-12-15T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2358",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH1235~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 345,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 575,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1235",
                "departureDateTime": "2022-12-16T11:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T12:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH796~16-HX779~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "23:10",
        "duration": "43h 10m",
        "airlinesNames": [
            "Hong Kong Airlines",
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH796~16-HX779~17=EK363~15-EK247~16",
            "LH511~15-LH796~16-HX779~17=HX776~15-LX139~15-LX92~16",
            "LH511~15-LH796~16-HX779~17=KE658~15-KE35~16-DL101~16",
            "LH511~15-LH796~16-HX779~17=TK69~15-TK15~16",
            "LH511~15-LH796~16-HX779~17=JL708~15-NH6450~15-UA819~15",
            "LH511~15-LH796~16-HX779~17=TK65~15-TK15~16",
            "LH511~15-LH796~16-HX779~17=ET609~15-ET506~15"
        ],
        "price": "3198",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "HKG"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 640,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 770,
                "stopoverDurationMinutes": 235,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "HKG",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH796",
                "departureDateTime": "2022-11-16T21:50:00.000+01:00",
                "arrivalDateTime": "2022-11-17T17:40:00.000+08:00"
            },
            {
                "durationMinutes": 155,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "HKG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "HX",
                "cabin": "economy",
                "designatorCode": "HX779",
                "departureDateTime": "2022-11-17T21:35:00.000+08:00",
                "arrivalDateTime": "2022-11-17T23:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR779~16-ET506~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "19:55",
        "duration": "33h 30m",
        "airlinesNames": [
            "Ethiopian Airlines",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3318",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 385,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET506",
                "departureDateTime": "2022-12-16T17:00:00.000-03:00",
                "arrivalDateTime": "2022-12-16T19:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH6348~16-LH6466~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:30",
        "duration": "35h 30m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH6348~16-LH6466~16=ET609~15-ET506~15",
            "LH511~15-LH6348~16-LH6466~16=TK69~15-TK15~16-LA8036~17",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=TK69~15-TK15~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=EK363~15-EK247~16",
            "LH511~15-LH6348~16-LH6466~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH6348~16-LH6466~16=QR837~15-QR149~15-QR6915~15",
            "LH511~15-LH6348~16-LH6466~16=QR837~15-QR151~15-QR6915~15",
            "LH511~15-LH6348~16-LH6466~16=QR831~15-QR151~15-IB6841~15",
            "LH511~15-LH6348~16-LH6466~16=QR831~15-QR151~15-QR6915~15",
            "LH511~15-LH6348~16-LH6466~16=QR833~15-QR3051~16-QR6976~16",
            "LH511~15-LH6348~16-LH6466~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=EK375~15-EK247~16",
            "LH511~15-LH6348~16-LH6466~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=TK65~15-TK15~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=QR833~15-QR151~16-QR6976~17",
            "LH511~15-LH6348~16-LH6466~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH6348~16-LH6466~16=EK373~15-EK247~16"
        ],
        "price": "3037",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 100,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 550,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6348",
                "departureDateTime": "2022-11-16T12:50:00.000+01:00",
                "arrivalDateTime": "2022-11-16T14:15:00.000+01:00"
            },
            {
                "durationMinutes": 605,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6466",
                "departureDateTime": "2022-11-16T23:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH114~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=TG922~15-LH510~15",
            "LH511~15-LH114~16-LH772~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH114~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH114~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH114~16-LH772~16=LH773~15-LH93~16-LH510~16"
        ],
        "price": "3039",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 365,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 270,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH114",
                "departureDateTime": "2022-11-16T17:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "CM364~15-TK900~15-TK64~16",
        "departureAirportCode": "EZE",
        "departureTime": "11:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "36h 35m",
        "airlinesNames": [
            "Copa Airlines",
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "CM364~15-TK900~15-TK64~16=TK69~15-TK15~16",
            "CM364~15-TK900~15-TK64~16=TK69~15-TK15~16-LA8036~17",
            "CM364~15-TK900~15-TK64~16=TK69~15-TK800~16-CM279~17"
        ],
        "price": "3976",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 450,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "PTY",
                "airlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "CM364",
                "departureDateTime": "2022-11-15T11:35:00.000-03:00",
                "arrivalDateTime": "2022-11-15T17:05:00.000-05:00"
            },
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK900",
                "departureDateTime": "2022-11-15T19:50:00.000-05:00",
                "arrivalDateTime": "2022-11-16T16:30:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-16T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "DL110~15-KE36~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "21:15",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 05m",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "DL110~15-KE36~16-KE659~17=TG652~15-KE5035~15-DL101~15",
            "DL110~15-KE36~16-KE659~17=KE660~15-KE5035~15-DL101~15",
            "DL110~15-KE36~16-KE659~17=TG652~15-KE5035~15-KE7281~15",
            "DL110~15-KE36~16-KE659~17=KE660~15-KE5035~15-KE7281~15"
        ],
        "price": "4920",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 370,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "ATL",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL110",
                "departureDateTime": "2022-11-15T21:15:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:45:00.000-05:00"
            },
            {
                "durationMinutes": 955,
                "stopoverDurationMinutes": 140,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE36",
                "departureDateTime": "2022-11-16T11:55:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:50:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR773~16-BA247~17",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:15",
        "duration": "60h 10m",
        "airlinesNames": [
            "British Airways",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3016",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1245,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA247",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-TG921~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:25",
        "duration": "26h 25m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-TG921~16=TG924~15-LH95~15-LH510~15",
            "LH511~15-TG921~16=OS26~15-LX3531~16-LX92~16",
            "LH511~15-TG921~16=TG922~15-LH506~15-LH4662~16",
            "LH511~15-TG921~16=EK385~15-EK261~15-LA8014~15",
            "LH511~15-TG921~16=OS26~15-OS555~16-LX92~16",
            "LH511~15-TG921~16=EK363~15-EK247~16-EK247~16",
            "LH511~15-TG921~16=TG920~15-LH510~16",
            "LH511~15-TG921~16=OS26~15-OS569~16-LX92~16",
            "LH511~15-TG921~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-TG921~16=AC7404~15-LH510~16",
            "LH511~15-TG921~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-TG921~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-TG921~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-TG921~16=OS26~15-OS553~16-LX92~16",
            "LH511~15-TG921~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-TG921~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-TG921~16=TK65~15-TK15~16",
            "LH511~15-TG921~16=EK363~15-EK247~16",
            "LH511~15-TG921~16=OS26~15-OS563~16-LX92~16",
            "LH511~15-TG921~16=TG924~15-TG7927~15-LH510~15",
            "LH511~15-TG921~16=ET609~15-ET506~15",
            "LH511~15-TG921~16=TG922~15-LH510~15",
            "LH511~15-TG921~16=TG920~15-LH542~16-AV87~16"
        ],
        "price": "4224",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG921",
                "departureDateTime": "2022-11-16T13:45:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:25:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR837~15-QR779~16-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "46h 45m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2832",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1260,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR837",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 60,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG920~15-LH542~16-AV87~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "05:50",
        "duration": "40h 10m",
        "airlinesNames": [
            "Avianca",
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8819",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "BOG"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 415,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG920",
                "departureDateTime": "2022-12-15T23:40:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:55:00.000+01:00"
            },
            {
                "durationMinutes": 740,
                "stopoverDurationMinutes": 145,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "BOG",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH542",
                "departureDateTime": "2022-12-16T12:50:00.000+01:00",
                "arrivalDateTime": "2022-12-16T19:10:00.000-05:00"
            },
            {
                "durationMinutes": 375,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "BOG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AV",
                "cabin": "economy",
                "designatorCode": "AV87",
                "departureDateTime": "2022-12-16T21:35:00.000-05:00",
                "arrivalDateTime": "2022-12-17T05:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "OS26~15-OS553~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "46h",
        "airlinesNames": [
            "Austrian Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8745",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "VIE"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 680,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS26",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 275,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS553",
                "departureDateTime": "2022-12-16T16:45:00.000+01:00",
                "arrivalDateTime": "2022-12-16T18:10:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "OS26~15-LX3531~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "46h",
        "airlinesNames": [
            "Austrian Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8745",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "VIE"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 250,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS26",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 705,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LX3531",
                "departureDateTime": "2022-12-16T09:35:00.000+01:00",
                "arrivalDateTime": "2022-12-16T11:00:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "PG273~15-EK379~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "12:45",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "41h 55m",
        "airlinesNames": [
            "Bangkok Airways",
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2826",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKT",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 315,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKT",
                "airlineCode": "PG",
                "cabin": "economy",
                "designatorCode": "PG273",
                "departureDateTime": "2022-12-15T12:45:00.000+07:00",
                "arrivalDateTime": "2022-12-15T14:15:00.000+07:00"
            },
            {
                "durationMinutes": 395,
                "stopoverDurationMinutes": 540,
                "departureAirportCode": "HKT",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK379",
                "departureDateTime": "2022-12-15T19:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:05:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH97~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 170,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 760,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH97",
                "departureDateTime": "2022-12-16T08:30:00.000+01:00",
                "arrivalDateTime": "2022-12-16T09:35:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF8386~15-AF1641~15-AF228~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "Air France"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3326",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 405,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8386",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 1165,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1641",
                "departureDateTime": "2022-12-15T13:55:00.000+01:00",
                "arrivalDateTime": "2022-12-15T15:15:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF228",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH113~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 620,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 315,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH113",
                "departureDateTime": "2022-12-16T16:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T17:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK65~15-TK15~16-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "22:55",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "33h 30m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3646",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IST",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 260,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK65",
                "departureDateTime": "2022-12-15T22:55:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:45:00.000+03:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 95,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T10:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T17:50:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T19:25:00.000-03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB2602~15-IB2472~16-IB7934~17",
        "departureAirportCode": "EZE",
        "departureTime": "13:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "14:00",
        "duration": "39h",
        "airlinesNames": [
            "Iberia"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB2602~15-IB2472~16-IB7934~17=IB7931~15-IB875~16-IB6845~17",
            "IB2602~15-IB2472~16-IB7934~17=IB7931~15-IB7902~16-IB6845~17",
            "IB2602~15-IB2472~16-IB7934~17=IB7931~15-IB877~16-IB6845~16",
            "IB2602~15-IB2472~16-IB7934~17=IB7929~15-IB7902~16-IB6845~17",
            "IB2602~15-IB2472~16-IB7934~17=IB7935~15-IB875~15-IB6841~15",
            "IB2602~15-IB2472~16-IB7934~17=IB7929~15-IB875~15-IB6841~15",
            "IB2602~15-IB2472~16-IB7934~17=IB7931~15-IB7900~16-IB6845~16"
        ],
        "price": "3647",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "BCN",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 750,
                "stopoverDurationMinutes": 195,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "BCN",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB2602",
                "departureDateTime": "2022-11-15T13:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:30:00.000+01:00"
            },
            {
                "durationMinutes": 375,
                "stopoverDurationMinutes": 640,
                "departureAirportCode": "BCN",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB2472",
                "departureDateTime": "2022-11-16T08:45:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:00:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7934",
                "departureDateTime": "2022-11-17T03:40:00.000+03:00",
                "arrivalDateTime": "2022-11-17T14:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR3073~16-AC96~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "51h 55m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2415",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1165,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 465,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-16T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-17T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-17T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-17T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX181~15-LX92~15-LA8014~16",
        "departureAirportCode": "BKK",
        "departureTime": "13:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "44h 55m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3023",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 725,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX181",
                "departureDateTime": "2022-12-15T13:20:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:25:00.000+01:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 870,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-15T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-16T06:45:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8014",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR833~15-LA5295~16-ET506~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "19:55",
        "duration": "33h 30m",
        "airlinesNames": [
            "Ethiopian Airlines",
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3243",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 385,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "LA5295",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET506",
                "departureDateTime": "2022-12-16T17:00:00.000-03:00",
                "arrivalDateTime": "2022-12-16T19:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "HX776~15-LX139~15-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "15:10",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "54h 40m",
        "airlinesNames": [
            "Hong Kong Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3198",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "HKG"
        ],
        "segments": [
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 230,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKG",
                "airlineCode": "HX",
                "cabin": "economy",
                "designatorCode": "HX776",
                "departureDateTime": "2022-12-15T15:10:00.000+07:00",
                "arrivalDateTime": "2022-12-15T18:55:00.000+08:00"
            },
            {
                "durationMinutes": 865,
                "stopoverDurationMinutes": 995,
                "departureAirportCode": "HKG",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX139",
                "departureDateTime": "2022-12-15T22:45:00.000+08:00",
                "arrivalDateTime": "2022-12-16T06:10:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR3073~15-LA8014~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "50h 10m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2446",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 465,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 1045,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-15T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8014",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-KL2022~16-KL843~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "Air France",
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-KL2022~16-KL843~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "5408",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 50,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2022",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL843",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "LX181~15-LX92~15-LX9702~16",
        "departureAirportCode": "BKK",
        "departureTime": "13:20",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "44h 55m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3008",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 725,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX181",
                "departureDateTime": "2022-12-15T13:20:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:25:00.000+01:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 870,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-15T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-16T06:45:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "operatingAirlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LX9702",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK16~15-TK194~16-TK68~18",
        "departureAirportCode": "EZE",
        "departureTime": "23:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:00",
        "duration": "53h 10m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK16~15-TK194~16-TK68~18=TK69~15-TK15~16-LA8036~17",
            "TK16~15-TK194~16-TK68~18=TK65~15-TK903~16-CM500~17",
            "TK16~15-TK194~16-TK68~18=TK69~15-TK800~16-CM500~17",
            "TK16~15-TK194~16-TK68~18=TK69~15-TK800~16-CM279~17",
            "TK16~15-TK194~16-TK68~18=TK69~15-TK15~16"
        ],
        "price": "4089",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 1295,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-15T23:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T02:20:00.000-03:00"
            },
            {
                "durationMinutes": 745,
                "stopoverDurationMinutes": 445,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK194",
                "departureDateTime": "2022-11-16T23:55:00.000-03:00",
                "arrivalDateTime": "2022-11-17T18:20:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK68",
                "departureDateTime": "2022-11-18T01:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T15:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "EK375~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "09:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "45h 10m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2719",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 1130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK375",
                "departureDateTime": "2022-12-15T09:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T13:15:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "UA818~15-NH6451~16-TG677~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:05",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "22:30",
        "duration": "38h 25m",
        "airlinesNames": [
            "All Nippon Airways",
            "Thai Airways",
            "United Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "UA818~15-NH6451~16-TG677~17=KE658~15-KE35~16-DL101~16",
            "UA818~15-NH6451~16-TG677~17=TK69~15-TK15~16",
            "UA818~15-NH6451~16-TG677~17=TG922~15-LH510~15",
            "UA818~15-NH6451~16-TG677~17=LX181~15-LX92~15-TK15~16",
            "UA818~15-NH6451~16-TG677~17=JL708~15-NH6450~15-UA819~15",
            "UA818~15-NH6451~16-TG677~17=HX776~15-LX139~15-LX92~16",
            "UA818~15-NH6451~16-TG677~17=ET609~15-ET506~15",
            "UA818~15-NH6451~16-TG677~17=JL708~15-UA6~15-UA819~15",
            "UA818~15-NH6451~16-TG677~17=EK363~15-EK247~16",
            "UA818~15-NH6451~16-TG677~17=TK65~15-TK15~16"
        ],
        "price": "6208",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IAH",
            "NRT"
        ],
        "segments": [
            {
                "durationMinutes": 570,
                "stopoverDurationMinutes": 280,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "IAH",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA818",
                "departureDateTime": "2022-11-15T22:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:35:00.000-05:00"
            },
            {
                "durationMinutes": 915,
                "stopoverDurationMinutes": 120,
                "departureAirportCode": "IAH",
                "arrivalAirportCode": "NRT",
                "airlineCode": "NH",
                "operatingAirlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "NH6451",
                "departureDateTime": "2022-11-16T10:15:00.000-05:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+09:00"
            },
            {
                "durationMinutes": 420,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "NRT",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG677",
                "departureDateTime": "2022-11-17T17:30:00.000+09:00",
                "arrivalDateTime": "2022-11-17T22:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "IB6844~15-IB3444~16-TG931~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "45h 35m",
        "airlinesNames": [
            "Iberia",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB6844~15-IB3444~16-TG931~17=TG930~15-IB3441~15-IB6841~15"
        ],
        "price": "3700",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "ORY"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 120,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6844",
                "departureDateTime": "2022-11-15T22:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:35:00.000+01:00"
            },
            {
                "durationMinutes": 125,
                "stopoverDurationMinutes": 1070,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "ORY",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB3444",
                "departureDateTime": "2022-11-16T16:35:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:40:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-17T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "OS26~15-OS563~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "46h",
        "airlinesNames": [
            "Austrian Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8745",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "VIE"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 565,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS26",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 395,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS563",
                "departureDateTime": "2022-12-16T14:50:00.000+01:00",
                "arrivalDateTime": "2022-12-16T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK800~16-CM500~17",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:30",
        "duration": "56h",
        "airlinesNames": [
            "Copa Airlines",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3976",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 180,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 1000,
                "stopoverDurationMinutes": 1084,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK800",
                "departureDateTime": "2022-12-16T09:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T18:10:00.000-05:00"
            },
            {
                "durationMinutes": 436,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "EZE",
                "airlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "CM500",
                "departureDateTime": "2022-12-17T12:14:00.000-05:00",
                "arrivalDateTime": "2022-12-17T21:30:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH116~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH116~16-LH772~16=ET609~15-ET506~15",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH116~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH116~16-LH772~16=LH773~15-LH105~16-LH510~16"
        ],
        "price": "3039",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 425,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 210,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH116",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR779~16-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "27h 55m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2829",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 60,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK15~16-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "32h 55m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3646",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "IST",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 95,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T10:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T17:50:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T19:25:00.000-03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB7931~15-IB877~16-IB6845~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "34h 35m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3234",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7931",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 205,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB877",
                "departureDateTime": "2022-12-16T03:25:00.000+03:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6845",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR779~16-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "40h 15m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2832",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 870,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 60,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG924~15-LH95~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "41h 15m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4346",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 715,
                "stopoverDurationMinutes": 75,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG924",
                "departureDateTime": "2022-12-15T00:50:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 790,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH95",
                "departureDateTime": "2022-12-15T08:00:00.000+01:00",
                "arrivalDateTime": "2022-12-15T09:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "KE658~15-KE35~16-DL101~16",
        "departureAirportCode": "BKK",
        "departureTime": "21:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "45h 55m",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3482",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 315,
                "stopoverDurationMinutes": 325,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE658",
                "departureDateTime": "2022-12-15T21:05:00.000+07:00",
                "arrivalDateTime": "2022-12-16T04:20:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 700,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE35",
                "departureDateTime": "2022-12-16T09:45:00.000+09:00",
                "arrivalDateTime": "2022-12-16T09:10:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL101",
                "departureDateTime": "2022-12-16T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-17T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "PG275~15-EK379~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "10:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "44h 40m",
        "airlinesNames": [
            "Bangkok Airways",
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2827",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKT",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 480,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKT",
                "airlineCode": "PG",
                "cabin": "economy",
                "designatorCode": "PG275",
                "departureDateTime": "2022-12-15T10:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+07:00"
            },
            {
                "durationMinutes": 395,
                "stopoverDurationMinutes": 540,
                "departureAirportCode": "HKT",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK379",
                "departureDateTime": "2022-12-15T19:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:05:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "IB6856~15-IB7901~16-IB7928~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "30h 15m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB6856~15-IB7901~16-IB7928~16=QR831~15-QR3073~15-LA8014~16",
            "IB6856~15-IB7901~16-IB7928~16=QR833~15-QR3073~16-BA247~17",
            "IB6856~15-IB7901~16-IB7928~16=TK69~15-TK15~16-LA8036~17",
            "IB6856~15-IB7901~16-IB7928~16=IB7931~15-IB877~16-IB6845~16",
            "IB6856~15-IB7901~16-IB7928~16=IB7931~15-IB7900~16-IB6845~16",
            "IB6856~15-IB7901~16-IB7928~16=TK69~15-TK15~16",
            "IB6856~15-IB7901~16-IB7928~16=TK69~15-TK800~16-CM279~17",
            "IB6856~15-IB7901~16-IB7928~16=QR833~15-QR3073~16-LA8036~17",
            "IB6856~15-IB7901~16-IB7928~16=TK65~15-TK15~16",
            "IB6856~15-IB7901~16-IB7928~16=PG273~15-EK379~15-EK247~16"
        ],
        "price": "3326",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 135,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6856",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:05:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 160,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7901",
                "departureDateTime": "2022-11-16T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7928",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR3051~16-QR6976~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "34h 35m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3298",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 205,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3051",
                "departureDateTime": "2022-12-16T03:25:00.000+03:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH6346~16-LH6466~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:30",
        "duration": "35h 30m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=ET609~15-ET506~15",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH6346~16-LH6466~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=EK363~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=TK69~15-TK15~16",
            "LH511~15-LH6346~16-LH6466~16=TK65~15-TK15~16",
            "LH511~15-LH6346~16-LH6466~16=EK375~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH6346~16-LH6466~16=EK373~15-EK247~16",
            "LH511~15-LH6346~16-LH6466~16=LH773~15-LH117~16-LH510~16"
        ],
        "price": "3037",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 400,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 250,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6346",
                "departureDateTime": "2022-11-16T17:50:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:15:00.000+01:00"
            },
            {
                "durationMinutes": 605,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6466",
                "departureDateTime": "2022-11-16T23:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-TG922~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:25",
        "duration": "26h 25m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-TG922~16=TG921~15-LH510~15"
        ],
        "price": "5897",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 580,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG922",
                "departureDateTime": "2022-11-16T14:45:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:25:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL2279~15-KL2016~16-KL843~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL2279~15-KL2016~16-KL843~16=KL804~15-KL2023~15-KL2358~16",
            "KL2279~15-KL2016~16-KL843~16=AF165~15-AF228~16",
            "KL2279~15-KL2016~16-KL843~16=KL804~15-KL701~15",
            "KL2279~15-KL2016~16-KL843~16=AF8386~15-AF1441~15-AF228~16",
            "KL2279~15-KL2016~16-KL843~16=KL804~15-KL2009~15-KL2358~16",
            "KL2279~15-KL2016~16-KL843~16=KL804~15-KL2013~15-KL2358~16",
            "KL2279~15-KL2016~16-KL843~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "3378",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2279",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 125,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2016",
                "departureDateTime": "2022-11-16T16:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:20:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL843",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR837~15-QR773~15-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "46h 45m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2885",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 195,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR837",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 1125,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-15T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-15T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH110~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH110~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH110~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=ET609~15-ET506~15",
            "LH511~15-LH110~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH110~16-LH772~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH110~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH110~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH110~16-LH772~16=EK4522~15-EK379~15-EK247~16"
        ],
        "price": "3039",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 245,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 390,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH110",
                "departureDateTime": "2022-11-16T15:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR779~16-BA247~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:15",
        "duration": "47h 50m",
        "airlinesNames": [
            "British Airways",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2890",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 1255,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA247",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ316~16-TG931~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "30h 10m",
        "airlinesNames": [
            "ITA Airways",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ316~16-TG931~16=ET609~15-ET506~15",
            "AZ681~15-AZ316~16-TG931~16=EK363~15-EK247~16-EK247~16",
            "AZ681~15-AZ316~16-TG931~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "AZ681~15-AZ316~16-TG931~16=QR833~15-QR779~16-ET506~16",
            "AZ681~15-AZ316~16-TG931~16=EK373~15-EK247~16",
            "AZ681~15-AZ316~16-TG931~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ316~16-TG931~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ316~16-TG931~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-AZ316~16-TG931~16=QR837~15-QR3073~15-AC96~16",
            "AZ681~15-AZ316~16-TG931~16=EK375~15-EK247~16",
            "AZ681~15-AZ316~16-TG931~16=QR831~15-QR3073~15-AC96~16",
            "AZ681~15-AZ316~16-TG931~16=PG273~15-EK379~15-EK247~16",
            "AZ681~15-AZ316~16-TG931~16=PG275~15-EK379~15-EK247~16",
            "AZ681~15-AZ316~16-TG931~16=TK65~15-TK15~16",
            "AZ681~15-AZ316~16-TG931~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ316~16-TG931~16=EK363~15-EK247~16"
        ],
        "price": "2769",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FCO",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 115,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 130,
                "stopoverDurationMinutes": 100,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ316",
                "departureDateTime": "2022-11-16T08:40:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:50:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-16T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR6974~15-QR3052~17-QR836~18",
        "departureAirportCode": "EZE",
        "departureTime": "22:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "14:00",
        "duration": "53h 35m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "QR6974~15-QR3052~17-QR836~18=QR833~15-QR779~16-AC96~16"
        ],
        "price": "3176",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 1195,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6974",
                "departureDateTime": "2022-11-15T22:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:35:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 505,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3052",
                "departureDateTime": "2022-11-17T10:30:00.000+01:00",
                "arrivalDateTime": "2022-11-17T19:15:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR836",
                "departureDateTime": "2022-11-18T03:40:00.000+03:00",
                "arrivalDateTime": "2022-11-18T14:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH98~17-LH772~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "59h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LX9067~15-LX9001~16-LX92~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LX9061~15-LX177~16-LX92~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LX9061~15-LX9001~16-LX92~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH97~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LX9059~15-LX177~16-LX92~16",
            "LH511~15-LH98~17-LH772~17=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH98~17-LH772~17=LH773~15-LH95~16-LH510~16"
        ],
        "price": "3009",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1325,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 750,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH98",
                "departureDateTime": "2022-11-17T09:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-17T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-18T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-QR780~15-QR836~17",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "14:00",
        "duration": "49h 15m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR836~17=QR837~15-QR3073~15-AC96~16",
            "LA8015~15-QR780~15-QR836~17=QR831~15-QR773~16-LA8014~16",
            "LA8015~15-QR780~15-QR836~17=QR831~15-QR3073~15-AC96~16",
            "LA8015~15-QR780~15-QR836~17=EK363~15-EK247~16",
            "LA8015~15-QR780~15-QR836~17=TK65~15-TK15~16",
            "LA8015~15-QR780~15-QR836~17=QR837~15-QR773~15-AC96~16",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR3073~16-LA8036~17",
            "LA8015~15-QR780~15-QR836~17=EK4520~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR147~16-QR6976~16",
            "LA8015~15-QR780~15-QR836~17=QR837~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR151~16-QR6976~17",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR773~16-LA8012~17",
            "LA8015~15-QR780~15-QR836~17=TK69~15-TK15~16",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR3073~16-AC96~17",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR3051~16-QR6976~16",
            "LA8015~15-QR780~15-QR836~17=QR831~15-QR779~16-AC96~16",
            "LA8015~15-QR780~15-QR836~17=EK4522~15-EK379~15-EK247~16",
            "LA8015~15-QR780~15-QR836~17=EK375~15-EK247~16",
            "LA8015~15-QR780~15-QR836~17=QR833~15-QR149~16-QR6915~16",
            "LA8015~15-QR780~15-QR836~17=QR831~15-QR3073~15-LA8014~16"
        ],
        "price": "2780",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 715,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR780",
                "departureDateTime": "2022-11-15T20:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR836",
                "departureDateTime": "2022-11-17T03:40:00.000+03:00",
                "arrivalDateTime": "2022-11-17T14:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "EK4522~15-EK379~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "10:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "44h 40m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2875",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKT",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 480,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKT",
                "airlineCode": "EK",
                "operatingAirlineCode": "PG",
                "cabin": "economy",
                "designatorCode": "EK4522",
                "departureDateTime": "2022-12-15T10:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+07:00"
            },
            {
                "durationMinutes": 395,
                "stopoverDurationMinutes": 540,
                "departureAirportCode": "HKT",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK379",
                "departureDateTime": "2022-12-15T19:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:05:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG921~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "12:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "29h 40m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "5897",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 195,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG921",
                "departureDateTime": "2022-12-15T12:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF1440~16-AF8391~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF1440~16-AF8391~16=AF165~15-AF228~16",
            "AF229~15-AF1440~16-AF8391~16=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF1440~16-AF8391~16=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF1440~16-AF8391~16=KL2151~15-KL2258~15-KL702~16",
            "AF229~15-AF1440~16-AF8391~16=KL804~15-KL701~15",
            "AF229~15-AF1440~16-AF8391~16=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF1440~16-AF8391~16=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF1440~16-AF8391~16=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF1440~16-AF8391~16=AF8386~15-AF1641~15-AF228~16"
        ],
        "price": "3289",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 80,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1440",
                "departureDateTime": "2022-11-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T19:35:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL804~15-KL2009~15-KL2358~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "KLM"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3309",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 405,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL804",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 1165,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2009",
                "departureDateTime": "2022-12-15T13:55:00.000+01:00",
                "arrivalDateTime": "2022-12-15T15:15:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2358",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "JL708~15-UA6~15-UA819~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:20",
        "duration": "35h 15m",
        "airlinesNames": [
            "Japan Airlines",
            "United Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8715",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "NRT",
            "IAH"
        ],
        "segments": [
            {
                "durationMinutes": 350,
                "stopoverDurationMinutes": 90,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "NRT",
                "airlineCode": "JL",
                "cabin": "economy",
                "designatorCode": "JL708",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:55:00.000+09:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 365,
                "departureAirportCode": "NRT",
                "arrivalAirportCode": "IAH",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA6",
                "departureDateTime": "2022-12-15T17:25:00.000+09:00",
                "arrivalDateTime": "2022-12-15T14:15:00.000-05:00"
            },
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IAH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA819",
                "departureDateTime": "2022-12-15T20:20:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "EK4520~15-EK379~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "12:45",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "41h 55m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3029",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKT",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 315,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKT",
                "airlineCode": "EK",
                "operatingAirlineCode": "PG",
                "cabin": "economy",
                "designatorCode": "EK4520",
                "departureDateTime": "2022-12-15T12:45:00.000+07:00",
                "arrivalDateTime": "2022-12-15T14:15:00.000+07:00"
            },
            {
                "durationMinutes": 395,
                "stopoverDurationMinutes": 540,
                "departureAirportCode": "HKT",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK379",
                "departureDateTime": "2022-12-15T19:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:05:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK9641~15-TK904~15-TK64~16",
        "departureAirportCode": "EZE",
        "departureTime": "11:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "36h 35m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK9641~15-TK904~15-TK64~16=TK65~15-TK15~16",
            "TK9641~15-TK904~15-TK64~16=EK363~15-EK247~16",
            "TK9641~15-TK904~15-TK64~16=QR831~15-QR3073~15-AC96~16",
            "TK9641~15-TK904~15-TK64~16=TK69~15-TK15~16"
        ],
        "price": "3444",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 450,
                "stopoverDurationMinutes": 280,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "operatingAirlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "TK9641",
                "departureDateTime": "2022-11-15T11:35:00.000-03:00",
                "arrivalDateTime": "2022-11-15T17:05:00.000-05:00"
            },
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK904",
                "departureDateTime": "2022-11-15T21:45:00.000-05:00",
                "arrivalDateTime": "2022-11-16T18:25:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-16T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "TK69~15-TK15~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "22:25",
        "duration": "32h 55m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2855",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 660,
                "stopoverDurationMinutes": 215,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK69",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 1100,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "EZE",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK15",
                "departureDateTime": "2022-12-16T10:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T22:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH6339~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 585,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 335,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6339",
                "departureDateTime": "2022-12-16T15:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T16:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LA8015~15-LA702~15-TG931~17",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "65h 15m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-LA702~15-TG931~17=TG930~15-LA701~15-LA8014~16"
        ],
        "price": "3555",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 1045,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 675,
                "stopoverDurationMinutes": 1345,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "CDG",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA702",
                "departureDateTime": "2022-11-15T22:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:05:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-17T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "DL7853~15-DL26~15-DL101~15",
        "departureAirportCode": "BKK",
        "departureTime": "09:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "33h 20m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4638",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 340,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "DL",
                "operatingAirlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "DL7853",
                "departureDateTime": "2022-12-15T09:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T17:20:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL26",
                "departureDateTime": "2022-12-15T18:30:00.000+09:00",
                "arrivalDateTime": "2022-12-15T17:55:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL101",
                "departureDateTime": "2022-12-15T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "AR1132~15-AR7832~16-TG931~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:55",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "44h 05m",
        "airlinesNames": [
            "Aerolineas Argentinas",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AR1132~15-AR7832~16-TG931~17=TG930~15-AZ325~15-AR1141~16"
        ],
        "price": "3336",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "AR",
                "cabin": "economy",
                "designatorCode": "AR1132",
                "departureDateTime": "2022-11-15T23:55:00.000-03:00",
                "arrivalDateTime": "2022-11-16T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 130,
                "stopoverDurationMinutes": 960,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AR",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AR7832",
                "departureDateTime": "2022-11-16T18:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T20:30:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-17T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "ET609~15-ET506~15-ET506~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "19:55",
        "duration": "28h 05m",
        "airlinesNames": [
            "Ethiopian Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3041",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ADD",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 520,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ADD",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET609",
                "departureDateTime": "2022-12-15T01:50:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:30:00.000+03:00"
            },
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 60,
                "departureAirportCode": "ADD",
                "arrivalAirportCode": "GRU",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET506",
                "departureDateTime": "2022-12-15T09:50:00.000+03:00",
                "arrivalDateTime": "2022-12-15T16:00:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET506",
                "departureDateTime": "2022-12-15T17:00:00.000-03:00",
                "arrivalDateTime": "2022-12-15T19:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK9641~15-TK904~15-TK68~17",
        "departureAirportCode": "EZE",
        "departureTime": "11:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:00",
        "duration": "41h 25m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK9641~15-TK904~15-TK68~17=TK69~15-TK15~16",
            "TK9641~15-TK904~15-TK68~17=TK65~15-TK15~16"
        ],
        "price": "3573",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 450,
                "stopoverDurationMinutes": 280,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "operatingAirlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "TK9641",
                "departureDateTime": "2022-11-15T11:35:00.000-03:00",
                "arrivalDateTime": "2022-11-15T17:05:00.000-05:00"
            },
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 440,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK904",
                "departureDateTime": "2022-11-15T21:45:00.000-05:00",
                "arrivalDateTime": "2022-11-16T18:25:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK68",
                "departureDateTime": "2022-11-17T01:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T15:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "KE660~15-KE5035~15-KE7281~15",
        "departureAirportCode": "BKK",
        "departureTime": "09:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "33h 20m",
        "airlinesNames": [
            "Korean Air"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4922",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 340,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE660",
                "departureDateTime": "2022-12-15T09:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T17:20:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE5035",
                "departureDateTime": "2022-12-15T18:30:00.000+09:00",
                "arrivalDateTime": "2022-12-15T17:55:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE7281",
                "departureDateTime": "2022-12-15T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH105~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 380,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 555,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH105",
                "departureDateTime": "2022-12-16T12:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T13:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "OZ742~15-OZ222~15-AA953~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:35",
        "duration": "43h 45m",
        "airlinesNames": [
            "American Airlines",
            "Asiana Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "5227",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 315,
                "stopoverDurationMinutes": 95,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "OZ",
                "cabin": "economy",
                "designatorCode": "OZ742",
                "departureDateTime": "2022-12-15T00:50:00.000+07:00",
                "arrivalDateTime": "2022-12-15T08:05:00.000+09:00"
            },
            {
                "durationMinutes": 840,
                "stopoverDurationMinutes": 725,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "JFK",
                "airlineCode": "OZ",
                "cabin": "economy",
                "designatorCode": "OZ222",
                "departureDateTime": "2022-12-15T09:40:00.000+09:00",
                "arrivalDateTime": "2022-12-15T09:40:00.000-05:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA953",
                "departureDateTime": "2022-12-15T21:45:00.000-05:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            }
        ]
    },
    {
        "id": "EK4518~15-EK379~15-EK247~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:40",
        "duration": "46h 35m",
        "airlinesNames": [
            "Emirates"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2875",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKT",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 595,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKT",
                "airlineCode": "EK",
                "operatingAirlineCode": "PG",
                "cabin": "economy",
                "designatorCode": "EK4518",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T09:35:00.000+07:00"
            },
            {
                "durationMinutes": 395,
                "stopoverDurationMinutes": 540,
                "departureAirportCode": "HKT",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK379",
                "departureDateTime": "2022-12-15T19:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:05:00.000+04:00"
            },
            {
                "durationMinutes": 1175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "EZE",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK247",
                "departureDateTime": "2022-12-16T08:05:00.000+04:00",
                "arrivalDateTime": "2022-12-16T20:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "AA954~15-AA44~16-TG931~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "44h 30m",
        "airlinesNames": [
            "American Airlines",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA954~15-AA44~16-TG931~17=TG930~15-AA63~15-AA907~15"
        ],
        "price": "4503",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 546,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "JFK",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA954",
                "departureDateTime": "2022-11-15T23:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T08:20:00.000-05:00"
            },
            {
                "durationMinutes": 429,
                "stopoverDurationMinutes": 355,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA44",
                "departureDateTime": "2022-11-16T17:26:00.000-05:00",
                "arrivalDateTime": "2022-11-17T06:35:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-17T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "KL2279~15-KL1244~16-KL803~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL2279~15-KL1244~16-KL803~16=KL804~15-KL2009~15-KL2358~16",
            "KL2279~15-KL1244~16-KL803~16=KL804~15-KL2023~15-KL2358~16",
            "KL2279~15-KL1244~16-KL803~16=KL804~15-KL701~15",
            "KL2279~15-KL1244~16-KL803~16=AF165~15-AF228~16",
            "KL2279~15-KL1244~16-KL803~16=KL2151~15-KL2258~15-KL702~16",
            "KL2279~15-KL1244~16-KL803~16=KL804~15-KL2013~15-KL2358~16"
        ],
        "price": "3379",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2279",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 55,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL1244",
                "departureDateTime": "2022-11-16T18:40:00.000+01:00",
                "arrivalDateTime": "2022-11-16T20:00:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL803",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "IB6844~15-IB7901~17-IB7928~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "45h 40m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB6844~15-IB7901~17-IB7928~17=QR831~15-QR3073~15-LA8014~16",
            "IB6844~15-IB7901~17-IB7928~17=TK69~15-TK800~16-CM279~17",
            "IB6844~15-IB7901~17-IB7928~17=IB7931~15-IB875~16-IB6845~17",
            "IB6844~15-IB7901~17-IB7928~17=PG273~15-EK379~15-EK247~16",
            "IB6844~15-IB7901~17-IB7928~17=QR833~15-QR3073~16-BA247~17",
            "IB6844~15-IB7901~17-IB7928~17=TK69~15-TK15~16",
            "IB6844~15-IB7901~17-IB7928~17=IB7931~15-IB7902~16-IB6845~17",
            "IB6844~15-IB7901~17-IB7928~17=TK69~15-TK15~16-LA8036~17",
            "IB6844~15-IB7901~17-IB7928~17=QR833~15-QR3073~16-LA8036~17",
            "IB6844~15-IB7901~17-IB7928~17=TK65~15-TK15~16"
        ],
        "price": "3147",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 1065,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6844",
                "departureDateTime": "2022-11-15T22:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:35:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 160,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7901",
                "departureDateTime": "2022-11-17T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-17T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7928",
                "departureDateTime": "2022-11-17T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR837~15-QR151~15-QR6915~15",
        "departureAirportCode": "BKK",
        "departureTime": "01:35",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "41h 20m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3298",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 630,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR837",
                "departureDateTime": "2022-12-15T01:35:00.000+07:00",
                "arrivalDateTime": "2022-12-15T05:00:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL701~15-AF401~15-AF166~16",
        "departureAirportCode": "EZE",
        "departureTime": "09:05",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "09:15",
        "duration": "38h 10m",
        "airlinesNames": [
            "Air France",
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL701~15-AF401~15-AF166~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "3892",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "SCL"
        ],
        "segments": [
            {
                "durationMinutes": 135,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "SCL",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL701",
                "departureDateTime": "2022-11-15T09:05:00.000-03:00",
                "arrivalDateTime": "2022-11-15T11:20:00.000-03:00"
            },
            {
                "durationMinutes": 840,
                "stopoverDurationMinutes": 460,
                "departureAirportCode": "SCL",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF401",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T07:50:00.000+01:00"
            },
            {
                "durationMinutes": 705,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF166",
                "departureDateTime": "2022-11-16T15:30:00.000+01:00",
                "arrivalDateTime": "2022-11-17T09:15:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR151~15-QR6976~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "46h 55m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3310",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 920,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK65~15-TK903~16-CM500~17",
        "departureAirportCode": "BKK",
        "departureTime": "22:55",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:30",
        "duration": "56h 35m",
        "airlinesNames": [
            "Copa Airlines",
            "Turkish Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3976",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "PTY",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 495,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK65",
                "departureDateTime": "2022-12-15T22:55:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:45:00.000+03:00"
            },
            {
                "durationMinutes": 855,
                "stopoverDurationMinutes": 959,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "PTY",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK903",
                "departureDateTime": "2022-12-16T14:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T20:15:00.000-05:00"
            },
            {
                "durationMinutes": 436,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "PTY",
                "arrivalAirportCode": "EZE",
                "airlineCode": "CM",
                "cabin": "economy",
                "designatorCode": "CM500",
                "departureDateTime": "2022-12-17T12:14:00.000-05:00",
                "arrivalDateTime": "2022-12-17T21:30:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG323~15-LH761~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "07:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "59h 05m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4642",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "DEL"
        ],
        "segments": [
            {
                "durationMinutes": 265,
                "stopoverDurationMinutes": 1060,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DEL",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG323",
                "departureDateTime": "2022-12-15T07:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T09:55:00.000+05:30"
            },
            {
                "durationMinutes": 540,
                "stopoverDurationMinutes": 850,
                "departureAirportCode": "DEL",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH761",
                "departureDateTime": "2022-12-16T03:35:00.000+05:30",
                "arrivalDateTime": "2022-12-16T08:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH93~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 80,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 65,
                "stopoverDurationMinutes": 850,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH93",
                "departureDateTime": "2022-12-16T07:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH1034~16-TG931~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:00",
        "duration": "50h",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH1034~16-TG931~17=TG930~15-LH1035~15-LH510~15"
        ],
        "price": "3443",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 75,
                "stopoverDurationMinutes": 1375,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "CDG",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1034",
                "departureDateTime": "2022-11-16T12:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T13:35:00.000+01:00"
            },
            {
                "durationMinutes": 690,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG931",
                "departureDateTime": "2022-11-17T12:30:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:00:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH122~16-TG925~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:10",
        "duration": "50h 10m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH122~16-TG925~17=TG922~15-LH510~15"
        ],
        "price": "4009",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 605,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 925,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH122",
                "departureDateTime": "2022-11-16T21:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T22:10:00.000+01:00"
            },
            {
                "durationMinutes": 635,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG925",
                "departureDateTime": "2022-11-17T13:35:00.000+01:00",
                "arrivalDateTime": "2022-11-18T06:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "UX42~15-UX1675~16-TG971~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:10",
        "duration": "30h 45m",
        "airlinesNames": [
            "Air Europa",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "UX42~15-UX1675~16-TG971~16=TK65~15-TK15~16",
            "UX42~15-UX1675~16-TG971~16=QR831~15-QR3073~15-LA8014~16",
            "UX42~15-UX1675~16-TG971~16=EK363~15-EK247~16",
            "UX42~15-UX1675~16-TG971~16=QR833~15-QR779~16-ET506~16",
            "UX42~15-UX1675~16-TG971~16=EK375~15-EK247~16",
            "UX42~15-UX1675~16-TG971~16=QR831~15-QR3073~15-AC96~16",
            "UX42~15-UX1675~16-TG971~16=QR833~15-LA5295~16-ET506~16",
            "UX42~15-UX1675~16-TG971~16=QR837~15-QR3073~15-AC96~16",
            "UX42~15-UX1675~16-TG971~16=QR833~15-QR3073~16-LA8036~17",
            "UX42~15-UX1675~16-TG971~16=ET609~15-ET506~15",
            "UX42~15-UX1675~16-TG971~16=EK385~15-EK261~15-LA8014~15",
            "UX42~15-UX1675~16-TG971~16=QR833~15-QR3073~16-AC96~17",
            "UX42~15-UX1675~16-TG971~16=EK363~15-EK247~16-EK247~16",
            "UX42~15-UX1675~16-TG971~16=EK373~15-EK247~16"
        ],
        "price": "2869",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "ZRH"
        ],
        "segments": [
            {
                "durationMinutes": 705,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "UX",
                "cabin": "economy",
                "designatorCode": "UX42",
                "departureDateTime": "2022-11-15T13:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:10:00.000+01:00"
            },
            {
                "durationMinutes": 135,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "UX",
                "cabin": "economy",
                "designatorCode": "UX1675",
                "departureDateTime": "2022-11-16T07:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:10:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG971",
                "departureDateTime": "2022-11-16T13:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "BA246~15-KE908~16-KE651~17",
        "departureAirportCode": "EZE",
        "departureTime": "12:20",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "21:30",
        "duration": "47h 10m",
        "airlinesNames": [
            "British Airways",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "BA246~15-KE908~16-KE651~17=ET609~15-ET506~15",
            "BA246~15-KE908~16-KE651~17=CX750~15-CX846~15-AA953~16",
            "BA246~15-KE908~16-KE651~17=HX776~15-LX139~15-LX92~16",
            "BA246~15-KE908~16-KE651~17=TK69~15-TK15~16",
            "BA246~15-KE908~16-KE651~17=EK363~15-EK247~16",
            "BA246~15-KE908~16-KE651~17=JL708~15-NH6450~15-UA819~15",
            "BA246~15-KE908~16-KE651~17=TG922~15-LH510~15",
            "BA246~15-KE908~16-KE651~17=TK65~15-TK15~16",
            "BA246~15-KE908~16-KE651~17=KE660~15-KE5035~15-DL101~15",
            "BA246~15-KE908~16-KE651~17=KE658~15-KE35~16-DL101~16"
        ],
        "price": "5884",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "LHR"
        ],
        "segments": [
            {
                "durationMinutes": 935,
                "stopoverDurationMinutes": 715,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "LHR",
                "airlineCode": "BA",
                "cabin": "economy",
                "designatorCode": "BA246",
                "departureDateTime": "2022-11-15T12:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:55:00.000Z"
            },
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 75,
                "departureAirportCode": "LHR",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE908",
                "departureDateTime": "2022-11-16T18:50:00.000Z",
                "arrivalDateTime": "2022-11-17T16:05:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE651",
                "departureDateTime": "2022-11-17T17:20:00.000+09:00",
                "arrivalDateTime": "2022-11-17T21:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG652~15-KE5035~15-KE7281~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "35h",
        "airlinesNames": [
            "Korean Air",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "6294",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 325,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG652",
                "departureDateTime": "2022-12-15T08:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:25:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE5035",
                "departureDateTime": "2022-12-15T18:30:00.000+09:00",
                "arrivalDateTime": "2022-12-15T17:55:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE7281",
                "departureDateTime": "2022-12-15T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL702~15-KL803~16",
        "departureAirportCode": "EZE",
        "departureTime": "16:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "35h 15m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL702~15-KL803~16=KL804~15-KL701~15",
            "KL702~15-KL803~16=AF165~15-AF228~16",
            "KL702~15-KL803~16=TK69~15-TK15~16",
            "KL702~15-KL803~16=AF8386~15-AF1641~15-AF228~16",
            "KL702~15-KL803~16=AF8386~15-AF1441~15-AF228~16",
            "KL702~15-KL803~16=KL804~15-KL2013~15-KL2358~16",
            "KL702~15-KL803~16=KL804~15-KL2009~15-KL2358~16",
            "KL702~15-KL803~16=ET609~15-ET506~15",
            "KL702~15-KL803~16=AF8386~15-AF1741~15-AF228~16",
            "KL702~15-KL803~16=TK65~15-TK15~16",
            "KL702~15-KL803~16=KL804~15-KL2023~15-KL2358~16"
        ],
        "price": "3274",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 670,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL702",
                "departureDateTime": "2022-11-15T16:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T09:45:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL803",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH106~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH106~16-LH772~16=QR831~15-QR3073~15-AC96~16",
            "LH511~15-LH106~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH106~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=PG275~15-EK379~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH106~16-LH772~16=ET609~15-ET506~15",
            "LH511~15-LH106~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=EK363~15-EK247~16-EK247~16",
            "LH511~15-LH106~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=QR833~15-QR3073~16-LA8036~17",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=QR833~15-QR3073~16-AC96~17",
            "LH511~15-LH106~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=PG273~15-EK379~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH106~16-LH772~16=QR831~15-QR3073~15-LA8014~16",
            "LH511~15-LH106~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH106~16-LH772~16=QR837~15-QR3073~15-AC96~16",
            "LH511~15-LH106~16-LH772~16=LH773~15-LH111~16-LH510~16"
        ],
        "price": "2762",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 125,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 510,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH106",
                "departureDateTime": "2022-11-16T13:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T14:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR149~16-QR6915~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "46h 30m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3368",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 495,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 619,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR149",
                "departureDateTime": "2022-12-16T08:05:00.000+03:00",
                "arrivalDateTime": "2022-12-16T13:40:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6915",
                "departureDateTime": "2022-12-16T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH6467~15-LH6347~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 15m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3286",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 285,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6467",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 90,
                "stopoverDurationMinutes": 635,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6347",
                "departureDateTime": "2022-12-16T10:10:00.000+01:00",
                "arrivalDateTime": "2022-12-16T11:40:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF8224~17-AF8391~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "53h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF8224~17-AF8391~17=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF8224~17-AF8391~17=AF165~15-AF228~16",
            "AF229~15-AF8224~17-AF8391~17=KL804~15-KL701~15",
            "AF229~15-AF8224~17-AF8391~17=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF8224~17-AF8391~17=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF8224~17-AF8391~17=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF8224~17-AF8391~17=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF8224~17-AF8391~17=AF8386~15-AF1741~15-AF228~16"
        ],
        "price": "3291",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1040,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 625,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8224",
                "departureDateTime": "2022-11-17T09:05:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:30:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-17T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-18T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ74~16-LX1955~16-LX180~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:40",
        "duration": "34h 50m",
        "airlinesNames": [
            "ITA Airways",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ74~16-LX1955~16-LX180~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ74~16-LX1955~16-LX180~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ74~16-LX1955~16-LX180~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ74~16-LX1955~16-LX180~16=QR837~15-QR3073~15-AC96~16",
            "AZ681~15-AZ74~16-LX1955~16-LX180~16=QR831~15-QR3073~15-AC96~16"
        ],
        "price": "2895",
        "cabinClass": "Economy",
        "stopoversCount": 3,
        "stopoverAirportCodes": [
            "ZRH",
            "FCO",
            "BCN"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 135,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 110,
                "stopoverDurationMinutes": 245,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "BCN",
                "airlineCode": "AZ",
                "operatingAirlineCode": "CT",
                "cabin": "economy",
                "designatorCode": "AZ74",
                "departureDateTime": "2022-11-16T09:00:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:50:00.000+01:00"
            },
            {
                "durationMinutes": 105,
                "stopoverDurationMinutes": 80,
                "departureAirportCode": "BCN",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "2L",
                "cabin": "economy",
                "designatorCode": "LX1955",
                "departureDateTime": "2022-11-16T14:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T16:40:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX180",
                "departureDateTime": "2022-11-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:40:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR151~16-QR6976~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "58h 35m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3132",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 940,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 920,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-16T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-16T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-17T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-17T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ572~16-TG971~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:10",
        "duration": "30h 20m",
        "airlinesNames": [
            "ITA Airways",
            "Thai Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ572~16-TG971~16=TK65~15-TK15~16",
            "AZ681~15-AZ572~16-TG971~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ572~16-TG971~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-AZ572~16-TG971~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ572~16-TG971~16=QR831~15-QR3073~15-AC96~16",
            "AZ681~15-AZ572~16-TG971~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ572~16-TG971~16=ET609~15-ET506~15",
            "AZ681~15-AZ572~16-TG971~16=QR837~15-QR3073~15-AC96~16",
            "AZ681~15-AZ572~16-TG971~16=PG275~15-EK379~15-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=EK363~15-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=PG273~15-EK379~15-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=QR833~15-QR779~16-ET506~16",
            "AZ681~15-AZ572~16-TG971~16=EK375~15-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=EK373~15-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=EK385~15-EK261~15-LA8014~15",
            "AZ681~15-AZ572~16-TG971~16=EK363~15-EK247~16-EK247~16",
            "AZ681~15-AZ572~16-TG971~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "AZ681~15-AZ572~16-TG971~16=QR831~15-QR1301~15-AZ897~15-AZ680~15"
        ],
        "price": "2668",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "FCO"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 110,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 95,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "AZ",
                "operatingAirlineCode": "CT",
                "cabin": "economy",
                "designatorCode": "AZ572",
                "departureDateTime": "2022-11-16T08:35:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:10:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG971",
                "departureDateTime": "2022-11-16T13:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR151~15-IB6841~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "34h 50m",
        "airlinesNames": [
            "Iberia",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3384",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 174,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR151",
                "departureDateTime": "2022-12-15T15:30:00.000+03:00",
                "arrivalDateTime": "2022-12-15T21:05:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6841",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX9711~15-LX93~15-AC7405~16",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:10",
        "duration": "41h 25m",
        "airlinesNames": [
            "Air Canada",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LX9711~15-LX93~15-AC7405~16=LX9067~15-LX9001~16-LX92~16",
            "LX9711~15-LX93~15-AC7405~16=LX9059~15-LX177~16-LX92~16",
            "LX9711~15-LX93~15-AC7405~16=LX9061~15-LX177~16-LX92~16"
        ],
        "price": "6464",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 835,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LX",
                "operatingAirlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LX9711",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 670,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX93",
                "departureDateTime": "2022-11-15T19:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T10:30:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AC",
                "operatingAirlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "AC7405",
                "departureDateTime": "2022-11-16T13:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR3051~16-QR6976~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "46h 55m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3305",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 955,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 205,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3051",
                "departureDateTime": "2022-12-16T03:25:00.000+03:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX9061~15-LX9001~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "18:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "51h 45m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3268",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "SIN"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 235,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "SIN",
                "airlineCode": "LX",
                "operatingAirlineCode": "SQ",
                "cabin": "economy",
                "designatorCode": "LX9061",
                "departureDateTime": "2022-12-15T18:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T21:35:00.000+08:00"
            },
            {
                "durationMinutes": 800,
                "stopoverDurationMinutes": 895,
                "departureAirportCode": "SIN",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "SQ",
                "cabin": "economy",
                "designatorCode": "LX9001",
                "departureDateTime": "2022-12-16T01:30:00.000+08:00",
                "arrivalDateTime": "2022-12-16T07:50:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL701~15-KL2259~15-KL2152~16",
        "departureAirportCode": "EZE",
        "departureTime": "09:05",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "09:15",
        "duration": "38h 10m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL701~15-KL2259~15-KL2152~16=KL2151~15-KL2258~15-KL702~16",
            "KL701~15-KL2259~15-KL2152~16=EK363~15-EK247~16",
            "KL701~15-KL2259~15-KL2152~16=KL804~15-KL701~15",
            "KL701~15-KL2259~15-KL2152~16=EK373~15-EK247~16"
        ],
        "price": "3098",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "SCL"
        ],
        "segments": [
            {
                "durationMinutes": 135,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "SCL",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL701",
                "departureDateTime": "2022-11-15T09:05:00.000-03:00",
                "arrivalDateTime": "2022-11-15T11:20:00.000-03:00"
            },
            {
                "durationMinutes": 840,
                "stopoverDurationMinutes": 460,
                "departureAirportCode": "SCL",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2259",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T07:50:00.000+01:00"
            },
            {
                "durationMinutes": 705,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2152",
                "departureDateTime": "2022-11-16T15:30:00.000+01:00",
                "arrivalDateTime": "2022-11-17T09:15:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-LA7432~16-LA8036~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "17:00",
        "duration": "54h 35m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4660",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1210,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 570,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "LA7432",
                "departureDateTime": "2022-12-16T20:00:00.000+03:00",
                "arrivalDateTime": "2022-12-17T04:35:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LA8036",
                "departureDateTime": "2022-12-17T14:05:00.000-03:00",
                "arrivalDateTime": "2022-12-17T17:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL2279~15-KL2016~16-KL803~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL2279~15-KL2016~16-KL803~16=KL2151~15-KL2258~15-KL702~16",
            "KL2279~15-KL2016~16-KL803~16=KL804~15-KL701~15"
        ],
        "price": "3378",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2279",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2016",
                "departureDateTime": "2022-11-16T16:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:20:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL803",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG652~15-KE5035~15-DL101~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:00",
        "duration": "35h",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "6291",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 325,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG652",
                "departureDateTime": "2022-12-15T08:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:25:00.000+09:00"
            },
            {
                "durationMinutes": 805,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE5035",
                "departureDateTime": "2022-12-15T18:30:00.000+09:00",
                "arrivalDateTime": "2022-12-15T17:55:00.000-05:00"
            },
            {
                "durationMinutes": 610,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "EZE",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL101",
                "departureDateTime": "2022-12-15T20:50:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "OS26~15-OS569~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "46h",
        "airlinesNames": [
            "Austrian Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8745",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "VIE"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 450,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS26",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 505,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS569",
                "departureDateTime": "2022-12-16T12:55:00.000+01:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF8240~16-AF8391~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:50",
        "duration": "29h 15m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF8240~16-AF8391~16=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF8240~16-AF8391~16=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF8240~16-AF8391~16=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF8240~16-AF8391~16=AF165~15-AF228~16",
            "AF229~15-AF8240~16-AF8391~16=KL804~15-KL701~15",
            "AF229~15-AF8240~16-AF8391~16=KL2151~15-KL2258~15-KL702~16",
            "AF229~15-AF8240~16-AF8391~16=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF8240~16-AF8391~16=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF8240~16-AF8391~16=AF8386~15-AF1641~15-AF228~16"
        ],
        "price": "3290",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 175,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 55,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8240",
                "departureDateTime": "2022-11-16T18:40:00.000+01:00",
                "arrivalDateTime": "2022-11-16T20:00:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8391",
                "departureDateTime": "2022-11-16T20:55:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR6974~15-QR148~17-QR830~17",
        "departureAirportCode": "EZE",
        "departureTime": "22:25",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "45h 40m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR147~16-QR6976~16",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR779~16-AC96~16",
            "QR6974~15-QR148~17-QR830~17=QR837~15-QR3073~15-AC96~16",
            "QR6974~15-QR148~17-QR830~17=TK69~15-TK15~16",
            "QR6974~15-QR148~17-QR830~17=QR831~15-QR3073~15-AC96~16",
            "QR6974~15-QR148~17-QR830~17=TK65~15-TK15~16",
            "QR6974~15-QR148~17-QR830~17=EK363~15-EK247~16",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR773~16-LA8012~17",
            "QR6974~15-QR148~17-QR830~17=EK4520~15-EK379~15-EK247~16",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR151~16-QR6976~17",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR3073~16-LA8036~17",
            "QR6974~15-QR148~17-QR830~17=QR837~15-QR773~15-AC96~16",
            "QR6974~15-QR148~17-QR830~17=ET609~15-ET506~15",
            "QR6974~15-QR148~17-QR830~17=QR831~15-QR773~16-LA8014~16",
            "QR6974~15-QR148~17-QR830~17=TK69~15-TK15~16-LA8036~17",
            "QR6974~15-QR148~17-QR830~17=QR831~15-QR151~15-QR6915~15",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR3073~16-AC96~17",
            "QR6974~15-QR148~17-QR830~17=QR837~15-QR779~16-AC96~16",
            "QR6974~15-QR148~17-QR830~17=QR831~15-QR779~16-AC96~16",
            "QR6974~15-QR148~17-QR830~17=EK4522~15-EK379~15-EK247~16",
            "QR6974~15-QR148~17-QR830~17=QR831~15-QR3073~15-LA8014~16",
            "QR6974~15-QR148~17-QR830~17=QR833~15-QR3051~16-QR6976~16",
            "QR6974~15-QR148~17-QR830~17=EK375~15-EK247~16"
        ],
        "price": "2809",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 1065,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6974",
                "departureDateTime": "2022-11-15T22:25:00.000-03:00",
                "arrivalDateTime": "2022-11-16T14:35:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 160,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR148",
                "departureDateTime": "2022-11-17T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-17T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-17T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "TK16~15-TK64~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "48h 20m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK16~15-TK64~17=TK65~15-TK15~16",
            "TK16~15-TK64~17=AF165~15-AF228~16",
            "TK16~15-TK64~17=KL804~15-KL701~15",
            "TK16~15-TK64~17=ET609~15-ET506~15",
            "TK16~15-TK64~17=TK69~15-TK15~16"
        ],
        "price": "3538",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 980,
                "stopoverDurationMinutes": 1365,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-15T23:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T22:10:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-17T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-18T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG930~15-AZ325~15-AR1141~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "04:40",
        "duration": "62h 35m",
        "airlinesNames": [
            "Aerolineas Argentinas",
            "ITA Airways",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3336",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FCO",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 765,
                "stopoverDurationMinutes": 685,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG930",
                "departureDateTime": "2022-12-15T00:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 125,
                "stopoverDurationMinutes": 1315,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ325",
                "departureDateTime": "2022-12-15T18:15:00.000+01:00",
                "arrivalDateTime": "2022-12-15T20:20:00.000+01:00"
            },
            {
                "durationMinutes": 865,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AR",
                "cabin": "economy",
                "designatorCode": "AR1141",
                "departureDateTime": "2022-12-16T18:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T04:40:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG930~15-IB3441~15-IB6841~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:55",
        "duration": "42h 50m",
        "airlinesNames": [
            "Iberia",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3700",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 765,
                "stopoverDurationMinutes": 845,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG930",
                "departureDateTime": "2022-12-15T00:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 125,
                "stopoverDurationMinutes": 59,
                "departureAirportCode": "ORY",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB3441",
                "departureDateTime": "2022-12-15T20:55:00.000+01:00",
                "arrivalDateTime": "2022-12-15T23:00:00.000+01:00"
            },
            {
                "durationMinutes": 776,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6841",
                "departureDateTime": "2022-12-15T23:59:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:55:00.000-03:00"
            }
        ]
    },
    {
        "id": "AF8386~15-AF1741~15-AF228~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "Air France"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3326",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 460,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8386",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 1110,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1741",
                "departureDateTime": "2022-12-15T14:50:00.000+01:00",
                "arrivalDateTime": "2022-12-15T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF228",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG676~15-NH174~15-UA819~15",
        "departureAirportCode": "BKK",
        "departureTime": "08:00",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "09:20",
        "duration": "35h 20m",
        "airlinesNames": [
            "All Nippon Airways",
            "Thai Airways",
            "United Airlines"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8404",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "NRT",
            "IAH"
        ],
        "segments": [
            {
                "durationMinutes": 350,
                "stopoverDurationMinutes": 60,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "NRT",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG676",
                "departureDateTime": "2022-12-15T08:00:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:50:00.000+09:00"
            },
            {
                "durationMinutes": 715,
                "stopoverDurationMinutes": 395,
                "departureAirportCode": "NRT",
                "arrivalAirportCode": "IAH",
                "airlineCode": "NH",
                "cabin": "economy",
                "designatorCode": "NH174",
                "departureDateTime": "2022-12-15T16:50:00.000+09:00",
                "arrivalDateTime": "2022-12-15T14:45:00.000-05:00"
            },
            {
                "durationMinutes": 600,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IAH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "UA",
                "cabin": "economy",
                "designatorCode": "UA819",
                "departureDateTime": "2022-12-15T21:20:00.000-05:00",
                "arrivalDateTime": "2022-12-16T09:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-EK46~16-EK376~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "12:45",
        "duration": "32h 45m",
        "airlinesNames": [
            "Emirates",
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-EK46~16-EK376~17=EK375~15-EK47~15-LH510~15"
        ],
        "price": "3659",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "DXB"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 375,
                "stopoverDurationMinutes": 230,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "DXB",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK46",
                "departureDateTime": "2022-11-16T14:30:00.000+01:00",
                "arrivalDateTime": "2022-11-16T23:45:00.000+04:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DXB",
                "arrivalAirportCode": "BKK",
                "airlineCode": "EK",
                "cabin": "economy",
                "designatorCode": "EK376",
                "departureDateTime": "2022-11-17T03:35:00.000+04:00",
                "arrivalDateTime": "2022-11-17T12:45:00.000+07:00"
            }
        ]
    },
    {
        "id": "IB2602~15-IB2472~16-IB7928~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "31h 05m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "IB2602~15-IB2472~16-IB7928~16=IB7935~15-IB875~15-IB6841~15",
            "IB2602~15-IB2472~16-IB7928~16=IB7929~15-IB875~15-IB6841~15",
            "IB2602~15-IB2472~16-IB7928~16=IB7929~15-IB7902~16-IB6845~17",
            "IB2602~15-IB2472~16-IB7928~16=IB7931~15-IB7900~16-IB6845~16",
            "IB2602~15-IB2472~16-IB7928~16=IB7931~15-IB7902~16-IB6845~17",
            "IB2602~15-IB2472~16-IB7928~16=IB7935~15-IB7902~15-IB6841~15",
            "IB2602~15-IB2472~16-IB7928~16=IB7931~15-IB877~16-IB6845~16",
            "IB2602~15-IB2472~16-IB7928~16=IB7931~15-IB875~16-IB6845~17"
        ],
        "price": "3647",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "BCN",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 750,
                "stopoverDurationMinutes": 195,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "BCN",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB2602",
                "departureDateTime": "2022-11-15T13:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:30:00.000+01:00"
            },
            {
                "durationMinutes": 375,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "BCN",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB2472",
                "departureDateTime": "2022-11-16T08:45:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:00:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7928",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-LA5262~16-QR830~17",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "65h 20m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-LA5262~16-QR830~17=QR833~15-LA7432~16-LA8036~17"
        ],
        "price": "4664",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 1315,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 1245,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "LA",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "LA5262",
                "departureDateTime": "2022-11-16T03:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T23:00:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-17T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-18T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "DL110~15-DL7850~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "21:15",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 05m",
        "airlinesNames": [
            "Delta Air Lines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "DL110~15-DL7850~16-KE659~17=DL7853~15-DL26~15-DL101~15"
        ],
        "price": "4792",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 370,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "ATL",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL110",
                "departureDateTime": "2022-11-15T21:15:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:45:00.000-05:00"
            },
            {
                "durationMinutes": 955,
                "stopoverDurationMinutes": 140,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "ICN",
                "airlineCode": "DL",
                "operatingAirlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "DL7850",
                "departureDateTime": "2022-11-16T11:55:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:50:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH94~17-LH772~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "59h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH94~17-LH772~17=LX9061~15-LX177~16-LX92~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LX9067~15-LX9001~16-LX92~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LX9059~15-LX177~16-LX92~16",
            "LH511~15-LH94~17-LH772~17=LX9061~15-LX9001~16-LX92~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH97~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH94~17-LH772~17=LH6467~15-LH6339~16-LH510~16"
        ],
        "price": "3009",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1205,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 870,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH94",
                "departureDateTime": "2022-11-17T07:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T08:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-17T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-18T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "AF8386~15-AF1441~15-AF228~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "Air France"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3326",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 795,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8386",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 775,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1441",
                "departureDateTime": "2022-12-15T20:25:00.000+01:00",
                "arrivalDateTime": "2022-12-15T21:45:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF228",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH108~16-LH772~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "35h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH108~16-LH772~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=QR833~15-QR3073~16-LA8036~17",
            "LH511~15-LH108~16-LH772~16=TK65~15-TK15~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=TK69~15-TK15~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=EK373~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=EK375~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=EK363~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=QR831~15-QR3073~15-AC96~16",
            "LH511~15-LH108~16-LH772~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH108~16-LH772~16=QR833~15-QR3073~16-AC96~17",
            "LH511~15-LH108~16-LH772~16=ET609~15-ET506~15",
            "LH511~15-LH108~16-LH772~16=QR831~15-QR3073~15-LA8014~16",
            "LH511~15-LH108~16-LH772~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH108~16-LH772~16=QR837~15-QR3073~15-AC96~16",
            "LH511~15-LH108~16-LH772~16=LH773~15-LH111~16-LH510~16"
        ],
        "price": "2753",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 185,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 450,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH108",
                "departureDateTime": "2022-11-16T14:15:00.000+01:00",
                "arrivalDateTime": "2022-11-16T15:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-16T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG922~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "12:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "29h 25m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4009",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 745,
                "stopoverDurationMinutes": 190,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG922",
                "departureDateTime": "2022-12-15T12:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:05:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH6338~16-LH6466~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:30",
        "duration": "35h 30m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH117~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=TK65~15-TK15~16",
            "LH511~15-LH6338~16-LH6466~16=LX181~15-LX92~15-LA8014~16",
            "LH511~15-LH6338~16-LH6466~16=EK4518~15-EK379~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=EK4522~15-EK379~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=EK363~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=EK373~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=TK69~15-TK15~16",
            "LH511~15-LH6338~16-LH6466~16=EK4520~15-EK379~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=ET609~15-ET506~15",
            "LH511~15-LH6338~16-LH6466~16=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=EK375~15-EK247~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH6338~16-LH6466~16=LH6467~15-LH6339~16-LH510~16"
        ],
        "price": "3037",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "VIE",
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 520,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "VIE",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6338",
                "departureDateTime": "2022-11-16T19:50:00.000+01:00",
                "arrivalDateTime": "2022-11-16T21:15:00.000+01:00"
            },
            {
                "durationMinutes": 605,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "operatingAirlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "LH6466",
                "departureDateTime": "2022-11-16T23:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T15:30:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR147~16-QR6976~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "34h 35m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3298",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 335,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR147",
                "departureDateTime": "2022-12-16T01:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6976",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR773~16-AC96~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "51h 55m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3183",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 505,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 1125,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-17T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-17T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "TG930~15-AA63~15-AA907~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "06:54",
        "duration": "40h 49m",
        "airlinesNames": [
            "American Airlines",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4503",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MIA",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 765,
                "stopoverDurationMinutes": 230,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG930",
                "departureDateTime": "2022-12-15T00:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 613,
                "stopoverDurationMinutes": 299,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "MIA",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA63",
                "departureDateTime": "2022-12-15T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-15T14:53:00.000-05:00"
            },
            {
                "durationMinutes": 542,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MIA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA907",
                "departureDateTime": "2022-12-15T19:52:00.000-05:00",
                "arrivalDateTime": "2022-12-16T06:54:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL804~15-KL2023~15-KL2358~16",
        "departureAirportCode": "BKK",
        "departureTime": "00:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "20:25",
        "duration": "53h 55m",
        "airlinesNames": [
            "KLM"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3309",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "AMS",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 760,
                "stopoverDurationMinutes": 795,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL804",
                "departureDateTime": "2022-12-15T00:30:00.000+07:00",
                "arrivalDateTime": "2022-12-15T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 80,
                "stopoverDurationMinutes": 775,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "CDG",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2023",
                "departureDateTime": "2022-12-15T20:25:00.000+01:00",
                "arrivalDateTime": "2022-12-15T21:45:00.000+01:00"
            },
            {
                "durationMinutes": 825,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "EZE",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2358",
                "departureDateTime": "2022-12-16T10:40:00.000+01:00",
                "arrivalDateTime": "2022-12-16T20:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "CX750~15-CX846~15-AA953~16",
        "departureAirportCode": "BKK",
        "departureTime": "11:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:35",
        "duration": "56h 55m",
        "airlinesNames": [
            "American Airlines",
            "Cathay Pacific"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8438",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "HKG",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 170,
                "stopoverDurationMinutes": 255,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "HKG",
                "airlineCode": "CX",
                "cabin": "economy",
                "designatorCode": "CX750",
                "departureDateTime": "2022-12-15T11:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T15:30:00.000+08:00"
            },
            {
                "durationMinutes": 935,
                "stopoverDurationMinutes": 1405,
                "departureAirportCode": "HKG",
                "arrivalAirportCode": "JFK",
                "airlineCode": "CX",
                "cabin": "economy",
                "designatorCode": "CX846",
                "departureDateTime": "2022-12-15T19:45:00.000+08:00",
                "arrivalDateTime": "2022-12-15T22:20:00.000-05:00"
            },
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA953",
                "departureDateTime": "2022-12-16T21:45:00.000-05:00",
                "arrivalDateTime": "2022-12-17T10:35:00.000-03:00"
            }
        ]
    },
    {
        "id": "ET507~15-ET628~16",
        "departureAirportCode": "EZE",
        "departureTime": "21:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:15",
        "duration": "29h 45m",
        "airlinesNames": [
            "Ethiopian Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "ET507~15-ET628~16=LH6467~15-LH1247~16-LH510~16",
            "ET507~15-ET628~16=TG323~15-LH761~16-LH510~16",
            "ET507~15-ET628~16=EK4518~15-EK379~15-EK247~16",
            "ET507~15-ET628~16=QR831~15-QR3073~15-AC96~16",
            "ET507~15-ET628~16=JL708~15-NH6450~15-UA819~15",
            "ET507~15-ET628~16=QR837~15-QR3073~15-AC96~16",
            "ET507~15-ET628~16=QR833~15-LA5295~16-ET506~16",
            "ET507~15-ET628~16=TG922~15-LH510~15",
            "ET507~15-ET628~16=QR833~15-QR151~16-QR6976~17",
            "ET507~15-ET628~16=EK4520~15-EK379~15-EK247~16",
            "ET507~15-ET628~16=QR831~15-QR1301~15-AZ897~15-AZ680~15",
            "ET507~15-ET628~16=ET609~15-ET506~15",
            "ET507~15-ET628~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "ET507~15-ET628~16=QR833~15-QR3073~16-LA8036~17",
            "ET507~15-ET628~16=HX776~15-LX139~15-LX92~16",
            "ET507~15-ET628~16=LX181~15-LX92~15-LX9702~16",
            "ET507~15-ET628~16=KE658~15-KE35~16-DL101~16",
            "ET507~15-ET628~16=EK363~15-EK247~16",
            "ET507~15-ET628~16=QR833~15-QR3073~16-BA247~17",
            "ET507~15-ET628~16=LX181~15-LX92~15-LA8014~16",
            "ET507~15-ET628~16=QR837~15-QR149~15-QR6915~15",
            "ET507~15-ET628~16=TK69~15-TK800~16-CM279~17",
            "ET507~15-ET628~16=EK375~15-EK247~16",
            "ET507~15-ET628~16=EK373~15-EK247~16",
            "ET507~15-ET628~16=QR831~15-QR151~15-IB6841~15",
            "ET507~15-ET628~16=TK65~15-TK15~16",
            "ET507~15-ET628~16=PG275~15-EK379~15-EK247~16",
            "ET507~15-ET628~16=EK363~15-EK247~16-EK247~16",
            "ET507~15-ET628~16=PG273~15-EK379~15-EK247~16",
            "ET507~15-ET628~16=QR831~15-QR151~15-QR6915~15",
            "ET507~15-ET628~16=AF165~15-AF228~16",
            "ET507~15-ET628~16=TK69~15-TK15~16",
            "ET507~15-ET628~16=QR833~15-QR3073~16-AC96~17",
            "ET507~15-ET628~16=EK4522~15-EK379~15-EK247~16",
            "ET507~15-ET628~16=QR831~15-QR3073~15-LA8014~16",
            "ET507~15-ET628~16=TK69~15-TK15~16-LA8036~17",
            "ET507~15-ET628~16=KL804~15-KL701~15",
            "ET507~15-ET628~16=QR833~15-QR3051~16-QR6976~16",
            "ET507~15-ET628~16=QR837~15-QR151~15-QR6915~15",
            "ET507~15-ET628~16=QR833~15-QR779~16-ET506~16"
        ],
        "price": "2410",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "ADD"
        ],
        "segments": [
            {
                "durationMinutes": 960,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "ADD",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET507",
                "departureDateTime": "2022-11-15T21:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T19:30:00.000+03:00"
            },
            {
                "durationMinutes": 560,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ADD",
                "arrivalAirportCode": "BKK",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET628",
                "departureDateTime": "2022-11-16T23:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T13:15:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-LH92~17-LH772~17",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "15:10",
        "duration": "59h 10m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-LH92~17-LH772~17=LX9059~15-LX177~16-LX92~16",
            "LH511~15-LH92~17-LH772~17=LX9061~15-LX9001~16-LX92~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH109~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LX9067~15-LX9001~16-LX92~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH101~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH93~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LX181~15-LX92~15-LX9702~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH99~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH113~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH115~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH1243~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH6331~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LX9061~15-LX177~16-LX92~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH103~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH105~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH95~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH97~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH773~15-LH111~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH1247~16-LH510~16",
            "LH511~15-LH92~17-LH772~17=LH6467~15-LH1233~16-LH510~16"
        ],
        "price": "3008",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 1145,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 55,
                "stopoverDurationMinutes": 930,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH92",
                "departureDateTime": "2022-11-17T06:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T07:10:00.000+01:00"
            },
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH772",
                "departureDateTime": "2022-11-17T22:40:00.000+01:00",
                "arrivalDateTime": "2022-11-18T15:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "LH511~15-AC7403~16",
        "departureAirportCode": "EZE",
        "departureTime": "18:00",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:25",
        "duration": "26h 25m",
        "airlinesNames": [
            "Air Canada",
            "Lufthansa"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LH511~15-AC7403~16=TG922~15-LH510~15",
            "LH511~15-AC7403~16=TG920~15-LH542~16-AV87~16",
            "LH511~15-AC7403~16=TK65~15-TK15~16",
            "LH511~15-AC7403~16=LH6467~15-LH6347~16-LH510~16",
            "LH511~15-AC7403~16=LH6467~15-LH1235~16-LH510~16",
            "LH511~15-AC7403~16=EK363~15-EK247~16",
            "LH511~15-AC7403~16=ET609~15-ET506~15",
            "LH511~15-AC7403~16=LH6467~15-LH1233~16-LH510~16",
            "LH511~15-AC7403~16=LH6467~15-LH6335~16-LH510~16",
            "LH511~15-AC7403~16=LH6467~15-LH6339~16-LH510~16",
            "LH511~15-AC7403~16=AC7404~15-LH510~16",
            "LH511~15-AC7403~16=LH6467~15-LH1239~16-LH510~16",
            "LH511~15-AC7403~16=TG920~15-LH510~16"
        ],
        "price": "5717",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH511",
                "departureDateTime": "2022-11-15T18:00:00.000-03:00",
                "arrivalDateTime": "2022-11-16T11:10:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AC",
                "operatingAirlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "AC7403",
                "departureDateTime": "2022-11-16T13:45:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:25:00.000+07:00"
            }
        ]
    },
    {
        "id": "OS26~15-OS555~16-LX92~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:50",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "11:50",
        "duration": "46h",
        "airlinesNames": [
            "Austrian Airlines",
            "Swiss"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8745",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "VIE"
        ],
        "segments": [
            {
                "durationMinutes": 695,
                "stopoverDurationMinutes": 250,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "VIE",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS26",
                "departureDateTime": "2022-12-15T23:50:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:25:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 705,
                "departureAirportCode": "VIE",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "OS",
                "cabin": "economy",
                "designatorCode": "OS555",
                "departureDateTime": "2022-12-16T09:35:00.000+01:00",
                "arrivalDateTime": "2022-12-16T11:00:00.000+01:00"
            },
            {
                "durationMinutes": 1025,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX92",
                "departureDateTime": "2022-12-16T22:45:00.000+01:00",
                "arrivalDateTime": "2022-12-17T11:50:00.000-03:00"
            }
        ]
    },
    {
        "id": "KL702~15-KL843~16",
        "departureAirportCode": "EZE",
        "departureTime": "16:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "34h 45m",
        "airlinesNames": [
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KL702~15-KL843~16=TK69~15-TK15~16",
            "KL702~15-KL843~16=AF8386~15-AF1441~15-AF228~16",
            "KL702~15-KL843~16=KL804~15-KL2009~15-KL2358~16",
            "KL702~15-KL843~16=AF8386~15-AF1641~15-AF228~16",
            "KL702~15-KL843~16=KL804~15-KL2023~15-KL2358~16",
            "KL702~15-KL843~16=KL804~15-KL701~15",
            "KL702~15-KL843~16=AF165~15-AF228~16",
            "KL702~15-KL843~16=ET609~15-ET506~15",
            "KL702~15-KL843~16=AF8386~15-AF1741~15-AF228~16",
            "KL702~15-KL843~16=KL804~15-KL2013~15-KL2358~16",
            "KL702~15-KL843~16=TK65~15-TK15~16"
        ],
        "price": "3274",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 640,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL702",
                "departureDateTime": "2022-11-15T16:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T09:45:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL843",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "AF229~15-AF1140~16-AF8389~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "Air France"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-AF1140~16-AF8389~16=EK363~15-EK247~16",
            "AF229~15-AF1140~16-AF8389~16=KL2151~15-KL2258~15-KL702~16",
            "AF229~15-AF1140~16-AF8389~16=KL804~15-KL2023~15-KL2358~16",
            "AF229~15-AF1140~16-AF8389~16=KL804~15-KL2013~15-KL2358~16",
            "AF229~15-AF1140~16-AF8389~16=AF8386~15-AF1441~15-AF228~16",
            "AF229~15-AF1140~16-AF8389~16=AF8386~15-AF1741~15-AF228~16",
            "AF229~15-AF1140~16-AF8389~16=KL804~15-KL2009~15-KL2358~16",
            "AF229~15-AF1140~16-AF8389~16=AF8386~15-AF1641~15-AF228~16",
            "AF229~15-AF1140~16-AF8389~16=KL804~15-KL701~15",
            "AF229~15-AF1140~16-AF8389~16=AF165~15-AF228~16"
        ],
        "price": "3141",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 125,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF1140",
                "departureDateTime": "2022-11-16T16:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:20:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AF",
                "operatingAirlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "AF8389",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR3073~15-AC96~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "14:20",
        "duration": "40h 15m",
        "airlinesNames": [
            "Air Canada",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2410",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 465,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 465,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR3073",
                "departureDateTime": "2022-12-15T19:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T03:50:00.000-03:00"
            },
            {
                "durationMinutes": 165,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "AC",
                "cabin": "economy",
                "designatorCode": "AC96",
                "departureDateTime": "2022-12-16T11:35:00.000-03:00",
                "arrivalDateTime": "2022-12-16T14:20:00.000-03:00"
            }
        ]
    },
    {
        "id": "LA8015~15-LX93~15-AC7405~16",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:10",
        "duration": "41h 25m",
        "airlinesNames": [
            "Air Canada",
            "LATAM Airlines Group SA",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-LX93~15-AC7405~16=LX9067~15-LX9001~16-LX92~16",
            "LA8015~15-LX93~15-AC7405~16=LX9061~15-LX177~16-LX92~16",
            "LA8015~15-LX93~15-AC7405~16=LX9059~15-LX177~16-LX92~16"
        ],
        "price": "6464",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 835,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 670,
                "stopoverDurationMinutes": 165,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX93",
                "departureDateTime": "2022-11-15T19:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T10:30:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "AC",
                "operatingAirlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "AC7405",
                "departureDateTime": "2022-11-16T13:15:00.000+01:00",
                "arrivalDateTime": "2022-11-17T06:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "ET507~15-ET507~16-ET628~16",
        "departureAirportCode": "EZE",
        "departureTime": "21:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:15",
        "duration": "29h 45m",
        "airlinesNames": [
            "Ethiopian Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "ET507~15-ET507~16-ET628~16=ET609~15-ET506~15-ET506~15"
        ],
        "price": "3041",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ADD",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 155,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET507",
                "departureDateTime": "2022-11-15T21:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T00:05:00.000-03:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "ADD",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET507",
                "departureDateTime": "2022-11-16T01:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T19:30:00.000+03:00"
            },
            {
                "durationMinutes": 560,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ADD",
                "arrivalAirportCode": "BKK",
                "airlineCode": "ET",
                "cabin": "economy",
                "designatorCode": "ET628",
                "departureDateTime": "2022-11-16T23:55:00.000+03:00",
                "arrivalDateTime": "2022-11-17T13:15:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR831~15-QR773~16-LA8014~16",
        "departureAirportCode": "BKK",
        "departureTime": "08:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "50h 10m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "2955",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 1245,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR831",
                "departureDateTime": "2022-12-15T08:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T11:30:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 265,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR773",
                "departureDateTime": "2022-12-16T08:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T16:50:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8014",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "LH773~15-LH109~16-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:30",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 35m",
        "airlinesNames": [
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3292",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "MUC"
        ],
        "segments": [
            {
                "durationMinutes": 730,
                "stopoverDurationMinutes": 500,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "MUC",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH773",
                "departureDateTime": "2022-12-15T23:30:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:40:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 435,
                "departureAirportCode": "MUC",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH109",
                "departureDateTime": "2022-12-16T14:00:00.000+01:00",
                "arrivalDateTime": "2022-12-16T15:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "QR6919~15-QR148~16-QR830~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "30h 15m",
        "airlinesNames": [
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "QR6919~15-QR148~16-QR830~16=QR831~15-QR779~16-AC96~16",
            "QR6919~15-QR148~16-QR830~16=QR831~15-QR3073~15-AC96~16",
            "QR6919~15-QR148~16-QR830~16=QR833~15-QR779~16-AC96~16"
        ],
        "price": "4149",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 135,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "QR",
                "operatingAirlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "QR6919",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:05:00.000+01:00"
            },
            {
                "durationMinutes": 405,
                "stopoverDurationMinutes": 160,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR148",
                "departureDateTime": "2022-11-16T08:20:00.000+01:00",
                "arrivalDateTime": "2022-11-16T17:05:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "AF229~15-KL2016~16-KL843~16",
        "departureAirportCode": "EZE",
        "departureTime": "22:35",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "13:20",
        "duration": "28h 45m",
        "airlinesNames": [
            "Air France",
            "KLM"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AF229~15-KL2016~16-KL843~16=KL2151~15-KL2258~15-KL702~16"
        ],
        "price": "5408",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "CDG",
            "AMS"
        ],
        "segments": [
            {
                "durationMinutes": 790,
                "stopoverDurationMinutes": 70,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "CDG",
                "airlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "AF229",
                "departureDateTime": "2022-11-15T22:35:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+01:00"
            },
            {
                "durationMinutes": 85,
                "stopoverDurationMinutes": 125,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "AMS",
                "airlineCode": "KL",
                "operatingAirlineCode": "AF",
                "cabin": "economy",
                "designatorCode": "KL2016",
                "departureDateTime": "2022-11-16T16:55:00.000+01:00",
                "arrivalDateTime": "2022-11-16T18:20:00.000+01:00"
            },
            {
                "durationMinutes": 655,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AMS",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KL",
                "cabin": "economy",
                "designatorCode": "KL843",
                "departureDateTime": "2022-11-16T20:25:00.000+01:00",
                "arrivalDateTime": "2022-11-17T13:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "AA954~15-OZ221~16-OZ741~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "22:50",
        "duration": "37h 20m",
        "airlinesNames": [
            "American Airlines",
            "Asiana Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA954~15-OZ221~16-OZ741~17=CX750~15-CX846~15-AA953~16",
            "AA954~15-OZ221~16-OZ741~17=OZ742~15-OZ222~15-AA953~15"
        ],
        "price": "5227",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 200,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "JFK",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA954",
                "departureDateTime": "2022-11-15T23:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T08:20:00.000-05:00"
            },
            {
                "durationMinutes": 950,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "OZ",
                "cabin": "economy",
                "designatorCode": "OZ221",
                "departureDateTime": "2022-11-16T11:40:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:30:00.000+09:00"
            },
            {
                "durationMinutes": 355,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "OZ",
                "cabin": "economy",
                "designatorCode": "OZ741",
                "departureDateTime": "2022-11-17T18:55:00.000+09:00",
                "arrivalDateTime": "2022-11-17T22:50:00.000+07:00"
            }
        ]
    },
    {
        "id": "KE7282~15-KE36~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "21:15",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 05m",
        "airlinesNames": [
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "KE7282~15-KE36~16-KE659~17=TG652~15-KE5035~15-KE7281~15",
            "KE7282~15-KE36~16-KE659~17=TG652~15-KE5035~15-DL101~15",
            "KE7282~15-KE36~16-KE659~17=KE660~15-KE5035~15-DL101~15",
            "KE7282~15-KE36~16-KE659~17=KE660~15-KE5035~15-KE7281~15"
        ],
        "price": "4922",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 370,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "ATL",
                "airlineCode": "KE",
                "operatingAirlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "KE7282",
                "departureDateTime": "2022-11-15T21:15:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:45:00.000-05:00"
            },
            {
                "durationMinutes": 955,
                "stopoverDurationMinutes": 140,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE36",
                "departureDateTime": "2022-11-16T11:55:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:50:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "LA8015~15-LA5294~15-QR830~16",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "06:05",
        "duration": "41h 20m",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LA8015~15-LA5294~15-QR830~16=QR833~15-LA7432~16-LA8036~17"
        ],
        "price": "4660",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 880,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8015",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 820,
                "stopoverDurationMinutes": 240,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "DOH",
                "airlineCode": "LA",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "LA5294",
                "departureDateTime": "2022-11-15T20:05:00.000-03:00",
                "arrivalDateTime": "2022-11-16T15:45:00.000+03:00"
            },
            {
                "durationMinutes": 380,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR830",
                "departureDateTime": "2022-11-16T19:45:00.000+03:00",
                "arrivalDateTime": "2022-11-17T06:05:00.000+07:00"
            }
        ]
    },
    {
        "id": "DL110~15-DL7850~16-DL7917~17",
        "departureAirportCode": "EZE",
        "departureTime": "21:15",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "41h 05m",
        "airlinesNames": [
            "Delta Air Lines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "DL110~15-DL7850~16-DL7917~17=DL7853~15-DL26~15-DL101~15"
        ],
        "price": "4638",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "ATL"
        ],
        "segments": [
            {
                "durationMinutes": 630,
                "stopoverDurationMinutes": 370,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "ATL",
                "airlineCode": "DL",
                "cabin": "economy",
                "designatorCode": "DL110",
                "departureDateTime": "2022-11-15T21:15:00.000-03:00",
                "arrivalDateTime": "2022-11-16T05:45:00.000-05:00"
            },
            {
                "durationMinutes": 955,
                "stopoverDurationMinutes": 140,
                "departureAirportCode": "ATL",
                "arrivalAirportCode": "ICN",
                "airlineCode": "DL",
                "operatingAirlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "DL7850",
                "departureDateTime": "2022-11-16T11:55:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:50:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "DL",
                "operatingAirlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "DL7917",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "IB7931~15-IB7900~16-IB6845~16",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "21:00",
        "duration": "34h 35m",
        "airlinesNames": [
            "Iberia"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3234",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 85,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7931",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 455,
                "stopoverDurationMinutes": 335,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "MAD",
                "airlineCode": "IB",
                "operatingAirlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "IB7900",
                "departureDateTime": "2022-12-16T01:15:00.000+03:00",
                "arrivalDateTime": "2022-12-16T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 755,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "EZE",
                "airlineCode": "IB",
                "cabin": "economy",
                "designatorCode": "IB6845",
                "departureDateTime": "2022-12-16T12:25:00.000+01:00",
                "arrivalDateTime": "2022-12-16T21:00:00.000-03:00"
            }
        ]
    },
    {
        "id": "AA954~15-KE82~16-KE659~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:30",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "00:20",
        "duration": "38h 50m",
        "airlinesNames": [
            "American Airlines",
            "Korean Air"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AA954~15-KE82~16-KE659~17=KE652~15-KE35~16-DL101~16",
            "AA954~15-KE82~16-KE659~17=KE660~15-KE5035~15-DL101~15"
        ],
        "price": "4360",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ICN",
            "JFK"
        ],
        "segments": [
            {
                "durationMinutes": 650,
                "stopoverDurationMinutes": 220,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "JFK",
                "airlineCode": "AA",
                "cabin": "economy",
                "designatorCode": "AA954",
                "departureDateTime": "2022-11-15T23:30:00.000-03:00",
                "arrivalDateTime": "2022-11-16T08:20:00.000-05:00"
            },
            {
                "durationMinutes": 940,
                "stopoverDurationMinutes": 150,
                "departureAirportCode": "JFK",
                "arrivalAirportCode": "ICN",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE82",
                "departureDateTime": "2022-11-16T12:00:00.000-05:00",
                "arrivalDateTime": "2022-11-17T17:40:00.000+09:00"
            },
            {
                "durationMinutes": 370,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ICN",
                "arrivalAirportCode": "BKK",
                "airlineCode": "KE",
                "cabin": "economy",
                "designatorCode": "KE659",
                "departureDateTime": "2022-11-17T20:10:00.000+09:00",
                "arrivalDateTime": "2022-11-18T00:20:00.000+07:00"
            }
        ]
    },
    {
        "id": "AR1132~15-EY76~17-EY402~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:55",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "07:55",
        "duration": "46h",
        "airlinesNames": [
            "Aerolineas Argentinas",
            "Etihad Airways"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AR1132~15-EY76~17-EY402~17=EY407~15-EY75~16-AR1133~16",
            "AR1132~15-EY76~17-EY402~17=TK69~15-TK15~16-LA8036~17",
            "AR1132~15-EY76~17-EY402~17=QR831~15-QR3073~15-LA8014~16",
            "AR1132~15-EY76~17-EY402~17=JL708~15-NH6450~15-UA819~15",
            "AR1132~15-EY76~17-EY402~17=EK363~15-EK247~16",
            "AR1132~15-EY76~17-EY402~17=PG273~15-EK379~15-EK247~16",
            "AR1132~15-EY76~17-EY402~17=TK69~15-TK15~16",
            "AR1132~15-EY76~17-EY402~17=TG922~15-LH510~15",
            "AR1132~15-EY76~17-EY402~17=ET609~15-ET506~15",
            "AR1132~15-EY76~17-EY402~17=TK65~15-TK15~16",
            "AR1132~15-EY76~17-EY402~17=QR833~15-QR3073~16-LA8036~17",
            "AR1132~15-EY76~17-EY402~17=KE658~15-KE35~16-DL101~16",
            "AR1132~15-EY76~17-EY402~17=QR833~15-QR3073~16-BA247~17",
            "AR1132~15-EY76~17-EY402~17=TK69~15-TK800~16-CM279~17",
            "AR1132~15-EY76~17-EY402~17=HX776~15-LX139~15-LX92~16"
        ],
        "price": "2756",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "MAD",
            "AUH"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 1055,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "MAD",
                "airlineCode": "AR",
                "cabin": "economy",
                "designatorCode": "AR1132",
                "departureDateTime": "2022-11-15T23:55:00.000-03:00",
                "arrivalDateTime": "2022-11-16T16:10:00.000+01:00"
            },
            {
                "durationMinutes": 400,
                "stopoverDurationMinutes": 205,
                "departureAirportCode": "MAD",
                "arrivalAirportCode": "AUH",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY76",
                "departureDateTime": "2022-11-17T09:45:00.000+01:00",
                "arrivalDateTime": "2022-11-17T19:25:00.000+04:00"
            },
            {
                "durationMinutes": 365,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "AUH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "EY",
                "cabin": "economy",
                "designatorCode": "EY402",
                "departureDateTime": "2022-11-17T22:50:00.000+04:00",
                "arrivalDateTime": "2022-11-18T07:55:00.000+07:00"
            }
        ]
    },
    {
        "id": "QR833~15-QR779~16-LA8012~17",
        "departureAirportCode": "BKK",
        "departureTime": "20:25",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "10:25",
        "duration": "48h",
        "airlinesNames": [
            "LATAM Airlines Group SA",
            "Qatar Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3366",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "DOH"
        ],
        "segments": [
            {
                "durationMinutes": 445,
                "stopoverDurationMinutes": 130,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "DOH",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR833",
                "departureDateTime": "2022-12-15T20:25:00.000+07:00",
                "arrivalDateTime": "2022-12-15T23:50:00.000+03:00"
            },
            {
                "durationMinutes": 875,
                "stopoverDurationMinutes": 1255,
                "departureAirportCode": "DOH",
                "arrivalAirportCode": "GRU",
                "airlineCode": "QR",
                "cabin": "economy",
                "designatorCode": "QR779",
                "departureDateTime": "2022-12-16T02:00:00.000+03:00",
                "arrivalDateTime": "2022-12-16T10:35:00.000-03:00"
            },
            {
                "durationMinutes": 175,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LA",
                "operatingAirlineCode": "JJ",
                "cabin": "economy",
                "designatorCode": "LA8012",
                "departureDateTime": "2022-12-17T07:30:00.000-03:00",
                "arrivalDateTime": "2022-12-17T10:25:00.000-03:00"
            }
        ]
    },
    {
        "id": "AZ681~15-AZ2028~16-LX1629~16-LX180~16",
        "departureAirportCode": "EZE",
        "departureTime": "13:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:40",
        "duration": "34h 50m",
        "airlinesNames": [
            "ITA Airways",
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=EK363~15-EK247~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=CX750~15-CX416~15-LA6037~16-LA5261~16-TK15~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=EK375~15-EK247~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=EK373~15-EK247~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=PG273~15-EK379~15-EK247~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=PG275~15-EK379~15-EK247~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR833~15-LA5295~16-ET506~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR831~15-QR3073~15-AC96~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR833~15-QR3073~16-LA8036~17",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR837~15-QR3073~15-AC96~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR833~15-QR3073~16-AC96~17",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR831~15-QR3073~15-LA8014~16",
            "AZ681~15-AZ2028~16-LX1629~16-LX180~16=QR833~15-QR779~16-ET506~16"
        ],
        "price": "2785",
        "cabinClass": "Economy",
        "stopoversCount": 3,
        "stopoverAirportCodes": [
            "LIN",
            "ZRH",
            "FCO"
        ],
        "segments": [
            {
                "durationMinutes": 775,
                "stopoverDurationMinutes": 135,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "FCO",
                "airlineCode": "AZ",
                "cabin": "economy",
                "designatorCode": "AZ681",
                "departureDateTime": "2022-11-15T13:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T06:45:00.000+01:00"
            },
            {
                "durationMinutes": 70,
                "stopoverDurationMinutes": 295,
                "departureAirportCode": "FCO",
                "arrivalAirportCode": "LIN",
                "airlineCode": "AZ",
                "operatingAirlineCode": "CT",
                "cabin": "economy",
                "designatorCode": "AZ2028",
                "departureDateTime": "2022-11-16T09:00:00.000+01:00",
                "arrivalDateTime": "2022-11-16T10:10:00.000+01:00"
            },
            {
                "durationMinutes": 60,
                "stopoverDurationMinutes": 115,
                "departureAirportCode": "MXP",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "operatingAirlineCode": "2L",
                "cabin": "economy",
                "designatorCode": "LX1629",
                "departureDateTime": "2022-11-16T15:05:00.000+01:00",
                "arrivalDateTime": "2022-11-16T16:05:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX180",
                "departureDateTime": "2022-11-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:40:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG922~15-LH506~15-LH4662~16",
        "departureAirportCode": "BKK",
        "departureTime": "12:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "00:15",
        "duration": "45h 35m",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "4440",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 745,
                "stopoverDurationMinutes": 170,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG922",
                "departureDateTime": "2022-12-15T12:40:00.000+07:00",
                "arrivalDateTime": "2022-12-15T19:05:00.000+01:00"
            },
            {
                "durationMinutes": 720,
                "stopoverDurationMinutes": 920,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH506",
                "departureDateTime": "2022-12-15T21:55:00.000+01:00",
                "arrivalDateTime": "2022-12-16T05:55:00.000-03:00"
            },
            {
                "durationMinutes": 180,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH4662",
                "departureDateTime": "2022-12-16T21:15:00.000-03:00",
                "arrivalDateTime": "2022-12-17T00:15:00.000-03:00"
            }
        ]
    },
    {
        "id": "AC7404~15-LH510~16",
        "departureAirportCode": "BKK",
        "departureTime": "23:40",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h 25m",
        "airlinesNames": [
            "Air Canada",
            "Lufthansa"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "8486",
        "cabinClass": "Economy",
        "stopoversCount": 1,
        "stopoverAirportCodes": [
            "FRA"
        ],
        "segments": [
            {
                "durationMinutes": 735,
                "stopoverDurationMinutes": 980,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "FRA",
                "airlineCode": "AC",
                "operatingAirlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "AC7404",
                "departureDateTime": "2022-12-15T23:40:00.000+07:00",
                "arrivalDateTime": "2022-12-16T05:55:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-16T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-17T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "TK16~15-TK194~16-TK64~17",
        "departureAirportCode": "EZE",
        "departureTime": "23:50",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:10",
        "duration": "48h 20m",
        "airlinesNames": [
            "Turkish Airlines"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "TK16~15-TK194~16-TK64~17=TK65~15-TK15~16",
            "TK16~15-TK194~16-TK64~17=TK69~15-TK15~16"
        ],
        "price": "4091",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "GRU",
            "IST"
        ],
        "segments": [
            {
                "durationMinutes": 150,
                "stopoverDurationMinutes": 1295,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK16",
                "departureDateTime": "2022-11-15T23:50:00.000-03:00",
                "arrivalDateTime": "2022-11-16T02:20:00.000-03:00"
            },
            {
                "durationMinutes": 745,
                "stopoverDurationMinutes": 155,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "IST",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK194",
                "departureDateTime": "2022-11-16T23:55:00.000-03:00",
                "arrivalDateTime": "2022-11-17T18:20:00.000+03:00"
            },
            {
                "durationMinutes": 555,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "IST",
                "arrivalAirportCode": "BKK",
                "airlineCode": "TK",
                "cabin": "economy",
                "designatorCode": "TK64",
                "departureDateTime": "2022-11-17T20:55:00.000+03:00",
                "arrivalDateTime": "2022-11-18T10:10:00.000+07:00"
            }
        ]
    },
    {
        "id": "TG930~15-LH1035~15-LH510~15",
        "departureAirportCode": "BKK",
        "departureTime": "00:05",
        "arrivalAirportCode": "EZE",
        "arrivalTime": "08:05",
        "duration": "42h",
        "airlinesNames": [
            "Lufthansa",
            "Thai Airways"
        ],
        "going": false,
        "returning": true,
        "tripId": [],
        "price": "3443",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "FRA",
            "CDG"
        ],
        "segments": [
            {
                "durationMinutes": 765,
                "stopoverDurationMinutes": 475,
                "departureAirportCode": "BKK",
                "arrivalAirportCode": "CDG",
                "airlineCode": "TG",
                "cabin": "economy",
                "designatorCode": "TG930",
                "departureDateTime": "2022-12-15T00:05:00.000+07:00",
                "arrivalDateTime": "2022-12-15T06:50:00.000+01:00"
            },
            {
                "durationMinutes": 75,
                "stopoverDurationMinutes": 375,
                "departureAirportCode": "CDG",
                "arrivalAirportCode": "FRA",
                "airlineCode": "LH",
                "operatingAirlineCode": "CL",
                "cabin": "economy",
                "designatorCode": "LH1035",
                "departureDateTime": "2022-12-15T14:45:00.000+01:00",
                "arrivalDateTime": "2022-12-15T16:00:00.000+01:00"
            },
            {
                "durationMinutes": 830,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "FRA",
                "arrivalAirportCode": "EZE",
                "airlineCode": "LH",
                "cabin": "economy",
                "designatorCode": "LH510",
                "departureDateTime": "2022-12-15T22:15:00.000+01:00",
                "arrivalDateTime": "2022-12-16T08:05:00.000-03:00"
            }
        ]
    },
    {
        "id": "LX9711~15-LX93~15-LX180~16",
        "departureAirportCode": "EZE",
        "departureTime": "02:45",
        "arrivalAirportCode": "BKK",
        "arrivalTime": "10:40",
        "duration": "45h 55m",
        "airlinesNames": [
            "Swiss"
        ],
        "going": true,
        "returning": false,
        "tripId": [
            "LX9711~15-LX93~15-LX180~16=EK363~15-EK247~16",
            "LX9711~15-LX93~15-LX180~16=LX181~15-LX92~15-LX9702~16"
        ],
        "price": "3423",
        "cabinClass": "Economy",
        "stopoversCount": 2,
        "stopoverAirportCodes": [
            "ZRH",
            "GRU"
        ],
        "segments": [
            {
                "durationMinutes": 160,
                "stopoverDurationMinutes": 835,
                "departureAirportCode": "EZE",
                "arrivalAirportCode": "GRU",
                "airlineCode": "LX",
                "operatingAirlineCode": "LA",
                "cabin": "economy",
                "designatorCode": "LX9711",
                "departureDateTime": "2022-11-15T02:45:00.000-03:00",
                "arrivalDateTime": "2022-11-15T05:25:00.000-03:00"
            },
            {
                "durationMinutes": 670,
                "stopoverDurationMinutes": 450,
                "departureAirportCode": "GRU",
                "arrivalAirportCode": "ZRH",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX93",
                "departureDateTime": "2022-11-15T19:20:00.000-03:00",
                "arrivalDateTime": "2022-11-16T10:30:00.000+01:00"
            },
            {
                "durationMinutes": 640,
                "stopoverDurationMinutes": 0,
                "departureAirportCode": "ZRH",
                "arrivalAirportCode": "BKK",
                "airlineCode": "LX",
                "cabin": "economy",
                "designatorCode": "LX180",
                "departureDateTime": "2022-11-16T18:00:00.000+01:00",
                "arrivalDateTime": "2022-11-17T10:40:00.000+07:00"
            }
        ]
    }
];

export default roundTripExample;