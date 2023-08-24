import React, {useEffect, useState} from 'react';
import HdOffers from "./HdOffers";
// import { HDOffer, SDOffer, FreeOffer } from './Offers';

function Offers({offersData}) {
  const [selectedOffer, setSelectedOffer] = useState('HD');

  const handleOfferClick = (offerType) => {
    setSelectedOffer(offerType);
  };


  return (
    <div>
      <h1 className={'colorWhite'}>Streaming On</h1>

      <div className={'flex-common-container-offers border-auto'}>
          <button  className={'colorWhite'}>Filters</button>
          <button onClick={() => handleOfferClick('HD')} className={'colorWhite textAlignItemForCenter'} title={'HD'}>HD</button>
          <button onClick={() => handleOfferClick('SD')} className={'colorWhite textAlignItemForCenter'} title={"SD"}>SD</button>
          <button onClick={() => handleOfferClick('BP')} className={'colorWhite textAlignItemForCenter'} title={"Ultimate Price"}>UP</button>
          <button onClick={() => handleOfferClick('4K')} className={'colorWhite textAlignItemForCenter'} title={"4K"}>4K</button>
      </div>
      {selectedOffer === 'HD'  && <HdOffers offers={offersData} offersType={selectedOffer}/>}
      {selectedOffer === 'SD'  && <HdOffers offers={offersData} offersType={selectedOffer}/>}
      {selectedOffer === 'BP'  && <HdOffers offers={offersData} offersType={selectedOffer}/>}
        {selectedOffer === '4K'  && <HdOffers offers={offersData} offersType={selectedOffer}/>}
    </div>
  );
}

export default Offers;
