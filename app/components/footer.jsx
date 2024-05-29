import { Facebook, Instagram } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <footer className="footer">
            <div className="container1">
                <h1>Pdfmanager.in</h1>
                <div className="routes">
                    <a>Home </a> |      
                    <a>Tools </a> | 
                    <a>Contanct</a>
                </div>
            </div>
            <div className='hr'>
                <hr />
            </div>
            <div className="container2">
                <p className='copyright'><CopyrightIcon />All Rights Reserved</p>
                <div className="iconGroup">
                    <a href={`/social/${'instagram'}`}><Instagram /> </a>
                    <a href={`/social/${'facebook'}`}><Facebook /> </a>
                    <a href={`/social/${'twitter'}`}><TwitterIcon /> </a>
                    <a href={`/social/${'gihub'}`}><GitHubIcon /> </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;