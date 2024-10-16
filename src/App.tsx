import img from '../src/assets/images/illustration-working.svg'

function App() {
  return (
    <>
      <header className="flex items-center justify-between px-24 py-7">
        <nav>
          <ul className="flex items-center gap-6">
            <li><a href="#" className="text-slate-800 font-bold text-2xl">Shortly</a></li>
            <li><a href="#" className="text-slate-400 font-semibold hover:text-slate-950 ">Features</a></li>
            <li><a href="#" className="text-slate-400 font-semibold hover:text-slate-950">Pricing</a></li>
            <li><a href="#" className="text-slate-400 font-semibold hover:text-slate-950">Resources</a></li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <button className="text-slate-400 font-semibold hover:text-slate-950">Login</button>
          <button className="text-slate-100 font-semibold px-4 py-2 rounded-3xl bg-cyan-500/65 hover:bg-cyan-500">Sign Up</button>
        </div>
      </header>
      <div className=" pl-24 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-slate-800 font-bold text-7xl">More than just <br/> shorter links</h1>
          <p className="text-slate-400 py-4 text-xl"> Build your brand’s recognition and get detailed <br /> insights on how your links are performing.</p>
          <button className="text-slate-100 font-semibold px-6 py-3 rounded-3xl bg-cyan-500/65 hover:bg-cyan-500">Get Started</button>
        </div>
        
        <img src={img} alt="" className="-mr-20 min-h-7"/>
      </div>
    </>
  )
}

export default App
