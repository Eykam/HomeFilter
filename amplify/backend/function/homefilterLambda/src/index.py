import json
import requests
import re


def handler(event, context):
    # TODO implement
    url = "https://opendata.maryland.gov/resource/ed4q-f8tm.json?mdp_street_address_mdp_field_address="
    address = event['queryStringParameters']['address']

    #clean address
    not_accepted = {
                '[^\w\s]+': '',
                'RD$':'ROAD',
                'AVENUE$':'AVE', 
                'DRIVE$': 'DR', 
                'STREET$': 'ST',
                'COURT$': 'CT',
                'Boulevard$': 'BLVD'
                  }

    for word in not_accepted:
      address = re.sub(word, not_accepted[word],address)


    x = requests.get(url+address)
    data = x.json()[0]
    sdat_url = data['real_property_search_link']['url']
    
    data2 = requests.get(sdat_url,  timeout=(3.05, 6)).text
    
    name = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_lblOwnerName2?_0\" class=\"text\">.*<\/span>", data2)
    name = [x.split('>')[1] for x in name]
    name = [x.split('<')[0] for x in name]
    
    mailing_add = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_lblMailingAddress_0\" class=\"text\">.*</span>", data2)
    mailing_add = mailing_add[0].split('>')
    mailing_add = [x.split('<')[0] for x in mailing_add]
    mailing_add = mailing_add[1] +", "+ mailing_add[2]
    
    principal_res = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_lblPrinResidence_0\" class=\"text\">.*</span>", data2)
    principal_res = principal_res[0].split('>')
    principal_res = [x.split('<')[0] for x in principal_res]
    principal_res = principal_res[1]

    finished_basement_area = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_Label27_0\" class=\"text\">.*</span>", data2)
    finished_basement_area = finished_basement_area[0].split('>')
    finished_basement_area = [x.split('<')[0] for x in finished_basement_area]
    finished_basement_area = finished_basement_area[1]

    stories = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_Label22_0\" class=\"text\">.*</span>", data2)
    stories = stories[0].split('>')
    stories = [x.split('<')[0] for x in stories]
    stories = stories[1]

    basement = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_Label23_0\" class=\"text\">.*</span>", data2)
    basement = basement[0].split('>')
    basement = [x.split('<')[0] for x in basement]
    basement = basement[1]

    bathroom = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_Label34_0\" class=\"text\">.*</span>",data2)
    bathroom = bathroom[0].split('>')
    bathroom = [x.split('<')[0] for x in bathroom]
    bathroom = bathroom[1]

    garage = re.findall("<span id=\"cphMainContentArea_ucSearchType_wzrdRealPropertySearch_query_ucDetailsSearch_query_dlstDetaisSearch_Label35_0\" class=\"text\">.*</span>",data2)
    garage = garage[0].split('>')
    garage = [x.split('<')[0] for x in garage]
    garage = garage[1]

    vals = re.findall("As of.*", data2)
    value_date = re.sub("<.{0,5}>"," ",vals[0]) 
    p1_date = re.sub("<.{0,5}>"," ",vals[1])
    p2_date = re.sub("<.{0,5}>"," ",vals[2])

    
    data['name'] = name
    data['mailing_add'] = mailing_add
    data['principal_res'] = principal_res
    data['finished_basement_area'] = finished_basement_area
    data['stories'] = stories
    data['basement'] = basement
    data['bathroom'] = bathroom
    data['garage'] = garage
    data['value_date'] = value_date
    data['p1_date'] = p1_date
    data['p2_date'] = p2_date
    
    print(sdat_url)
    print(principal_res)
    print(mailing_add)
    print(name)
    print(finished_basement_area)
    print(stories)
    print(basement)
    print(bathroom)
    print(garage)
    print(value_date)
    print(p1_date)
    print(p2_date)

    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
    
    }
    