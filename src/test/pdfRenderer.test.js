import { test } from "node:test";
import assert from "node:assert/strict";
import PDFRenderer from '../utils/pdfRenderer.js';
import fs from 'fs';


test('renderPDF creates a PDF file', async () => {
    const parsedData = {
        title: 'Test Title',
        headings: ['Heading 1'],
        paragraphs: ['Paragraph 1']
    };

    const outputPath = './test/test_output.pdf';

    await PDFRenderer.renderPDF(parsedData, outputPath);

    const fileExists = fs.existsSync(outputPath);
    assert(fileExists);

    // Eliminar el archivo si existe después de que se completa la operación asincrónica
    // if (fileExists) {
    //     fs.unlinkSync(outputPath); 
    // }
});




