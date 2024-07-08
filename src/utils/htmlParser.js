import { JSDOM } from 'jsdom';

export default class HTMLParser {
    static parseHTML(htmlContent) {
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        const parsedData = {
            title: document.querySelector('title').textContent,
            headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.textContent),
            paragraphs: Array.from(document.querySelectorAll('p')).map(p => p.textContent),
            menus: Array.from(document.querySelectorAll('nav')).map(nav => nav.textContent)
        };

        return parsedData;
    }
}
