import { useState } from "react";

export default function App() {
  const [inputSubject, setInputSubject] = useState('');
  const [inputHours, setInputHours] = useState('');

  const[totalSubHorData , setTotalSubHorData ] = useState([]);

  function addData(){
    let data = {
      subject: inputSubject,
      hours: inputHours
    }
    setTotalSubHorData([...totalSubHorData, data]);
  }
  
  return (
    <>
      <main className="flex flex-col justify-center items-center font-serif">
        <div className="m-10 flex flex-col gap-6 p-10 border border-black">
          <h1 className="text-center text-4xl font-bold">
            Geekster Education Planner
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addData();
            }}
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Subject"
                className="border p-1"
                onChange={(e) =>setInputSubject(e.target.value)}
              />
              <input
                type="text"
                placeholder="Hours"
                className="border p-1"
                onChange={(e) =>setInputHours(e.target.value)}
              />
              <button
                className="border px-5 bg-blue-600 text-white"
                type="submit"
              >
                ADD
              </button>
            </div>
          </form>
        </div>

        <div className="border p-10">
          <h1 className="text-center text-2xl font-bold my-2">Planner List </h1>
          <ul>
          {totalSubHorData.map((data , index)=>(

              <li key={index} className="flex gap-8 text-xl font-semibold  ">              
                      
                      <div>
                        </div><span className="w-54 border">{data.subject}</span>
                      <span className="w-54 border">{data.hours}</span>
                      <button className="bg-green-500 text-white font-bold border px-2">
                        +
                      </button>
                      <button className="bg-red-500 text-white font-bold border px-2">
                        -
                      </button>
                </li>
          ))}
          </ul>
        </div>
      </main>
    </>
  );
}
