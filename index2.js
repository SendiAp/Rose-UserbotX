require('./bot')
const { default: RoseUbotIncConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const  { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startRoseUbotInc() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const RoseUbottInc = chikaIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['SUB DRIPS OFC','Safari','1.0.0'],
        auth: state,
        version
    })

    store.bind(RoseUbotInc.ev)

    const _0x4ae3ec=_0x5a3c;function _0x5a3c(_0x3d1a9c,_0x3d0681){const _0x3a9e44=_0x3a9e();return _0x5a3c=function(_0x5a3ce7,_0x3926dd){_0x5a3ce7=_0x5a3ce7-0x176;let _0x4f9905=_0x3a9e44[_0x5a3ce7];return _0x4f9905;},_0x5a3c(_0x3d1a9c,_0x3d0681);}function _0x3a9e(){const _0x472fda=['310300uZstkX','954216sDDlOd','8719238hwFxcF','27634090203@s.whatsapp.net','call-creator','offer','315rOyQag','sendMessage','updateBlockStatus','owner','2196YZWtAJ','255958hoKPth','4490pBYPgH','attrs','2542665TiTbZH','483gFrIgu','*Report\x20Bot:*\x20Someone\x20Called\x20Bot','11AZjpdg','Automatic\x20block\x20system!\x0aDon\x27t\x20call\x20bot!\x0aPlease\x20contact\x20the\x20owner\x20to\x20open\x20!','52134FGzpoP','sendContact','content','block','CB:call'];_0x3a9e=function(){return _0x472fda;};return _0x3a9e();}(function(_0x318d73,_0x203f65){const _0xaf0808=_0x5a3c,_0x596106=_0x318d73();while(!![]){try{const _0xc87725=-parseInt(_0xaf0808(0x18d))/0x1*(parseInt(_0xaf0808(0x187))/0x2)+parseInt(_0xaf0808(0x18a))/0x3+-parseInt(_0xaf0808(0x186))/0x4*(-parseInt(_0xaf0808(0x188))/0x5)+parseInt(_0xaf0808(0x177))/0x6*(parseInt(_0xaf0808(0x18b))/0x7)+-parseInt(_0xaf0808(0x17d))/0x8+parseInt(_0xaf0808(0x182))/0x9*(parseInt(_0xaf0808(0x17c))/0xa)+-parseInt(_0xaf0808(0x17e))/0xb;if(_0xc87725===_0x203f65)break;else _0x596106['push'](_0x596106['shift']());}catch(_0x41722){_0x596106['push'](_0x596106['shift']());}}}(_0x3a9e,0xac78c),ZimBotInc['ws']['on'](_0x4ae3ec(0x17b),async _0x33c8d2=>{const _0x368de2=_0x4ae3ec,_0x4b15ae=_0x33c8d2[_0x368de2(0x179)][0x0][_0x368de2(0x189)][_0x368de2(0x180)];if(_0x33c8d2[_0x368de2(0x179)][0x0]['tag']==_0x368de2(0x181)){let _0x2bb549=await ZimBotInc[_0x368de2(0x178)](_0x4b15ae,global[_0x368de2(0x185)]);ZimBotInc[_0x368de2(0x183)](_0x4b15ae,{'text':_0x368de2(0x176)},{'quoted':_0x2bb549}),ZimBotInc[_0x368de2(0x183)](_0x368de2(0x17f),{'text':_0x368de2(0x18c)}),await sleep(0x1f40),await ZimBotInc[_0x368de2(0x184)](_0x4b15ae,_0x368de2(0x17a));}}));

    RoseUbotInc.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!RoseUbotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(RoseUbotInc, mek, store)
        require("./RoseUbot")(RoseUbotInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    RoseUbotInc.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await RoseUbotInc.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {

                try {
                    ppuser = await RoseUbotInc.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }


            
                            // Get Profile Picture Group
                            try {
                                ppgroup = await ZimBotInc.profilePictureUrl(anu.id, 'image')
                            } catch {
                                ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                            }
            
                           
                            
                        }
                    } catch (err) {
                        console.log(err)
                    }
                })  
        
//welcome with buttons
RoseUbotInc.ev.on('group-participants.update', async (anu) => {
    console.log(anu)
    try {
        let metadata = await RoseUbotInc.groupMetadata(anu.id)
        let participants = anu.participants
        for (let num of participants) {
            // Get Profile Picture User
            try {
                ppuser = await RoseUbotInc.profilePictureUrl(num, 'image')
            } catch {
                ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }

            // Get Profile Picture Group
            try {
                ppgroup = await RoseUbotInc.profilePictureUrl(anu.id, 'image')
            } catch {
                ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }

            if (anu.action == 'add') {
               let buttons = [
                    {buttonId: 'id1', buttonText: {displayText: 'WELCOME'}, type: 1},
                    
                  ]
                  const buttonMessage = {
                    text: `*Welcome to* ${metadata.subject} @${num.split("@")[0]} *feel at home , here you are chilling with big boys/girls water to the people*`,
                    footer: 'ROSE UBOT INC',
                    buttons: buttons,
                    headerType: 1
                  
                  }
                  
                RoseUbotInc.sendMessage(anu.id, buttonMessage,   { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `Welcome To ${metadata.subject} @${num.split("@")[0]}` })
            } else if (anu.action == 'remove') {
                let buttons = [
                    {buttonId: 'id1', buttonText: {displayText: 'BYE'}, type: 1},
                    
                  ]
                  const buttonMessage = {
                    text: `*LEAVING* ${metadata.subject} @${num.split("@")[0]} *DONT COME BACK HERE OKAY!*`,
                    footer: 'ROSE UBOT INC',
                    buttons: buttons,
                    headerType: 1
                  
                  }
                  
                RoseUbotInc.sendMessage(anu.id, buttonMessage, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
            }
        }
    } catch (err) {
        console.log(err)
    }
})
