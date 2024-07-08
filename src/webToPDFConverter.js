import HTMLDownloader from "./utils/htmlDownloader.js";
import HTMLParser from "./utils/htmlParser.js";
import PDFRenderer from "./utils/pdfRenderer.js";

export default class WebToPDFConverter{
    static async convert(url, outputPath) {
        try {
            const htmlContent = await HTMLDownloader.downloadHTML(url);
            const parsedData = HTMLParser.parseHTML(htmlContent);
            PDFRenderer.renderPDF(parsedData, outputPath);
            console.log('PDF successfully created at:', outputPath);
        } catch (error) {
            console.error('Error converting web page to PDF:', error);
        }
    }
}