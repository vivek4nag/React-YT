function Dynamic(){
    let myName = "Vivs";
    let fullName = () => {
        return "Nag Devta";
    }
    let marks = 55;

    return <h3>
        {/* using {} brackets we can embed any JS expression directly in JSX */}
        This is a return from Dynamic Component. My name is {myName}.
        My full name is {fullName()} & i got {marks}
    </h3>
}

export default Dynamic