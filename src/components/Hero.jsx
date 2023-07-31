
import logo from "../assets/logo.svg"


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
       <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumR_logo" className="w-28 object-contain" />

        <button 
            type="button"
            onClick={() => window.open("")}
            className="black_btn">
                Github
            </button>
        </nav> 

        <h1 className="head_text">
            Summarize Articles Easily  with<br/>
            <span className="orange_gradient">
                OpenAI GPT-4 Summarizer
            </span>
            <h5 className="desc">
                With our AI Article Summarizer, you can now extract a detailed summary of the article use it to save your time.
            </h5>
        </h1>
    </header>
  )
}

export default Hero