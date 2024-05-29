'use client';
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import sidepanels from "./sidepanels";
import { useRouter } from "next/navigation";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const HandleTask = ({ tool }) => {
    const [droppedFiles, setDroppedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [invalidFiles, setInvalidFiles] = useState([]);
    const accept = `${tool.inputTypes.join(',')}`


    const router = useRouter();

    const SidePanelComponent = useMemo(() => {
        const Component = sidepanels[tool.toolRoute];
        return Component ? dynamic(() => Promise.resolve(Component), { ssr: false }) : null;
    }, []);

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        setDroppedFiles((prevFiles) => prevFiles.concat(files));
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'none';
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'flex';
    };

    const handleInputChange = (event) => {
        const files = Array.from(event.target.files);
        setDroppedFiles(files);
    };

    const handleContinue = async (splitPges,password) => {
        router.push(`/${tool.toolRoute}/download`);

        const formData = new FormData();


        validFiles.forEach((file) => {
            formData.append('files', file);
        });
        console.log(splitPges);
        formData.append('toolRoute', tool.toolRoute);
        formData.append('pages', splitPges);
        formData.append('password', password);


        try {
            const res = await fetch('/api', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const { toolFuncRes } = await res.json();
                console.log('/api post res:', toolFuncRes);
                const processedFile = toolFuncRes.url ? toolFuncRes.url : toolFuncRes.urls[0];

                let inputFileName = toolFuncRes.name // Get the input file name without extension
                tool.toolRoute != 'merge-pdf' ? inputFileName : inputFileName = 'pdfmanager.in ';
                const encodedUrl = encodeURIComponent(processedFile);
                const encodedFileName = encodeURIComponent(inputFileName);

                router.push(`/${tool.toolRoute}/download/${encodedUrl}?inputFileName=${encodedFileName}`);
            } else {
                const errorData = await res.json();
                toast.error(`Failed to convert the file: ${errorData.error}. Please try again.`);
            }
        } catch (error) {
            console.error('Error in post request:', error.message);
            toast.error('Error in Post request. Please try again.');
        }
    };

    useEffect(() => {
        const newValidFiles = [];
        const newInvalidFiles = [];

        droppedFiles.forEach(file => {
            if (tool.inputTypes.some(type => type === file.type)) {
                newValidFiles.push(file);
            } else {
                newInvalidFiles.push(file);
            }
        });

        setValidFiles(newValidFiles);
        setInvalidFiles(newInvalidFiles);

        if (newInvalidFiles.length > 0) {
            toast.error(`Invalid file type(s): ${newInvalidFiles.map(file => file.name).join(', ')}. Only "${tool.inputTypes.join(', ')}" file types are allowed`, {
                position: 'top-left'
            });
        }
    }, [droppedFiles, tool.inputTypes]);

    return (
        <div className="work-area" onDrop={handleDrop} onDragOver={handleDragOver}>
            {droppedFiles.length === 0 ? (
                <div className="work-area-info">
                    <h1>{tool.cardTitle}</h1>
                    <p>{tool.cardDesc}</p>
                    <div className="overlay">
                        <h1>Drop like it's hot</h1>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Click to choose files
                    </label>
                    <input type="file" id="file-upload" accept={accept} onChange={handleInputChange} multiple />
                    <p>or Drop your files here</p>
                </div>
            ) : (
                true
            )}
            <div className="doc-preview-area" style={{ 'display': `${droppedFiles.length === 0 ? 'none' : 'flex'}` }}>
                {validFiles.map((doc, index) => (
                    <div key={index}>
                        <Document file={doc}>
                            <Page pageNumber={1} />
                        </Document>
                        <div className="doc-info">
                            <span>{doc.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            {validFiles.length > 0 && SidePanelComponent && (
                <div className="side-panel">
                    <SidePanelComponent tool={tool} handleContinue={handleContinue} />
                </div>
            )}
        </div>
    );
};

export default HandleTask;
