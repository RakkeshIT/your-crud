
const Header = ({ open }) => {
  return (
    <div className={`h-10 text-black px-12 flex items-center bg-white shadow-lg ${open ? "ml-64" : "ml-16"} transition-all duration-300 ease-in-out`}>
      <h1>Job tracking</h1>
    </div>
  )
}

export default Header