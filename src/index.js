import React from 'react'
import ReactDOM from 'react-dom'
import ApproveCard from './Component/ApproveCard'
import CommentDetails from './Component/CommentDetails'
import faker from 'faker'

const App = () => {
    return (
        <div style={{ backgroundColor: 'lightblue', display: "grid", minHeight: "100vh", placeContent: "center" }}>
            <div className="ui container comments">

                <ApproveCard>
                    <CommentDetails
                        name={faker.internet.userName()} 
                        date="07/05/2020"
                        text={faker.lorem.text()}
                        avatar={faker.image.image()} />
                </ApproveCard>

                <ApproveCard>
                    <CommentDetails
                        name={faker.internet.userName()}
                        date="05/07/2021"
                        text={faker.lorem.text()}
                        avatar={faker.image.image()} />
                </ApproveCard>

                <ApproveCard>
                    <CommentDetails
                        name={faker.internet.userName()} 
                        date="07/06/2019"
                        text={faker.lorem.text()}
                        avatar={faker.image.image()} />
                </ApproveCard>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
