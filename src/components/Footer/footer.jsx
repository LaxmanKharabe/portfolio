import { useEffect, useState } from "react"

const Footer = () => {
    const [data, setData] = useState({ social: [], pagelinks: [], others: [] })
    
    useEffect(() => {
        fetch('./data/footerdata.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    
    return (
        <div className="container w-75 border-top pt-4">
            <div className="row">
                <div className="col-4">
                    <p>Social Links</p>
                    {
                        data.social.map((socialLink, index) =>
                            <p key={index}>{socialLink}</p>
                        )
                    }
                </div>
                <div className="col-4">
                    <p>Page Links</p>
                    {
                        data.pagelinks.map((pageLink, index) =>
                            <p key={index}>{pageLink}</p>
                        )
                    }
                </div>
                <div className="col-4">
                    <p>Other Links</p>
                    {
                        data.others.map((otherLink, index) =>
                            <p key={index}>{otherLink}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;
