
import GetTournaments from './tournaments/components/result_data'
import './App.css'
function App() {


  return (
    <>
    <div className='spl_background pt-8'>
        <div className='w-4/5 lg:w-3/5 mx-auto'>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold  text-rose-400 text-center lg:text-left'>TOURNAMENT LEADERBOARD</h1>
          
          <GetTournaments />

        </div>
    </div>
    </>
  )
}

export default App
