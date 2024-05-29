import { NextResponse } from 'next/server';
import axios from 'axios';
import toolFunctions from '../functions/toolFunctions';

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

const uploadToCo = async (file, toolFunction) => {
    try {
        console.log('File details:', file);

        if (!file || !file.arrayBuffer || file.size === 0) {
            throw new Error('Invalid file');
        }

        const presignedResponse = await axios.get('https://api.pdf.co/v1/file/upload/get-presigned-url', {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const { presignedUrl, url: fileUrl } = presignedResponse.data;
        console.log('Presigned URL and file URL:', presignedUrl, fileUrl);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const putRes = await axios.put(presignedUrl, buffer, {
            headers: {
                'Content-Type': file.type
            }
        });
        console.log(presignedResponse.data,32);
        console.log("File uploaded successfully:", fileUrl);
        presignedResponse.data.name = file.name;
        
        return { success: true, data: presignedResponse.data };
    } catch (error) {
        console.error('Error uploading file:', error.message);
        return { success: false, error: error.message };
    }
};

export async function POST(request) {
    try {
        const data = await request.formData();
        const files = data.getAll('files');
        const toolRoute = data.get('toolRoute');
        const splitPages = data.get('pages');
        const password  = data.get('password');
        console.log(password);

        const toolFunction = toolFunctions[toolRoute];
        let mergePdfUrls = [];
        let dataForToolFunc = null;
        if (!toolFunction) {
            throw new Error(`No tool function found for route: ${toolRoute}`);
        }
        
        for (const file of files) {
            console.log('Processing file:', file.name);
            
            const uploadRes = await uploadToCo(file, toolFunction);
            dataForToolFunc = uploadRes.data;
            mergePdfUrls.push(uploadRes.data.url);

            console.log(data,62);

            if (!uploadRes.success) {
                return NextResponse.json({ error: data.error }, { status: 500 });
            }
        }
        console.log('dataForToolFunc:',dataForToolFunc);
        dataForToolFunc.url = `${mergePdfUrls.join(',')}`;
        dataForToolFunc.name = 'pdfmanager.in ';
        dataForToolFunc.ownerPassword = password;
        splitPages?dataForToolFunc.pages = splitPages: null;
        console.log('dataForToolFunc:',dataForToolFunc);
        const toolFuncRes = await toolFunction(dataForToolFunc);
        console.log('toolFuncRes:',toolFuncRes);

        return NextResponse.json({ toolFuncRes });
    } catch (error) {
        console.error('Error processing files:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
