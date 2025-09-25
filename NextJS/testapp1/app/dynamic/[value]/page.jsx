"use client"
import { useParams } from "next/navigation";


export default function value() {
  const products =
    [
      { id: 1, name: "Child Product A" },
      { id: 2, name: "Child Product B" },
      { id: 3, name: "Child Product C" },
      { id: 4, name: "Child Product D" }
    ]

  let { value } = useParams()
    const product = products[value-1]


  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold"> Dynamic Page</h1>
      <h1>{product.name}</h1>
      <h1>{product.id}</h1>
    </div>



    // let params = useParams()
    // console.log(params);

    // let {value} = params
    // return (
    //   <div className="flex min-h-screen flex-col items-center justify-center ">
    //     <h1 className="text-3xl font-bold"> Dynamic Page</h1>
    //     <h1 className="text-3xl font-bold my-5">Actual {params.value}</h1>
    //     <h1 className="text-3xl font-bold my-5">Destructured {value}</h1>
    //   </div>
  );
}