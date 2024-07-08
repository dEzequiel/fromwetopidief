import { test } from "node:test";
import assert from "node:assert/strict";
import HTMLDownloader from "../utils/htmlDownloader.js";
  
test('downloadHTML retrieves HTML content', async () => {
    const url = 'https://yourttoo.com/';
    const htmlContent = await HTMLDownloader.downloadHTML(url);
    assert(/<html\b[^>]*>/i.test(htmlContent), 'HTML content does not include <html> tag');
  });
