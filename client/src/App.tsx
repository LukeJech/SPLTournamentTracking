
import GetTournaments from './tournaments/components/result_data'
import './App.css'
function App() {


  return (
    <>
    <div className='spl_background pt-8'>
        <div className='w-3/5 mx-auto'>
          <h1 className='text-6xl font-bold  text-rose-400 text-center'>TOURNAMENT LEADERBOARD</h1>
          
          <GetTournaments />

        </div>
    </div>
    </>
  )
}

export default App
