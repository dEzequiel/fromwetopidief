import PDFDocument from 'pdfkit';
import fs from 'fs';

export default class PDFRenderer {
    static renderPDF(parsedData, outputPath) {
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(outputPath));

        doc.fontSize(20).text(parsedData.title, { align: 'center' });
        doc.moveDown();

        parsedData.headings.forEach(heading => {
            doc.fontSize(16).text(heading, { underline: true });
            doc.moveDown();
        });

        parsedData.paragraphs.forEach(paragraph => {
            doc.fontSize(12).text(paragraph);
            doc.moveDown();
        });

        doc.end();
    }
}

