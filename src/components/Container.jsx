

export const Container = ({anime, setPage, page}) =>{   
    return (
        <>
            <div className="d-flex flex-row row row-cols-5 p-5 justify-content-around">
                { 
                    anime &&
                        anime.map(({attributes})=>( 
                            <div className="card" style={{width: "20rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{attributes.titles.en_jp}</h5>
                                    <img className="img-fluid rounded mx-auto d-block" src={attributes.posterImage.medium} alt="anime poster img" style={{width: '15rem' }}/>
                                    <h5 className="card-text">Fecha: {attributes.startDate} {attributes.endDate}</h5>
                                    <br />
                                <div>
                                    <br />
                                </div>
                            </div>
                          </div>
                        
                        ))
                }
            </div>
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>
                    Anterior
                </button>
                <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
                    Siguiente
                </button>
            </div>
        </>
    )
}