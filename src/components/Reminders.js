import "./reminder.css";

const Reminder = () => {
    return(
        <div>
            <container classname="reminders--container">
                <img  className="reminder--blue" src={require('../images/postit-blue.png')} alt="postit"/>
                <img  className="reminder--yellow" src={require('../images/postit-yellow.png')} alt="postit"/>
                <img  className="reminder--green" src={require('../images/postit-green.png')} alt="postit"/>
            </container>
        </div>
    )
}

export default Reminder
/* <img  className="Reminder" src={require('../images/postit-pink.png')} alt="postit"/>
            <img  className="Reminder" src={require('../images/postit-purple.png')} alt="postit"/>
            <img  className="Reminder" src={require('../images/postit-white.png')} alt="postit"/> */