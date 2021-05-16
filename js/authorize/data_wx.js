var data_wx = 
    {
        "business_code": wechartJson[0].value,
        "contact_info": {
            "contact_name": wechartJson[1].subobject[0].value,
            "contact_id_number":wechartJson[1].subobject[1].value,
            "openid":wechartJson[1].subobject[2].value,
            "mobile_phone": wechartJson[1].subobject[3].value,
            "contact_email":wechartJson[1].subobject[4].value
        },
        "subject_info": {
            "subject_type":wechartJson[2].subobject[0].value,
            "business_license_info": {
                "license_copy":wechartJson[2].subobject[1].subobject[0].value,
                "license_number":wechartJson[2].subobject[1].subobject[1].value,
                "merchant_name":wechartJson[2].subobject[1].subobject[2].value,
                "legal_person":wechartJson[2].subobject[1].subobject[3].value
            },
            "certificate_info": {
                "cert_copy":wechartJson[2].subobject[2].subobject[0].value,
                "cert_type":wechartJson[2].subobject[2].subobject[1].value,
                "cert_number":wechartJson[2].subobject[2].subobject[2].value,
                "merchant_name":wechartJson[2].subobject[2].subobject[3].value,
                "company_address":wechartJson[2].subobject[2].subobject[4].value,
                "legal_person":wechartJson[2].subobject[2].subobject[5].value,
                "period_begin":wechartJson[2].subobject[2].subobject[6].value,
                "period_end":wechartJson[2].subobject[2].subobject[7].value
            },
            "organization_info": {
                "organization_copy":wechartJson[2].subobject[3].subobject[0].value,
                "organization_code":wechartJson[2].subobject[3].subobject[1].value,
                "org_period_begin":wechartJson[2].subobject[3].subobject[2].value,
                "org_period_end":wechartJson[2].subobject[3].subobject[3].value
            },
            "certificate_letter_copy":wechartJson[2].subobject[4].subobject[0].value,   // 这个静态数据没有渲染的
            "identity_info": {
                "id_doc_type": wechartJson[2].subobject[5].subobject[0].value,
                "id_card_info": {
                    "id_card_copy":wechartJson[2].subobject[5].subobject[1].subobject[0].value,
                    "id_card_national":wechartJson[2].subobject[5].subobject[1].subobject[1].value,
                    "id_card_name":wechartJson[2].subobject[5].subobject[1].subobject[2].value,
                    "id_card_number":wechartJson[2].subobject[5].subobject[1].subobject[3].value,
                    "card_period_begin":wechartJson[2].subobject[5].subobject[1].subobject[4].value,
                    "card_period_end":wechartJson[2].subobject[5].subobject[1].subobject[5].value
                },
                "id_doc_info": {
                    "id_doc_copy":wechartJson[2].subobject[5].subobject[2].subobject[0].value,
                    "id_doc_name":wechartJson[2].subobject[5].subobject[2].subobject[1].value,
                    "id_doc_number":wechartJson[2].subobject[5].subobject[2].subobject[2].value,
                    "doc_period_begin":wechartJson[2].subobject[5].subobject[2].subobject[3].value,
                    "doc_period_end":wechartJson[2].subobject[5].subobject[2].subobject[4].value
                },
                "owner":wechartJson[2].subobject[5].subobject[2].subobject[3].value
            },
            "ubo_info": {
                "id_type":wechartJson[2].subobject[6].subobject[0].value,
                "id_card_copy":wechartJson[2].subobject[6].subobject[1].value,
                "id_card_national":wechartJson[2].subobject[6].subobject[2].value,
                "id_doc_copy":wechartJson[2].subobject[6].subobject[3].value,
                "name":wechartJson[2].subobject[6].subobject[4].value,
                "id_number":wechartJson[2].subobject[6].subobject[5].value,
                "id_period_begin":wechartJson[2].subobject[6].subobject[6].value,
                "id_period_end":wechartJson[2].subobject[6].subobject[7].value
            }
        },
        "business_info": {  // wechartJson[3].subobject[2].subobject[2].subobject[1]
            "merchant_shortname": wechartJson[3].subobject[0].value,
            "service_phone":  wechartJson[3].subobject[1].value,
            "sales_info": {
                "sales_scenes_type":wechartJson[3].subobject[2].subobject[0].value,  // 数组
                "biz_store_info": {
                    "biz_store_name": wechartJson[3].subobject[2].subobject[1].subobject[0].value,
                    "biz_address_code":  wechartJson[3].subobject[2].subobject[1].subobject[1].value,
                    "biz_store_address":  wechartJson[3].subobject[2].subobject[1].subobject[2].value,
                    "store_entrance_pic":wechartJson[3].subobject[2].subobject[1].subobject[3].value,
                    "indoor_pic":wechartJson[3].subobject[2].subobject[1].subobject[4].value,                                           // 数组
                    "biz_sub_appid":wechartJson[3].subobject[2].subobject[1].subobject[5].value
                },
                "mp_info": {
                    "mp_appid":wechartJson[3].subobject[2].subobject[2].subobject[0].value,
                    "mp_sub_appid":wechartJson[3].subobject[2].subobject[2].subobject[1].value,   // 商家公众号APPID
                    "mp_pics":wechartJson[3].subobject[2].subobject[2].subobject[2].value
                },
                "mini_program_info": {
                    "mini_program_appid":wechartJson[3].subobject[2].subobject[3].subobject[0].value,
                    "mini_program_sub_appid": wechartJson[3].subobject[2].subobject[3].subobject[1].value,
                    "mini_program_pics":wechartJson[3].subobject[2].subobject[3].subobject[2].value
                },
                "app_info": {
                    "app_appid":wechartJson[3].subobject[2].subobject[4].subobject[0].value,
                    "app_sub_appid": wechartJson[3].subobject[2].subobject[4].subobject[1].value,
                    "app_pics":wechartJson[3].subobject[2].subobject[4].subobject[2].value   // 数组
                },
                "web_info": {
                    "domain":wechartJson[3].subobject[2].subobject[5].subobject[0].value,
                    "web_authorisation":wechartJson[3].subobject[2].subobject[5].subobject[1].value,
                    "web_appid":wechartJson[3].subobject[2].subobject[5].subobject[2].value,
                },
                "wework_info": {
                    "corp_id":wechartJson[3].subobject[2].subobject[6].subobject[0].value,
                    "sub_corp_id":wechartJson[3].subobject[2].subobject[6].subobject[1].value,
                    "wework_pics": wechartJson[3].subobject[2].subobject[6].subobject[2].value   // 数组
                }
            }
        },
        "settlement_info": {
            "settlement_id":wechartJson[4].subobject[0].value,
            "qualification_type":wechartJson[4].subobject[1].value,
            "qualifications":wechartJson[4].subobject[2].value,        // 数组
            "activities_id":wechartJson[4].subobject[3].value, 
            "activities_rate": wechartJson[4].subobject[4].value, 
            "activities_additions": wechartJson[4].subobject[5].value    // 数组
        },
        "bank_account_info": {
            "bank_account_type": wechartJson[5].subobject[0].value,
            "account_name":  wechartJson[5].subobject[1].value,
            "account_bank":  wechartJson[5].subobject[2].value,
            "bank_address_code":  wechartJson[5].subobject[3].value,
            "bank_branch_id":  wechartJson[5].subobject[4].value,
            "bank_name":  wechartJson[5].subobject[5].value,
            "account_number":  wechartJson[5].subobject[6].value
        },
        "addition_info": {
            "legal_person_commitment": wechartJson[6].subobject[0].value,
            "legal_person_video": wechartJson[6].subobject[1].value,
            // "business_addition_pics": [
            //     "ZC6GC-vnrbEny__Ie_An5-tCp3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBD",
            //     "ZC6GC-vnrbEny__Ie_An5-tCp3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBD"
            // ],
            "business_addition_pics": wechartJson[6].subobject[2].value,
            "business_addition_msg": wechartJson[6].subobject[3].value,        //"特殊情况，说明原因"
        }
    }
