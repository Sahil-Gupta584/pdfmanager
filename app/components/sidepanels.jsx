'use client'

import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function pdfToExcelSidePanel({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>
            <div className="sidePanel-info">
                <label htmlFor="fileType">Convert To :</label>
                <select name="fileType" id="fileType">
                    <option value={`xls`}>xls &#40;default&#41; </option>
                    <option value={`xlsx`}>xlsx</option>
                </select>
            </div>
            <button onClick={handleContinue}>Continue</button>
        </>

    );
}

function compress({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>
            <div className="sidePanel-info">
                <p>Continue to start compression</p>
            </div>
            <button onClick={handleContinue}>Continue</button>

        </>
    )
}

// function pdfToCsv({tool,handleContinue}) {
//     return (
//         <>
//             <h1>{tool.cardTitle}</h1>

//             <button onClick={handleContinue}>Continue</button>
//         </>
//     )
// }

function pdfToJSON({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>

        </>
    )
}

function pdfToText({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    )
}

function pdfToXml({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    );
}


function PdfToHTML({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    );

}

function PdfFromDoc({ tool, handleContinue }) {
    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    );

}

function PdfFromCSV({ tool, handleContinue }) {

    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    );

}

function mergePdf({ tool, handleContinue }) {

    return (
        <>
            <h1>{tool.cardTitle}</h1>

            <button onClick={handleContinue}>Continue</button>
        </>
    );

}

function splitPdf({ tool, handleContinue }) {

    const [splitPages,setSplitPages] = useState();
    const [rangeFrom,setRangeFrom] = useState(1);
    const [rangeTo,setRangeTo] = useState(2);
    
    
    const handleChangeFrom = (event) => {
        setRangeFrom(event.target.value)
        console.log(event.target.value);
        setSplitPages(`${event.target.value}-${rangeTo}`);
        console.log(splitPages);
    }
    
    const handleChangeTo = (event) => {
        console.log(event.target.value);
        setRangeTo(event.target.value);
        setSplitPages(`${rangeFrom}-${event.target.value}`);
        console.log(splitPages);
    }
    

    return (
        <>
            <h1>{tool.cardTitle}</h1>
            <div className="sidepanel-info">
                <div className="range">
                    <p>Range 1</p>
                    <div className="range-inputs">

                        <div className="range-from">
                            <label>From Page: </label>
                            <input min={1} type="number" value={rangeFrom} name="from" onChange={handleChangeFrom}/>
                        </div>
                        <div className="range-to">
                            <label>to: </label>
                            <input min={1} type="number" value={rangeTo} name="to" onChange={handleChangeTo}/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleContinue(splitPages)}>Continue</button>
        </>
    );
    
}


function lockPdf({ tool, handleContinue }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onContinue = () => {
        if (password === confirmPassword) {
            setError('');
            handleContinue(null,password);
        } else {
            setError('Passwords do not match');
        }
    };

    return (
        <>
            <h1>{tool.cardTitle}</h1>
            <div className="sidePanel-info">
                <TextField id="standard-password-input" label="Type Password to protect" type="password" autoComplete="current-password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField id="standard-password-input" label="Repeat password" type="password" autoComplete="current-password" variant="standard" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={onContinue}>Continue</button>
        </>
    );
}





















const sidePanels = {
    'pdf-to-excel': pdfToExcelSidePanel,
    'compress': compress,
    'pdf-to-json': pdfToJSON,
    // 'pdf-to-csv':pdfToCsv,
    'pdf-to-text': pdfToText,
    'pdf-to-xml': pdfToXml,
    'pdf-to-html': PdfToHTML,
    'pdf-from-doc': PdfFromDoc,
    'pdf-from-csv': PdfFromCSV,
    'merge-pdf': mergePdf,
    'split-pdf': splitPdf,
    'lock-pdf':lockPdf,




};

export default sidePanels; 