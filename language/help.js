/*
› Create By @Sendi
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`[WELCOME ROSE-USERBOT]

┌── 「 *ALIVE USERBOT* 」──
├ 🫂 *Name* : Userbot 
├ 🌹 *Branch* : Rose-Userbot
├ 📞 *Number* : 6285313937918
├ 👑 *Owner* : Sendi
├ 🖥️ *Platform* : Linux
├ 🤖 *Command* : Support [#]
└────────────────────`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini.

Jika ada kesalahan atau modules tidak berfungsi,
tolong dimaklumin.`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  *GROUP MENU*
  *✘* ${prefix}linkgroup
  *✘* ${prefix}ephemeral [option]
  *✘* ${prefix}setppgc
  *✘* ${prefix}setname 
  *✘* ${prefix}setdesc 
  *✘* ${prefix}group [option]
  *✘* ${prefix}editinfo [option]
  *✘* ${prefix}add @user
  *✘* ${prefix}kick @user
  *✘* ${prefix}hidetag 
  *✘* ${prefix}tagall 
  *✘* ${prefix}antilink [on/off]
  *✘* ${prefix}mute [on/off]
  *✘* ${prefix}promote @user
  *✘* ${prefix}demote @user
  *✘* ${prefix}vote 
  *✘* ${prefix}devote
  *✘* ${prefix}upvote
  *✘* ${prefix}cekvote
  *✘* ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  *✘* ${prefix}tiktoknowm 
  *✘* ${prefix}tiktokwm 
  *✘* ${prefix}tiktokmp3 
  *✘* ${prefix}instagram 
  *✘* ${prefix}twitter 
  *✘* ${prefix}twittermp3 
  *✘* ${prefix}facebook 
  *✘* ${prefix}pinterestdl 
  *✘* ${prefix}ytmp3 
  *✘* ${prefix}ytmp4 
  *✘* ${prefix}getmusic 
  *✘* ${prefix}getvideo 
  *✘* ${prefix}umma 
  *✘* ${prefix}joox 
  *✘* ${prefix}soundcloud 
  
  *SEARCH MENU*
  *✘* ${prefix}play 
  *✘* ${prefix}yts 
  *✘* ${prefix}google 
  *✘* ${prefix}gimage 
  *✘* ${prefix}pinterest 
  *✘* ${prefix}wikimedia 
  *✘* ${prefix}ytsearch 
  *✘* ${prefix}ringtone 
  *✘* ${prefix}stalk [option] 
  *✘* ${prefix}webtoons 
  *✘* ${prefix}drakor 
  *✘* ${prefix}animesearch 
  *✘* ${prefix}character 
  *✘* ${prefix}manga 
  *✘* ${prefix}playstore 
  *✘* ${prefix}gsmarena 
  *✘* ${prefix}jadwalbioskop 
  *✘* ${prefix}nowplayingbioskop 
  *✘* ${prefix}aminio 
  *✘* ${prefix}wattpad 
  *✘* ${prefix}webtoons 
  *✘* ${prefix}drakor 
  
  *TELE STICK MENU*
  *✘* ${prefix}gurastick
  *✘* ${prefix}dogestick
  *✘* ${prefix}bucinstick
  *✘* ${prefix}patrick
  
  *RANDOM MENU*
  *✘* ${prefix}coffe
  *✘* ${prefix}quotesanime
  *✘* ${prefix}couple
  *✘* ${prefix}darkjokes
  
  *RANDOM ANIME MENU*
  *✘* ${prefix}loli
  *✘* ${prefix}neko
  *✘* ${prefix}waifu
  *✘* ${prefix}shinobu
  *✘* ${prefix}megumin
  *✘* ${prefix}bully
  *✘* ${prefix}cuddle
  *✘* ${prefix}cry
  *✘* ${prefix}hug
  *✘* ${prefix}awoo
  *✘* ${prefix}kiss
  *✘* ${prefix}lick
  *✘* ${prefix}pat
  *✘* ${prefix}smug
  *✘* ${prefix}bonk
  *✘* ${prefix}yeet
  *✘* ${prefix}blush
  *✘* ${prefix}smile
  *✘* ${prefix}wave
  *✘* ${prefix}highfive
  *✘* ${prefix}handhold
  *✘* ${prefix}nom
  *✘* ${prefix}bite
  *✘* ${prefix}glomp
  *✘* ${prefix}slap
  *✘* ${prefix}kill
  *✘* ${prefix}happy
  *✘* ${prefix}wink
  *✘* ${prefix}poke
  *✘* ${prefix}dance
  *✘* ${prefix}cringe
  *✘* ${prefix}anime
  *✘* ${prefix}waifu
  *✘* ${prefix}husbu
  *✘* ${prefix}neko
  *✘* ${prefix}shinobu
  *✘* ${prefix}waifus 
  *✘* ${prefix}nekos 
  *✘* ${prefix}trap 
  *✘* ${prefix}blowjob 
  
  *TEXT PRO MENU*
  *✘* ${prefix}3dchristmas
  *✘* ${prefix}3ddeepsea
  *✘* ${prefix}americanflag
  *✘* ${prefix}3dscifi
  *✘* ${prefix}3drainbow
  *✘* ${prefix}3dwaterpipe
  *✘* ${prefix}halloweenskeleton
  *✘* ${prefix}sketch
  *✘* ${prefix}bluecircuit
  *✘* ${prefix}space
  *✘* ${prefix}metallic
  *✘* ${prefix}fiction
  *✘* ${prefix}greenhorror
  *✘* ${prefix}transformer
  *✘* ${prefix}berry
  *✘* ${prefix}thunder
  *✘* ${prefix}magma
  *✘* ${prefix}3dcrackedstone
  *✘* ${prefix}3dneonlight
  *✘* ${prefix}impressiveglitch
  *✘* ${prefix}naturalleaves
  *✘* ${prefix}fireworksparkle
  *✘* ${prefix}matrix
  *✘* ${prefix}dropwater
  *✘* ${prefix}harrypotter
  *✘* ${prefix}foggywindow
  *✘* ${prefix}neondevils
  *✘* ${prefix}christmasholiday
  *✘* ${prefix}3dgradient
  *✘* ${prefix}blackpink
  *✘* ${prefix}gluetext
  
  *PHOTO OXY MENU*
  *✘* ${prefix}shadow
  *✘* ${prefix}romantic
  *✘* ${prefix}smoke
  *✘* ${prefix}burnpapper
  *✘* ${prefix}naruto
  *✘* ${prefix}lovemsg
  *✘* ${prefix}grassmsg
  *✘* ${prefix}lovetext
  *✘* ${prefix}coffecup
  *✘* ${prefix}butterfly
  *✘* ${prefix}harrypotter
  *✘* ${prefix}retrolol
  
  *EPHOTO MENU*
  *✘* ${prefix}ffcover
  *✘* ${prefix}crossfire
  *✘* ${prefix}galaxy
  *✘* ${prefix}glass
  *✘* ${prefix}neon
  *✘* ${prefix}beach
  *✘* ${prefix}blackpink
  *✘* ${prefix}igcertificate
  *✘* ${prefix}ytcertificate
  
  *GAME & FUN MENU*
  *✘* ${prefix}simih
  *✘* ${prefix}bagaimanakah
  *✘* ${prefix}kapankah
  *✘* ${prefix}apakah
  *✘* ${prefix}bisakah
  *✘* ${prefix}rate
  *✘* ${prefix}wangy
  *✘* ${prefix}gantengcek
  *✘* ${prefix}cekganteng
  *✘* ${prefix}cantikcek
  *✘* ${prefix}cekcantik
  *✘* ${prefix}sangecek
  *✘* ${prefix}ceksange
  *✘* ${prefix}gaycek
  *✘* ${prefix}cekgay
  *✘* ${prefix}lesbicek
  *✘* ${prefix}halah
  *✘* ${prefix}hilih
  *✘* ${prefix}huluh
  *✘* ${prefix}heleh
  *✘* ${prefix}holoh
  *✘* ${prefix}jadian
  *✘* ${prefix}jodohku
  *✘* ${prefix}tictactoe
  *✘* ${prefix}delttt
  *✘* ${prefix}family100
  *✘* ${prefix}tebak [option]
  *✘* ${prefix}math [mode]
  *✘* ${prefix}suitpvp [@tag]

  *PRIMBON MENU*
  *✘* ${prefix}nomorhoki
  *✘* ${prefix}artimimpi
  *✘* ${prefix}artinama
  *✘* ${prefix}ramaljodoh
  *✘* ${prefix}ramaljodohbali
  *✘* ${prefix}suamiistri
  *✘* ${prefix}ramalcinta
  *✘* ${prefix}cocoknama
  *✘* ${prefix}pasangan
  *✘* ${prefix}jadiannikah
  *✘* ${prefix}sifatusaha
  *✘* ${prefix}rezeki
  *✘* ${prefix}pekerjaan
  *✘* ${prefix}nasib
  *✘* ${prefix}penyakit
  *✘* ${prefix}tarot
  *✘* ${prefix}fengshui
  *✘* ${prefix}haribaik
  *✘* ${prefix}harisangar
  *✘* ${prefix}harisial
  *✘* ${prefix}nagahari
  *✘* ${prefix}arahrezeki
  *✘* ${prefix}peruntungan
  *✘* ${prefix}weton
  *✘* ${prefix}karakter
  *✘* ${prefix}keberuntungan
  *✘* ${prefix}memancing
  *✘* ${prefix}masasubur
  *✘* ${prefix}zodiak
  *✘* ${prefix}shio

  *CERPEN MENU*
  *✘* ${prefix}cerpen anak
  *✘* ${prefix}cerpen bahasa daerah
  *✘* ${prefix}cerpen bahasa inggris
  *✘* ${prefix}cerpen bahasa jawa
  *✘* ${prefix}cerpen bahasa sunda
  *✘* ${prefix}cerpen budaya
  *✘* ${prefix}cerpen cinta
  *✘* ${prefix}cerpen cinta islami
  *✘* ${prefix}cerpen cinta pertama
  *✘* ${prefix}cerpen cinta romantis
  *✘* ${prefix}cerpen cinta sedih
  *✘* ${prefix}cerpen cinta segitiga
  *✘* ${prefix}cerpen cinta sejati
  *✘* ${prefix}cerpen galau
  *✘* ${prefix}cerpen gokil
  *✘* ${prefix}cerpen inspiratif
  *✘* ${prefix}cerpen jepang
  *✘* ${prefix}cerpen kehidupan
  *✘* ${prefix}cerpen keluarga
  *✘* ${prefix}cerpen kisah nyata
  *✘* ${prefix}cerpen korea
  *✘* ${prefix}cerpen kristen
  *✘* ${prefix}cerpen liburan
  *✘* ${prefix}cerpen lingkungan
  *✘* ${prefix}cerpen lucu
  *✘* ${prefix}cerpen malaysia
  *✘* ${prefix}cerpen mengharukan
  *✘* ${prefix}cerpen misteri
  *✘* ${prefix}cerpen motivasi
  *✘* ${prefix}cerpen nasihat
  *✘* ${prefix}cerpen nasionalisme
  *✘* ${prefix}cerpen olahraga
  *✘* ${prefix}cerpen patah hati
  *✘* ${prefix}cerpen penantian
  *✘* ${prefix}cerpen pendidikan
  *✘* ${prefix}cerpen pengalaman pribadi
  *✘* ${prefix}cerpen pengorbanan
  *✘* ${prefix}cerpen penyesalan
  *✘* ${prefix}cerpen perjuangan
  *✘* ${prefix}cerpen perpisahan
  *✘* ${prefix}cerpen persahabatan
  *✘* ${prefix}cerpen petualangan
  *✘* ${prefix}cerpen ramadhan
  *✘* ${prefix}cerpen remaja
  *✘* ${prefix}cerpen renungan
  *✘* ${prefix}cerpen rindu
  *✘* ${prefix}cerpen rohani
  *✘* ${prefix}cerpen romantis
  *✘* ${prefix}cerpen sastra
  *✘* ${prefix}cerpen sedih
  *✘* ${prefix}cerpen sejarah
  *✘* ${prefix}cerpen slice of life
  *✘* ${prefix}cerpen terjemahan
  *✘* ${prefix}cerpen thriller
  
  *CONVERT MENU*
  *✘* ${prefix}toimage
  *✘* ${prefix}removebg
  *✘* ${prefix}sticker
  *✘* ${prefix}emojimix
  *✘* ${prefix}tovideo
  *✘* ${prefix}togif
  *✘* ${prefix}tourl
  *✘* ${prefix}tovn
  *✘* ${prefix}tomp3
  *✘* ${prefix}toaudio
  *✘* ${prefix}ebinary
  *✘* ${prefix}dbinary
  *✘* ${prefix}styletext
  *✘* ${prefix}smeme

  *INFORMATION MENU*
  *✘* ${prefix}merdeka-news 
  *✘* ${prefix}kontan-news 
  *✘* ${prefix}cnbc-news 
  *✘* ${prefix}tribun-news 
  *✘* ${prefix}indozone-news 
  *✘* ${prefix}kompas-news 
  *✘* ${prefix}detik-news 
  *✘* ${prefix}daily-news 
  *✘* ${prefix}inews-news 
  *✘* ${prefix}okezone-news 
  *✘* ${prefix}sindo-news 
  *✘* ${prefix}tempo-news 
  *✘* ${prefix}antara-news 
  *✘* ${prefix}cnn-news 
  *✘* ${prefix}fajar-news 
  
  *MAIN MENU*
  *✘* ${prefix}script
  *✘* ${prefix}ping
  *✘* ${prefix}runtime
  *✘* ${prefix}speed
  *✘* ${prefix}owner
  *✘* ${prefix}menu
  *✘* ${prefix}delete
  *✘* ${prefix}infochat
  *✘* ${prefix}quoted
  *✘* ${prefix}listpc
  *✘* ${prefix}listgc
  *✘* ${prefix}listonline
  
  *DATABASE MENU*
  *✘* ${prefix}setcmd
  *✘* ${prefix}listcmd
  *✘* ${prefix}delcmd
  *✘* ${prefix}lockcmd
  *✘* ${prefix}addmsg
  *✘* ${prefix}listmsg
  *✘* ${prefix}getmsg
  *✘* ${prefix}delmsg
  
  *ANONYMOUS MENU*
  *✘* ${prefix}anonymous
  *✘* ${prefix}start
  *✘* ${prefix}next
  *✘* ${prefix}keluar
  *✘* ${prefix}sendkontak
  
  *ISLAMIC MENU*
  *✘* ${prefix}iqra
  *✘* ${prefix}hadist
  *✘* ${prefix}alquran
  *✘* ${prefix}juzamma
  *✘* ${prefix}tafsirsurah
  
  *VOICE CHANGER*
  *✘* ${prefix}bass
  *✘* ${prefix}blown
  *✘* ${prefix}deep
  *✘* ${prefix}earrape
  *✘* ${prefix}fast
  *✘* ${prefix}fat
  *✘* ${prefix}nightcore
  *✘* ${prefix}reverse
  *✘* ${prefix}robot
  *✘* ${prefix}slow
  *✘* ${prefix}tupai
  
  *OWNER MENU*
  *✘* ${prefix}react [emoji]
  *✘* ${prefix}chat [option]
  *✘* ${prefix}join [link]
  *✘* ${prefix}leave
  *✘* ${prefix}block @user
  *✘* ${prefix}unblock @user
  *✘* ${prefix}bcgroup 
  *✘* ${prefix}bcall 
  *✘* ${prefix}setppbot  
  *✘* ${prefix}setexif
  *✘* ${prefix}setmenu
  *✘* ${prefix}setallmenu
  
  *THANKS TO*
  *✘* Sendi (Developer)
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Terimakasih telah menggunakan bot ini👋

Anda tau betapa sulitnya membuat bot ini? 
Agar bot tetap berjalan/bertahan donasikan seikhlasnya 
Kami akan mengembangkan beberapa modules
Lainnya..

———「 *PEMBAYARAN* 」———

IM3 : 6285894831504
Bank BCA : Chat Pribadi Owner
Bank BRI : Chat Pribadi Owner
Shopepay : Chat Pribadi Owner

  *Contact person Owner* :
  wa.me/${ownernomer}

———「 *INFORMASI* 」———

Jika Ada modules yang tidak bisa digunakan silahkan hubungi owner 
kami akan menandai nya untuk sementara.
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  *✘* ${prefix}linkgroup
  *✘* ${prefix}ephemeral [option]
  *✘* ${prefix}setppgc
  *✘* ${prefix}setname 
  *✘* ${prefix}setdesc 
  *✘* ${prefix}group [option]
  *✘* ${prefix}editinfo [option]
  *✘* ${prefix}add @user
  *✘* ${prefix}kick @user
  *✘* ${prefix}hidetag 
  *✘* ${prefix}tagall 
  *✘* ${prefix}antilink [on/off]
  *✘* ${prefix}mute [on/off]
  *✘* ${prefix}promote @user
  *✘* ${prefix}demote @user
  *✘* ${prefix}vote 
  *✘* ${prefix}devote
  *✘* ${prefix}upvote
  *✘* ${prefix}cekvote
  *✘* ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  *✘* ${prefix}tiktoknowm (❌)
  *✘* ${prefix}tiktokwm (❌)
  *✘* ${prefix}tiktokmp3 (❌)
  *✘* ${prefix}instagram (❌)
  *✘* ${prefix}twitter (❌)
  *✘* ${prefix}twittermp3 (❌)
  *✘* ${prefix}facebook (❌)
  *✘* ${prefix}pinterestdl (❌)
  *✘* ${prefix}ytmp3 (❌)
  *✘* ${prefix}ytmp4 (❌)
  *✘* ${prefix}getmusic (❌)
  *✘* ${prefix}getvideo (❌)
  *✘* ${prefix}umma (❌)
  *✘* ${prefix}joox (❌)
  *✘* ${prefix}soundcloud (❌)
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  *✘* ${prefix}play (❌)
  *✘* ${prefix}yts 
  *✘* ${prefix}google 
  *✘* ${prefix}gimage 
  *✘* ${prefix}pinterest 
  *✘* ${prefix}wikimedia 
  *✘* ${prefix}ytsearch 
  *✘* ${prefix}ringtone 
  *✘* ${prefix}stalk [option] 
  *✘* ${prefix}webtoons 
  *✘* ${prefix}drakor 
  *✘* ${prefix}animesearch 
  *✘* ${prefix}character 
  *✘* ${prefix}manga 
  *✘* ${prefix}playstore 
  *✘* ${prefix}gsmarena 
  *✘* ${prefix}jadwalbioskop 
  *✘* ${prefix}nowplayingbioskop 
  *✘* ${prefix}aminio 
  *✘* ${prefix}wattpad 
  *✘* ${prefix}webtoons 
  *✘* ${prefix}drakor 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  *TELE STICK MENU*
  *✘* ${prefix}gurastick
  *✘* ${prefix}dogestick
  *✘* ${prefix}bucinstick
  *✘* ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  *✘* ${prefix}coffe
  *✘* ${prefix}quotesanime
  *✘* ${prefix}couple
  *✘* ${prefix}darkjokes
  `
}

exports.randomanimemenu = (prefix) => {
	return`
  *RANDOM ANIME MENU*
  *✘* ${prefix}loli
  *✘* ${prefix}neko
  *✘* ${prefix}waifu
  *✘* ${prefix}shinobu
  *✘* ${prefix}megumin
  *✘* ${prefix}bully
  *✘* ${prefix}cuddle
  *✘* ${prefix}cry
  *✘* ${prefix}hug
  *✘* ${prefix}awoo
  *✘* ${prefix}kiss
  *✘* ${prefix}lick
  *✘* ${prefix}pat
  *✘* ${prefix}smug
  *✘* ${prefix}bonk
  *✘* ${prefix}yeet
  *✘* ${prefix}blush
  *✘* ${prefix}smile
  *✘* ${prefix}wave
  *✘* ${prefix}highfive
  *✘* ${prefix}handhold
  *✘* ${prefix}nom
  *✘* ${prefix}bite
  *✘* ${prefix}glomp
  *✘* ${prefix}slap
  *✘* ${prefix}kill
  *✘* ${prefix}happy
  *✘* ${prefix}wink
  *✘* ${prefix}poke
  *✘* ${prefix}dance
  *✘* ${prefix}cringe
  *✘* ${prefix}anime
  *✘* ${prefix}waifu
  *✘* ${prefix}husbu
  *✘* ${prefix}neko
  *✘* ${prefix}shinobu
  *✘* ${prefix}waifus 
  *✘* ${prefix}nekos 
  *✘* ${prefix}trap 
  *✘* ${prefix}blowjob 
  `
}

exports.textpromenu = (prefix) => {
	return`
  *TEXT PRO MENU*
  *✘* ${prefix}3dchristmas
  *✘* ${prefix}3ddeepsea
  *✘* ${prefix}americanflag
  *✘* ${prefix}3dscifi
  *✘* ${prefix}3drainbow
  *✘* ${prefix}3dwaterpipe
  *✘* ${prefix}halloweenskeleton
  *✘* ${prefix}sketch
  *✘* ${prefix}bluecircuit
  *✘* ${prefix}space
  *✘* ${prefix}metallic
  *✘* ${prefix}fiction
  *✘* ${prefix}greenhorror
  *✘* ${prefix}transformer
  *✘* ${prefix}berry
  *✘* ${prefix}thunder
  *✘* ${prefix}magma
  *✘* ${prefix}3dcrackedstone
  *✘* ${prefix}3dneonlight
  *✘* ${prefix}impressiveglitch
  *✘* ${prefix}naturalleaves
  *✘* ${prefix}fireworksparkle
  *✘* ${prefix}matrix
  *✘* ${prefix}dropwater
  *✘* ${prefix}harrypotter
  *✘* ${prefix}foggywindow
  *✘* ${prefix}neondevils
  *✘* ${prefix}christmasholiday
  *✘* ${prefix}3dgradient
  *✘* ${prefix}blackpink
  *✘* ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  *PHOTO OXY MENU*
  *✘* ${prefix}shadow
  *✘* ${prefix}romantic
  *✘* ${prefix}smoke
  *✘* ${prefix}burnpapper
  *✘* ${prefix}naruto
  *✘* ${prefix}lovemsg
  *✘* ${prefix}grassmsg
  *✘* ${prefix}lovetext
  *✘* ${prefix}coffecup
  *✘* ${prefix}butterfly
  *✘* ${prefix}harrypotter
  *✘* ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  *EPHOTO MENU*
  *✘* ${prefix}ffcover
  *✘* ${prefix}crossfire
  *✘* ${prefix}galaxy
  *✘* ${prefix}glass
  *✘* ${prefix}neon
  *✘* ${prefix}beach
  *✘* ${prefix}blackpink
  *✘* ${prefix}igcertificate
  *✘* ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  *✘* ${prefix}simih
  *✘* ${prefix}bagaimanakah
  *✘* ${prefix}kapankah
  *✘* ${prefix}apakah
  *✘* ${prefix}bisakah
  *✘* ${prefix}rate
  *✘* ${prefix}wangy
  *✘* ${prefix}gantengcek
  *✘* ${prefix}cekganteng
  *✘* ${prefix}cantikcek
  *✘* ${prefix}cekcantik
  *✘* ${prefix}sangecek
  *✘* ${prefix}ceksange
  *✘* ${prefix}gaycek
  *✘* ${prefix}cekgay
  *✘* ${prefix}lesbicek
  *✘* ${prefix}halah
  *✘* ${prefix}hilih
  *✘* ${prefix}huluh
  *✘* ${prefix}heleh
  *✘* ${prefix}holoh
  *✘* ${prefix}jadian
  *✘* ${prefix}jodohku
  *✘* ${prefix}tictactoe
  *✘* ${prefix}delttt
  *✘* ${prefix}family100
  *✘* ${prefix}tebak [option]
  *✘* ${prefix}math [mode]
  *✘* ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  *✘* ${prefix}nomorhoki
  *✘* ${prefix}artimimpi
  *✘* ${prefix}artinama
  *✘* ${prefix}ramaljodoh
  *✘* ${prefix}ramaljodohbali
  *✘* ${prefix}suamiistri
  *✘* ${prefix}ramalcinta
  *✘* ${prefix}cocoknama
  *✘* ${prefix}pasangan
  *✘* ${prefix}jadiannikah
  *✘* ${prefix}sifatusaha
  *✘* ${prefix}rezeki
  *✘* ${prefix}pekerjaan
  *✘* ${prefix}nasib
  *✘* ${prefix}penyakit
  *✘* ${prefix}tarot
  *✘* ${prefix}fengshui
  *✘* ${prefix}haribaik
  *✘* ${prefix}harisangar
  *✘* ${prefix}harisial
  *✘* ${prefix}nagahari
  *✘* ${prefix}arahrezeki
  *✘* ${prefix}peruntungan
  *✘* ${prefix}weton
  *✘* ${prefix}karakter
  *✘* ${prefix}keberuntungan
  *✘* ${prefix}memancing
  *✘* ${prefix}masasubur
  *✘* ${prefix}zodiak
  *✘* ${prefix}shio
  `
}

exports.cerpenmenu = (prefix) => {
	return`
  *CERPEN MENU*
  *✘* ${prefix}cerpen anak
  *✘* ${prefix}cerpen bahasa daerah
  *✘* ${prefix}cerpen bahasa inggris
  *✘* ${prefix}cerpen bahasa jawa
  *✘* ${prefix}cerpen bahasa sunda
  *✘* ${prefix}cerpen budaya
  *✘* ${prefix}cerpen cinta
  *✘* ${prefix}cerpen cinta islami
  *✘* ${prefix}cerpen cinta pertama
  *✘* ${prefix}cerpen cinta romantis
  *✘* ${prefix}cerpen cinta sedih
  *✘* ${prefix}cerpen cinta segitiga
  *✘* ${prefix}cerpen cinta sejati
  *✘* ${prefix}cerpen galau
  *✘* ${prefix}cerpen gokil
  *✘* ${prefix}cerpen inspiratif
  *✘* ${prefix}cerpen jepang
  *✘* ${prefix}cerpen kehidupan
  *✘* ${prefix}cerpen keluarga
  *✘* ${prefix}cerpen kisah nyata
  *✘* ${prefix}cerpen korea
  *✘* ${prefix}cerpen kristen
  *✘* ${prefix}cerpen liburan
  *✘* ${prefix}cerpen lingkungan
  *✘* ${prefix}cerpen lucu
  *✘* ${prefix}cerpen malaysia
  *✘* ${prefix}cerpen mengharukan
  *✘* ${prefix}cerpen misteri
  *✘* ${prefix}cerpen motivasi
  *✘* ${prefix}cerpen nasihat
  *✘* ${prefix}cerpen nasionalisme
  *✘* ${prefix}cerpen olahraga
  *✘* ${prefix}cerpen patah hati
  *✘* ${prefix}cerpen penantian
  *✘* ${prefix}cerpen pendidikan
  *✘* ${prefix}cerpen pengalaman pribadi
  *✘* ${prefix}cerpen pengorbanan
  *✘* ${prefix}cerpen penyesalan
  *✘* ${prefix}cerpen perjuangan
  *✘* ${prefix}cerpen perpisahan
  *✘* ${prefix}cerpen persahabatan
  *✘* ${prefix}cerpen petualangan
  *✘* ${prefix}cerpen ramadhan
  *✘* ${prefix}cerpen remaja
  *✘* ${prefix}cerpen renungan
  *✘* ${prefix}cerpen rindu
  *✘* ${prefix}cerpen rohani
  *✘* ${prefix}cerpen romantis
  *✘* ${prefix}cerpen sastra
  *✘* ${prefix}cerpen sedih
  *✘* ${prefix}cerpen sejarah
  *✘* ${prefix}cerpen slice of life
  *✘* ${prefix}cerpen terjemahan
  *✘* ${prefix}cerpen thriller
  `
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  *✘* ${prefix}toimage
  *✘* ${prefix}removebg (❌)
  *✘* ${prefix}sticker
  *✘* ${prefix}emojimix
  *✘* ${prefix}tovideo
  *✘* ${prefix}togif
  *✘* ${prefix}tourl (❌)
  *✘* ${prefix}tovn (❌)
  *✘* ${prefix}tomp3 (❌)
  *✘* ${prefix}toaudio (❌)
  *✘* ${prefix}ebinary (❌)
  *✘* ${prefix}dbinary (❌)
  *✘* ${prefix}styletext
  `
}

exports.informationmenu = (prefix) => {
	return`
  *INFORMATION MENU*
  *✘* ${prefix}merdeka-news 
  *✘* ${prefix}kontan-news 
  *✘* ${prefix}cnbc-news 
  *✘* ${prefix}tribun-news 
  *✘* ${prefix}indozone-news 
  *✘* ${prefix}kompas-news 
  *✘* ${prefix}detik-news 
  *✘* ${prefix}daily-news 
  *✘* ${prefix}inews-news 
  *✘* ${prefix}okezone-news 
  *✘* ${prefix}sindo-news 
  *✘* ${prefix}tempo-news 
  *✘* ${prefix}antara-news 
  *✘* ${prefix}cnn-news 
  *✘* ${prefix}fajar-news
  `
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  *✘* ${prefix}script (❌)
  *✘* ${prefix}ping
  *✘* ${prefix}runtime
  *✘* ${prefix}speed
  *✘* ${prefix}owner
  *✘* ${prefix}menu
  *✘* ${prefix}delete
  *✘* ${prefix}infochat
  *✘* ${prefix}quoted
  *✘* ${prefix}listpc
  *✘* ${prefix}listgc
  *✘* ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  *✘* ${prefix}setcmd
  *✘* ${prefix}listcmd
  *✘* ${prefix}delcmd (❌)
  *✘* ${prefix}lockcmd
  *✘* ${prefix}addmsg
  *✘* ${prefix}listmsg
  *✘* ${prefix}getmsg
  *✘* ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  *✘* ${prefix}anonymous
  *✘* ${prefix}start
  *✘* ${prefix}next
  *✘* ${prefix}keluar
  *✘* ${prefix}sendkontak (❌)
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  *✘* ${prefix}iqra (❌)
  *✘* ${prefix}hadist (❌)
  *✘* ${prefix}alquran (❌)
  *✘* ${prefix}juzamma (❌)
  *✘* ${prefix}tafsirsurah (❌)
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  *VOICE CHANGER*
  *✘* ${prefix}bass
  *✘* ${prefix}blown
  *✘* ${prefix}deep
  *✘* ${prefix}earrape
  *✘* ${prefix}fast
  *✘* ${prefix}fat
  *✘* ${prefix}nightcore
  *✘* ${prefix}reverse
  *✘* ${prefix}robot
  *✘* ${prefix}slow
  *✘* ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  *≻* ${prefix}react
  *≻* ${prefix}chat
  *≻* ${prefix}join
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu 
  *≻* ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  *THANKS TO*
  *✘* Sendi (Developer)
`
}
