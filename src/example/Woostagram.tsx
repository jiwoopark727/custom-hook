import { useState } from "react";

function Woostagram() {
  const picture = [
    "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  ];


  const [pictures, setPictures] = useState(picture);
  const [history, setHistory] = useState<number[]>([]); //삭제한 순서대로 인덱스 번호 저장
  const [imgHistory, setImgHistory] = useState<string[]>([]); //삭제한 순서대로 이미지 url 저장
  // const [resItemNum, setResItemNum] = useState(); 

  const handleDelete = (value:string, index:number) => {
    const recentDelteNum = picture.findIndex(picture => picture === value);
    setHistory([...history, recentDelteNum]);
    setImgHistory([...imgHistory, picture[recentDelteNum]])
    setPictures(pictures.filter((_, i) => i !== index));
    console.log(history, imgHistory)
  };

  const handleRestoration = ()=>{
    const recItemNum = history.pop();
    const recItemUrl = imgHistory.pop();

    if (recItemNum !== undefined && recItemUrl) {
      const newArray = [...pictures]; // 기존 배열 복사

      if(recItemNum === 0){
        newArray.splice(0, 0, recItemUrl); // 삭제했던 이미지 복구 (1 예외 처리)
      }
      else{
        newArray.splice(recItemNum, 0, recItemUrl); // 삭제했던 이미지 복구
      }

      setPictures(newArray); // 새로운 배열로 상태 업데이트
    }
  }


  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">WOOSTAGRAM</h1>
        <button className='border border-black' onClick={handleRestoration}>복구</button>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
                
              />
            </a>
            <button 
            onClick={() => handleDelete(value, index)}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full">
              {/* <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" /> */}
              <p>{index}</p>
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Woostagram;