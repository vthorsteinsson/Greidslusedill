import requests
import json
import typing as t
import datetime

def visitala_neysluverds() -> t.Dict[str, float]:
    """ Gets latest consumer price index for Statistics of Iceland """

    url = "http://px.hagstofa.is/pxis/api/v1/is/Efnahagur/visitolur/1_vnv/1_vnv/VIS01000.px"
    body = {
        "query": [
            {
                "code": "Vísitala",
                "selection": {
                    "filter": "item",
                    "values": [
                        "CPI"
                    ]
                }
            },
            {
                "code": "Liður",
                "selection": {
                    "filter": "item",
                    "values": [
                        "index"
                    ]
                }
            }
        ],
        "response": {
            "format": "json"
        }
    }

    r = requests.post(url, json=body)
    json_response = json.loads(r.content)

    vnv = dict()
    for row in json_response['data']:
        month = row['key'][0].replace("M", "-")
        vnv[month] = float(row['values'][0])

    return vnv


def visitala_ibudaverds() -> t.Dict[str, float]:
    """ Gets latest property price index for all properties in the capital region. """

    url = "https://talnaefni.fasteignaskra.is/talnaefni/v1/ibudavisitala"

    r = requests.get(url)
    json_response = json.loads(r.content)

    vh = dict()
    for row in json_response:
        month = f"{row['Ar']}-{str(row['Manudur']).rjust(2, '0')}" 
        vh[month] = float(row['Vst_heild'])

    return vh


def months_between(d1: datetime.date, d2: datetime.date) -> int:
    return (d1.year - d2.year) * 12 + d1.month - d2.month


def check_data(data: t.Dict[str, float], origin: datetime.date) -> None:
    """ Checks if the data is within expected length raises Exception if errors are found. """

    latest_date = datetime.datetime\
        .strptime(f"{list(data.keys())[-1]}-01", '%Y-%m-%d')\
        .date()
    
    if datetime.date.today() - datetime.timedelta(days=90) > latest_date:
        raise Exception("Latest date is not within boundaries")

    if len(data) != months_between(latest_date, origin) + 1:
        raise Exception("Missing dates in the dataset")


def main():
    """ Constructs vis.js accoring to the original format of the file """

    vnv = visitala_neysluverds()
    vh = visitala_ibudaverds()

    # Simple data checks to make sure not to break 
    # the website if data is missing.
    check_data(vnv, datetime.date(1988, 5, 1))
    check_data(vh, datetime.date(1994, 1, 1))

    with open("vis.js", 'w', encoding='utf-8') as f:

        f.writelines("// Vísitölur húsnæðisverðs og neysluverðs\n")
        f.writelines("// Sjá https://fasteignaskra.is/gogn/fasteignagattin/fasteignavidskipti/visitolur-ibuda-og-leiguverds/\n")
        f.writelines("// og https://hagstofa.is/talnaefni/efnahagur/verdlag/visitala-neysluverds/\n\n")

        f.writelines("var vis = {\n")
        for key, vnv_value in vnv.items():

            vh_value = vh.get(key)

            # Ignore latest records if both vnv and vh do not exist
            # Before 1994, there are only records available for vnv
            if int(key[:4]) >= 1994 and not vh_value:
                continue
            
            f.writelines(f"\"{key}\" : {{ vnv: {vnv_value}")
            if vh_value:
                f.writelines(f", vh: {vh_value}")
            f.writelines(" },\n")
        
        f.writelines("};")

    return 0
        

if __name__ == '__main__':
    exit(main())