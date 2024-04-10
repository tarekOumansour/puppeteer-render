const puppeteer = require("puppeteer") ; 
require("dotenv").config() ; 
const scrapeLogic = async (res) => { 
    try {
        const browser = await puppeteer.launch({
            args : [
                "--disable-setuid-sandbox" , 
                "--no-sandbox" , 
                "--single-process",
                "--no-zygote" ,
            ],
            executablePath : 
              process.env.NODE_ENV === "production" 
              ? process.env.PUPPETEER_EXECUTABLE_PATH
              : puppeteer.executablePath , 
        });
        const page = await browser.newPage();
        await page.goto('https://www.npmjs.com/package/puppeteer');
        //await page.screenshot({ path: 'example.png' });
        await browser.close();

        res.send('Puppeteer script executed successfully!');
    } catch (error) {
        console.error('Error executing Puppeteer script:', error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = {scrapeLogic} ; 