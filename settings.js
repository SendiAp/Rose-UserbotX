/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'bagasganz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6285894831504','6285894831504','6285894831504'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6285894831504'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6285894831504' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Sendi' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '🌹 Rose-Userbot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Rose-Userbot' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.ig = 'https://instagram.com/ndiap04'
global.mygc = 'https://wa.me/qr/L44VK7PMOIMOD1'
global.myweb = 'https://chat.whatsapp.com/KJZWBMHRy9B7Jo2uzTZvgV'
global.email = 'snktlg4@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© Rose-Userbot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Rose-Userbot' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/IMG_20220529_154607_572.jpg')
/*global.veloriy = fs.readFileSync('./image/'rose.jpeg)*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '🌹'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '「SUCCES」',
admin: '「FITUR INI HANYA KHUSUS ADMIN GROUP」',
botAdmin: '「BOT HARUS MENJADI ADMIN TERLEBIH DAHULU」',
owner: '「FITUR INI KHUSUS OWNER SAJA」',
group: '「FITUR HANYA DIGUNAKAN DIGROUP」',
private: '「FITUR HANYA DIGUNAKAN DIPRIVATE CHAT」',
bot: '「FITUR KHUSUS PENGGUNA NOMOR BOT」',
wait: '「SEDANG DIPROSES...」',
error: '「❌ TERJADI KESALAHAN , SILAHKAN LAPORKAN OWNER」',
endLimit: '「LIMIT HARIAN TELAH HABIS , LIMIT AKAN TERISI SETIAP 12JAM」',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
