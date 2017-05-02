var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
    response.send('Written by <jouw naam hier invullen>');
})
app.get('/json', function(request, response) {
    response.json({
        'contacts': [
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "brianna",
                    "last": "hoffman"
                },
                "location": {
                    "street": "1123 rolling green rd",
                    "city": "round rock",
                    "state": "vermont",
                    "postcode": 66659
                },
                "email": "brianna.hoffman@example.com",
                "login": {
                    "username": "silverfrog337",
                    "password": "anchor",
                    "salt": "8uZT2BIU",
                    "md5": "5334ae84220898b28b9615c8a82b59db",
                    "sha1": "58a0edc7b03fa9520f85c7f60148a18abb3b571d",
                    "sha256": "ae58dc2632201850df87ec70822f32dd0aa5f4b53395fb02fa1551b852398043"
                },
                "dob": "1992-07-21 01:45:07",
                "registered": "2014-08-13 21:18:00",
                "phone": "(441)-289-4069",
                "cell": "(311)-748-1926",
                "id": {
                    "name": "SSN",
                    "value": "652-45-6792"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/77.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
                },
                "nat": "US"
            },
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "rosa",
                    "last": "cavalcanti"
                },
                "location": {
                    "street": "1011 rua mato grosso ",
                    "city": "santos",
                    "state": "espírito santo",
                    "postcode": 81257
                },
                "email": "rosa.cavalcanti@example.com",
                "login": {
                    "username": "heavyelephant238",
                    "password": "london1",
                    "salt": "fngmGiwj",
                    "md5": "0639946d151c7b7225f2e5181a5bb339",
                    "sha1": "70e56cca543c3a781e45074d509510ff0f38f262",
                    "sha256": "25fe8d5d993c40591cdb3e5bbb3231b6948aa0c81b80edd33b5ef69a866250fa"
                },
                "dob": "1974-08-27 08:18:42",
                "registered": "2009-03-05 23:54:13",
                "phone": "(78) 5501-8848",
                "cell": "(81) 5687-6451",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/72.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
                },
                "nat": "BR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "samuel",
                    "last": "singh"
                },
                "location": {
                    "street": "7322 remuera road",
                    "city": "new plymouth",
                    "state": "hawke's bay",
                    "postcode": 73018
                },
                "email": "samuel.singh@example.com",
                "login": {
                    "username": "orangetiger911",
                    "password": "smudge",
                    "salt": "IHlw5IPf",
                    "md5": "31e75498d6e6f81795343dfcd2203028",
                    "sha1": "0a8e54eadec90f52c2faaafc5a818bba72b7d88e",
                    "sha256": "3f63ee7d3e936cf3e63d0957d38487e75680cbaa35db0c67d2ade59c38dda412"
                },
                "dob": "1986-11-28 01:35:50",
                "registered": "2016-04-05 00:42:08",
                "phone": "(807)-597-9295",
                "cell": "(870)-954-0631",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/24.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "ben",
                    "last": "linke"
                },
                "location": {
                    "street": "8828 talstraße",
                    "city": "müritz",
                    "state": "nordrhein-westfalen",
                    "postcode": 79879
                },
                "email": "ben.linke@example.com",
                "login": {
                    "username": "redbear554",
                    "password": "blabla",
                    "salt": "zOKHKzv9",
                    "md5": "fac63b8cefe3400fe5e5d2199d59b10b",
                    "sha1": "e6358d198f35486816cc8ec8f85a79812bd7b1c4",
                    "sha256": "76c68a85bb3639fb9692763188914fbf765e120f012356a8fc13b61b6a2c8a5b"
                },
                "dob": "1979-03-25 01:21:28",
                "registered": "2002-05-06 15:54:54",
                "phone": "0615-1663749",
                "cell": "0174-8180738",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/31.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
                },
                "nat": "DE"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "ece",
                    "last": "karabulut"
                },
                "location": {
                    "street": "6451 talak göktepe cd",
                    "city": "aydın",
                    "state": "çanakkale",
                    "postcode": 34832
                },
                "email": "ece.karabulut@example.com",
                "login": {
                    "username": "ticklishmouse436",
                    "password": "pacman",
                    "salt": "YpBueLLe",
                    "md5": "4ea5256a3ea742c5413391c3dddedc6f",
                    "sha1": "a8a366032c57d3390abcba679e1f06faa662f86d",
                    "sha256": "eyufrtgfdeuj"
                },
                "dob": "1967-01-15 08:12:39",
                "registered": "2012-09-15 18:01:32",
                "phone": "(056)-340-9873",
                "cell": "(940)-635-5469",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/75.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
                },
                "nat": "TR"
            }

        ],
    })
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})
app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})
app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})
