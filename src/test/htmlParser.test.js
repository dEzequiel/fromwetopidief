import { test } from "node:test";
import assert from "node:assert/strict";
import HTMLParser from "../utils/htmlParser.js";

test('parseHTML extracts data correctly', () => {
    const htmlContent = '<html><head><title>Test</title></head><body><h1>Heading</h1><p>Paragraph</p></body></html>';
    const parsedData = HTMLParser.parseHTML(htmlContent);
    assert.equal(parsedData.title, 'Test');
    assert(parsedData.headings.includes('Heading'));
    assert(parsedData.paragraphs.includes('Paragraph'));
});

