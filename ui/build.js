let build_spec = {"openapi":"3.0.0","info":{"description":"ONDC Participant Management API","version":"2.0.5","title":"ONDC Registry "},"tags":[{"name":"ONDC Network Participant Onboarding","description":"Registration, amendment, key rotation"}],"paths":{"/subscribe":{"post":{"tags":["ONDC Network Participant Onboarding"],"description":"subscriber","requestBody":{"description":"Onboard","content":{"application/json":{"schema":{"type":"object","properties":{"context":{"type":"object","properties":{"operation":{"$ref":"#/components/schemas/Context"}}},"message":{"type":"object","properties":{"request_id":{"type":"string","description":"A unique request id generated by network participant to track each request."},"timestamp":{"type":"string","format":"date-time","description":"Time of request generation in RFC3339 format","example":"2022-07-07T02:52:29.001Z"},"entity":{"$ref":"#/components/schemas/Entity"},"network_participant":{"type":"array","items":{"$ref":"#/components/schemas/NetworkParticipant"}}},"required":["entity","timestamp","network_participant"]}},"required":["context","message"]},"examples":{"ops_no_1":{"value":{"context":{"operation":{"ops_no":1}},"message":{"request_id":"27baa06d-f90a-486c-85e5-cc621b787f04","timestamp":"2022-07-08T13:44:54.101Z","entity":{"gst":{"legal_entity_name":"ABC Incorporates","business_address":"Trade World, Mansarpur, Coorg, Karnataka 333333","city_code":["std:080"],"gst_no":"07AAACN2082N4Z7"},"pan":{"name_as_per_pan":"ABC Incorporates","pan_no":"ASDFP7657Q","date_of_incorporation":"23/06/1982"},"name_of_authorised_signatory":"Anand Sharma","address_of_authorised_signatory":"405, Pinnacle House, Kandiwali, Mumbai 400001","email_id":"anand.sharma@abc.com","mobile_no":9912332199,"country":"IND","subscriber_id":"sit.grab.in","unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","callback_url":"/ondc/onboarding","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"}},"network_participant":[{"subscriber_url":"/bapl","domain":"nic2004:52110","type":"buyerApp","msn":false,"city_code":["std:080"]}]}}},"ops_no_2":{"value":{"context":{"operation":{"ops_no":2}},"message":{"request_id":"27baa06d-f90a-486c-85e5-cc621b787f04","timestamp":"2022-07-08T13:44:54.101Z","entity":{"gst":{"legal_entity_name":"ABC Incorporates","business_address":"Trade World, Mansarpur, Coorg, Karnataka 333333","city_code":["std:080"],"gst_no":"07AAACN2082N4Z7"},"pan":{"name_as_per_pan":"ABC Incorporates","pan_no":"ASDFP7657Q","date_of_incorporation":"23/06/1982"},"name_of_authorised_signatory":"Anand Sharma","address_of_authorised_signatory":"405, Pinnacle House, Kandiwali, Mumbai 400001","email_id":"anand.sharma@abc.com","mobile_no":9912332199,"country":"IND","subscriber_id":"sit.grab.in","unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","callback_url":"/ondc/onboarding","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"}},"network_participant":[{"subscriber_url":"/bapl","domain":"nic2004:52110","type":"sellerApp","msn":false,"city_code":["std:080"]}]}}},"ops_no_3":{"value":{"context":{"operation":{"ops_no":3}},"message":{"request_id":"27baa06d-f90a-486c-85e5-cc621b787f04","timestamp":"2022-07-08T13:44:54.101Z","entity":{"gst":{"legal_entity_name":"ABC Incorporates","business_address":"Trade World, Mansarpur, Coorg, Karnataka 333333","city_code":["std:080"],"gst_no":"07AAACN2082N4Z7"},"pan":{"name_as_per_pan":"ABC Incorporates","pan_no":"ASDFP7657Q","date_of_incorporation":"23/06/1982"},"name_of_authorised_signatory":"Anand Sharma","address_of_authorised_signatory":"405, Pinnacle House, Kandiwali, Mumbai 400001","email_id":"anand.sharma@abc.com","mobile_no":9912332199,"country":"IND","subscriber_id":"sit.grab.in","unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","callback_url":"/ondc/onboarding","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"}},"network_participant":[{"subscriber_url":"/bapl","domain":"nic2004:52110","type":"sellerApp","msn":true,"city_code":["std:080"],"seller_on_record":[{"unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"},"city_code":["std:080"]}]}]}}},"ops_no_4":{"value":{"context":{"operation":{"ops_no":4}},"message":{"request_id":"27baa06d-f90a-486c-85e5-cc621b787f04","timestamp":"2022-07-08T13:44:54.101Z","entity":{"gst":{"legal_entity_name":"ABC Incorporates","business_address":"Trade World, Mansarpur, Coorg, Karnataka 333333","city_code":["std:080"],"gst_no":"07AAACN2082N4Z7"},"pan":{"name_as_per_pan":"ABC Incorporates","pan_no":"ASDFP7657Q","date_of_incorporation":"23/06/1982"},"name_of_authorised_signatory":"Anand Sharma","address_of_authorised_signatory":"405, Pinnacle House, Kandiwali, Mumbai 400001","email_id":"anand.sharma@abc.com","mobile_no":9912332199,"country":"IND","subscriber_id":"sit.grab.in","unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","callback_url":"/ondc/onboarding","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"}},"network_participant":[{"subscriber_url":"/buyerAppl","domain":"nic2004:52110","type":"buyerApp","msn":false,"city_code":["std:080"]},{"subscriber_url":"/sellerAppl","domain":"nic2004:52110","type":"sellerApp","msn":false,"city_code":["std:080"]}]}}},"ops_no_5":{"value":{"context":{"operation":{"ops_no":5}},"message":{"request_id":"27baa06d-f90a-486c-85e5-cc621b787f04","timestamp":"2022-07-08T13:44:54.101Z","entity":{"gst":{"legal_entity_name":"ABC Incorporates","business_address":"Trade World, Mansarpur, Coorg, Karnataka 333333","city_code":["std:080"],"gst_no":"07AAACN2082N4Z7"},"pan":{"name_as_per_pan":"ABC Incorporates","pan_no":"ASDFP7657Q","date_of_incorporation":"23/06/1982"},"name_of_authorised_signatory":"Anand Sharma","address_of_authorised_signatory":"405, Pinnacle House, Kandiwali, Mumbai 400001","email_id":"anand.sharma@abc.com","mobile_no":9912332199,"country":"IND","subscriber_id":"sit.grab.in","unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","callback_url":"/ondc/onboarding","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"}},"network_participant":[{"subscriber_url":"/buyerApp1","domain":"nic2004:52110","type":"buyerApp","msn":false,"city_code":["std:080"]},{"subscriber_url":"/sellerApp1","domain":"nic2004:52110","type":"sellerApp","msn":true,"city_code":["std:080"],"seller_on_record":[{"unique_key_id":"27baa06d-f90a-486c-85e5-cc621b787f04","key_pair":{"signing_public_key":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=","encryption_public_key":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=","valid_from":"2022-07-08T13:44:54.101Z","valid_until":"2022-07-08T13:44:54.101Z"},"city_code":["std:080"]}]}]}}}}}}},"responses":{"200":{"description":"Acknowledgement of message received","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"object","properties":{"ack":{"$ref":"#/components/schemas/Ack"}},"required":["ack"]},"error":{"$ref":"#/components/schemas/Error"}},"required":["message"]}}}}}}},"/callback_url/on_subscribe":{"post":{"tags":["ONDC Network Participant Onboarding"],"description":"to be hosted by subscriber","requestBody":{"description":"Onboard","content":{"application/json":{"schema":{"type":"object","properties":{"subscriber_id":{"type":"string","description":"A unique ID describing a subscriber on a network.","example":"abc.com"},"challenge":{"type":"string","description":"String encrypted using the subscriber’s old encryption public key","example":"encrypted_challenge_string"}}}}}},"responses":{"200":{"description":"Successful subscription","content":{"application/json":{"schema":{"type":"object","properties":{"answer":{"type":"string","description":"Decrypted value","example":"decrypted_challange_string"}}}}}}}}},"/lookup":{"post":{"tags":["ONDC Network Participant Onboarding"],"description":"subscriber","requestBody":{"description":"Onboard","content":{"application/json":{"schema":{"type":"object","required":["subscriber_id","country","city","domain","type"],"properties":{"subscriber_id":{"type":"string","description":"A unique ID describing a subscriber on a network."},"country":{"type":"string","description":"Country code as per ISO 3166-1 and ISO 3166-2 format"},"ukId":{"type":"string","description":"A unique ID describing a subscriber on a network."},"city":{"type":"string","format":"string","description":"City code","example":"std:080"},"domain":{"type":"string","format":"string","description":"Industry domain of the subscriber.","example":"nic2004:52110"},"type":{"type":"string","format":"string","description":"BAP or BPP","example":"BAP or BPP"}}}}}},"responses":{"200":{"description":"Acknowledgement of message received","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"subscriber_id":{"type":"string","format":"string","description":"A unique ID describing a subscriber on a network.","example":"https://sit.grab.in/ondc"},"ukId":{"type":"string","format":"string","description":"UUID.","example":"22a8a67a-76d9-459b-867c-085dda2939ec"},"br_id":{"type":"string","format":"string","description":"UUID.","example":"22a8a67a-76d9-459b-867c-085dda2939ec"},"country":{"type":"string","format":"string","description":"Country code","example":"IND"},"city":{"type":"string","format":"string","description":"City code","example":"std:080"},"domain":{"type":"string","format":"string","description":"Industry domain of the subscriber.","example":"nic2004:52110"},"signing_public_key":{"type":"string","description":"Signing Public Key","example":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE="},"encr_public_key":{"type":"string","description":"Encryption Public Key","example":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="},"valid_from":{"type":"string","format":"string ($date-time)","example":"2022-04-05T05:56:52.470618Z3","description":"Keys valid from"},"valid_until":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Keys valid until"},"created":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Created timestamp"},"updated":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Updated timestamp"}}}}}}}}}},"/vlookup":{"post":{"summary":"Get public keys of network participants","description":"The network participant will trigger the lookup call to the registry to fetch its public keys.","requestBody":{"description":"vlookup","content":{"application/json":{"schema":{"type":"object","required":["sender_subscriber_id","request_id","timestamp","signature","search_parameters","country","domain"],"properties":{"sender_subscriber_id":{"type":"string","description":"A unique ID describing a subscriber on a network."},"request_id":{"type":"string","description":"Country code as per ISO 3166-1 and ISO 3166-2 format"},"timestamp":{"type":"string","format":"date-time","description":"request timestamp to avoid replay attack","example":"2016-08-29T09:12:33.001Z"},"search_parameters":{"type":"object","properties":{"country":{"type":"string","format":"string","description":"Country code","example":"IND"},"domain":{"type":"string","format":"string","description":"Industry domain of the subscriber.","example":"nic2004:52110"},"type":{"type":"string","format":"string","description":"buyerApp or sellerApp.","example":"sellerApp or byerApp"},"city":{"type":"string","format":"string","description":"City code.","example":"std:080"},"subscriber_id":{"type":"string","format":"string","description":"subscriber id.","example":"sit.grab.in/ondc"}}},"signature":{"type":"string","format":"string","description":"signature","example":"Y8Q8yyVI4zCrsCX3e1WlKfJL8Vd7GRBjUoITIH1ISVmDfwxRfJ3xgLu0Pfw4seKRTaGuOdyxDFdVspJckdPFAA=="}}}}}},"responses":{"200":{"description":"VLookup received","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"subscriber_id":{"type":"string","format":"string","description":"A unique ID describing a subscriber on a network.","example":"pilot-gateway-1.beckn.nsdl.co.in/option1"},"country":{"type":"string","format":"string","description":"Country code","example":"IND"},"city":{"type":"array","items":{"$ref":"#/components/schemas/City"}},"signing_public_key":{"type":"string","description":"Signing Public Key","example":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE="},"encr_public_key":{"type":"string","description":"Encryption Public Key","example":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="},"valid_from":{"type":"string","format":"string ($date-time)","example":"2022-04-05T05:56:52.470618Z3","description":"Keys valid from"},"valid_until":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Keys valid until"},"created":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Created timestamp"},"updated":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Updated timestamp"},"unique_key_id":{"type":"string","format":"string","example":"dba638cc-20cc-40ea-a08b-b4a39bfb3eab","description":"Unique key of subcriber"},"network_participant":{"type":"array","items":{"type":"object","properties":{"subscriber_url":{"type":"string","format":"string","description":"URL to be verified and configured for network participation.The given URL should have valid SSL Certificate that should be able to pass OCSP check. https://certificatetools.com/ocsp-checker can be used to check prior to submitting the request.","example":"/test4"},"domain":{"type":"string","format":"string","description":"Industry domain of the subscriber.","example":"nic2004:52110"},"type":{"type":"string","format":"string","description":"buyerApp or sellerApp","example":"sellerApp"},"msn":{"type":"boolean","description":"true or false","example":true},"city_code":{"type":"array","items":{"$ref":"#/components/schemas/City"}},"seller_on_record":{"type":"array","items":{"type":"object","properties":{"unique_key_id":{"type":"string","format":"string (UUID)","example":"22a8a67a-76d9-459b-867c-085dda2939ec","description":"UUID"},"city_code":{"type":"array","items":{"$ref":"#/components/schemas/City"}},"key_pair":{"type":"object","properties":{"signing_public_key":{"type":"string","description":"Signing Public Key","example":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE="},"encr_public_key":{"type":"string","description":"Encryption Public Key","example":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="},"valid_from":{"type":"string","format":"string ($date-time)","example":"2022-04-05T05:56:52.470618Z3","description":"Keys valid from"},"valid_until":{"type":"string","format":"string ($date-time)","example":"2026-04-05T05:56:52.470618Z7","description":"Keys valid until"}}}}}}}}}}}}}}},"401":{"description":"Unauthorized Access: invalid signature."},"411":{"description":"timestamp is invalid."},"412":{"description":"sender subscriber id is invalid."},"416":{"description":"Atleast two search parameters is required."},"500":{"description":"Server Side Error. Call Helpdesk for details."}},"tags":["Key rotation of network participant - buyerApp or sellerApp"]}}},"components":{"schemas":{"Ack":{"description":"Describes the ACK response","type":"object","properties":{"status":{"type":"string","description":"Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK","enum":["ACK","NACK"]}},"required":["status"]},"Error":{"description":"Describes an error object","type":"object","properties":{"type":{"type":"string","enum":["CONTEXT-ERROR","CORE-ERROR","DOMAIN-ERROR","POLICY-ERROR","JSON-SCHEMA-ERROR"]},"code":{"type":"string","description":"ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo"},"path":{"type":"string","description":"Path to json schema generating the error. Used only during json schema validation errors"},"message":{"type":"string","description":"Human readable message describing the error"}},"required":["type","code"]},"Context":{"type":"object","properties":{"ops_no":{"type":"integer","format":"int32","enum":[1,2,3,4,5,6,7,8,9,10,11,12],"example":1,"description":"1 - Buyer New entity registration <br> 2 - Non-MSN Seller New entity registration <br> 3 - MSN Seller New entity registration <br> 4 - Buyer and Non-MSN Seller new registration  <br> 5 - Buyer and MSN Seller new registration <br> 6 - Buyer/Non-MSN/MSN SellerApp key rotation <br> 7 - MSN Seller changing keys for Seller on Record  <br> 8 - Buyer adding New network participant for Non-MSN Seller <br> 9 - Buyer adding New network participant for MSN Seller <br> 10 - MSN Seller adding new seller on record <br> 11 - BuyerApp/SellerApp amending city <br> 12 - MSN Seller amending Seller on record city  <br>"}}},"Entity":{"type":"object","properties":{"gst":{"type":"object","properties":{"legal_entity_name":{"type":"string","example":"ABC Incorporates"},"business_address":{"type":"string","example":"Trade World, Mansarpur, Coorg, Karnataka 333333"},"city_code":{"type":"array","items":{"$ref":"#/components/schemas/City"}},"gst_no":{"type":"string","example":"07AAACN2082N4Z7"}}},"pan":{"type":"object","properties":{"name_as_per_pan":{"type":"string","description":"This shall be used to match the name as per PAN with Income Tax Department","example":"ABC Incorporates"},"pan_no":{"type":"string","description":"Permanent Account Number issued by Income Tax Department. First five alphabets followed by four numeric followed by one alphabet","example":"ASDFP7657Q"},"date_of_incorporation":{"type":"string","format":"date","description":"DD/MM/YYYY format","example":"23/06/1982"}}},"name_of_authorised_signatory":{"type":"string","example":"Anand Sharma"},"address_of_authorised_signatory":{"type":"string","example":"405, Pinnacle House, Kandiwali, Mumbai 400001"},"email_id":{"type":"string","example":"anand.sharma@abc.com"},"mobile_no":{"type":"number","example":9912332199},"country":{"type":"string","description":"Country code as per ISO 3166-1 and ISO 3166-2 format","example":"IND"},"subscriber_id":{"type":"string","example":"sit.grab.in"},"callback_url":{"type":"string","description":"it should be relative to subscriber_id mentioned domain. In below example with subscriber _id as abc.com, regsitry will call https://abc.com/ondc/onboarding/on_subscribe","example":"/ondc/onboarding"},"key_pair":{"$ref":"#/components/schemas/KeyPair"}}},"NetworkParticipant":{"type":"object","properties":{"subscriber_url":{"type":"string","example":"/bapl"},"domain":{"type":"string","description":"Industry domain of the subscriber","example":"nic2004:52110"},"type":{"type":"string","enum":["buyerApp","sellerApp","gateway"]},"msn":{"type":"boolean"},"city_code":{"type":"array","items":{"$ref":"#/components/schemas/City"}},"seller_on_record":{"type":"array","items":{"$ref":"#/components/schemas/SellerOnRecord"}}}},"SellerOnRecord":{"type":"object","properties":{"unique_key_id":{"type":"string"},"key_pair":{"$ref":"#/components/schemas/KeyPair"},"city_code":{"type":"array","items":{"$ref":"#/components/schemas/City"}}}},"City":{"description":"Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'","type":"string","example":"std:080"},"KeyPair":{"type":"object","properties":{"signing_public_key":{"type":"string","format":"byte","example":"QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE="},"encryption_public_key":{"type":"string","format":"byte","example":"O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="},"valid_from":{"type":"string","format":"date-time","description":"use IST time zone","example":"2022-07-07T02:52:29.001Z"},"valid_until":{"type":"string","format":"date-time","description":"use IST time zone","example":"2022-07-07T02:52:29.001Z"}}}}},"servers":[{"description":"SwaggerHub API Auto Mocking","url":"https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5"}],"x-enum":{"subscribe":{"context":{"ops_no":[{"code":1,"description":"Buyer New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":2,"description":"Non-MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":3,"description":"MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":4,"description":"Buyer and Non-MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":5,"description":"Buyer and MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":6,"description":"Buyer/Non-MSN/MSN SellerApp key rotation","reference":"<PR/Issue/Discussion Links md format text>"},{"code":7,"description":"MSN Seller changing keys for Seller on Record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":8,"description":"Buyer adding New network participant for Non-MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":9,"description":"Buyer adding New network participant for MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":10,"description":"MSN Seller adding new seller on record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":11,"description":"BuyerApp/SellerApp amending city","reference":"<PR/Issue/Discussion Links md format text>"},{"code":12,"description":"MSN Seller amending Seller on record city","reference":"<PR/Issue/Discussion Links md format text>"}]},"message":{"network_participant":{"type":{"code":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"gateway","description":"Describes that subscription call is for registering as a gateway","reference":"<PR/Issue/Discussion Links md format text"}],"city_code":[{"code":"std:080","description":"Represent the city code that identifies the cities. In case of '*' it will fetch all the cities where service is being provided.","reference":"<PR/Issue/Discussion Links md format text>"}],"domain":[{"code":"nic2004:52110","description":"Domain to be subscribed","reference":"<PR/Issue/Discussion Links md format text>"}]}}}},"callback_url/on_subscribe":{"context":{"ops_no":[{"code":1,"description":"Buyer New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":2,"description":"Non-MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":3,"description":"MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":4,"description":"Buyer and Non-MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":5,"description":"Buyer and MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":6,"description":"Buyer/Non-MSN/MSN SellerApp key rotation","reference":"<PR/Issue/Discussion Links md format text>"},{"code":7,"description":"MSN Seller changing keys for Seller on Record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":8,"description":"Buyer adding New network participant for Non-MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":9,"description":"Buyer adding New network participant for MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":10,"description":"MSN Seller adding new seller on record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":11,"description":"BuyerApp/SellerApp amending city","reference":"<PR/Issue/Discussion Links md format text>"},{"code":12,"description":"MSN Seller amending Seller on record city","reference":"<PR/Issue/Discussion Links md format text>"}]},"message":{"network_participant":{"type":{"code":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"gateway","description":"Describes that subscription call is for registering as a gateway","reference":"<PR/Issue/Discussion Links md format text"}],"city_code":[{"code":"std:080","description":"Represent the city code that identifies the cities. In case of '*' it will fetch all the cities where service is being provided.","reference":"<PR/Issue/Discussion Links md format text>"}],"domain":[{"code":"nic2004:52110","description":"Domain to be subscribed","reference":"<PR/Issue/Discussion Links md format text>"}]}}}},"lookup":{"context":{"ops_no":[{"code":1,"description":"Buyer New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":2,"description":"Non-MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":3,"description":"MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":4,"description":"Buyer and Non-MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":5,"description":"Buyer and MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":6,"description":"Buyer/Non-MSN/MSN SellerApp key rotation","reference":"<PR/Issue/Discussion Links md format text>"},{"code":7,"description":"MSN Seller changing keys for Seller on Record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":8,"description":"Buyer adding New network participant for Non-MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":9,"description":"Buyer adding New network participant for MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":10,"description":"MSN Seller adding new seller on record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":11,"description":"BuyerApp/SellerApp amending city","reference":"<PR/Issue/Discussion Links md format text>"},{"code":12,"description":"MSN Seller amending Seller on record city","reference":"<PR/Issue/Discussion Links md format text>"}]},"message":{"lookup":{"code":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"gateway","description":"Describes that subscription call is for registering as a gateway","reference":"<PR/Issue/Discussion Links md format text"}],"city_code":[{"code":"std:080","description":"Represent the city code that identifies the cities. In case of '*' it will fetch all the cities where service is being provided.","reference":"<PR/Issue/Discussion Links md format text>"}],"domain":[{"code":"nic2004:52110","description":"Domain to be subscribed","reference":"<PR/Issue/Discussion Links md format text>"}],"subscriber_id":[{"code":"sit.grab.in/ondc","description":"Represents the subscriber_id that identifies the subscriber.","reference":"<PR/Issue/Discussion Links md format text>"}],"country":[{"code":"IND","description":"Represents the country","reference":"<PR/Issue/Discussion Links md format text>"}],"ukId":[{"code":"string","description":"Represents the unique key id.","reference":"<PR/Issue/Discussion Links md format text>"}],"type":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"}]}}},"vlookup":{"context":{"ops_no":[{"code":1,"description":"Buyer New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":2,"description":"Non-MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":3,"description":"MSN Seller New entity registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":4,"description":"Buyer and Non-MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":5,"description":"Buyer and MSN Seller new registration","reference":"<PR/Issue/Discussion Links md format text>"},{"code":6,"description":"Buyer/Non-MSN/MSN SellerApp key rotation","reference":"<PR/Issue/Discussion Links md format text>"},{"code":7,"description":"MSN Seller changing keys for Seller on Record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":8,"description":"Buyer adding New network participant for Non-MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":9,"description":"Buyer adding New network participant for MSN Seller","reference":"<PR/Issue/Discussion Links md format text>"},{"code":10,"description":"MSN Seller adding new seller on record","reference":"<PR/Issue/Discussion Links md format text>"},{"code":11,"description":"BuyerApp/SellerApp amending city","reference":"<PR/Issue/Discussion Links md format text>"},{"code":12,"description":"MSN Seller amending Seller on record city","reference":"<PR/Issue/Discussion Links md format text>"}]},"message":{"search_parameters":{"code":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"gateway","description":"Describes that subscription call is for registering as a gateway","reference":"<PR/Issue/Discussion Links md format text"}],"city_code":[{"code":"std:080","description":"Represent the city code that identifies the cities. In case of '*' it will fetch all the cities where service is being provided.","reference":"<PR/Issue/Discussion Links md format text>"}],"domain":[{"code":"nic2004:52110","description":"Domain to be subscribed","reference":"<PR/Issue/Discussion Links md format text>"}],"country":[{"code":"IND","description":"Represents the country","reference":"<PR/Issue/Discussion Links md format text>"}],"type":[{"code":"buyerApp","description":"Describes that subscription call is for registering buyer app (bap)","reference":"<PR/Issue/Discussion Links md format text"},{"code":"sellerApp","description":"Describes that subscription call is for registering seller app (bpp)","reference":"<PR/Issue/Discussion Links md format text"}],"subscriber_id":[{"code":"sit.grab.in/ondc","description":"Represents the subscriber_id that identifies the subscriber.","reference":"<PR/Issue/Discussion Links md format text>"}]}}}},"x-tags":{"search":{"message":{"intent":{"payment":{"tags":[{"code":"sample_tag","description":"Describes the finder fees of the loan for buyer","reference":"<PR/Issue/Discussion Links md format text>","list":[{"code":"sample_tags","description":"Buyer finder fee type.","reference":"<PR/Issue/Discussion Links md format text>","list":[{"code":"amount","description":"Describes, the Buyer App’s fee is a flat amount in INR.","reference":"<PR/Issue/Discussion Links md format text>"},{"code":"percent- annualized","description":"Describes, the Buyer App’s fee is set as a percentage of the Total Loan Disbursed for a 12-month tenure loan.","reference":"<PR/Issue/Discussion Links md format text>"},{"code":"percent","description":"Describes, the Buyer App’s fee is an absolute percentage.","reference":"<PR/Issue/Discussion Links md format text>"}]}]}]}}}}},"x-flows":[{"summary":"Registry sample flow","details":[{"description":"The illustrative flow depicts the comprehensive process of Registry , showcasing the sequential steps and interactions involved in a Registry Process.","mermaid":"sequenceDiagram\n  title Initializing Registry\n  participant Network Participant\n  participant Registry\n  Network Participant->>Registry: subscribe\n  Registry->>Network Participant: (callback_url/on_subscribe) challenge\n  Network Participant->>Registry: decrypt challenge\n  Registry-->>Network Participant: Ack"}]}],"x-examples":{"registry":{"summary":"registry","description":"registry","example_set":{"lookup":{"examples":[{"summary":"lookup","description":"TBD","value":{"subscriber_id":"string","country":"IND","ukId":"string","city":"std:080","domain":"nic2004:52110","type":"BAP or BPP"}}]}}}},"x-attributes":{"registry":{"attribute_set":{"lookup":[]}}},"x-errorcodes":{"code":[]},"x-tlc":{"code":[]},"x-featureui":{"filenames":[]},"x-sandboxui":{"dropdown":[null]}}