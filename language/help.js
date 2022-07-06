/*
› Create By @Sendi
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`*Hai ${pushname}!*
⁪⁬⁮
💁‍♀️ Kamu dapat menggunakan bot Untuk bermain game dan bersenang-senang Disini.

❓ *APA PERINTAHNYA?* ❓
Tekan List Menu untuk melihat *semua perintah* dan bagaimana mereka bekerja!

- Semoga Kalian Bahagia Dan Senang.
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

//—————「 Premium 」—————//
exports.roseprem  = (ownernomer) => {
	return`
—「 *PREMIUM BOT* 」—

Sepertinya Kamu Belum Menggunakan Premium,🥲
Gunakan Premium Sekarang, Dan Dapatkan Kelebihan
Saat Kamu Menggunakan Rose Userbot.🥳

—「 *LIST HARGA* 」—

Rp.5,000/Minggu | ~Rp.10,000~ 🌟 [99%]
Rp.10,000/2Minggu | ~Rp.20,000~ 🌟 [99%]
Rp.20,000/Sebulan | ~Rp.30,000~ 🌟 [99%]

Pembelian Hanya Dapat Diproses Setiap Hari Senin.
*Contoh:* Kamu Beli Dihari Rabu , Kamu Hanya Dapat Gunakan
Premium Bot Ini Dihari Senin.

—「 *KELEBIHAN PREMIUM* 」—

🫂 *#grup* 
[dapat menutup grup dengan perintah yang disediakan]
🛡️ *#antilink* 
[Grub Kamu Aman Dari Link]
💬 *#smeme*
[Membuat Sticker Dengan Teks]
🎧 *#sound*
[Mendownload Lagu Dari YouTube]
📎 *#ytmp3*
[Mendownload Lagu Dengan Link Dari YouTube]
🎥 *#ytmp4*
[Mendownload Video Dengan Link YouTube]
📂 #getmusic 
*[Mendownload Lagu Dengan Reply Link Nya]*
🎤 *#getvideo*
[Mendownload Video Dengan Reply Link Nya]
🎙️ *#tomp3*
[Dapat Mengubah Video Menjadi MP3]
🤭 *#mute*
[Mute Bot Digrub Kamu]
❎ =]> *No Limit.*
⚡ =]> *Bot Aktif 24Jam.*

—「 *PEMBAYARAN* 」—

💰 *Dana:* 085894831504 [Dewi Hendriani]

Mau Lewat Bank? Silahkan Klik Beli Sekarang 🎊
`
}

//—————「 List Command 」—————//
exports.listcmd  = (ownernomer) => {
	return`
  [*GROUP MENU*] 🫂

  *✘* #linkgroup
  *✘* #ephemeral [option]
  *✘* #setppgc
  *✘* #setname 
  *✘* #setdesc 
  *✘* #group [option]
  *✘* #editinfo [option]
  *✘* #add @user
  *✘* #kick @user
  *✘* #hidetag 
  *✘* #tagall [pesan]
  *✘* #antilink [on/off]
  *✘* #mute [on/off]
  *✘* #promote @user
  *✘* #demote @user
  *✘* #vote [teks]
  *✘* #devote
  *✘* #upvote
  *✘* #cekvote
  *✘* #hapusvote

  [*SEARCH MENU*] 🤳

  *✘* #yts 
  *✘* #google 
  *✘* #gimage 
  *✘* #pinterest 
  *✘* #wikimedia 
  *✘* #ytsearch 
  *✘* #ringtone 
  *✘* #character

  [*TELEGRAM STICK MENU*] 🥰

  *✘* #gurastick
  *✘* #dogestick
  *✘* #bucinstick
  *✘* #patrick

  [*RANDOM MENU*] 💬

  *✘* #coffe
  *✘* #quotesanime
  *✘* #couple
  *✘* #darkjokes

  [*RANDOM ANIME MENU*] 🤡

  *✘* #loli
  *✘* #neko
  *✘* #waifu
  *✘* #shinobu
  *✘* #megumin
  *✘* #bully
  *✘* #cuddle
  *✘* #cry
  *✘* #hug
  *✘* #awoo
  *✘* #kiss
  *✘* #lick
  *✘* #pat
  *✘* #smug
  *✘* #bonk
  *✘* #yeet
  *✘* #blush
  *✘* #smile
  *✘* #wave
  *✘* #highfive
  *✘* #handhold
  *✘* #nom
  *✘* #bite
  *✘* #glomp
  *✘* #slap
  *✘* #kill
  *✘* #happy
  *✘* #wink
  *✘* #poke
  *✘* #dance
  *✘* #cringe
  *✘* #anime
  *✘* #waifu
  *✘* #husbu
  *✘* #neko
  *✘* #shinobu
  *✘* ##waifus 
  *✘* #nekos 
  *✘* #trap 
  *✘* #blowjob

  [*GAME & FUN MENU*] 🎮

  *✘* #simih
  *✘* #bagaimanakah
  *✘* #kapankah
  *✘* #apakah
  *✘* #bisakah
  *✘* #rate
  *✘* #wangy
  *✘* #gantengcek
  *✘* #cekganteng
  *✘* #cantikcek
  *✘* #cekcantik
  *✘* #sangecek
  *✘* #ceksange
  *✘* #gaycek
  *✘* #cekgay
  *✘* #lesbicek
  *✘* #halah
  *✘* #hilih
  *✘* #huluh
  *✘* #heleh
  *✘* #holoh
  *✘* #jadian
  *✘* #jodohku
  *✘* #tictactoe
  *✘* #delttt
  *✘* #family100
  *✘* #tebak [option]
  *✘* #math [mode]
  *✘* #suitpvp [@tag]

  [*PRIMBON MENU*] 🎊

  *✘* #nomorhoki
  *✘* #artimimpi
  *✘* #artinama
  *✘* #ramaljodoh
  *✘* #ramaljodohbali
  *✘* #suamiistri
  *✘* #ramalcinta
  *✘* #cocoknama
  *✘* #pasangan
  *✘* #jadiannikah
  *✘* #sifatusaha
  *✘* #rezeki
  *✘* #pekerjaan
  *✘* #nasib
  *✘* #penyakit
  *✘* #tarot
  *✘* #fengshui
  *✘* #haribaik
  *✘* #harisangar
  *✘* #harisial
  *✘* #nagahari
  *✘* #arahrezeki
  *✘* #peruntungan
  *✘* #weton
  *✘* #karakter
  *✘* #keberuntungan
  *✘* #memancing
  *✘* #masasubur
  *✘* #zodiak
  *✘* #shio

  [*CERPEN MENU*] 📃

  *✘* #cerpen anak
  *✘* #cerpen bahasa daerah
  *✘* #cerpen bahasa inggris
  *✘* #cerpen bahasa jawa
  *✘* #cerpen bahasa sunda
  *✘* #cerpen budaya
  *✘* #cerpen cinta
  *✘* #cerpen cinta islami
  *✘* #cerpen cinta pertama
  *✘* #cerpen cinta romantis
  *✘* #cerpen cinta sedih
  *✘* #cerpen cinta segitiga
  *✘* #cerpen cinta sejati
  *✘* #cerpen galau
  *✘* #cerpen gokil
  *✘* #cerpen inspiratif
  *✘* #cerpen jepang
  *✘* #cerpen kehidupan
  *✘* #cerpen keluarga
  *✘* #cerpen kisah nyata
  *✘* #cerpen korea
  *✘* #cerpen kristen
  *✘* #cerpen liburan
  *✘* #cerpen lingkungan
  *✘* #cerpen lucu
  *✘* #cerpen malaysia
  *✘* #cerpen mengharukan
  *✘* #cerpen misteri
  *✘* #cerpen motivasi
  *✘* #cerpen nasihat
  *✘* #cerpen nasionalisme
  *✘* #cerpen olahraga
  *✘* #cerpen patah hati
  *✘* #cerpen penantian
  *✘* #cerpen pendidikan 
  *✘* #cerpen pengalaman pribadi
  *✘* #cerpen pengorbanan
  *✘* #cerpen penyesalan
  *✘* #cerpen perjuangan
  *✘* #cerpen perpisahan
  *✘* #cerpen persahabatan
  *✘* #cerpen petualangan
  *✘* #cerpen ramadhan
  *✘* #cerpen remaja
  *✘* #cerpen renungan
  *✘* #cerpen rindu
  *✘* #cerpen rohani
  *✘* #cerpen romantis
  *✘* #cerpen sastra
  *✘* #cerpen sedih
  *✘* #cerpen sejarah
  *✘* #cerpen slice of life
  *✘* #cerpen terjemahan
  *✘* #cerpen thriller

 [*CONVERT MENU*] 🎧

 *✘* #toimage [reply sticker]
 *✘* #tovideo [reply sticker]
 *✘* #togif [reply sticker]
 *✘* #tovn [reply video]
 *✘* #tomp3 [reply video]
 *✘* #toaudio [reply video]

 [*STICKER & EMOJI & TEKS*] 🙈

 *✘* #sticker [reply image]
 *✘* #smeme [teks] (dicaption image)
 *✘* #styletext [teks]
 *✘* #dbinary [reply teks]
 *✘* #ebinary [reply teks]
 *✘* #emojimix 🥰+😭  <= contoh 

 [*INFORMATION MENU*] 🗞️

 *✘* #merdeka-news 
 *✘* #kontan-news 
 *✘* #cnbc-news 
 *✘* #tribun-news 
 *✘* #indozone-news 
 *✘* #kompas-news 
 *✘* #detik-news 
 *✘* #daily-news 
 *✘* #inews-news 
 *✘* #okezone-news
 *✘* #sindo-news 
 *✘* #tempo-news 
 *✘* #antara-news 
 *✘* #cnn-news 
 *✘* #fajar-news 

 [*MAIN MENU*] 📒

 *✘* #statbot
 *✘* #menu (memulai bot)
 *✘* #delete [reply pesan bot]
 *✘* #quoted [reply pesan]

 [*DATABASE MENU*] 📂

 *✘* #addmsg [nama file]
 *✘* #listmsg 
 *✘* #getmsg [nama file]
 *✘* #delmsg [nama file]

 [*ISLAMIC MENU*] 🕌

 *✘* #iqra 3 <= contoh 
 *✘* #hadist [bisa cek sendiri]
 *✘* #alquran [cek sendiri]
 *✘* #tafsirsurah [ceks sendiri]

 [*VOICE CHANGER*] 🎤

 *✘* #bass [reply audio/vn]
 *✘* #blown [reply audio/vn]
 *✘* #deep [reply audio/vn]
 *✘* #earrape [reply audio/vn]
 *✘* #fast [reply audio/vn]
 *✘* #fat [reply audio/vn]
 *✘* #nightcore [reply audio/vn]
 *✘* #reverse [reply audio/vn]
 *✘* #robot [reply audio/vn]
 *✘* #slow [reply audio/vn]
 *✘* #tupai [reply audio/vn]
`
}
