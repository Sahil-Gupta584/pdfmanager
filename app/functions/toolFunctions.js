import axios from "axios";

const API_KEY = process.env.API_KEY;

async function rootFunction(dataObj, endpoint, fileExtension) {
    console.log(dataObj, 6);
    try {       
        console.log(endpoint);
        const downloadFileName = dataObj.name.split('.')[0];
        console.log(downloadFileName, 10);

        const response = await axios.post(`https://api.pdf.co/v1${endpoint}`, {
            url: dataObj.url,
            name: downloadFileName,
            async: false,
            pages:`${dataObj.pages}`,
            ownerPassword:`${dataObj.ownerPassword}`,
            userPassword:`${dataObj.ownerPassword}`,
        }, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.error) {
            console.error('Error converting file:',response.data, response.data.message);
            throw new Error('Conversion failed');
        }

        console.log('Conversion successful:', response.data.url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error processing file:',error.message,error);
    }
}

const pdfToExcel = async (dataObj, fileExtension = 'xls') => {
    const endpoint = "/pdf/convert/to/xls";
    return await rootFunction(dataObj, endpoint, fileExtension);
};

const pdfToCsv = async (dataObj, fileExtension = 'csv') => {
    const endpoint = `/pdf/convert/to/csv`;
    return await rootFunction(dataObj, endpoint, fileExtension);

};


const compress = async (dataObj) => {
    const endpoint = `/pdf/optimize`;
    return await rootFunction(dataObj, endpoint);
};

const pdfToJSON = async (dataObj) => {
    const endpoint = '/pdf/convert/to/json2'
    return await rootFunction(dataObj, endpoint);
}


async function pdfToText(dataObj) {
    const endpoint = '/pdf/convert/to/text';
    return await rootFunction(dataObj, endpoint);
}


async function pdfToXml(dataObj) {
    const endpoint = '/pdf/convert/to/xml';
    return await rootFunction(dataObj, endpoint);
}


async function PdfToHTML(dataObj) {
    const endpoint = '/pdf/convert/to/html';
    return await rootFunction(dataObj, endpoint);
}

async function PdfFromDoc(dataObj) {
    const endpoint = '/pdf/convert/from/doc';
    return await rootFunction(dataObj, endpoint);
}

async function PdfFromCSV(dataObj) {
    const endpoint = '/pdf/convert/from/csv';
    return await rootFunction(dataObj, endpoint);
}


async function mergePdf(dataObj) {
    const endpoint = '/pdf/merge';
    return await rootFunction(dataObj, endpoint);
}

async function splitPdf(dataObj) {
    const endpoint = '/pdf/split';
    return await rootFunction(dataObj, endpoint);
}

async function lockPdf(dataObj) {
    const endpoint = '/pdf/security/add';
    return await rootFunction(dataObj, endpoint);
}






































































const toolFunctions = {
    'pdf-to-excel': pdfToExcel,
    'pdf-to-csv': pdfToCsv,
    'compress': compress,
    'pdf-to-json': pdfToJSON,
    'pdf-to-text': pdfToText,
    'pdf-to-xml': pdfToXml,
    'pdf-to-html': PdfToHTML,
    'pdf-from-doc': PdfFromDoc,
    'pdf-from-csv': PdfFromCSV,
    'merge-pdf': mergePdf,
    'split-pdf':splitPdf,
    'lock-pdf':lockPdf,


};

export default toolFunctions;
