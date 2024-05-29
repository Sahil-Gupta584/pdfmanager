'use client';
import { toolCards } from "@/app/components/toolCardBox";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

function Downloadpage({ params }) {
    const searchParams = useSearchParams();
    const tool = toolCards.find((tool) => tool.toolRoute === params.task);
    const processedFile = decodeURIComponent(params.processedFile);
    const inputFileName = decodeURIComponent(searchParams.get('inputFileName'));

    const fileExtension = processedFile.split('.').pop().split('?')[0];
    const downloadFileName = `${inputFileName}`;

    console.log('downloadFileName:', downloadFileName);

    const handleDownload = async () => {
        try {
            console.log(processedFile);
            const response = await fetch(processedFile);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const file = await response.blob(); 
            console.log(file);
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(file);
            downloadLink.download = downloadFileName;
            downloadLink.click();

            // Cleanup the object URL after the download is initiated
            URL.revokeObjectURL(downloadLink.href);

        } catch (error) {
            console.error('Error downloading the file:', error.message);
            toast.error('Error downloading the file. Please try again.');
        }
    };

    return (
        <div className="download-area">
            <div className="download-area-info">
                <h1>{tool.cardTitle}</h1>
                <p>{tool.cardDesc}</p>
                <a className="download-btn" onClick={handleDownload}>Download</a>
            </div>
        </div>
    );
}

export default Downloadpage;
