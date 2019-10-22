const fetch = require("node-fetch");
const dotenv = require("dotenv");
const logOut = require("../../utils/logOut");
const logOk = require("../../utils/logOk");
dotenv.config();

/* eslint-disable no-undef */
const METHOD = { methor: "get" };
const URL = process.env.API_URL + process.env.API_KEY;
const SEARCH = process.env.API_SEARCH;

const getUrl = (url, method) => {
  return fetch(url, method)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error ${err}`);
    });
};

let gifController = {
  getData: async (req, res) => {
    const data = await getUrl(URL, METHOD);

    res.json({
      gif: data
    });
  },

  getGif: async (req, res) => {
    const data = await getUrl(URL, METHOD);

    try {
      let gifSource = data.data.source;
      let gif = data.data.images.original.url;
      console.log(gifSource);
      res.json({
        Gif: gif,
        Source: gifSource
      });
      logOk.info(` - Data OK!`);
    } catch (error) {
      console.log(`Error data ${error}`);
      logOut.info(` - Data error ${error}`);
    }
  },

  findGif: async (req, res) => {
    let query = req.body.query;
    let limit = req.body.limit;
    let URL =
      SEARCH + query + "&api_key=" + process.env.API_KEY + "&limit=" + limit;

    const data = await getUrl(URL, METHOD);


    for (let index = 0; index < data.data.length; index++) {
      try {
        let gifSource = { source: data.data[index].source };
        let gif = { gif: data.data[index].images.original.url };
        let GIF = { ...gifSource, ...gif };

        res.write(JSON.stringify(GIF));
        logOk.info(` -Search Data OK!`);
      } catch (error) {
        console.error(`Error: ${error}`);
        logOut.info(` -Search Data ERROR ${error}`)
      }
    }
    res.end();
  }
};

module.exports = gifController;
