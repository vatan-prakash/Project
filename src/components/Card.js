export default function Card(props) {
    const data = props.data;
    return (
        <div className="card">
            <h2>{data?.title}</h2>
            <div className="top">
                <span className="txt1">${data?.price?.val}</span>
                <span className="txt2">.{data?.price?.dec}</span>
                <span className="txt3">monthly</span>
            </div>
            <div className="btn_container">
                <div className="btn d-flex jsc aic">Subscribe</div>
            </div>
            <div className="d-flex flex-col" style={{ gap: '20px' }}>
                <div>
                    <p className="para1">{data?.para}</p>
                    <ul>
                        {data?.list?.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <p className="para1">{data?.para2}</p>
                   <div className="last">{data?.lastPara}</div>
                </div>
            </div>
        </div>
    )
}