import ToolCard from "./toolCard";

// Import SVG files
import addPageNumbers from "../../public/Icons/add page numbers.png";
import compressPdf from "../../public/Icons/compress pdf.png";
import editPdf from "../../public/Icons/edit pdf.png";
import excelToPdf from "../../public/Icons/excel to pdf.png";
import htmlTopdf from "../../public/Icons/html to pdf.png";
import jpgToPdf from "../../public/Icons/jpg to pdf.png";
import lockPdf from "../../public/Icons/lock pdf.png";
import mergePdf from "../../public/Icons/merge pdf.png";
import ocrPdf from "../../public/Icons/ocr pdf2.png";
import organizePdf from "../../public/Icons/organize pdf.png";
import pdfToJpg from "../../public/Icons/pdf to jpg.png";
import pdfToPdfa from "../../public/Icons/pdf to pdfa.png";
import pdfToPowerPoint from "../../public/Icons/pdf to powerpoint.png";
import powerpointToPdf from "../../public/Icons/powerpoint to pdf.png";
import pdfToWord from "../../public/Icons/pdf to word.png";
import repairPdf from "../../public/Icons/repair pdf2.png";
import rotatePdf from "../../public/Icons/rotate pdf.png";
import signPdf from "../../public/Icons/sign pdf.png";
import splitPdf from "../../public/Icons/split pdf.png";
import unlockPdf from "../../public/Icons/unlock pdf.png";
import watermarkPdf from "../../public/Icons/watermark.png";


const toolCards = [
    // { tool: 'pagenumber', svg: addPageNumbers, cardTitle: 'Add Page Numbers', cardDesc: 'Add page numbers to PDFs quickly and easily.', toolRoute: 'add-page-numbers', inputTypes: ['application/pdf'] },
    { tool: 'compressed-pdf', svg: compressPdf, cardTitle: 'Compress PDF', cardDesc: 'Reduce PDF file size effortlessly without compromising quality.', toolRoute: 'compress', inputTypes: ['application/pdf'] },
    // { tool: 'editpdf', svg: editPdf, cardTitle: 'Edit PDF', cardDesc: 'Edit PDF documents seamlessly with various editing tools.', toolRoute: 'edit-pdf', inputTypes: ['application/pdf'] },
    { tool: 'Merge Pdf', svg: watermarkPdf, cardTitle: 'Merge PDFs', cardDesc: 'Merge PDF from two or more PDF files into a new one.', toolRoute: 'merge-pdf', inputTypes: ['application/pdf']},
    { tool: 'Split Pdf', svg: watermarkPdf, cardTitle: 'Split PDF', cardDesc: 'Split a PDF into multiple PDF files using page indexes or page ranges.', toolRoute: 'split-pdf', inputTypes: ['application/pdf']},
    { tool: 'excel-to-pdf', svg: excelToPdf, cardTitle: 'Excel to PDF', cardDesc: 'Convert Excel files to PDF format in a few clicks.', toolRoute: 'excel-to-pdf', inputTypes: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] },
    { tool: 'htmlpdf', svg: htmlTopdf, cardTitle: 'HTML to PDF', cardDesc: 'Convert HTML files to PDF format for easy sharing and printing.', toolRoute: 'html-to-pdf', inputTypes: ['text/html'] },
    { tool: 'pdf', svg: jpgToPdf, cardTitle: 'Jpg to PDF', cardDesc: 'Convert JPG, PNG, TIFF, and other images to PDF files quickly and efficiently.', toolRoute: 'jpg-to-pdf', inputTypes: ['image/jpeg', 'image/png', 'image/tiff', 'image/bmp'] },
    { tool: 'encrypted-pdf', svg: lockPdf, cardTitle: 'Lock your PDF', cardDesc: 'Secure your PDF files by adding passwords and restrictions.', toolRoute: 'lock-pdf', inputTypes: ['application/pdf'] },
    { tool: 'merged-pdf', svg: mergePdf, cardTitle: 'Merge PDFs', cardDesc: 'Merge multiple PDF files into a single document effortlessly.', toolRoute: 'merge', inputTypes: ['application/pdf'] },
    { tool: 'extract', svg: ocrPdf, cardTitle: 'OCR Pdf', cardDesc: 'Easily extract text from scanned PDFs with OCR (Optical Character Recognition) technology.', toolRoute: 'ocr-pdf', inputTypes: ['application/pdf'] },
    { tool: 'jpg', svg: pdfToJpg, cardTitle: 'PDF to JPG', cardDesc: 'Convert PDF pages to high-quality JPG images for easy sharing and viewing.', toolRoute: 'pdf-to-jpg', inputTypes: ['application/pdf'] },
    { tool: 'pdfa', svg: pdfToPdfa, cardTitle: 'PDF to PDF/A', cardDesc: 'Convert PDF files to PDF/A format for long-term archiving and compliance.', toolRoute: 'pdf-to-pdfa', inputTypes: ['application/pdf'] },
    { tool: 'powerpoint', svg: pdfToPowerPoint, cardTitle: 'PDF to PowerPoint', cardDesc: 'Convert PDF presentations to editable PowerPoint slides for further editing.', toolRoute: 'pdf-to-powerpoint', inputTypes: ['application/pdf'] },
    { tool: 'officepdf', svg: powerpointToPdf, cardTitle: 'PowerPoint to PDF', cardDesc: 'Convert PowerPoint slides to PDF presentations.', toolRoute: 'powerpoint-to-pdf', inputTypes: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'] },
    { tool: 'word', svg: pdfToWord, cardTitle: 'PDF to Word', cardDesc: 'Convert PDF documents to Word format while preserving the original layout and formatting.', toolRoute: 'pdf-to-word', inputTypes: ['application/pdf'] },
    { tool: 'repair', svg: repairPdf, cardTitle: 'Repair PDF', cardDesc: 'Fix corrupted or damaged PDF files to restore accessibility and usability.', toolRoute: 'repair-pdf', inputTypes: ['application/pdf'] },
    { tool: 'rotate', svg: rotatePdf, cardTitle: 'Rotate Pdf', cardDesc: 'Rotate PDF pages to the desired orientation with ease.', toolRoute: 'rotate-pdf', inputTypes: ['application/pdf'] },
    { tool: 'sign', svg: signPdf, cardTitle: 'Sign PDF', cardDesc: 'Digitally sign PDF documents for added authenticity and security.', toolRoute: 'sign-pdf', inputTypes: ['application/pdf'] },
    { tool: 'split-pdf', svg: splitPdf, cardTitle: 'Split PDF', cardDesc: 'Split large PDF files into smaller documents for easier management and sharing.', toolRoute: 'split', inputTypes: ['application/pdf'] },
    { tool: 'decrypted-pdf', svg: unlockPdf, cardTitle: 'Unlock PDF', cardDesc: 'Remove passwords and restrictions from PDF files to gain full access.', toolRoute: 'unlock-pdf', inputTypes: ['application/pdf'] },
    { tool: 'watermarked-pdf', svg: watermarkPdf, cardTitle: 'Add a Watermark to PDF', cardDesc: 'Protect PDF documents by adding custom watermarks for copyright or branding purposes.', toolRoute: 'add-watermark-to-pdf', inputTypes: ['application/pdf'] },
    { tool: 'pdfToExcel', svg: watermarkPdf, cardTitle: 'Pdf To Excel', cardDesc: 'Protect PDF documents by adding custom watermarks for copyright or branding purposes.', toolRoute: 'pdf-to-excel', inputTypes: ['application/pdf'] },
    { tool: 'pdfToJSON', svg: watermarkPdf, cardTitle: 'Pdf To JSON', cardDesc: 'Protect PDF documents by adding custom watermarks for copyright or branding purposes.', toolRoute: 'pdf-to-json', inputTypes: ['application/pdf'] },
    { tool: 'pdfToText', svg: watermarkPdf, cardTitle: 'Pdf To Text,OCR Pdf', cardDesc: 'Convert PDF and scanned images to text with layout preserved. This method uses OCR and reporoduces layout.', toolRoute: 'pdf-to-text', inputTypes: ['application/pdf'] },
    { tool: 'pdfToXml', svg: watermarkPdf, cardTitle: 'Pdf To Xml', cardDesc: 'Convert PDF to XML with information about text value, tables, fonts, images, objects positions.', toolRoute: 'pdf-to-xml', inputTypes: ['application/pdf'] },
    { tool: 'pdfToHtml', svg: watermarkPdf, cardTitle: 'Pdf To HTML', cardDesc: 'Convert PDF and scanned images into HTML representation with text, fonts, images, vectors, formatting preserved.', toolRoute: 'pdf-to-html', inputTypes: ['application/pdf'] },
    { tool: 'Pdf From Doc', svg: watermarkPdf, cardTitle: 'Excel Files to PDF', cardDesc: 'Convert DOC, DOCX, RTF, TXT, XPS files into PDF.', toolRoute: 'pdf-from-doc', inputTypes: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/rtf", "text/plain", "application/vnd.ms-xpsdocument"]},
    { tool: 'Pdf From CSV', svg: watermarkPdf, cardTitle: 'CSV Files to PDF', cardDesc: 'Convert CSV, XLS, XLSX files into PDF.', toolRoute: 'pdf-from-csv', inputTypes: ["text/csv", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]},
    { tool: 'Lock Pdf', svg: watermarkPdf, cardTitle: 'Lock,Protect your PDF', cardDesc: 'Add password and security limitations to PDF or remove existing limits and password from existing PDF files.', toolRoute: 'lock-pdf', inputTypes: ['application/pdf']},
];

function ToolCardBox() {
    return (
        <>
            {/* Map over the toolCards array to render ToolCard components */}
            <div className="cards">
                {toolCards.map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                ))}
            </div>
        </>
    );
}

export { ToolCardBox, toolCards };
