




const MainHeader = () => {





  return (
    <header>
        <div className="px-10 py-3 border ">
        <input type="text" placeholder="Search..." className="border"/> 
        <button className="px-4 bg-blue-500 rounded-lg mx-2" onClick={onchange}> Search</button> 
        </div>
         
    
    </header>
  );
};

export default MainHeader;