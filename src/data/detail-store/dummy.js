export const shops = [
    {
        "id": 1,
        "name": "제롬헤어",
        "category": "헤어",
        "address": "경기도 수원시 영통구 광교산로",
        "img": "/images/jHair.png",
        "detailAddress": "154-42 206호",
        "rating": "4.0",
        "description": "고객 맞춤 프리미엄 서비스를 제공하는 제롬헤어입니다.",
        "addressAlias": "경기대학교 후문 사거리",
        "workSchedule": "월 10:00 - 17:00",
        "phoneNumber": "031-249-9114",
        "menuCategories": [
            {
                "categoryName": "컷",
                "menus": [
                    {
                        "menuId": 1,
                        "imgUri": "/images/haircut.png",
                        "price": 15000,
                        "name": "남성 컷",
                        "description": "깔끔하고 스타일리시한 남성 컷입니다."
                    },
                    {
                        "menuId": 2,
                        "imgUri": "/images/haircut_women.png",
                        "price": 20000,
                        "name": "여성 컷",
                        "description": "세련된 스타일의 여성 컷입니다."
                    },
                    {
                        "menuId": 2, //바꿔주세요 gpt
                        "imgUri": "/images/haircut_women.png",
                        "price": 20000,
                        "name": "레이어드 컷",
                        "description": "최신 유행 레이어트 컷입니다."
                    }
                ]
            },
            {
                "categoryName": "펌",
                "menus": [
                    {
                        "menuId": 3,
                        "imgUri": "/images/perm.png",
                        "price": 50000,
                        "name": "일반 펌",
                        "description": "내추럴한 웨이브를 위한 일반 펌입니다."
                    },
                    {
                        "menuId": 4,
                        "imgUri": "/images/digital_perm.png",
                        "price": 70000,
                        "name": "디지털 펌",
                        "description": "손질이 쉬운 디지털 펌입니다."
                    }
                ]
            },
            {
                "categoryName": "염색",
                "menus": [
                    {
                        "menuId": 5,
                        "imgUri": "/images/hair_color.png",
                        "price": 60000,
                        "name": "전체 염색",
                        "description": "트렌디한 컬러로 변신하세요."
                    },
                    {
                        "menuId": 6,
                        "imgUri": "/images/highlight.png",
                        "price": 40000,
                        "name": "하이라이트",
                        "description": "부분 염색으로 포인트를 줍니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/deb9d47c-97d3-41d8-a131-de27a97b227b",
                "name": "제롬 원장",
                "reviewNum": 2,
                "description": "15년 경력 / 펌 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/12f5b805-e423-4469-8481-81d7d7b73cbf",
                "name": "지연 디자이너",
                "reviewNum": 1,
                "description": "레이어드 컷 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/53bc6db6-b514-49a1-8c35-224bebbb1985",
                "name": "아름 디자이너",
                "reviewNum": 1,
                "description": "남성컷 전문"
            }
        ],
        "reviews":[
            {
                "name":"아름 디자이너",
                "rating":"4.8",
                "content":"너무 만족스럽습니다. 재방문할게요!",
                "menuCategory":"염색",
                "menu":"하이라이트"
            },
            {
                "name":"지연 디자이너",
                "rating":"5.0",
                "content":"커트 장인이세욤",
                "menuCategory":"컷",
                "menu":"레이어드컷"
            },
            {
                "name":"제롬 원장",
                "rating":"5.0",
                "content":"역시 펌은 원장님이 최고",
                "menuCategory":"펌",
                "menu":"디지털 펌"
            },
            {
                "name":"제롬 원장",
                "rating":"5.0",
                "content":"친절하십니다.",
                "menuCategory":"펌",
                "menu":"일반 펌"
            }
            
        ]
    },
    {
        "id": 2,
        "name": "깔끔왁싱",
        "category": "왁싱",
        "address": "서울특별시 강남구 테헤란로",
        "img": "/images/kwax.png",
        "detailAddress": "203호",
        "rating": "4.0",
        "description": "전문적인 왁싱 서비스를 제공하는 깔끔왁싱입니다.",
        "addressAlias": "강남역 4번 출구",
        "workSchedule": "월-금 10:00 - 19:00",
        "phoneNumber": "02-123-4567",
        "menuCategories": [
            {
                "categoryName": "바디 왁싱",
                "menus": [
                    {
                        "menuId": 7,
                        "imgUri": "/images/body_wax.png",
                        "price": 30000,
                        "name": "팔 왁싱",
                        "description": "부드럽고 깔끔한 팔 왁싱입니다."
                    },
                    {
                        "menuId": 8,
                        "imgUri": "/images/leg_wax.png",
                        "price": 40000,
                        "name": "다리 왁싱",
                        "description": "매끈한 다리 왁싱입니다."
                    }
                ]
            },
            {
                "categoryName": "페이스 왁싱",
                "menus": [
                    {
                        "menuId": 9,
                        "imgUri": "/images/face_wax.png",
                        "price": 20000,
                        "name": "얼굴 왁싱",
                        "description": "깨끗하고 깔끔한 얼굴 왁싱입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 4,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee1.png",
                "name": "윤지 원장",
                "reviewNum": 3,
                "description": "왁싱 전문가 / 10년 경력"
            },
            {
                "id": 5,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee2.png",
                "name": "미나 디자이너",
                "reviewNum": 1,
                "description": "페이스 왁싱 전문"
            }
        ],
        "reviews": [
            {
                "name": "윤지 원장",
                "rating": "5.0",
                "content": "팔 왁싱 정말 깔끔하게 잘 해주셨어요.",
                "menuCategory": "바디 왁싱",
                "menu": "팔 왁싱"
            },
            {
                "name": "미나 디자이너",
                "rating": "4.5",
                "content": "얼굴 왁싱 후 피부가 매끄러워졌어요.",
                "menuCategory": "페이스 왁싱",
                "menu": "얼굴 왁싱"
            },
            {
                "name": "윤지 원장",
                "rating": "4.8",
                "content": "다리 왁싱도 너무 잘하십니다.",
                "menuCategory": "바디 왁싱",
                "menu": "다리 왁싱"
            },
            {
                "name": "윤지 원장",
                "rating": "5.0",
                "content": "왁싱 후 관리법까지 알려주셔서 너무 좋았어요.",
                "menuCategory": "바디 왁싱",
                "menu": "팔 왁싱"
            }
        ]
    },
    {
        "id": 3,
        "name": "네일유",
        "category": "네일",
        "address": "서울특별시 서초구 서초대로",
        "img": "/images/youNail.png",
        "detailAddress": "501호",
        "rating": "3.8",
        "description": "다양한 네일 아트를 제공하는 네일유입니다.",
        "addressAlias": "서초역 3번 출구",
        "workSchedule": "화-토 10:00 - 20:00",
        "phoneNumber": "02-987-6543",
        "menuCategories": [
            {
                "categoryName": "네일 아트",
                "menus": [
                    {
                        "menuId": 10,
                        "imgUri": "/images/nail_art.png",
                        "price": 25000,
                        "name": "기본 네일 아트",
                        "description": "심플하고 깔끔한 기본 네일 아트입니다."
                    },
                    {
                        "menuId": 11,
                        "imgUri": "/images/gel_nail.png",
                        "price": 35000,
                        "name": "젤 네일",
                        "description": "오랜 지속력을 자랑하는 젤 네일입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 6,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee3.png",
                "name": "수진 원장",
                "reviewNum": 4,
                "description": "네일 아트 전문가 / 12년 경력"
            },
            {
                "id": 7,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee4.png",
                "name": "혜림 디자이너",
                "reviewNum": 2,
                "description": "젤 네일 전문"
            }
        ],
        "reviews": [
            {
                "name": "수진 원장",
                "rating": "4.5",
                "content": "기본 네일 아트가 너무 예뻐요.",
                "menuCategory": "네일 아트",
                "menu": "기본 네일 아트"
            },
            {
                "name": "혜림 디자이너",
                "rating": "4.0",
                "content": "젤 네일이 정말 오래가요.",
                "menuCategory": "네일 아트",
                "menu": "젤 네일"
            },
            {
                "name": "수진 원장",
                "rating": "4.8",
                "content": "친절하고 꼼꼼하게 해주셨어요.",
                "menuCategory": "네일 아트",
                "menu": "기본 네일 아트"
            },
            {
                "name": "혜림 디자이너",
                "rating": "4.3",
                "content": "네일 디자인이 너무 마음에 들어요.",
                "menuCategory": "네일 아트",
                "menu": "젤 네일"
            }
        ]
    },
    {
        "id": 4,
        "name": "네일어때",
        "category": "네일",
        "address": "서울특별시 강남구 삼성로",
        "img": "/images/howNail.png",
        "detailAddress": "302호",
        "rating": "5.0",
        "description": "고객 맞춤형 네일 서비스를 제공하는 네일어때입니다.",
        "addressAlias": "삼성역 6번 출구",
        "workSchedule": "월-토 09:00 - 21:00",
        "phoneNumber": "02-345-6789",
        "menuCategories": [
            {
                "categoryName": "네일 케어",
                "menus": [
                    {
                        "menuId": 12,
                        "imgUri": "/images/nail_care.png",
                        "price": 20000,
                        "name": "기본 네일 케어",
                        "description": "손톱 건강을 위한 기본 네일 케어입니다."
                    },
                    {
                        "menuId": 13,
                        "imgUri": "/images/spa_nail.png",
                        "price": 40000,
                        "name": "스파 네일 케어",
                        "description": "편안한 스파 네일 케어 서비스입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 8,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee5.png",
                "name": "소연 원장",
                "reviewNum": 3,
                "description": "네일 케어 전문가 / 15년 경력"
            },
            {
                "id": 9,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee6.png",
                "name": "지현 디자이너",
                "reviewNum": 1,
                "description": "스파 네일 케어 전문"
            }
        ],
        "reviews": [
            {
                "name": "소연 원장",
                "rating": "5.0",
                "content": "기본 네일 케어가 정말 꼼꼼해요.",
                "menuCategory": "네일 케어",
                "menu": "기본 네일 케어"
            },
            {
                "name": "지현 디자이너",
                "rating": "5.0",
                "content": "스파 네일 케어로 피로가 풀렸어요.",
                "menuCategory": "네일 케어",
                "menu": "스파 네일 케어"
            },
            {
                "name": "소연 원장",
                "rating": "4.8",
                "content": "네일 케어 후 손톱이 건강해졌어요.",
                "menuCategory": "네일 케어",
                "menu": "기본 네일 케어"
            },
            {
                "name": "소연 원장",
                "rating": "5.0",
                "content": "친절한 서비스에 만족합니다.",
                "menuCategory": "네일 케어",
                "menu": "기본 네일 케어"
            }
        ]
    },
    {
        "id": 5,
        "name": "바이민브로우",
        "category": "속눈썹/눈썹",
        "address": "서울특별시 송파구 올림픽로",
        "img": "/images/byminBrow.png",
        "detailAddress": "104호",
        "rating": "1.0",
        "description": "전문적인 속눈썹 및 눈썹 관리를 제공하는 바이민브로우입니다.",
        "addressAlias": "잠실역 1번 출구",
        "workSchedule": "화-일 11:00 - 18:00",
        "phoneNumber": "02-222-3333",
        "menuCategories": [
            {
                "categoryName": "속눈썹",
                "menus": [
                    {
                        "menuId": 14,
                        "imgUri": "/images/eyelash_extension.png",
                        "price": 50000,
                        "name": "속눈썹 연장",
                        "description": "길고 풍성한 속눈썹 연장입니다."
                    }
                ]
            },
            {
                "categoryName": "눈썹",
                "menus": [
                    {
                        "menuId": 15,
                        "imgUri": "/images/eyebrow_tint.png",
                        "price": 30000,
                        "name": "눈썹 틴트",
                        "description": "자연스러운 눈썹 틴트입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 10,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee7.png",
                "name": "민지 원장",
                "reviewNum": 1,
                "description": "속눈썹 및 눈썹 전문가 / 8년 경력"
            }
        ],
        "reviews": [
            {
                "name": "민지 원장",
                "rating": "1.0",
                "content": "속눈썹 연장이 마음에 들지 않아요.",
                "menuCategory": "속눈썹",
                "menu": "속눈썹 연장"
            },
            {
                "name": "민지 원장",
                "rating": "1.2",
                "content": "눈썹 틴트가 자연스럽지 않아요.",
                "menuCategory": "눈썹",
                "menu": "눈썹 틴트"
            },
            {
                "name": "민지 원장",
                "rating": "1.0",
                "content": "서비스가 별로였어요.",
                "menuCategory": "속눈썹",
                "menu": "속눈썹 연장"
            },
            {
                "name": "민지 원장",
                "rating": "1.5",
                "content": "눈썹 틴트가 지속되지 않아요.",
                "menuCategory": "눈썹",
                "menu": "눈썹 틴트"
            }
        ]
    },
    {
        "id": 6,
        "name": "아망래쉬",
        "category": "속눈썹/눈썹",
        "address": "서울특별시 마포구 마포대로",
        "img": "/images/amanglash.png",
        "detailAddress": "302호",
        "rating": "2.0",
        "description": "프리미엄 속눈썹 연장 서비스를 제공하는 아망래쉬입니다.",
        "addressAlias": "마포역 5번 출구",
        "workSchedule": "월-금 10:00 - 19:00",
        "phoneNumber": "02-456-7890",
        "menuCategories": [
            {
                "categoryName": "속눈썹 연장",
                "menus": [
                    {
                        "menuId": 16,
                        "imgUri": "/images/eyelash_extension.png",
                        "price": 45000,
                        "name": "기본 속눈썹 연장",
                        "description": "자연스러운 기본 속눈썹 연장입니다."
                    },
                    {
                        "menuId": 17,
                        "imgUri": "/images/volume_lash.png",
                        "price": 65000,
                        "name": "볼륨 속눈썹 연장",
                        "description": "풍성한 볼륨 속눈썹 연장입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 11,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee8.png",
                "name": "아망 원장",
                "reviewNum": 2,
                "description": "속눈썹 연장 전문가 / 10년 경력"
            },
            {
                "id": 12,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee9.png",
                "name": "라희 디자이너",
                "reviewNum": 2,
                "description": "볼륨 속눈썹 연장 전문"
            }
        ],
        "reviews": [
            {
                "name": "아망 원장",
                "rating": "2.5",
                "content": "기본 속눈썹 연장이 조금 부족했어요.",
                "menuCategory": "속눈썹 연장",
                "menu": "기본 속눈썹 연장"
            },
            {
                "name": "라희 디자이너",
                "rating": "2.0",
                "content": "볼륨 속눈썹 연장이 기대에 미치지 못했어요.",
                "menuCategory": "속눈썹 연장",
                "menu": "볼륨 속눈썹 연장"
            },
            {
                "name": "아망 원장",
                "rating": "2.0",
                "content": "서비스는 친절했지만 결과가 별로였어요.",
                "menuCategory": "속눈썹 연장",
                "menu": "기본 속눈썹 연장"
            },
            {
                "name": "라희 디자이너",
                "rating": "1.8",
                "content": "볼륨 속눈썹 연장이 오래가지 않았어요.",
                "menuCategory": "속눈썹 연장",
                "menu": "볼륨 속눈썹 연장"
            }
        ]
    },
    {
        "id": 7,
        "name": "제이로랑왁싱",
        "category": "왁싱",
        "address": "서울특별시 강동구 천호대로",
        "img": "/images/jWax.png",
        "detailAddress": "101호",
        "rating": "5.0",
        "description": "전문적인 왁싱 서비스를 제공하는 제이로랑왁싱입니다.",
        "addressAlias": "천호역 7번 출구",
        "workSchedule": "월-금 10:00 - 18:00",
        "phoneNumber": "02-333-4444",
        "menuCategories": [
            {
                "categoryName": "바디 왁싱",
                "menus": [
                    {
                        "menuId": 18,
                        "imgUri": "/images/body_wax.png",
                        "price": 35000,
                        "name": "전체 바디 왁싱",
                        "description": "전체적으로 매끈한 바디 왁싱입니다."
                    }
                ]
            },
            {
                "categoryName": "페이스 왁싱",
                "menus": [
                    {
                        "menuId": 19,
                        "imgUri": "/images/face_wax.png",
                        "price": 25000,
                        "name": "전체 페이스 왁싱",
                        "description": "깨끗한 피부를 위한 전체 페이스 왁싱입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 13,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/employee10.png",
                "name": "로랑 원장",
                "reviewNum": 3,
                "description": "왁싱 전문가 / 15년 경력"
            }
        ],
        "reviews": [
            {
                "name": "로랑 원장",
                "rating": "5.0",
                "content": "전체 바디 왁싱 정말 만족스러웠어요.",
                "menuCategory": "바디 왁싱",
                "menu": "전체 바디 왁싱"
            },
            {
                "name": "로랑 원장",
                "rating": "4.8",
                "content": "페이스 왁싱도 너무 잘 해주셨어요.",
                "menuCategory": "페이스 왁싱",
                "menu": "전체 페이스 왁싱"
            },
            {
                "name": "로랑 원장",
                "rating": "5.0",
                "content": "친절하고 세심한 서비스에 감동했어요.",
                "menuCategory": "바디 왁싱",
                "menu": "전체 바디 왁싱"
            },
            {
                "name": "로랑 원장",
                "rating": "4.9",
                "content": "왁싱 후 피부 관리법도 잘 알려주셨어요.",
                "menuCategory": "바디 왁싱",
                "menu": "전체 바디 왁싱"
            }
        ]
    },
    {
        "id": 8,
        "name": "왁싱랩",
        "category": "왁싱",
        "address": "서울특별시 용산구 이태원로",
        "img": "/images/labwax.png",
        "detailAddress": "302호",
        "rating": "3.5",
        "description": "고품질 왁싱 서비스를 제공하는 왁싱랩입니다.",
        "addressAlias": "이태원역 2번 출구",
        "workSchedule": "화-일 11:00 - 20:00",
        "phoneNumber": "02-444-5555",
        "menuCategories": [
            {
                "categoryName": "바디 왁싱",
                "menus": [
                    {
                        "menuId": 20,
                        "imgUri": "/images/body_wax.png",
                        "price": 30000,
                        "name": "팔 왁싱",
                        "description": "부드럽고 깔끔한 팔 왁싱입니다."
                    },
                    {
                        "menuId": 21,
                        "imgUri": "/images/leg_wax.png",
                        "price": 40000,
                        "name": "다리 왁싱",
                        "description": "매끈한 다리 왁싱입니다."
                    }
                ]
            },
            {
                "categoryName": "브라질리언 왁싱",
                "menus": [
                    {
                        "menuId": 22,
                        "imgUri": "/images/brazilian_wax.png",
                        "price": 50000,
                        "name": "브라질리언 왁싱",
                        "description": "깔끔한 브라질리언 왁싱입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/8_employee1.png",
                "name": "김지수",
                "reviewNum": 2,
                "description": "3년 경력 / 바디 왁싱 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/8_employee2.png",
                "name": "박민주",
                "reviewNum": 1,
                "description": "페이스 왁싱 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/8_employee3.png",
                "name": "최다은",
                "reviewNum": 1,
                "description": "브라질리언 왁싱 전문"
            }
        ],
        "reviews":[
            {
                "name":"김지수",
                "rating":"4.5",
                "content":"깔끔하게 잘 해주셨어요!",
                "menuCategory":"바디 왁싱",
                "menu":"팔 왁싱"
            },
            {
                "name":"김지수",
                "rating":"4.0",
                "content":"친절하게 설명해주시고 만족스러웠습니다.",
                "menuCategory":"바디 왁싱",
                "menu":"다리 왁싱"
            },
            {
                "name":"박민주",
                "rating":"5.0",
                "content":"정말 만족스러운 서비스였습니다.",
                "menuCategory":"페이스 왁싱",
                "menu":"얼굴 왁싱"
            },
            {
                "name":"최다은",
                "rating":"4.8",
                "content":"브라질리언 왁싱이 처음이었는데, 정말 좋았습니다.",
                "menuCategory":"브라질리언 왁싱",
                "menu":"브라질리언 왁싱"
            }
        ]
    },
    {
        "id": 9,
        "name": "글래드뷰티",
        "category": "메이크업",
        "address": "서울특별시 강남구 논현로",
        "img": "/images/gladBeauty.png",
        "detailAddress": "401호",
        "rating": "4.5",
        "description": "다양한 메이크업 서비스를 제공하는 글래드뷰티입니다.",
        "addressAlias": "논현역 3번 출구",
        "workSchedule": "월-금 09:00 - 18:00",
        "phoneNumber": "02-555-6666",
        "menuCategories": [
            {
                "categoryName": "메이크업",
                "menus": [
                    {
                        "menuId": 23,
                        "imgUri": "/images/makeup_basic.png",
                        "price": 50000,
                        "name": "기본 메이크업",
                        "description": "자연스러운 기본 메이크업입니다."
                    },
                    {
                        "menuId": 24,
                        "imgUri": "/images/makeup_wedding.png",
                        "price": 150000,
                        "name": "웨딩 메이크업",
                        "description": "특별한 날을 위한 웨딩 메이크업입니다."
                    }
                ]
            },
            {
                "categoryName": "드레스 메이크업",
                "menus": [
                    {
                        "menuId": 25,
                        "imgUri": "/images/makeup_dress.png",
                        "price": 80000,
                        "name": "드레스 메이크업",
                        "description": "드레스와 어울리는 메이크업입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/9_employee1.png",
                "name": "이수민",
                "reviewNum": 2,
                "description": "5년 경력 / 웨딩 메이크업 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/9_employee2.png",
                "name": "김예은",
                "reviewNum": 1,
                "description": "기본 메이크업 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/9_employee3.png",
                "name": "박가영",
                "reviewNum": 1,
                "description": "드레스 메이크업 전문"
            }
        ],
        "reviews":[
            {
                "name":"이수민",
                "rating":"4.7",
                "content":"웨딩 메이크업이 너무 마음에 들었어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"이수민",
                "rating":"4.5",
                "content":"친절하고 세심하게 해주셔서 좋았어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"김예은",
                "rating":"4.8",
                "content":"기본 메이크업인데도 정말 만족스러웠습니다.",
                "menuCategory":"메이크업",
                "menu":"기본 메이크업"
            },
            {
                "name":"박가영",
                "rating":"5.0",
                "content":"드레스 메이크업이 아주 잘 어울렸습니다.",
                "menuCategory":"드레스 메이크업",
                "menu":"드레스 메이크업"
            }
        ]
    },
    {
        "id": 10,
        "name": "헤어나올수있니",
        "category": "헤어",
        "address": "서울특별시 중구 을지로",
        "img": "/images/canYouHairMe.png",
        "detailAddress": "B1",
        "rating": "5.0",
        "description": "고객 맞춤 프리미엄 헤어 서비스를 제공하는 헤어나올수있니입니다.",
        "addressAlias": "을지로3가역 4번 출구",
        "workSchedule": "화-토 10:00 - 19:00",
        "phoneNumber": "02-777-8888",
        "menuCategories": [
            {
                "categoryName": "컷",
                "menus": [
                    {
                        "menuId": 26,
                        "imgUri": "/images/haircut.png",
                        "price": 18000,
                        "name": "남성 컷",
                        "description": "깔끔하고 스타일리시한 남성 컷입니다."
                    },
                    {
                        "menuId": 27,
                        "imgUri": "/images/haircut_women.png",
                        "price": 25000,
                        "name": "여성 컷",
                        "description": "세련된 스타일의 여성 컷입니다."
                    }
                ]
            },
            {
                "categoryName": "펌",
                "menus": [
                    {
                        "menuId": 28,
                        "imgUri": "/images/perm.png",
                        "price": 55000,
                        "name": "일반 펌",
                        "description": "내추럴한 웨이브를 위한 일반 펌입니다."
                    },
                    {
                        "menuId": 29,
                        "imgUri": "/images/digital_perm.png",
                        "price": 75000,
                        "name": "디지털 펌",
                        "description": "손질이 쉬운 디지털 펌입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/10_employee1.png",
                "name": "정민수",
                "reviewNum": 2,
                "description": "10년 경력 / 펌 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/10_employee2.png",
                "name": "박지연",
                "reviewNum": 1,
                "description": "여성 컷 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/10_employee3.png",
                "name": "김준호",
                "reviewNum": 1,
                "description": "남성 컷 전문"
            }
        ],
        "reviews":[
            {
                "name":"정민수",
                "rating":"5.0",
                "content":"펌이 정말 잘 나왔어요! 대만족입니다.",
                "menuCategory":"펌",
                "menu":"일반 펌"
            },
            {
                "name":"정민수",
                "rating":"4.8",
                "content":"디지털 펌이 정말 자연스럽게 나왔어요.",
                "menuCategory":"펌",
                "menu":"디지털 펌"
            },
            {
                "name":"박지연",
                "rating":"5.0",
                "content":"여성 컷 너무 마음에 들어요. 다음에 또 올게요.",
                "menuCategory":"컷",
                "menu":"여성 컷"
            },
            {
                "name":"김준호",
                "rating":"4.9",
                "content":"남성 컷이 깔끔하게 잘 되었어요.",
                "menuCategory":"컷",
                "menu":"남성 컷"
            }
        ]
    },
    {
        "id": 11,
        "name": "메이크업가든",
        "category": "메이크업",
        "address": "서울특별시 강남구 선릉로",
        "img": "/images/byminBrow.png",
        "detailAddress": "301호",
        "rating": "4.8",
        "description": "다양한 메이크업 서비스를 제공하는 메이크업가든입니다.",
        "addressAlias": "선릉역 1번 출구",
        "workSchedule": "월-토 10:00 - 18:00",
        "phoneNumber": "02-789-1234",
        "menuCategories": [
            {
                "categoryName": "메이크업",
                "menus": [
                    {
                        "menuId": 30,
                        "imgUri": "/images/makeup_basic.png",
                        "price": 55000,
                        "name": "기본 메이크업",
                        "description": "자연스러운 기본 메이크업입니다."
                    },
                    {
                        "menuId": 31,
                        "imgUri": "/images/makeup_wedding.png",
                        "price": 160000,
                        "name": "웨딩 메이크업",
                        "description": "특별한 날을 위한 웨딩 메이크업입니다."
                    }
                ]
            },
            {
                "categoryName": "드레스 메이크업",
                "menus": [
                    {
                        "menuId": 32,
                        "imgUri": "/images/makeup_dress.png",
                        "price": 85000,
                        "name": "드레스 메이크업",
                        "description": "드레스와 어울리는 메이크업입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/11_employee1.png",
                "name": "이지혜",
                "reviewNum": 2,
                "description": "7년 경력 / 웨딩 메이크업 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/11_employee2.png",
                "name": "김민정",
                "reviewNum": 1,
                "description": "기본 메이크업 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/11_employee3.png",
                "name": "박지수",
                "reviewNum": 1,
                "description": "드레스 메이크업 전문"
            }
        ],
        "reviews":[
            {
                "name":"이지혜",
                "rating":"4.9",
                "content":"웨딩 메이크업 너무 아름답게 나왔어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"이지혜",
                "rating":"4.7",
                "content":"메이크업이 너무 자연스럽고 예뻤어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"김민정",
                "rating":"4.8",
                "content":"기본 메이크업인데도 정말 만족스럽습니다.",
                "menuCategory":"메이크업",
                "menu":"기본 메이크업"
            },
            {
                "name":"박지수",
                "rating":"5.0",
                "content":"드레스 메이크업이 완벽했어요!",
                "menuCategory":"드레스 메이크업",
                "menu":"드레스 메이크업"
            }
        ]
    },
    {
        "id": 12,
        "name": "제니하우스",
        "category": "메이크업",
        "address": "서울특별시 강남구 압구정로",
        "img": "/images/jennyHouse.png",
        "detailAddress": "202호",
        "rating": "4.3",
        "description": "전문적인 메이크업 서비스를 제공하는 제니하우스입니다.",
        "addressAlias": "압구정역 2번 출구",
        "workSchedule": "화-일 11:00 - 20:00",
        "phoneNumber": "02-456-7891",
        "menuCategories": [
            {
                "categoryName": "메이크업",
                "menus": [
                    {
                        "menuId": 33,
                        "imgUri": "/images/makeup_basic.png",
                        "price": 60000,
                        "name": "기본 메이크업",
                        "description": "자연스러운 기본 메이크업입니다."
                    },
                    {
                        "menuId": 34,
                        "imgUri": "/images/makeup_wedding.png",
                        "price": 140000,
                        "name": "웨딩 메이크업",
                        "description": "특별한 날을 위한 웨딩 메이크업입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/12_employee1.png",
                "name": "정수진",
                "reviewNum": 2,
                "description": "8년 경력 / 웨딩 메이크업 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/12_employee2.png",
                "name": "이윤아",
                "reviewNum": 1,
                "description": "기본 메이크업 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/12_employee3.png",
                "name": "최유진",
                "reviewNum": 1,
                "description": "웨딩 메이크업 전문"
            }
        ],
        "reviews":[
            {
                "name":"정수진",
                "rating":"4.5",
                "content":"웨딩 메이크업이 너무 마음에 들어요!",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"정수진",
                "rating":"4.3",
                "content":"친절하게 상담해주셔서 좋았어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"이윤아",
                "rating":"4.6",
                "content":"기본 메이크업이 너무 예쁘게 나왔어요.",
                "menuCategory":"메이크업",
                "menu":"기본 메이크업"
            },
            {
                "name":"최유진",
                "rating":"4.8",
                "content":"웨딩 메이크업 정말 만족스럽습니다.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            }
        ]
    },
    {
        "id": 13,
        "name": "파인트리",
        "category": "메이크업",
        "address": "서울특별시 종로구 종로",
        "img": "/images/finetree.png",
        "detailAddress": "501호",
        "rating": "5.0",
        "description": "고객 맞춤형 메이크업 서비스를 제공하는 파인트리입니다.",
        "addressAlias": "종로3가역 5번 출구",
        "workSchedule": "월-금 09:00 - 18:00",
        "phoneNumber": "02-789-2345",
        "menuCategories": [
            {
                "categoryName": "메이크업",
                "menus": [
                    {
                        "menuId": 35,
                        "imgUri": "/images/makeup_basic.png",
                        "price": 50000,
                        "name": "기본 메이크업",
                        "description": "자연스러운 기본 메이크업입니다."
                    },
                    {
                        "menuId": 36,
                        "imgUri": "/images/makeup_wedding.png",
                        "price": 150000,
                        "name": "웨딩 메이크업",
                        "description": "특별한 날을 위한 웨딩 메이크업입니다."
                    }
                ]
            },
            {
                "categoryName": "드레스 메이크업",
                "menus": [
                    {
                        "menuId": 37,
                        "imgUri": "/images/makeup_dress.png",
                        "price": 80000,
                        "name": "드레스 메이크업",
                        "description": "드레스와 어울리는 메이크업입니다."
                    }
                ]
            }
        ],
        "employees" : [
            {
                "id": 1,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/13_employee1.png",
                "name": "박세은",
                "reviewNum": 2,
                "description": "6년 경력 / 웨딩 메이크업 전문"
            },
            {
                "id": 2,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/13_employee2.png",
                "name": "이정민",
                "reviewNum": 1,
                "description": "기본 메이크업 전문"
            },
            {
                "id": 3,
                "profileImgUri": "https://booksly-img-server.s3.ap-northeast-2.amazonaws.com/employees/13_employee3.png",
                "name": "김하늘",
                "reviewNum": 1,
                "description": "드레스 메이크업 전문"
            }
        ],
        "reviews":[
            {
                "name":"박세은",
                "rating":"4.9",
                "content":"웨딩 메이크업 너무 예뻐요!",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"박세은",
                "rating":"4.7",
                "content":"자연스럽고 예쁜 메이크업이었어요.",
                "menuCategory":"메이크업",
                "menu":"웨딩 메이크업"
            },
            {
                "name":"이정민",
                "rating":"4.8",
                "content":"기본 메이크업이지만 정말 만족합니다.",
                "menuCategory":"메이크업",
                "menu":"기본 메이크업"
            },
            {
                "name":"김하늘",
                "rating":"5.0",
                "content":"드레스 메이크업이 정말 마음에 들었어요.",
                "menuCategory":"드레스 메이크업",
                "menu":"드레스 메이크업"
            }
        ]
    },
    {
        "id": 14,
        "name": "약손명가",
        "category": "마사지",
        "address": "서울특별시 서대문구 신촌로",
        "img": "/images/drugHand.png",
        "detailAddress": "B2",
        "rating": "2.0",
        "description": "전문적인 마사지 서비스를 제공하는 약손명가입니다.",
        "addressAlias": "신촌역 3번 출구",
        "workSchedule": "월-토 10:00 - 21:00",
        "phoneNumber": "02-888-9999",
        "menuCategories": [
            {
                "categoryName": "바디 마사지",
                "menus": [
                    {
                        "menuId": 38,
                        "imgUri": "/images/body_massage.png",
                        "price": 70000,
                        "name": "전신 마사지",
                        "description": "피로를 풀어주는 전신 마사지입니다."
                    }
                ]
            },
            {
                "categoryName": "페이스 마사지",
                "menus": [
                    {
                        "menuId": 39,
                        "imgUri": "/images/face_massage.png",
                        "price": 50000,
                        "name": "얼굴 마사지",
                        "description": "피부를 맑고 생기있게 하는 얼굴 마사지입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee1.png",
                "name": "홍길동",
                "reviewNum": 2,
                "description": "10년 경력 / 바디 마사지 전문가"
            },
            {
                "id": 2,
                "profileImgUri": "https://example.com/employee2.png",
                "name": "김철수",
                "reviewNum": 1,
                "description": "5년 경력 / 페이스 마사지 전문가"
            }
        ],
        "reviews": [
            {
                "name": "홍길동",
                "rating": "4.0",
                "content": "친절하고 세심한 마사지였습니다.",
                "menuCategory": "바디 마사지",
                "menu": "전신 마사지"
            },
            {
                "name": "김철수",
                "rating": "3.0",
                "content": "피부가 맑아졌어요. 감사합니다.",
                "menuCategory": "페이스 마사지",
                "menu": "얼굴 마사지"
            }
        ]
    },
    {
        "id": 15,
        "name": "순수 청담본점",
        "category": "메이크업",
        "address": "서울특별시 강남구 청담동",
        "img": "/images/sunsu.png",
        "detailAddress": "102호",
        "rating": "4.0",
        "description": "고급스러운 메이크업 서비스를 제공하는 순수 청담본점입니다.",
        "addressAlias": "청담역 8번 출구",
        "workSchedule": "월-금 10:00 - 19:00",
        "phoneNumber": "02-333-4445",
        "menuCategories": [
            {
                "categoryName": "메이크업",
                "menus": [
                    {
                        "menuId": 40,
                        "imgUri": "/images/makeup_basic.png",
                        "price": 55000,
                        "name": "기본 메이크업",
                        "description": "자연스러운 기본 메이크업입니다."
                    },
                    {
                        "menuId": 41,
                        "imgUri": "/images/makeup_wedding.png",
                        "price": 130000,
                        "name": "웨딩 메이크업",
                        "description": "특별한 날을 위한 웨딩 메이크업입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee3.png",
                "name": "이영희",
                "reviewNum": 3,
                "description": "8년 경력 / 메이크업 전문가"
            },
            {
                "id": 2,
                "profileImgUri": "https://example.com/employee4.png",
                "name": "박미영",
                "reviewNum": 1,
                "description": "6년 경력 / 웨딩 메이크업 전문가"
            }
        ],
        "reviews": [
            {
                "name": "이영희",
                "rating": "4.5",
                "content": "자연스러운 메이크업을 해주셔서 감사합니다.",
                "menuCategory": "메이크업",
                "menu": "기본 메이크업"
            },
            {
                "name": "박미영",
                "rating": "5.0",
                "content": "웨딩 메이크업이 정말 마음에 들었어요.",
                "menuCategory": "메이크업",
                "menu": "웨딩 메이크업"
            }
        ]
    },
    {
        "id": 16,
        "name": "수힐링아로마",
        "category": "마사지",
        "address": "서울특별시 강서구 화곡로",
        "img": "/images/su.png",
        "detailAddress": "2층",
        "rating": "5.0",
        "description": "힐링 아로마 마사지를 제공하는 수힐링아로마입니다.",
        "addressAlias": "화곡역 5번 출구",
        "workSchedule": "화-일 11:00 - 22:00",
        "phoneNumber": "02-555-6667",
        "menuCategories": [
            {
                "categoryName": "바디 마사지",
                "menus": [
                    {
                        "menuId": 42,
                        "imgUri": "/images/body_massage.png",
                        "price": 80000,
                        "name": "전신 아로마 마사지",
                        "description": "피로를 풀어주는 전신 아로마 마사지입니다."
                    }
                ]
            },
            {
                "categoryName": "페이스 마사지",
                "menus": [
                    {
                        "menuId": 43,
                        "imgUri": "/images/face_massage.png",
                        "price": 60000,
                        "name": "얼굴 아로마 마사지",
                        "description": "피부를 맑고 생기있게 하는 얼굴 아로마 마사지입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee5.png",
                "name": "최수정",
                "reviewNum": 3,
                "description": "10년 경력 / 아로마 마사지 전문가"
            },
            {
                "id": 2,
                "profileImgUri": "https://example.com/employee6.png",
                "name": "한유리",
                "reviewNum": 1,
                "description": "5년 경력 / 페이스 마사지 전문가"
            }
        ],
        "reviews": [
            {
                "name": "최수정",
                "rating": "5.0",
                "content": "정말 힐링되는 시간이었어요. 감사합니다.",
                "menuCategory": "바디 마사지",
                "menu": "전신 아로마 마사지"
            },
            {
                "name": "한유리",
                "rating": "4.8",
                "content": "피부가 정말 좋아졌어요. 추천합니다.",
                "menuCategory": "페이스 마사지",
                "menu": "얼굴 아로마 마사지"
            }
        ]
    },
    {
        "id": 17,
        "name": "더풋샵",
        "category": "마사지",
        "address": "서울특별시 용산구 한강로",
        "img": "/images/thefoot.png",
        "detailAddress": "3층",
        "rating": "4.1",
        "description": "전문적인 발 마사지를 제공하는 더풋샵입니다.",
        "addressAlias": "한강진역 1번 출구",
        "workSchedule": "월-금 10:00 - 20:00",
        "phoneNumber": "02-444-5556",
        "menuCategories": [
            {
                "categoryName": "발 마사지",
                "menus": [
                    {
                        "menuId": 44,
                        "imgUri": "/images/foot_massage.png",
                        "price": 50000,
                        "name": "기본 발 마사지",
                        "description": "피로를 풀어주는 기본 발 마사지입니다."
                    },
                    {
                        "menuId": 45,
                        "imgUri": "/images/reflexology.png",
                        "price": 70000,
                        "name": "리플렉솔로지",
                        "description": "발과 다리를 시원하게 풀어주는 리플렉솔로지입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee7.png",
                "name": "서준영",
                "reviewNum": 2,
                "description": "8년 경력 / 발 마사지 전문가"
            },
            {
                "id": 2,
                "profileImgUri": "https://example.com/employee8.png",
                "name": "이상훈",
                "reviewNum": 1,
                "description": "5년 경력 / 리플렉솔로지 전문가"
            }
        ],
        "reviews": [
            {
                "name": "서준영",
                "rating": "4.5",
                "content": "발 마사지가 정말 시원했습니다.",
                "menuCategory": "발 마사지",
                "menu": "기본 발 마사지"
            },
            {
                "name": "이상훈",
                "rating": "4.0",
                "content": "리플렉솔로지가 최고였어요. 추천합니다.",
                "menuCategory": "발 마사지",
                "menu": "리플렉솔로지"
            }
        ]
    },
    {
        "id": 18,
        "name": "바디클리닉",
        "category": "마사지",
        "address": "서울특별시 노원구 노원로",
        "img": "/images/bodyClinic.png",
        "detailAddress": "4층",
        "rating": "4.6",
        "description": "전문적인 바디 마사지 서비스를 제공하는 바디클리닉입니다.",
        "addressAlias": "노원역 6번 출구",
        "workSchedule": "화-일 10:00 - 19:00",
        "phoneNumber": "02-666-7778",
        "menuCategories": [
            {
                "categoryName": "바디 마사지",
                "menus": [
                    {
                        "menuId": 46,
                        "imgUri": "/images/body_massage.png",
                        "price": 75000,
                        "name": "전신 마사지",
                        "description": "피로를 풀어주는 전신 마사지입니다."
                    },
                    {
                        "menuId": 47,
                        "imgUri": "/images/sports_massage.png",
                        "price": 85000,
                        "name": "스포츠 마사지",
                        "description": "근육 피로 회복을 위한 스포츠 마사지입니다."
                    }
                ]
            },
            {
                "categoryName": "스웨디시 마사지",
                "menus": [
                    {
                        "menuId": 48,
                        "imgUri": "/images/swedish_massage.png",
                        "price": 90000,
                        "name": "스웨디시 마사지",
                        "description": "편안한 스웨디시 마사지입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee9.png",
                "name": "김현우",
                "reviewNum": 3,
                "description": "12년 경력 / 스포츠 마사지 전문가"
            },
            {
                "id": 2,
                "profileImgUri": "https://example.com/employee10.png",
                "name": "박지민",
                "reviewNum": 1,
                "description": "8년 경력 / 스웨디시 마사지 전문가"
            }
        ],
        "reviews": [
            {
                "name": "김현우",
                "rating": "5.0",
                "content": "정말 시원한 스포츠 마사지였습니다.",
                "menuCategory": "바디 마사지",
                "menu": "스포츠 마사지"
            },
            {
                "name": "박지민",
                "rating": "4.8",
                "content": "스웨디시 마사지가 편안하고 좋았어요.",
                "menuCategory": "바디 마사지",
                "menu": "스웨디시 마사지"
            }
        ]
    },
    {
        "id": 19,
        "name": "북슬리샵",
        "category": "기타",
        "address": "서울특별시 종로구 인사동길",
        "img": "/images/eyelash.jpg",
        "detailAddress": "102호",
        "rating": "5.0",
        "description": "다양한 서비스와 제품을 제공하는 북슬리샵입니다.",
        "addressAlias": "안국역 3번 출구",
        "workSchedule": "화-일 10:00 - 20:00",
        "phoneNumber": "02-777-8889",
        "menuCategories": [
            {
                "categoryName": "기타",
                "menus": [
                    {
                        "menuId": 49,
                        "imgUri": "/images/eyelash.png",
                        "price": 30000,
                        "name": "속눈썹 연장",
                        "description": "자연스럽고 긴 속눈썹 연장입니다."
                    }
                ]
            }
        ],
        "employees": [
            {
                "id": 1,
                "profileImgUri": "https://example.com/employee11.png",
                "name": "조민주",
                "reviewNum": 4,
                "description": "5년 경력 / 속눈썹 연장 전문가"
            }
        ],
        "reviews": [
            {
                "name": "조민주",
                "rating": "5.0",
                "content": "속눈썹이 자연스럽고 예쁘게 연장되었어요.",
                "menuCategory": "기타",
                "menu": "속눈썹 연장"
            },
            {
                "name": "조민주",
                "rating": "4.9",
                "content": "서비스가 정말 만족스러웠습니다.",
                "menuCategory": "기타",
                "menu": "속눈썹 연장"
            }
        ]
    }
];
