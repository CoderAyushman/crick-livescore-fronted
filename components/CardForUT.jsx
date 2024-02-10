

const CardForUM = ({series}) => {
    
    return (
      <div className=" hover:bg-blue-400 h-full rounded-xl border-b-orange-700 bordrer-b-8 card border p-4 bg white shadow-lg mt-2">
      <div className="header pb-3 border-b-2  border-b-gray-200">
          <h5 className="font_bold text-orange-600">{series.name}</h5>
          <p className="font-bold">start : {series.startDate}</p>
          <p className="font-bold"> end : {series.endDate}</p>
          {/* <p>{series.matchNumberVenue}</p> */}
  
      </div>
      <div className="body mt-4">
          {/* <div className="flex justify-between px-2">
              <p className="font-bold">{series.battingTeam}</p>
              <p className="font-bold">{series.battingTeamScore}</p>
          </div> */}
          <div className="flex justify-between px-2">
              {/* <p className="font-bold">{series.startDate} to {series.endDate}</p> */}
              {/* <p className="font-bold">test:{series.test}</p> */}
          </div>
   
      </div>
      <div className="footer">
          {/* <p className="text-red-700">{series.textLive}</p> */}
          <p className="font-bold">series to be held</p>
          <p className="text-green-700">test:{series.test}</p>
          <p className="text-green-700">ODI:{series.odi}</p>
          <p className="text-green-700">t20:{series.test}</p>
  
      </div>
  </div>
    )
  }
  
  export default CardForUM;