const puppeteer = require("puppeteer") ; 
const scrapeLogic = async (res) => { 
    try {
        const browser = await puppeteer.launch();
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