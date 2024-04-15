
________________create country________________________

mutation Mutation($data: CountryCreateInput!) {
  createCountry(data: $data) {
    name
    code
    emoji
    continentCode
    id
  }
}

-----result---------

{
  "data": {
    "name": "allemange",
    "code": "DE",
    "emoji": "🇩🇪",
    "continentCode": "EUR"

  }
}


______________all country  : __________________

query CountryList {
  allCountry {
    id
    name
    code
    emoji
    continentCode
  }
}

-----result---------
{
  "data": {
    "allCountry": [
      {
        "id": "1",
        "name": "France",
        "code": "FR",
        "emoji": "🇫🇷",
        "continentCode": "EUR"
      },
      {
        "id": "2",
        "name": "Belgique",
        "code": "BE",
        "emoji": "🇧🇪",
        "continentCode": "EUR"
      },
      {
        "id": "3",
        "name": "Andorre",
        "code": "AN",
        "emoji": "🇦🇩",
        "continentCode": "EUR"
      }
    ]
  }
}


______countryBycode:_________________________

query CountryByCode($code: String!) {
  countryByCode(code: $code) {
    id
    name
    code
    emoji
    continentCode
  }
}

-----variable query---------
{
  "code": "FR"
}



----result--------------
{
  "data": {
    "countryByCode": {
      "id": "1",
      "name": "France",
      "code": "FR",
      "emoji": "🇫🇷",
      "continentCode": "EUR"
    }
  }
}
____________________________________________


__________country by continent code_________
query CountriesByContinentCode($continentCode: String!) {
  countriesByContinentCode(continent_code: $continentCode) {
    id
    name
    code
    emoji
    continentCode
  }
}

---variable------------
{
  "continentCode": "EUR"
}
__________________________________