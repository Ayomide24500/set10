import pic from "./assets/9.jpg";
import data from "./data.json";
const App = () => {
  return (
    <div className=" ">
      <div className=" w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-10 px-4">
        {data.map((el: any, i: any) => (
          <div
            className="h-[350px] min-md:[500px] border rounded-lg p-3"
            key={el?.id}
          >
            <div className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
              {el?.title}
            </div>
            <div>
              <img src={el?.picture} alt="" className="w-full h-[100px]" />
            </div>
            <div>{el?.descriptions}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
