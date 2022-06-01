import AdvertisingChannel from "/ad.js"
import adData from "/data.js"


const fbData = new AdvertisingChannel(adData.facebook)
document.getElementById("fb").innerHTML = fbData.getHtml()

const twitData = new AdvertisingChannel(adData.twitter)
document.getElementById("twit").innerHTML = twitData.getHtml()

const instaData = new AdvertisingChannel(adData.instagram)
document.getElementById("insta").innerHTML = instaData.getHtml()
