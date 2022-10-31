import ScoreCard from "../score-card/score-card"; 


const ScoreList = ({score}) =>{
        return (
        <div className="grid grid-cols-4 gap-4">
            {score.map((score) => {
              return <ScoreCard score={score}/>
              
            })}
            </div>);
           
    }


export default ScoreList;