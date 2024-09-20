function RandomNumber (){

    let num = Math.floor(Math.random() * 100)
    return<p style={{'background-color':'#257456'}}>
        this random number generator can be reused multiple times {num}
    </p>
}

export default RandomNumber