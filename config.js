/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
        address: "0.0.0.0",     // Address to listen on, can be:
                                // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                // - another specific IPv4/6 to listen on a specific interface
                                // - "0.0.0.0", "::" to listen on any interface
                                // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: ["127.0.0.1", "192.168.10.0/24", "::ffff:127.0.0.1", "::1"],       // Set [] to allow all IP addresses
                                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,        // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "es",
        logLevel: ["ERROR"],
        timeFormat: 24,
        units: "metric",
        zoom: 1.25,

        // serverOnly:  true/false/"local" ,
        // local for armv6l processors, default
        //   starts serveronly and then starts chrome browser
        // false, default for all NON-armv6l devices
        // true, force serveronly mode, because you want to.. no UI on this device

        modules: [
                {
                        module: "alert",
                },
                {
                        module: 'MMM-ModuleScheduler',
                        config: {
                                global_schedule: [
                                        {from: '00 07 * * *', to: '00 23 * * *', groupClass: 'daytime_scheduler'},
                                        {from: '00 23 * * *', to: '00 07 * * *', groupClass: 'nighttime_scheduler'},
                                ]
                        }
                },
                {
                        module: "clock",
                        position: "top_left",
                        config: {
                                dateFormat: "dddd, D MMM YYYY"
                        },
                        classes: 'daytime_scheduler'
                },
                {
                        module: 'MMM-AlarmClock',
                        position: 'top_left',
                        config: {
                                alarms: [
                                                {time: "07:00", days: [1,2,3,4,5], title: "Wakeup", message: "It's 7.00am!", sound: "kanye-west-good-morning.mp3"}
                                ],
                                format: 'dddd @ H:mm',
                                touch: 'true',
                                volume: 0.50,
                                timer: 180 * 1000
                        }
                },
                
                {
                        module: "currentweather",
                        position: "top_right",
                        config: {
                                location: "Las Rozas de Madrid",
                                locationID: "3118846",
                                appid: "9022e38a1bb5d12b83dd45e34418455c",
                                decimalSymbol: ",",
                                appendLocationNameToHeader: false
                        },
                        classes: 'daytime_scheduler'
                },

                {
                        module: "weatherforecast",
                        position: "top_right",
                        header: "Previsión meteorológica:",
                        config: {
                                location: "Las Rozas de Madrid",
                                locationID: "3118846", 
                                appid: "9022e38a1bb5d12b83dd45e34418455c",
                                maxNumberOfDays: 3,
                                showRainAmount: false,
                                colored: true,
                                decimalSymbol: ","
                        },
                        classes: 'daytime_scheduler'
                },
		{
                        module: "MMM-cryptocurrency",
			position: "top_center",
			config: {
				apikey: '417b9617-582d-44be-8621-e4f5518e1239',
				currency: ['ethereum', 'bitcoin', 'cardano'],
				conversion: 'USD',
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logoWithChanges',
				showGraphs: true, 
				coloredLogos: true
				
			},
                        classes: 'daytime_scheduler'
                },
                {
                        module: "newsfeed",
                        position: "bottom_left",
                        config: {
                                feeds: [
                                        {
                                                title: "Noticias Última Hora",
                                                url: "https://www.abc.es/rss/feeds/abc_ultima.xml"
                                        }
                                ],
                                showSourceTitle: true,
                                showPublishDate: true,
                                broadcastNewsFeeds: false,
                                broadcastNewsUpdates: false,
                                reloadInterval: 600000,
                                ignoreOldItems: true,
                                ignoreOlderThan: 43200000 // 12h
                        },
                        classes: 'daytime_scheduler'
                },
                {
                        module: "MMM-Online-State",
                        position: "bottom_right",
                },
                {
                        module: "clock",
                        position: "top_right",
                        config: {
                                dateFormat: "dddd, D MMMM YYYY",
                                clockBold: true,
                                displayType: "both",
                                analogSize: "240px",
                                analogFace: "face-010",
                                secondsColor: "#FF4000",
                                lat: 45.079208,
                                lon: 7.533648
                        },
                        classes: 'nighttime_scheduler'
                }

        ]
};


/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
