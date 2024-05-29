// 'use client';
// import { toolCards } from "@/app/components/toolCardBox";
// import { useEffect, useState } from "react";

// function Downloadpage({ params }) {
//     const tool = toolCards.find((tool) => tool.toolRoute === params.task);
//     const [processedFile, setProcessedFile] = useState(null);

//     useEffect(() => {
//         const checkProcessedFile = () => {
//             const fileUrl = localStorage.getItem('convertedUrl');
//             if (fileUrl) {
//                 setProcessedFile(fileUrl);
//             } else {
//                 setTimeout(checkProcessedFile, 1000); // Check every second
//             }
//         };

//         checkProcessedFile();
//     }, []);

//     if (!processedFile) {
//         return (
//             <h1>Loading</h1>
//         );
//     }

//     return (
//         <div className="download-area" >
//                 <div className="download-area-info">
//                     <h1>{tool.cardTitle}</h1>
//                     <p>{tool.cardDesc}</p>
//                     <a className="download-btn" href={processedFile} download>{processedFile ? 'Download' : 'Loading' }</a>
//                 </div>            
//         </div>
//     );
// }

// export default Downloadpage

export default function Downloadpage(params) {
    return(
        <h1>Loading..</h1>
    );
}