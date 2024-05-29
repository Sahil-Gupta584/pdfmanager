import Link from "next/link";

function ToolCard({ tool }) {
  
 return (
    <div className="toolcard">
      <Link href={`/${tool.toolRoute}`}>
        <div className="card-title">
          <div className="img">
            <img src={tool.svg.src} alt={tool.cardTitle} />
          </div>  
          <p>{tool.cardTitle}</p>
        </div>
        <p>{tool.cardDesc}</p>
      </Link> 
    </div>
  );
}

export default ToolCard;
