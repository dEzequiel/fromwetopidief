export default class HTMLDownloader {
    static async downloadHTML(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            return html;
        } catch (error) {
            console.error('Error downloading HTML:', error);
            throw error;
        }
    }
}
