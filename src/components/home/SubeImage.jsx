import React, { useState } from 'react'

function SubeImage() {

    //Uso el Hook useState

    const [file, setFile] = useState(null)


    //creo una función con un parámetro "e" que llama al prevent default para evitar que el formulario se envie si no se cumple con lo que esté en la función
    const handleSubmit = (e) => {
        e.preventDefault()

        // creo una variable const que guarda una nueva instancia "FormData()". Este es un objeto que te provee una manera para facilmente construir un conjunto de "keys" y "valores", que representan campos de un formulario y sus valores
        const imgInf = new FormData();

        // Llamamos al método "append" sobre el objeto "imgIf", para generar un nuevo par de "key" y "valor", donde el primer argumento es un string que representa el nombre del campo y el segundo representa el valor, en este caso el estado inicial "file"
        imgInf.append('image', file);
        
        fetch('http://127.0.0.1:8001/upload/image', {

            // Especificamos el HTTP request que estamos haciendo, en este caso "post" y le decimos que en el xuerpo lo que debe esperar que se envíe es el objeto imgInf de FormData.
            method: 'POST',
            body: imgInf
    })
        .then(res => res.json())
        .then(mss => console.log(mss))
        .then(err => console.log(err))
    }

    //Acá hacemos otra función que permitirá tomar una imágen desde nuestra máquina, y le decimos que solo tome una haciendo que el "files" array tenga como valor 0

    const handleUpload = (e) => {
        setFile(e.target.files[0])
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleUpload} />
      <button type="submit">Upload</button>
    </form>
    </div>
  )
}

export default SubeImage
