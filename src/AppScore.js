import ScoreList from './Components/score-list/score-list';
import { useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";


const AppScore = () => {
  const [score, setScore] = useState([]);
  const [showScores,setShowScores] = useState(false);
  const [searchInput, setSearchInput]= useState('');
  useEffect(()=>{
    fetch(
      "http://localhost:4000/score/11"
    )
      .then((response) =>response.json())
      .then((apiScores) => {
      setScore(apiScores);
      setShowScores(true);
      }
      );
  },[]) 
  

  const searchScoresHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
    };
    
    const filterScores = score.filter((score)=> {
      return score.name.toLocaleLowerCase().includes(searchInput);

    })

    let renderScores = 'Loading Scores';
    if (showScores) {
      renderScores = (<ScoreList score={filterScores}/>
    );
    }
    

    return (
      <div className="max-w-6xl mx-auto bg-slate-200">
        <h1 className="flex justify-center text-2xl font-semibold">Similarity_Scores</h1>
        
        <div className='flex justify-center'>
        
        {<input 
        className='m-2 p-2 text-gray-400 roudend-md'
        type='search' 
        placeholder='search Scores' 
        onChange={searchScoresHandler}
        />}
        </div>
        <Routes>
        <Route path="/" element={renderScores} />
        
        
      </Routes>
      </div>
    );
    };

export default AppScore;


