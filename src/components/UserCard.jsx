function UserCard(props) {
    return (
        <div className="user-card">
            <h2>{props.name}</h2>

            <div className="user-info">
                <p>
                    <strong>Email</strong>
                    {props.email}
                </p>

                <p>
                    <strong>Phone</strong>
                    {props.phone}
                </p>

                <p>
                    <strong>Company</strong>
                    {props.company}
                </p>
            </div>
        </div>
    );
}

export default UserCard;