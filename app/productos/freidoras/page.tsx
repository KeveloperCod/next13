"use client"
import { getFreidoras } from "@/app/productos/freidoras/list";
import { Counter } from "@/components/Counter";

export default async function FreidorasPage() {
  const freidoras = await getFreidoras();

  return (
    <div className="container">
      <h1 className="text-2xl text-center" >Freidoras</h1>

      <div className="flex">
    
        <div className="flex flex-wrap">
          {freidoras.map(({ id, title, imageUrl, cantidad }) => (
          <div key={id} className="w-1/2 pr-2">
            <div className="border p-4 my-4 rounded-md">

                <img
                  src={imageUrl}                 
                  className="mb-2 rounded-md object-cover"
                />                 

              <div className="text-xs" style={{ height: '120px' }}>
                <h1>{title}</h1>
              </div>
              <div className="self-end text-xs" style={{ height: '40px' }}>
                  <Counter />
              <div className="text-xs flex items-center justify-center">
                <h1>{cantidad}</h1>
              </div>
              
              </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  );
}
