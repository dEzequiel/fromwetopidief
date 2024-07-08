
import WebToPDFConverter from "../webToPDFConverter.js";
import { test } from "node:test";
import assert from "node:assert/strict";
import PDFRenderer from '../utils/pdfRenderer.js';
import fs from 'fs';


test('convert creates a PDF from a web page', async () => {
    const url = 'https://example.com';
    const outputPath = './test_output.pdf';
    await WebToPDFConverter.convert(url, outputPath);

    const fileExists = fs.existsSync(outputPath);
    assert(fileExists);

    // if (fileExists) {
    //     fs.unlinkSync(outputPath);  // Clean up test file
    // }
})