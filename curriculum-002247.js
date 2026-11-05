
function returnIndex(pagina){
window.location.href=pagina;
}
        // Funciè´¸n para descargar en PDF (Aprovecha la funciè´¸n nativa de impresiè´¸n del navegador)
        function descargarPDF() {
            window.print();
        }

        // Funciè´¸n para exportar a Microsoft Word (.doc)
        function descargarWord() {
            const element = document.getElementById('cv-content');
            if (!element) return;

            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                "xmlns='http://www.w3.org/TR/REC-html40'>" +
                "<head><meta charset='utf-8'><title>Curriculum Vitae - Sofé“†a Fonseca</title>" +
                "<style>" +
                "body { font-family: Arial, sans-serif; font-size: 11pt; color: #333; }" +
                "h1 { font-size: 18pt; color: #0f172a; text-align: center; }" +
                "h2 { font-size: 13pt; color: #0284c7; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 15px; }" +
                "h3 { font-size: 11pt; color: #0369a1; }" +
                "ul { margin-left: 20px; }" +
                "p { text-align: justify; }" +
                "</style></head><body>";

            const footer = "</body></html>";

            const html = header + element.innerHTML + footer;

            const blob = new Blob(['\ufeff', html], {
                type: 'application/msword'
            });

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Curriculum_Sofia_Fonseca.doc';
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }