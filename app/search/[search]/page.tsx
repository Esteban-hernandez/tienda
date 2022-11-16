"use clent"
export default function Search({ params }: {params: any}) {

  console.log(params);
  
    return (
      <>
        <h1>buscando {params.search}</h1>
      </>
    )
  }