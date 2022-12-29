import './english.css'

function English() {
    return (
        <div className='eng'>
            <p>Watch my favourite <b>English</b> Movies by clicking on it!</p>
            {/* <span>Click on movies to Watch your favourite!</span> */}
                <div className="photos">
                <a href="https://www.imdb.com/title/tt0848228/"><img src="./images/ave.jpg" alt=""height="250px" width="200px"></img></a>
                 <a href="https://www.imdb.com/title/tt0499549/?ref_=fn_al_tt_1"><img src="./images/avatar.jpg" alt=""height="250px" width="200px"></img></a>
                 <a href="https://www.imdb.com/title/tt0241527/"><img src="./images/harry.jpg" alt=""height="250px" width="200px"></img></a>
                 <a href="https://www.imdb.com/title/tt7286456/?ref_=fn_al_tt_1"><img src="./images/joker.jpg" alt=""height="250px" width="200px"></img></a>
                 <a href="https://www.imdb.com/title/tt0120737/?ref_=fn_al_tt_2"><img src="./images/lord.jpg" alt=""height="250px" width="200px"></img></a>
                 <a href="https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1"><img src="./images/incep.jpg" alt="" height="250px" width="200px" ></img></a>
                 <a href="https://www.imdb.com/title/tt0092099/"><img src="./images/top.jpg" alt=""height="250px" width="200px"></img></a>

               
            </div>

        </div>

    )
}

export default English;