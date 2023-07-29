//imports
const express = require("express");
const app = express();

app.use(express.json());


// var data = [
//     {
//         "title": "Classic Car",
//         "price": "$45/day",
//         "liked": false
//     }
// ]

var BeepAPP = {
    "splashImage": [
        {
            "img": "https://s3-alpha-sig.figma.com/img/82ff/d00e/d5d5a853b75f04cc913aef27a332353f?Expires=1691366400&Signature=PD2yqQsn2XrUCZvjiQWAzmuMMULs8jKGreVCbkMFe5pkApjJJSULPBzJb-xTj4rGNbdzTQI6~~E7qWUHhTdwL9ANTciaW9AZghD4z9vjDwdKtLnOtzyT1dPNEa1XojaBHh7zuUe3bBiLG2FSkIvVWkuidkCgVouMnlswM8EOp41V~9FU7qWeJoejcMk4IRyPk5B4n1bTTuWD1SmCWTsGRKTc3KZkzkeZ70JKYO4pXFHxCr0vCLIudpqEIA-W670gU1ywSfHr3-OtBa0MKOAF6ANXwXACfxO817YD1vpFDbUqRkB3OvpE0jVH3TGuejyeeTNRgTCwMiRpGbpb6JNEKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "img": "https://s3-alpha-sig.figma.com/img/ee66/da1b/f2fb2ce7aa3a81428c0b9f592cbce0fb?Expires=1691366400&Signature=pKkkkjT0IWxOcbrisejTRkMxsU8b7vXN294uC5ajmXMzo~CpjozYlTEsWTxwizPbB3rWdnTRPkycnwHNuhDNAzmYjepD10eWZoHwduBylnpmL07xVOgmu-d7rnwR1WFtZ-7ar51Mw~93ij7ljC~6uwY1hxRnRjWSiyLDVU57SDJdzAjxRFQ1wyVsqwscRhnfnam8MUJlZMIvKnItiWPMbhGfli1rC~zOy1fkglGcE4qGtb~6ipQ9lyp6SITSVskNYfvPMpOt~pGODujplwLPSGsWvO9P-28YHaNhgWE9vf2U4ZLLipV-5p-C2KzO6Zlj4Du2MLHwh7R52lNSYRa89w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "img": "https://s3-alpha-sig.figma.com/img/99d6/799a/7fe0ba2099bc091176fe2816a0a156eb?Expires=1691366400&Signature=RPy2YVDodCRFTMzBmmTIs7nIEa1lmuZ-WiBdwUYDGSR6nH9lKYsqQNths~HKPoOXNXYYSD5FIdsemCExS8s088Jff1dxiSlix0KA5zRYfsNmh43UTgS~axo-r9xU-T20X9dBDjVC0n7sYmQI1ObQqL5U8-Q9gBw1wfMU~b4NOAH4D5i3474SC9WUBNi2i0qzHnlRESgDw77LTt2mLpug1QoSBSlPYcWXjkFaDQ4aXmk0IuUZSPjOwgYQjld4wi9tRqgrkvwq7FAzzJdIn16JXQhXsmOqBK2LyVzQQv19EZdrT3gJJ8i9-35rWJlDvK83sFN5yIZM8mIcO~Z5tw14vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "img": "https://s3-alpha-sig.figma.com/img/04d5/93d0/f3ebaeaf897efb21f9bc4693f00bb8b0?Expires=1691366400&Signature=Wz5P~rSvK0jyNVdFOiYr4OSb1em5bqM5gfFNZn9Ojv8OLZb45mzPP-wryqJTneEgKjcaOSJwiXnXfnaQ9Cy3WzUmFb0xR~yA-i04KtDFXQt3JUmVh-5HxrkDmeGNxwhVORio0yA40IkVtzo9oXZ1KWrfPRinZCu19NDrwbqtjrT1y1aJtuamLTSx8j67lwIeNePL7U3ggAThxVithVtrHgypYAZOUV31f2qLsQ7AXAq0FYcEXVRcvpOMQT~d76FYoCeGiR5aB7WJ6iJUT8eu138yBwhrqhx5nadGQrjNerZ99KfLLZOyPEzrLd8ciZq3Cbf3bn4HMiMDMQvRSx7rrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
    ],
    "HomeImage": [
        {
            "title": "Cars",
            "img": "https://s3-alpha-sig.figma.com/img/4fa8/b5c2/517842c7d2e83a668fedbbd9fd46b1e3?Expires=1691366400&Signature=CjIT8-hjSMrLrRzqlZnX8MiKrnhQuoxci7wHRIS~ePLFBr3wWBHB~FMl-GlijtnJnJAp96L7-mT49WaCTJH71uA6vZFEQyejs5rMn0cz64lWtRYhDr5tP5hMi8g7yvicPlp-dm9dZUEU3WsEh~c6WnybtRUuRZu7Fe0FKi3tuaGpM0y9~V6vSBq8MNYI65msvRWRfgyDAMsy4G2ZtI44UMEpp54OMJcru6BL0YAxa2dSCvvV8JUbacgdnMRNySMU6OKGpLR-~UYDgxbKgRvyN7fm3q8yi0~PBunzGEM657Wyje78dv846g7Crzzw915MgfE9vcnMfCimXYeiROtJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "title": "Big Cars",
            "img": "https://s3-alpha-sig.figma.com/img/337c/8bf6/0fcfb13dbb7723cbdd9259bdfb719897?Expires=1691366400&Signature=FTThD4PGjUDMrrug0dQofxHX-1ywACah6JXIUCASdyHBxVKnbs-8BDp6i~I9VIIiFXLrSbKhexu5JY8pQ3vhHavfutuXaB211YsHKvrpJklvT-BDzOEBttoqU~FcT1q3h9YkUT55YF6nXA60HOvEeANM9qqrF19KdS9o8ixKAC4cJGpqAyrhC0VXVJ9yUAMafSqNvZK1STnzhVc0IGmd70XNukqDzyDcuF7Ny0k9pqKyQOw9DXo4ODTuRO4E0HGj~PACt5riRk2ngwOAlAgGx7z6GNxMhjPrVJ-ZkXef49qPtHJImQIXAV3vNZ0f3GaHSxixktJYuEjzAvEv48uX8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "title": "Bikes",
            "img": "https://s3-alpha-sig.figma.com/img/1461/086d/640d50a53e9fa59a254e2164a9c30294?Expires=1691366400&Signature=ZPR1NfW1gBk7oPcgH8YtHbB~pgMInaIQcPqZSNRekXnEY7nrH4AWR6e6vJbrv2jTF9xbujocaSnMeTyrWgJf-vyxVPkAucjO2KZbZJ8JeNdIC~NDpQkFq7H7X1qiNLO670ZK-8qZB6xdv95gb~UWEAZNASyfGYL4EHWxGcoJQubjvzIhOjdXHc9Vdgf6PPOQcwsshDcmV~ghtJCvIjbEWqVjWSOFL1g5Bab1Xm8zKJ9ZZZw~qBx2JrGDhTzVSGZACJo6sNDkogrb2RYk1qEQShzq12wT86nv56chh~6Nzv0nXNowTAdwR6qhlIMUQDliaQW63FclruDFzohmKxhXUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "title": "RVs",
            "img": "https://s3-alpha-sig.figma.com/img/4ee3/ab18/ecd099501bc9399eb9ac1d94a7cb578e?Expires=1691366400&Signature=N0FZZ7TMB-dHezCHXtWMmdugbrArDAtqr57qOf9IZ1IR5TiIxBmjCu2pqtLKx7ghWpYwUriEvOTzzri7I5STBiO~HKa7KkvJoxq4lRWohc7DayJwtvaCd7o1Mt7a4ZCMP83z8wOfYFFo5R4BUc6tBu3f3rLUqpO-bFVaYe8lzB5Xp2CyazGPo8Hzq-CGJHoYGj3MUfDxgke7HmokvgW~U3ZbJZ3lna58b4j8SY4iX3zihH2gxuL7XNFJdB12a08FBpHioIH-oeMfDfOhnNV45lphEsK7Gu72PZmEo7bra1p9EbsR37bgzwTGThvHVC64M23eFpKjy-Zmv8uSl4da7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            "title": "Scooters",
            "img": "https://s3-alpha-sig.figma.com/img/0d76/a2ab/5e0b631ee3067028dad5f8788b673164?Expires=1691366400&Signature=cPx-4b4WTH5NGm9-Y9u0GiG465v1G94EbWNEgM14JgQFfD-TPsGM0ljWVwZPIczI3M11GKwrGu2UnTvE-YtKelHRXlBIz26GYOJ2lOWAPbFImTjG4JNteK0v6OlLyS~OSK1Co9Em6m1u~VqF-D2D7oJ5kvn~w7ht27xX6zOyFkLzH4pQToxZT2JVRHX6mMAINqd637UxfUAcvBScB0VdwJnEiL9MZ6Ii1eogaRvLoZWilK~fMY9GxbuIdaZ9QLSdPTHioShUh-7HsTcgam9q78l5FcPpmzbvGsxkZStDIrdtNgx9CjuSAZRE3Vu8LHOnRjaFZYrCYdX540vOU1FSaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
    ],
    "cars": [
        {
            "title": "Classic Car",
            "price": "\$34",
            "img": "https://s3-alpha-sig.figma.com/img/4fa8/b5c2/517842c7d2e83a668fedbbd9fd46b1e3?Expires=1691366400&Signature=CjIT8-hjSMrLrRzqlZnX8MiKrnhQuoxci7wHRIS~ePLFBr3wWBHB~FMl-GlijtnJnJAp96L7-mT49WaCTJH71uA6vZFEQyejs5rMn0cz64lWtRYhDr5tP5hMi8g7yvicPlp-dm9dZUEU3WsEh~c6WnybtRUuRZu7Fe0FKi3tuaGpM0y9~V6vSBq8MNYI65msvRWRfgyDAMsy4G2ZtI44UMEpp54OMJcru6BL0YAxa2dSCvvV8JUbacgdnMRNySMU6OKGpLR-~UYDgxbKgRvyN7fm3q8yi0~PBunzGEM657Wyje78dv846g7Crzzw915MgfE9vcnMfCimXYeiROtJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffDF7588
        },
        {
            "title": "Sport Car",
            "price": "\$55",
            "img": "https://s3-alpha-sig.figma.com/img/43c1/3913/5038a0ee3fb5174ec83bce73f1ff3ba4?Expires=1691366400&Signature=nLFBq900ec45zxnyR8XnpddkE~~liRd70rQi0BWXGaAeIP5aaSZoG8o5poRJP0PbiZPQe-UG3ovQF-7QcufEPcj1-M10096Js2JYTBn~fcb9pSV13-HSz6b2BvwQLlmNiLcboIcGayRoYCFNEJFA2VmvAOn3rC9UwjfyuWRUkktRoZ7VTWe6h3Nn1ZkHSpn5MxTp~Ft-sWR-9QkJlTESHFQyxDRcyOsAmECSTUauh1yVb~OnvRV9Mh~QO47uSR8zhROtUTJFS9sRGjKSxrfrknOCRAws4prCNCbfPouwdhW0K16yAv1XHlRIJ5Tvt157Py9rT6qHfj1VWaF0maLpvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff60B5F4
        },
        {
            "title": "Flying Car",
            "price": "\$500",
            "img": "https://s3-alpha-sig.figma.com/img/eb77/08e6/aba8f2a85d14a8e308a624a7198af3f1?Expires=1691366400&Signature=loDd072FpZL9XMAu0SzSg36u5QaZspDcvsziiy3o~xNdMTE~LQRYSNwgr-g3dbEKKUSVnsiA95ZLQu8TN9-Hgl5KB49wSDmjo47ppQCQXqSRQBngk-dPPcJX3XY1m835Xyz60SKZ9dQ328U1qjNsKUQn2L1kKPxDdGFdKM~-32vhOAHLhm6VNS5RN4BNgGG9BH0vai496sLAxhzQpKNI5LIK8cKlBkkadEUQOo5WXYWldtuwSOmvuCyPoUlSTl0v2a68a-UQ155FbdLQs2TVgwT9e1lnl4lMZBHpmTgKS2~dHo73zPSMFZtHP2ZlkXHP5~q1BB-wHkE3KQH-jeCdOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff8382C2
        },
        {
            "title": "Taxi Car",
            "price": "\$45",
            "img": "https://s3-alpha-sig.figma.com/img/88c8/ce78/df8b53672438f5aa1a9fc9778c831ccd?Expires=1691366400&Signature=oEq8B9e0oILSDGnOtdIR7JgLe2cNzZUSq15ntGS-~EXHTil~ArQ7-SZ6MF-K4vJ4sjUboImdXcNUTer4Z~vUqmIxd4Boc-DQViOoLJPlS2AZhsSRhwh9iFgMbOt-AD-q3~SdelweDPFXaA6veeJwu-jOj-Om~Md0ObXP5OfU21Y8UhoouEKTj7H0tH3h1DRDe-Hly7ASkJg6ZZaa680Jfi1oL0gn6vFC8RIiTXVLh5OhoPH5RenaKaBu51-yvNpdQZKrKKoxAWNE69sk32UdFHz1yrIfkloWyreFk5UDHF~infXEegKB7HFN4zNWide1b7Gsb1Dgvb0y-n6kL5rNJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffE4C970
        },
        {
            "title": "Wagon Car",
            "price": "\$36",
            "img": "https://s3-alpha-sig.figma.com/img/5d57/6736/0ac608d433d80f00ff40ec64963d2ab7?Expires=1691366400&Signature=DyR7xZKjrCf4CLQasmH55fawbVTr~rYk9S-SMpM5~i6MUCqPabWHtp~g71yErqH3VcY9Sk43SN~fxIWmL~r9~oZDKWnqmD29cKPcX7OdBZZl4lkMeRWjMNVLtJWxaqVPpAZts5QC-ZOvBY4oYW91LEC1~XZ6IaeoQoI-lLfafeRbx7ZkJRmr6sQeSnpscAOm7P2QiBSiOYPd0OCbb94godPYp4jO5vOdr81eyvSl12-vvwfYPJbuADd-NM6Puk8b5-4ed1gKS3zczfLkQft8XsJRUxbkzZX7NxKYusRC8TSLODriDGFypCYJriNcz7hb1FAR1Ujf4QSJ~GGibxl59A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff2A3640
        },
        {
            "title": "Limo Car",
            "price": "\$47",
            "img": "https://s3-alpha-sig.figma.com/img/9b69/dbc6/aecbddc0bd97c97dfdb25ffa5d3679a6?Expires=1691366400&Signature=Uu8Lez311O6eGImIVGAStozeYBQh7JhIUPgZHgeU-8S-NFO6LYKL-y2XkGEgEgJZiMgtt3MRvuz6L83EltVMNIe0eCzKPLQ4XG8gRWRHcIht9ruyiCXM8SWExjIQ0ITwCs8XD7xcgtea1pERnAk5uL4y7h908lScmFBTr6Nn5Lxz38LEe8LexZAULF4BJvRknTcyYu3DsOVyn5pBwBmxx3xB9L0yEREFPLYMvPQAkAYQrqFUtlPYz0qXUOGxuKtpGCUd0vlnWHQPZ~j-8rbeTzHutNCapvbmilPauHkxqyEJLLi6~8bl5RsmPPljJn~z1B6aGUrYUqkNeiF8ewSKVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
    ],
    "bigCars": [
        {
            "title": "Motorhome",
            "price": "\$34",
            "img": "https://s3-alpha-sig.figma.com/img/337c/8bf6/0fcfb13dbb7723cbdd9259bdfb719897?Expires=1691366400&Signature=FTThD4PGjUDMrrug0dQofxHX-1ywACah6JXIUCASdyHBxVKnbs-8BDp6i~I9VIIiFXLrSbKhexu5JY8pQ3vhHavfutuXaB211YsHKvrpJklvT-BDzOEBttoqU~FcT1q3h9YkUT55YF6nXA60HOvEeANM9qqrF19KdS9o8ixKAC4cJGpqAyrhC0VXVJ9yUAMafSqNvZK1STnzhVc0IGmd70XNukqDzyDcuF7Ny0k9pqKyQOw9DXo4ODTuRO4E0HGj~PACt5riRk2ngwOAlAgGx7z6GNxMhjPrVJ-ZkXef49qPtHJImQIXAV3vNZ0f3GaHSxixktJYuEjzAvEv48uX8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
        {
            "title": "Pickup",
            "price": "\$55",
            "img": "https://s3-alpha-sig.figma.com/img/c414/81cf/fccdc22c39a6a1a6b813f7b3169331a8?Expires=1691366400&Signature=fR7Mi5aoC10mCEO57QcERPFFnDD1KnjzhCyb2BacE0gzBnfy7H9d-3HhrKVYChgSZXFd8MBpqgW5mC8BaTBfXUa8No5IEv7ORGo1gM4Pu~dYKZWFT0fSAdukRF6yL6FhdLsv3JUVWFWQFB7SioIsFdAtsziWr6PBemMIDnes4oRDfN6Cv0MYMsnw-2NojvEs0Nn1TwGTRltBI8qVE6ZgGAn1Pm7DFBUmE54oJN4x7VhhFzBYBS9VXGAK9lE8bUkLotJ1JuNS8o5z8ZIK641mdPcXQ2cBaJk0daV-mXXOolNIi6WjKZB7X4NfbCFa3pJhslpdJR9f~7z05BdraVnawQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff60B5F4
        },
        {
            "title": "Airplane",
            "price": "\$500",
            "img": "https://s3-alpha-sig.figma.com/img/0921/f09a/de0bc77f86163cd2af89c5a1de8085f9?Expires=1691366400&Signature=S2YxBpsrh20TxfalfQmUjWt9lbOQTiXrjuEBJ-LPlh8Km5F998sIQ1OcaNpxgSKmjUnkHYl8VR~ek6q6jmkjRiPcfLEsyYDiz4-~rNBjXXqyCQpchWImPaAihYm4JzsD2lUPjMblvdriuMGjVls10~iPzSUI4Z1Ng9B8H30y7b36Ox0fuzHaDXn2BPyjdLFtQDwVV5RLdMUNYVai1H8bRbNUb8bsuiYp0ft70Q~MpPg8ptEPhFpeRucDKsSqmb4VTnyZ~DiQXpoc3CvzvFSPctambkFwKB9zWIyAX8GefOJnDoqlKZu6D8DtV1hnb-8PkKy6wnDBpRjjSuREZiUkhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffA34D48
        },
        {
            "title": "Bus",
            "price": "\$45",
            "img": "https://s3-alpha-sig.figma.com/img/4ee3/ab18/ecd099501bc9399eb9ac1d94a7cb578e?Expires=1691366400&Signature=N0FZZ7TMB-dHezCHXtWMmdugbrArDAtqr57qOf9IZ1IR5TiIxBmjCu2pqtLKx7ghWpYwUriEvOTzzri7I5STBiO~HKa7KkvJoxq4lRWohc7DayJwtvaCd7o1Mt7a4ZCMP83z8wOfYFFo5R4BUc6tBu3f3rLUqpO-bFVaYe8lzB5Xp2CyazGPo8Hzq-CGJHoYGj3MUfDxgke7HmokvgW~U3ZbJZ3lna58b4j8SY4iX3zihH2gxuL7XNFJdB12a08FBpHioIH-oeMfDfOhnNV45lphEsK7Gu72PZmEo7bra1p9EbsR37bgzwTGThvHVC64M23eFpKjy-Zmv8uSl4da7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffE4C970
        },
        {
            "title": "Wagon Car",
            "price": "\$36",
            "img": "https://s3-alpha-sig.figma.com/img/416e/c814/f3c69841ae513f6ab4bf8e5e891a3287?Expires=1691366400&Signature=nshUI~AtS6fCbcAB0fapjZ6V7n1X8T44oWAwyywNG0M84WSL6JQ4iDXVuBudBnR7ZiJZ3UoaZ2~p~iTAX56HCyM3OhkZPnu5KNKhtzSxsZafBnemnvhVUsm8dqqddAgY6cCbsgxi6gxPo~ydulmD6OQuCZ0LS2CZ-j1CjK8jGrr030hvCNu4EnXQZsVSKG7~63Ge0BG-230nUCpm3WdMWt9~QRO3RepIZK3f2y5PQkufGdVDIDjlwEEItCrH6mwkhgEQQNbgjUNFVxvF4smHQTeJdqp0N02-hTAuHLLZ4ntRO5Y316iYL07Qpq1Bp86AWeIIGX9VOeUnpSyCXQ9k6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff2A3640
        },
        {
            "title": "Limo Car",
            "price": "\$47",
            "img": "https://s3-alpha-sig.figma.com/img/9b69/dbc6/aecbddc0bd97c97dfdb25ffa5d3679a6?Expires=1691366400&Signature=Uu8Lez311O6eGImIVGAStozeYBQh7JhIUPgZHgeU-8S-NFO6LYKL-y2XkGEgEgJZiMgtt3MRvuz6L83EltVMNIe0eCzKPLQ4XG8gRWRHcIht9ruyiCXM8SWExjIQ0ITwCs8XD7xcgtea1pERnAk5uL4y7h908lScmFBTr6Nn5Lxz38LEe8LexZAULF4BJvRknTcyYu3DsOVyn5pBwBmxx3xB9L0yEREFPLYMvPQAkAYQrqFUtlPYz0qXUOGxuKtpGCUd0vlnWHQPZ~j-8rbeTzHutNCapvbmilPauHkxqyEJLLi6~8bl5RsmPPljJn~z1B6aGUrYUqkNeiF8ewSKVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
    ],
    "bikes": [
        {
            "title": "Vespa",
            "price": "\$34",
            "img": "https://s3-alpha-sig.figma.com/img/a1de/7a1a/1c560587dcf3daaccb897f011ca400a9?Expires=1691366400&Signature=pRDGGIilc2IYNr-jmqYHvX5vbV7XKk75zWmWqfJ6VlQ5-0FG2jLts6E9brGkH~CnxefacNC4JKsXjZ-~gAiiA7PB8h1bgces8bPyiMQC7r3de1f7w-gfm1nu1-PZ-R1hfnQkCH45P3mY0SQae7rq9Li6WBltnuCAQNPfrmnQBsqx2R3ttMxnkhgd903DtTC9zg0UrPzM4VlPhRZ80pcpE8oTl222Aw-9PGWrwai-2C8xjTteo-vrkeLbdBDagZ4QJQUjCVl0vXCxOZAHY7YjJBNwxUkEDqSu5tMcP~CfwUNeHlVQO~wQnLhTZ6wk~l9L3N~8cRJ~oP~qNf5fN4lO2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffD7913F
        },
        {
            "title": "Electric Bike",
            "price": "\$55",
            "img": "https://s3-alpha-sig.figma.com/img/1461/086d/640d50a53e9fa59a254e2164a9c30294?Expires=1691366400&Signature=ZPR1NfW1gBk7oPcgH8YtHbB~pgMInaIQcPqZSNRekXnEY7nrH4AWR6e6vJbrv2jTF9xbujocaSnMeTyrWgJf-vyxVPkAucjO2KZbZJ8JeNdIC~NDpQkFq7H7X1qiNLO670ZK-8qZB6xdv95gb~UWEAZNASyfGYL4EHWxGcoJQubjvzIhOjdXHc9Vdgf6PPOQcwsshDcmV~ghtJCvIjbEWqVjWSOFL1g5Bab1Xm8zKJ9ZZZw~qBx2JrGDhTzVSGZACJo6sNDkogrb2RYk1qEQShzq12wT86nv56chh~6Nzv0nXNowTAdwR6qhlIMUQDliaQW63FclruDFzohmKxhXUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffDF7588
        },
        {
            "title": "Delivery Bike",
            "price": "\$500",
            "img": "https://s3-alpha-sig.figma.com/img/be8b/82cb/abea82d1bb0db2961f3d8b2f884eb4c4?Expires=1691366400&Signature=qrBh0V5k4rzK4Ce-K1dZqpauvBFZS-xvQnuLDkZ5EC3qNXnf3hkTwPcPb6hgwkOM0648qXaTl--eWOnTR3ryP8Pu1jASZdOuT9xcvLZicNGL1HWr42nHwC8j8iUr8kWWTxCLz63vXA1Jr5zhruU1cOwRFflkF6xsRbZG-N3~HVz~vhR~tnwKju4cVOsf8NbKp0XkgNCwD0ClS8AVzp3spww55~eDsyMP~cnVYyJpfURrLIZVsTFgbDFu2D2eAf47WAZoUA834-6SadpcDOCw5qJAxU1wq~RVIfSr-snbODfwRja5uhQTMn1giLZz58ju3UR-eAU~3FjW4dPcSSjxGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff60C1DC
        },
        {
            "title": "Scooter",
            "price": "\$45",
            "img": "https://s3-alpha-sig.figma.com/img/0d76/a2ab/5e0b631ee3067028dad5f8788b673164?Expires=1691366400&Signature=cPx-4b4WTH5NGm9-Y9u0GiG465v1G94EbWNEgM14JgQFfD-TPsGM0ljWVwZPIczI3M11GKwrGu2UnTvE-YtKelHRXlBIz26GYOJ2lOWAPbFImTjG4JNteK0v6OlLyS~OSK1Co9Em6m1u~VqF-D2D7oJ5kvn~w7ht27xX6zOyFkLzH4pQToxZT2JVRHX6mMAINqd637UxfUAcvBScB0VdwJnEiL9MZ6Ii1eogaRvLoZWilK~fMY9GxbuIdaZ9QLSdPTHioShUh-7HsTcgam9q78l5FcPpmzbvGsxkZStDIrdtNgx9CjuSAZRE3Vu8LHOnRjaFZYrCYdX540vOU1FSaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff6C6363
        },
        {
            "title": "Wagon Car",
            "price": "\$36",
            "img": "https://s3-alpha-sig.figma.com/img/416e/c814/f3c69841ae513f6ab4bf8e5e891a3287?Expires=1691366400&Signature=nshUI~AtS6fCbcAB0fapjZ6V7n1X8T44oWAwyywNG0M84WSL6JQ4iDXVuBudBnR7ZiJZ3UoaZ2~p~iTAX56HCyM3OhkZPnu5KNKhtzSxsZafBnemnvhVUsm8dqqddAgY6cCbsgxi6gxPo~ydulmD6OQuCZ0LS2CZ-j1CjK8jGrr030hvCNu4EnXQZsVSKG7~63Ge0BG-230nUCpm3WdMWt9~QRO3RepIZK3f2y5PQkufGdVDIDjlwEEItCrH6mwkhgEQQNbgjUNFVxvF4smHQTeJdqp0N02-hTAuHLLZ4ntRO5Y316iYL07Qpq1Bp86AWeIIGX9VOeUnpSyCXQ9k6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff2A3640
        },
        {
            "title": "Limo Car",
            "price": "\$47",
            "img": "https://s3-alpha-sig.figma.com/img/9b69/dbc6/aecbddc0bd97c97dfdb25ffa5d3679a6?Expires=1691366400&Signature=Uu8Lez311O6eGImIVGAStozeYBQh7JhIUPgZHgeU-8S-NFO6LYKL-y2XkGEgEgJZiMgtt3MRvuz6L83EltVMNIe0eCzKPLQ4XG8gRWRHcIht9ruyiCXM8SWExjIQ0ITwCs8XD7xcgtea1pERnAk5uL4y7h908lScmFBTr6Nn5Lxz38LEe8LexZAULF4BJvRknTcyYu3DsOVyn5pBwBmxx3xB9L0yEREFPLYMvPQAkAYQrqFUtlPYz0qXUOGxuKtpGCUd0vlnWHQPZ~j-8rbeTzHutNCapvbmilPauHkxqyEJLLi6~8bl5RsmPPljJn~z1B6aGUrYUqkNeiF8ewSKVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
    ],
    "rVs": [
        {
            "title": "Classic Car",
            "price": "\$34",
            "img": "https://s3-alpha-sig.figma.com/img/4fa8/b5c2/517842c7d2e83a668fedbbd9fd46b1e3?Expires=1691366400&Signature=CjIT8-hjSMrLrRzqlZnX8MiKrnhQuoxci7wHRIS~ePLFBr3wWBHB~FMl-GlijtnJnJAp96L7-mT49WaCTJH71uA6vZFEQyejs5rMn0cz64lWtRYhDr5tP5hMi8g7yvicPlp-dm9dZUEU3WsEh~c6WnybtRUuRZu7Fe0FKi3tuaGpM0y9~V6vSBq8MNYI65msvRWRfgyDAMsy4G2ZtI44UMEpp54OMJcru6BL0YAxa2dSCvvV8JUbacgdnMRNySMU6OKGpLR-~UYDgxbKgRvyN7fm3q8yi0~PBunzGEM657Wyje78dv846g7Crzzw915MgfE9vcnMfCimXYeiROtJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffDF7588
        },
        {
            "title": "Sport Car",
            "price": "\$55",
            "img": "https://s3-alpha-sig.figma.com/img/43c1/3913/5038a0ee3fb5174ec83bce73f1ff3ba4?Expires=1691366400&Signature=nLFBq900ec45zxnyR8XnpddkE~~liRd70rQi0BWXGaAeIP5aaSZoG8o5poRJP0PbiZPQe-UG3ovQF-7QcufEPcj1-M10096Js2JYTBn~fcb9pSV13-HSz6b2BvwQLlmNiLcboIcGayRoYCFNEJFA2VmvAOn3rC9UwjfyuWRUkktRoZ7VTWe6h3Nn1ZkHSpn5MxTp~Ft-sWR-9QkJlTESHFQyxDRcyOsAmECSTUauh1yVb~OnvRV9Mh~QO47uSR8zhROtUTJFS9sRGjKSxrfrknOCRAws4prCNCbfPouwdhW0K16yAv1XHlRIJ5Tvt157Py9rT6qHfj1VWaF0maLpvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff60B5F4
        },
        {
            "title": "Flying Car",
            "price": "\$500",
            "img": "https://s3-alpha-sig.figma.com/img/eb77/08e6/aba8f2a85d14a8e308a624a7198af3f1?Expires=1691366400&Signature=loDd072FpZL9XMAu0SzSg36u5QaZspDcvsziiy3o~xNdMTE~LQRYSNwgr-g3dbEKKUSVnsiA95ZLQu8TN9-Hgl5KB49wSDmjo47ppQCQXqSRQBngk-dPPcJX3XY1m835Xyz60SKZ9dQ328U1qjNsKUQn2L1kKPxDdGFdKM~-32vhOAHLhm6VNS5RN4BNgGG9BH0vai496sLAxhzQpKNI5LIK8cKlBkkadEUQOo5WXYWldtuwSOmvuCyPoUlSTl0v2a68a-UQ155FbdLQs2TVgwT9e1lnl4lMZBHpmTgKS2~dHo73zPSMFZtHP2ZlkXHP5~q1BB-wHkE3KQH-jeCdOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff8382C2
        },
        {
            "title": "Taxi Car",
            "price": "\$45",
            "img": "https://s3-alpha-sig.figma.com/img/88c8/ce78/df8b53672438f5aa1a9fc9778c831ccd?Expires=1691366400&Signature=oEq8B9e0oILSDGnOtdIR7JgLe2cNzZUSq15ntGS-~EXHTil~ArQ7-SZ6MF-K4vJ4sjUboImdXcNUTer4Z~vUqmIxd4Boc-DQViOoLJPlS2AZhsSRhwh9iFgMbOt-AD-q3~SdelweDPFXaA6veeJwu-jOj-Om~Md0ObXP5OfU21Y8UhoouEKTj7H0tH3h1DRDe-Hly7ASkJg6ZZaa680Jfi1oL0gn6vFC8RIiTXVLh5OhoPH5RenaKaBu51-yvNpdQZKrKKoxAWNE69sk32UdFHz1yrIfkloWyreFk5UDHF~infXEegKB7HFN4zNWide1b7Gsb1Dgvb0y-n6kL5rNJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffE4C970
        },
        {
            "title": "Wagon Car",
            "price": "\$36",
            "img": "https://s3-alpha-sig.figma.com/img/416e/c814/f3c69841ae513f6ab4bf8e5e891a3287?Expires=1691366400&Signature=nshUI~AtS6fCbcAB0fapjZ6V7n1X8T44oWAwyywNG0M84WSL6JQ4iDXVuBudBnR7ZiJZ3UoaZ2~p~iTAX56HCyM3OhkZPnu5KNKhtzSxsZafBnemnvhVUsm8dqqddAgY6cCbsgxi6gxPo~ydulmD6OQuCZ0LS2CZ-j1CjK8jGrr030hvCNu4EnXQZsVSKG7~63Ge0BG-230nUCpm3WdMWt9~QRO3RepIZK3f2y5PQkufGdVDIDjlwEEItCrH6mwkhgEQQNbgjUNFVxvF4smHQTeJdqp0N02-hTAuHLLZ4ntRO5Y316iYL07Qpq1Bp86AWeIIGX9VOeUnpSyCXQ9k6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff2A3640
        },
        {
            "title": "Limo Car",
            "price": "\$47",
            "img": "https://s3-alpha-sig.figma.com/img/9b69/dbc6/aecbddc0bd97c97dfdb25ffa5d3679a6?Expires=1691366400&Signature=Uu8Lez311O6eGImIVGAStozeYBQh7JhIUPgZHgeU-8S-NFO6LYKL-y2XkGEgEgJZiMgtt3MRvuz6L83EltVMNIe0eCzKPLQ4XG8gRWRHcIht9ruyiCXM8SWExjIQ0ITwCs8XD7xcgtea1pERnAk5uL4y7h908lScmFBTr6Nn5Lxz38LEe8LexZAULF4BJvRknTcyYu3DsOVyn5pBwBmxx3xB9L0yEREFPLYMvPQAkAYQrqFUtlPYz0qXUOGxuKtpGCUd0vlnWHQPZ~j-8rbeTzHutNCapvbmilPauHkxqyEJLLi6~8bl5RsmPPljJn~z1B6aGUrYUqkNeiF8ewSKVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
    ],
    "scooters": [
        {
            "title": "Classic Car",
            "price": "\$34",
            "img": "https://s3-alpha-sig.figma.com/img/4fa8/b5c2/517842c7d2e83a668fedbbd9fd46b1e3?Expires=1691366400&Signature=CjIT8-hjSMrLrRzqlZnX8MiKrnhQuoxci7wHRIS~ePLFBr3wWBHB~FMl-GlijtnJnJAp96L7-mT49WaCTJH71uA6vZFEQyejs5rMn0cz64lWtRYhDr5tP5hMi8g7yvicPlp-dm9dZUEU3WsEh~c6WnybtRUuRZu7Fe0FKi3tuaGpM0y9~V6vSBq8MNYI65msvRWRfgyDAMsy4G2ZtI44UMEpp54OMJcru6BL0YAxa2dSCvvV8JUbacgdnMRNySMU6OKGpLR-~UYDgxbKgRvyN7fm3q8yi0~PBunzGEM657Wyje78dv846g7Crzzw915MgfE9vcnMfCimXYeiROtJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffDF7588
        },
        {
            "title": "Sport Car",
            "price": "\$55",
            "img": "https://s3-alpha-sig.figma.com/img/43c1/3913/5038a0ee3fb5174ec83bce73f1ff3ba4?Expires=1691366400&Signature=nLFBq900ec45zxnyR8XnpddkE~~liRd70rQi0BWXGaAeIP5aaSZoG8o5poRJP0PbiZPQe-UG3ovQF-7QcufEPcj1-M10096Js2JYTBn~fcb9pSV13-HSz6b2BvwQLlmNiLcboIcGayRoYCFNEJFA2VmvAOn3rC9UwjfyuWRUkktRoZ7VTWe6h3Nn1ZkHSpn5MxTp~Ft-sWR-9QkJlTESHFQyxDRcyOsAmECSTUauh1yVb~OnvRV9Mh~QO47uSR8zhROtUTJFS9sRGjKSxrfrknOCRAws4prCNCbfPouwdhW0K16yAv1XHlRIJ5Tvt157Py9rT6qHfj1VWaF0maLpvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff60B5F4
        },
        {
            "title": "Flying Car",
            "price": "\$500",
            "img": "https://s3-alpha-sig.figma.com/img/eb77/08e6/aba8f2a85d14a8e308a624a7198af3f1?Expires=1691366400&Signature=loDd072FpZL9XMAu0SzSg36u5QaZspDcvsziiy3o~xNdMTE~LQRYSNwgr-g3dbEKKUSVnsiA95ZLQu8TN9-Hgl5KB49wSDmjo47ppQCQXqSRQBngk-dPPcJX3XY1m835Xyz60SKZ9dQ328U1qjNsKUQn2L1kKPxDdGFdKM~-32vhOAHLhm6VNS5RN4BNgGG9BH0vai496sLAxhzQpKNI5LIK8cKlBkkadEUQOo5WXYWldtuwSOmvuCyPoUlSTl0v2a68a-UQ155FbdLQs2TVgwT9e1lnl4lMZBHpmTgKS2~dHo73zPSMFZtHP2ZlkXHP5~q1BB-wHkE3KQH-jeCdOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff8382C2
        },
        {
            "title": "Taxi Car",
            "price": "\$45",
            "img": "https://s3-alpha-sig.figma.com/img/88c8/ce78/df8b53672438f5aa1a9fc9778c831ccd?Expires=1691366400&Signature=oEq8B9e0oILSDGnOtdIR7JgLe2cNzZUSq15ntGS-~EXHTil~ArQ7-SZ6MF-K4vJ4sjUboImdXcNUTer4Z~vUqmIxd4Boc-DQViOoLJPlS2AZhsSRhwh9iFgMbOt-AD-q3~SdelweDPFXaA6veeJwu-jOj-Om~Md0ObXP5OfU21Y8UhoouEKTj7H0tH3h1DRDe-Hly7ASkJg6ZZaa680Jfi1oL0gn6vFC8RIiTXVLh5OhoPH5RenaKaBu51-yvNpdQZKrKKoxAWNE69sk32UdFHz1yrIfkloWyreFk5UDHF~infXEegKB7HFN4zNWide1b7Gsb1Dgvb0y-n6kL5rNJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xffE4C970
        },
        {
            "title": "Wagon Car",
            "price": "\$36",
            "img": "https://s3-alpha-sig.figma.com/img/416e/c814/f3c69841ae513f6ab4bf8e5e891a3287?Expires=1691366400&Signature=nshUI~AtS6fCbcAB0fapjZ6V7n1X8T44oWAwyywNG0M84WSL6JQ4iDXVuBudBnR7ZiJZ3UoaZ2~p~iTAX56HCyM3OhkZPnu5KNKhtzSxsZafBnemnvhVUsm8dqqddAgY6cCbsgxi6gxPo~ydulmD6OQuCZ0LS2CZ-j1CjK8jGrr030hvCNu4EnXQZsVSKG7~63Ge0BG-230nUCpm3WdMWt9~QRO3RepIZK3f2y5PQkufGdVDIDjlwEEItCrH6mwkhgEQQNbgjUNFVxvF4smHQTeJdqp0N02-hTAuHLLZ4ntRO5Y316iYL07Qpq1Bp86AWeIIGX9VOeUnpSyCXQ9k6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff2A3640
        },
        {
            "title": "Limo Car",
            "price": "\$47",
            "img": "https://s3-alpha-sig.figma.com/img/9b69/dbc6/aecbddc0bd97c97dfdb25ffa5d3679a6?Expires=1691366400&Signature=Uu8Lez311O6eGImIVGAStozeYBQh7JhIUPgZHgeU-8S-NFO6LYKL-y2XkGEgEgJZiMgtt3MRvuz6L83EltVMNIe0eCzKPLQ4XG8gRWRHcIht9ruyiCXM8SWExjIQ0ITwCs8XD7xcgtea1pERnAk5uL4y7h908lScmFBTr6Nn5Lxz38LEe8LexZAULF4BJvRknTcyYu3DsOVyn5pBwBmxx3xB9L0yEREFPLYMvPQAkAYQrqFUtlPYz0qXUOGxuKtpGCUd0vlnWHQPZ~j-8rbeTzHutNCapvbmilPauHkxqyEJLLi6~8bl5RsmPPljJn~z1B6aGUrYUqkNeiF8ewSKVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            "color": 0xff7EB0AA
        },
    ]
}

// router

app.get('/BeepAPP', (req, res) => {
    res.send(BeepAPP);
});

var orderedCar = [];

app.post('/order', (req, res) => {
    orderedCar.push(req.body);
    res.status(201).json({
        msg: "Car succesfully ordered",
        car: req.body
    })
})

// example

app.get('/Orders', (req, res) => {
    res.send(orderedCar);
})

Fintech = "192.168.42.184";
Home = "192.168.1.42"

HOST = Home;
PORT = 3000;

app.listen(PORT, HOST, () => {
    console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/BeepAPP`);
});