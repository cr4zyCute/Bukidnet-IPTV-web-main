// Example channel list — you can expand or load this from an API
// Example channel list — you can expand or load this from an API
 const combinedChannels = [
            // HLS Streams
          
            {
                name: '4K Travel TV',
                type: 'hls',
                url: 'https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8'
            },
            {
                name: 'CBS Sports HQ',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5e9f2c05172a0f0007db4786/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c27b8f5-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=3a15356b-8467-4ae7-b2f6-9c8467fcf41d'
            },
            {
                name: '00s Replay',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c25e430-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1b7de8e4-d114-4438-b098-6f7aee77b4be'
            },
         
         
            {
                name: 'Pluto TV Hom',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6022bd17849c620007f43ae0/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2aed49-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=0db981e3-cabf-4589-ae4e-5696db28f9ea'
            },
            {
                name: 'Biz TV',
                type: 'hls',
                url: 'https://thegateway.app/BizAndYou/BizTV/playlist.m3u8'
            },
            {
                name: 'Antiques Road Trip',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/615b8ec39e878900073f419a/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26ce90-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=db6c1565-8df4-4092-a404-9e5aee5bb6ae'
            },
            {
                name: 'BBC Home & Garden',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fb5836fe745b600070fc743/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26f5a1-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=844b6663-bad2-462b-9aef-d0f33d5dfaa0'
            },
            {
                name: 'Chef Champion',
                type: 'hls',
                url: 'https://bozztv.com/gusa/gusa-chefchampion/index.m3u8'
            },
            {
                name: 'Anime All Day',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356'
            },
            {
                name: 'Cine Life',
                type: 'hls',
                url: 'https://magnolia-cinelife.amagi.tv/hls/amagi_hls_data_magnoliaA-cinelife-oando/CDN/playlist.m3u8'
            },
            {
                name: 'America\'s Test Kitchen',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5e84f54a82f05300080e6746/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c268074-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=29e05466-9808-43c4-9894-00b77be27051'
            },
            {
                name: 'BBC Food',
                type: 'hls',
                url: 'http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fb5844bf5514d0007945bda/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26f5a0-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=c628f2e9-ff30-4bd0-9ff6-99fb1649f628'
            },
            {
                name: 'Bon appétit',
                type: 'hls',
                url: 'https://bonappetit-samsung.amagi.tv/playlist.m3u8'
            },
            {
                name: '3ABN Kids',
                type: 'hls',
                url: 'https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8'
            },
            {
                name: 'Travel XP',
                type: 'hls',
                url: 'https://travelxp-travelxp-1-nz.samsung.wurl.tv/playlist.m3u8'
            },
            {
                name: 'Travel TV',
                type: 'hls',
                url: 'https://streamer103.neterra.tv/travel/live.m3u8'
            },
            {
                name: 'Journy',
                type: 'hls',
                url: 'https://linear-291.frequency.stream/dist/ovationtv/291/hls/master/playlist.m3u8'
            },
            {
                name: 'Fun Roads TV',
                type: 'hls',
                url: 'https://a-cdn.klowdtv.com/live3/funroads_720p/playlist.m3u8'
            },
            {
                name: 'Go2Travel',
                type: 'hls',
                url: 'https://go2thls.wns.live/hls/stream.m3u8'
            },
            
            {
                name: 'Outside TV',
                type: 'hls',
                url: 'https://livetv-fa.tubi.video/outsidetv2/playlist.m3u8'
            },
            {
                name: 'Outdoor America',
                type: 'hls',
                url: 'https://linear-600.frequency.stream/dist/xumo/600/hls/master/playlist.m3u8'
            },
            {
                name: 'Nature Time',
                type: 'hls',
                url: 'https://shls-live-ak.akamaized.net/out/v1/b06a89a463764d3688cda337d40dc5bf/index.m3u8'
            },
         
            {
                name: 'Law & Crime',
                type: 'hls',
                url: 'https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8'
            },
            {
                name: 'FBI Files',
                type: 'hls',
                url: 'https://apollo.production-public.tubi.io/live/ac-the-fbi-files.m3u8'
            },
            {
                name: 'CGTN Documentary',
                type: 'hls',
                url: 'https://amg00405-rakutentv-cgtndocumentary-rakuten-0ql8j.amagi.tv/master.m3u8'
            },
            {
                name: 'AXS TV NOW',
                type: 'hls',
                url: 'https://dikcfc9915kp8.cloudfront.net/hls/1080p/playlist.m3u8'
            },
            {
                name: 'MOVIEJOY',
                type: 'hls',
                url: 'http://fl2.moveonjoy.com/EPIX_DRIVE_IN/index.m3u8'
            },
          
         

      
            {
                name: 'ESPN',
                type: 'hls',
                url: 'http://41.205.93.154/ESPN/index.m3u8'
            },
            {
                name: 'GCTV',
                type: 'hls',
                url: 'http://45.32.115.103/live/livestream/index.m3u8'
            },
            {
                name: 'Music TV',
                type: 'hls',
                url: 'http://bitcdn-kronehit.bitmovin.com/v2/hls/chunklist_b3128000.m3u8'
            },
            {
                name: 'KBS World',
                type: 'hls',
                url: 'https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8'
            },
        
            {
                name: 'Al Jazeera',
                type: 'hls',
                url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8'
            },
            {
                name: 'BBC News Asia Pacific',
                type: 'hls',
                url: 'https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8'
            },
         
       
       
            {
                name: 'EWTN Asia-Pacific',
                type: 'hls',
                url: 'https://cdn3.wowza.com/1/QmVNUVhTNTZSS3Uz/YWQ0aHpi/hls/live/playlist.m3u8'
            },
            {
                name: 'INC TV',
                type: 'hls',
                url: 'https://199211.global.ssl.fastly.net/643cc12aa824db4374021c8c/live_95f6ac80dd6511ed9d08b12be56ae55e/index.m3u8'
            },
          
            {
                name: 'TV5Monde Pacifique',
                type: 'hls',
                url: 'https://ott.tv5monde.com/Content/HLS/Live/channel(pacifique)/variant.m3u8'
            },
       
            {
                name: 'Arirang',
                type: 'hls',
                url: 'https://amdlive-ch03-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8'
            },
        
            {
                name: 'Bloomberg',
                type: 'hls',
                url: 'https://www.bloomberg.com/media-manifest/streams/asia.m3u8'
            },
            {
                name: 'BBC World News',
                type: 'hls',
                url: 'https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8'
            },
            {
                name: 'CGTN News',
                type: 'hls',
                url: 'https://news.cgtn.com/resource/live/english/cgtn-news.m3u8'
            },
            {
                name: 'Outdoor Channel',
                type: 'hls',
                url: 'https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8'
            },
            {
                name: 'Thrillers',
                type: 'hls',
                url: 'https://amc-rushbyamc-1-us.vizio.wurl.tv/playlist.m3u8'
            },
            {
                name: 'American Pickers',
                type: 'hls',
                url: 'https://d2fmvezvf9jfft.cloudfront.net/playlist.m3u8'
            },
         
     
            {
                name: 'Bein Sports Xtra',
                type: 'hls',
                url: 'https://amg01334-beinsportsllc-beinxtra-localnow-kcy6r.amagi.tv/playlist.m3u8'
            },
            {
                name: 'MovieSphere',
                type: 'hls',
                url: 'https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8'
            },
            {
                name: 'Garage TV',
                type: 'hls',
                url: 'https://stream1.sersat.com/hls/garagetv.m3u8'
            },

        

            // MPEG-DASH Streams
            {
                name: 'TV5 ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
                clearKey: { '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d' }
            },
            {
                name: 'A2Z ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
                clearKey: { 'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530' }
            },
            {
                name: 'GMA Pinoy TV ',
                type: 'dash',
                url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
                clearKey: { 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1': '47635b8e885e19f2ccbdff078c207058' }
            },
            {
                name: 'TFC ',
                type: 'dash',
                url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/7045bc3c-9492-42d4-974e-a3b217776e57/index.mpd',
                clearKey: { '9568cc84e1d944f38eac304517eab6fd': 'f12142af8f39b3bab79d3679d3665ebe' }
            },
            {
                name: 'PBO ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
                clearKey: { 'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1' }
            },
            {
                name: 'Sari-Sari ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
                clearKey: { '0a7ab3612f434335aa6e895016d8cd2d': 'b21654621230ae21714a5cab52daeb9d' }
            },
            {
                name: 'Viva Cinema ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
                clearKey: { '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb' }
            },
            {
                name: 'ANC ',
                type: 'dash',
                url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
                clearKey: { '4bbdc78024a54662854b412d01fafa16': '6039ec9b213aca913821677a28bd78ae' }
            },
            {
                name: 'TVN Movies Pinoy ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
                clearKey: { '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35' }
            },
            {
                name: 'TMC ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
                clearKey: { '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b' }
            },
            {
                name: 'Animax ',
                type: 'dash',
                url: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd',
                clearKey: { 'edf1a715de9748638dd2fad75a419af2': '2f5a3199b26e9b693ae881af7ff864cf' }
            },
            {
                name: 'Cartoon Network ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
                clearKey: { 'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444' }
            },
            {
                name: 'DreamWorks Tagalized ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
                clearKey: { '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab' }
            },
            {
                name: 'DreamWorks ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
                clearKey: { '4ab9645a2a0a47edbd65e8479c2b9669': '8cb209f1828431ce9b50b593d1f44079' }
            },
            {
                name: 'Moonbug Kids ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd',
                clearKey: { '0bf00921bec94a65a124fba1ef52b1cd': '0f1488487cbe05e2badc3db53ae0f29f' }
            },
         
         
            {
                name: 'HBO ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
                clearKey: { 'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b' }
            },
            {
                name: 'HBO Family ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
                clearKey: { '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be' }
            },
            {
                name: 'HBO Signature ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
                clearKey: { 'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f' }
            },
            {
                name: 'HBO Hits ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
                clearKey: { 'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1' }
            },
            {
                name: 'Cinemax ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
                clearKey: { 'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955' }
            },
       
            {
                name: 'Hits ',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
                clearKey: { 'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5' }
            },
          
            {
                name: 'AXN',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
                clearKey: { 'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f' }
            },
            {
                name: 'Warner TV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
                clearKey: { '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71' }
            },
         
            {
                name: 'Rock Entertainment',
                type: 'dash',
                url: 'https://tglmp02.akamaized.net/out/v1/621a7089e63144e4be7891cd9bfb10e2/manifest.mpd',
                clearKey: { '9229814c629b406f8de98d2f23c968a0': '40b9f250455b43b3b2ea6845ab81abca' }
            },
            {
                name: 'Thrill',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
                clearKey: { '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62' }
            },
            {
                name: 'Lotus Macau',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
                clearKey: { '60dc692e64ea443a8fb5ac186c865a9b': '01bdbe22d59b2a4504b53adc2f606cc1' }
            },
        
            {
                name: 'PTV4',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
                clearKey: { '71a130a851b9484bb47141c8966fb4a3': 'ad1f003b4f0b31b75ea4593844435600' }
            },
            {
                name: 'DepEd Channel',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
                clearKey: { '0f853706412b11edb8780242ac120002': '2157d6529d80a760f60a8b5350dbc4df' }
            },
            {
                name: 'Buko Channel',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
                clearKey: { 'd273c085f2ab4a248e7bfc375229007d': '7932354c3a84f7fc1b80efa6bcea0615' }
            },
            {
                name: 'Knowledge Channel',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
                clearKey: { '0f856fa0412b11edb8780242ac120002': '783374273ef97ad3bc992c1d63e091e7' }
            },
            {
                name: 'Bilyonaryo Channel',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
                clearKey: { '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2' }
            },
            {
                name: 'TVUP',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
                clearKey: { '83e813ccd4ca4837afd611037af02f63': 'a97c515dbcb5dcbc432bbd09d15afd41' }
            },
            {
                name: 'TV Maria',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
                clearKey: { 'fa3998b9a4de40659725ebc5151250d6': '998f1294b122bbf1a96c1ddc0cbb229f' }
            },
            {
                name: 'True FM TV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
                clearKey: { '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce' }
            },
            {
                name: 'Teleradyo',
                type: 'dash',
                url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
                clearKey: { '47c093e0c9fd4f80839a0337da3dd876': '50547394045b3d047dc7d92f57b5fb33' }
            },
            {
                name: 'TVN',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
                clearKey: { 'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10' }
            },
            {
                name: 'RPTV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
                clearKey: { '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595' }
            },
          
            {
                name: 'UAAP Varsity',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
                clearKey: { '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e' }
            },
            {
                name: 'PBA Rush',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
                clearKey: { '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82' }
            },
            {
                name: 'NBA TV Philippines',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
                clearKey: { 'f36eed9e95f140fabbc88a08abbeafff': '0125600d0eb13359c28bdab4a2ebe75a' }
            },
            {
                name: 'One Sports Plus',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
                clearKey: { '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda' }
            },
            {
                name: 'One PH',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
                clearKey: { '92834ab4a7e1499b90886c5d49220e46': 'a7108d9a6cfcc1b7939eb111daf09ab3' }
            },
            {
                name: 'One Sports',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
                clearKey: { '53c3bf2eba574f639aa21f2d4409ff11': '3de28411cf08a64ea935b9578f6d0edd' }
            },
            {
                name: 'One News',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
                clearKey: { 'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f' }
            },
            {
                name: 'TAP TV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
                clearKey: { 'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566' }
            },
         
            {
                name: 'Tap Sports',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
                clearKey: { 'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f' }
            },
         
            {
                name: 'Tap Action Flix',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
                clearKey: { 'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7' }
            },
         
            {
                name: 'Arirang Korea',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
                clearKey: { '13815d0fa026441ea7662b0c9de00bcf': '2d99a55743677c3879a068dd9c92f824' }
            },
            {
                name: 'BBC Earth',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
                clearKey: { '34ce95b60c424e169619816c5181aded': '0e2a2117d705613542618f58bf26fc8e' }
            },
     
            {
                name: 'KBS World',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
                clearKey: { '22ff2347107e4871aa423bea9c2bd363': 'c6e7ba2f48b3a3b8269e8bc360e60404' }
            },
            {
                name: 'Kix',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
                clearKey: { 'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735' }
            },
            {
                name: 'Lifetime',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
                clearKey: { 'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0' }
            },
            {
                name: 'HGTV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
                clearKey: { 'f0e3ab943318471abc8b47027f384f5a': '13802a79b19cc3485d2257165a7ef62a' }
            },
         
            {
                name: 'Travel Channel',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
                clearKey: { 'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839' }
            },
         
        
       
       
            {
                name: 'CNA',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
                clearKey: { 'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813' }
            },
      
            {
                name: 'SPOTV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
                clearKey: { 'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e' }
            },
        
            {
                name: 'Premier Sports',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
                clearKey: { 'fc19c98cb9504a0fb78b22fea0a4b814': 'ea683112a96d4ae6c32d4ea13923e8c7' }
            },
            {
                name: 'Premier Sports 2',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
                clearKey: { '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc' }
            },
       
            {
                name: 'History',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
                clearKey: { 'a7724b7ca2604c33bb2e963a0319968a': '6f97e3e2eb2bade626e0281ec01d3675' }
            },
       
            {
                name: 'Fashion TV',
                type: 'dash',
                url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
                clearKey: { '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7' }
            }
        ];
const searchInput = document.getElementById('channelSearch');
const clearButton = document.getElementById('clearSearch');

function renderChannels(channels) {
    const container = document.getElementById('combinedChannels');
    container.innerHTML = '';
    channels.forEach(channel => {
        const div = document.createElement('div');
        div.className = 'channel-item';
        div.textContent = channel.name;
        div.onclick = () => playChannel(channel);
        container.appendChild(div);
    });
}

function playChannel(channel) {
    const iframe = document.getElementById('videoFrame');
    const video = document.getElementById('videoPlayer');
    const shaka = document.getElementById('shakaPlayer');

    iframe.style.display = 'none';
    video.style.display = 'none';
    shaka.style.display = 'none';

    if (channel.type === 'hls') {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(channel.url);
            hls.attachMedia(video);
            video.style.display = 'block';
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = channel.url;
            video.style.display = 'block';
        }
    } else if (channel.type === 'dash') {
        const player = new shaka.Player(shaka);
        player.load(channel.url);
        shaka.style.display = 'block';
    } else if (channel.type === 'youtube') {
        iframe.src = channel.url;
        iframe.style.display = 'block';
    }
}

// LIVE SEARCH HANDLER
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = combinedChannels.filter(c => c.name.toLowerCase().includes(query));
    renderChannels(filtered);

    // Show or hide the "X"
    clearButton.style.display = query ? 'block' : 'none';
});

// CLEAR BUTTON HANDLER
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.style.display = 'none';
    renderChannels(combinedChannels);
});

// On page load
document.addEventListener('DOMContentLoaded', () => {
    renderChannels(combinedChannels);
});
