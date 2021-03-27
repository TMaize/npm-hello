#!/usr/bin/env node

const axios = require('axios').default
const cheerio = require('cheerio')

axios
  .request({
    url: 'https://blog.tmaize.net/',
    responseType: 'text'
  })
  .then(resp => {
    let html = resp.data
    let $ = cheerio.load(html)
    $('.list-post').each((i, ele) => {
      let $ele = $(ele)
      let year = $ele.find('h2').text()
      let count = $ele.find('li').length
      console.log(`${year}年 ${count}篇`)
    })
  })

module.exports = {}
