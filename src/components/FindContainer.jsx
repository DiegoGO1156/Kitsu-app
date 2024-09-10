export const FindContainer = ({anime}) =>{
    return(
        <>
        <div className="d-flex flex-row row row-cols-5 p-5 justify-content-around">
                { 
                    anime &&
                        anime.map(({attributes})=>( 
                            <div className="card mb-3" style={{width: "540px"}}>
                            <div className="row g-0">
                              <div className="col-md-4">
                              <img className="img-fluid rounded mx-auto d-block" src={attributes.posterImage.medium} alt="anime poster img" style={{width: '15rem' }}/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title text-center">{attributes.titles.en_jp}</h5>
                                <div>
                                  <li>
                                    {attributes}
                                  </li>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                }
            </div>
        </>
    )
} 