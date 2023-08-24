import React from "react";

function HdOffers({offers, offersType}){
    var stream = true;
    return(
        <div>

            <div className={'flex-common-container-offers-heading'}>

            {offers.map((items, index)=>(

                     items['cnd_code'].toLowerCase()===offersType.toLowerCase() && items['moni'] === 'Stream' && <div className={'colorWhite margin-left-5px margin-bottom-offers'}>

                      <img style={{height:'100px',width:"100px"}} src={'https://www.themoviedb.org/t/p/original/7Fl8ylPDclt3ZYgNbW2t7rbZE9I.jpg'} alt={'hotstart'+index}/>
                    </div>
            ))}
            </div>

            <div className={'flex-common-container-offers-heading'}>
            {offers.map(items=>(

                    items['cnd_code'].toLowerCase()===offersType.toLowerCase() && items['moni'] === 'Buy' && <div className={'colorWhite margin-left-5px margin-bottom-offers'}>
                      <img style={{height:'100px',width:"100px"}} src={'https://www.themoviedb.org/t/p/original/7Fl8ylPDclt3ZYgNbW2t7rbZE9I.jpg'} alt={'hotstart'}/>
                    </div>
            ))}
            </div>

            <div className={'flex-common-container-offers-heading'}>
            {offers.map(items=>(

                     items['cnd_code'].toLowerCase()===offersType.toLowerCase() && items['moni'] === 'Rent' && <div className={'colorWhite margin-left-5px'}>
                      <img style={{height:'100px',width:"100px"}} src={'https://www.themoviedb.org/t/p/original/7Fl8ylPDclt3ZYgNbW2t7rbZE9I.jpg'} alt={'hotstart'}/>
                    </div>



            ))}
            </div>
        </div>
    )
}
export  default HdOffers;