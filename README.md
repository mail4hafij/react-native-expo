# react-native-expo
Many of us find difficulties to get the correct prayer times in Uppsala specially during the summer time. All the Apps show different times then the Uppsala Mosque. This is because, those Apps calculate prayer times based on other methods which is often not correct in Uppsala when the Sun stays very long during the summer. The idea here  is to build a simple mobile app to show prayer times based on Uppsala, Sweden. The data are already collected. I am exposing those data through an API server written in PHP.

<img src="/assets/demo.png" />

## Technology
I am using expo framework to build this simple react-native App. The server side API is written in PHP which is not shared in this repo. You can access my API server to get the prayer times for today and tomorrow, GET => https://uppsalabonetider.se/api/getPrayerTime/8ade6fdba65a414e87d7791d1f9a2dc6

Ofcourse, you can setup your own API server and return some dummy data as following - 

```
{ "data":  
      [["Fajr", "02:00", "02:02"],
       ["Sunrise", "03:00", "03:02"],
       ["Zuhr", "14:00", "14:02"], 
       ["Asr", "06:00", "06:02"],
       ["Maghrib", "10:00", "10:02"],
       ["Isha", "11:00", "11:02"]
      ],
  "time: "14:15"
}
```
I also run a cron job in PHP to send out push notificaitons. 

## Demo 
Find the expo link https://expo.io/@mail4hafij/uppsalabonetider

