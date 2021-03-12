import React from 'react'


const ApproveCard = (props) => {
    // const {name, date, text} = props;
    return (
        <div className="ui card">
            {props.children}
            <div className="extra content">
                <div className="ui two button" style={{backgroundColor:"#fff"}}>
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApproveCard
