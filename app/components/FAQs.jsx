function Questions(props) {
    return (
        <div className="Q">
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
        </div>
    )
}



function FAQs(props) {
    return (
        <div className="faq-container">
            <div className="faq-title">
                <span>FAQ</span>
                <h2>Common Questions</h2>
                <p>Here are some of common questions that we get.</p>
            </div>
            <div className="Q-container">
                <Questions
                    question='How can I merge multiple PDF files into one?'
                    answer="You can easily merge multiple PDF files into one using our PDF tool by selecting the files you want to merge and clicking on the 'Merge' option."
                />

                <Questions
                    question='Is it possible to convert a PDF file to a different format?'
                    answer='Yes, our PDF tool allows you to convert PDF files to various formats such as Word, Excel, and PowerPoint among others.'
                />

                <Questions
                    question='Can I compress large PDF files to reduce their size?'
                    answer='Absolutely! Our PDF tool offers a compression feature that enables you to reduce the size of large PDF files without compromising on quality.'
                />

                <Questions
                    question='How secure is the process of editing PDF files using your tool?'
                    answer='We prioritize the security and privacy of your data. Our PDF tool ensures that all editing processes are secure and your information remains confidential.'
                />

                <Questions
                    question='Are there any limitations on the number of PDF files I can work on simultaneously?'
                    answer='You can work on multiple PDF files simultaneously without any limitations using our PDF tool, making your tasks more efficient and convenient.'
                />
            </div>
        </div>
    )
}

export default FAQs;