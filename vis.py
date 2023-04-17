import requests
import json
import os

def visitala_neysluverds():

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
        value = float(row['values'][0])

        vnv[month] = value

    return vnv


def visitala_ibudaverds():

    r = requests.get("https://talnaefni.fasteignaskra.is/talnaefni/v1/ibudavisitala")
    json_response = json.loads(r.content)

    vh = dict()
    for row in json_response:
        month = f"{row['Ar']}-{str(row['Manudur']).rjust(2, '0')}" 
        value = float(row['Vst_heild'])
        
        vh[month] = value

    return vh

def main():

    vnv = visitala_neysluverds()
    vh = visitala_ibudaverds()

    with open("vis.js", 'w', encoding='utf-8') as f:

        f.writelines("// Vísitölur húsnæðisverðs og neysluverðs\n")
        f.writelines("// Sjá https://www.skra.is/markadurinn/talnaefni/visitolur-kaups-og-leiguverds/\n")
        f.writelines("// og https://hagstofa.is/utgafur/helstu-visitolur/\n\n")

        f.writelines("var vis = {\n")
        for key, vnv_value in vnv.items():

            vh_value = vh.get(key)
            if int(key[:4]) >= 1994 and not vh_value:
                continue
            
            f.writelines(f"\"{key}\" : {{ vnv: {vnv_value}")
            if vh_value:
                f.writelines(f", vh: {vh_value}")
            f.writelines(" },\n")
        
        f.writelines("}")

    return 0
        

if __name__ == '__main__':
    exit(main())