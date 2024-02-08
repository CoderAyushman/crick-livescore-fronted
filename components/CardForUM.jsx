

const CardForUM = ({match}) => {
    
    return (
      <div className=" hover:bg-blue-400 h-full rounded-xl border-b-orange-700 bordrer-b-8 card border p-4 bg white shadow-lg mt-2">
      <div className="header pb-3 border-b-2  border-b-gray-200">
          <p className="font_bold">{match.teamsHeading}</p>
          {/* <p>{match.matchNumberVenue}</p> */}
  
      </div>
      <div className="body mt-4">
          {/* <div className="flex justify-between px-2">
              <p className="font-bold">{match.battingTeam}</p>
              <p className="font-bold">{match.battingTeamScore}</p>
          </div> */}
          <div className="flex justify-between px-2">
              <p className="font-bold">{match.matchNumberVenue}</p>
              <p className="font-bold">{match.bowlTeamScore}</p>
          </div>
   
      </div>
      <div className="footer">
          <p className="text-red-700">{match.textLive}</p>
          <p className="text-green-700">{match.textComplete}</p>
  
      </div>
  </div>
    )
  }
  
  export default CardForUM;