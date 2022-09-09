
import React from "react";
import doc2 from "./images/doc2.jpg";
import doc3 from "./images/doc3.jpg";
import doc4 from "./images/doc4.jpg";



function App() {
  return (
  <>
    <h1> CHECKPOINT</h1>

    <carteirinha>
    <ul>
        <li>
            Foto: <img src="./images/doc2" alt="doc2"></img><br/>
            Nome:<p>João</p> <br/> 
            RM:<p>93324</p> <br/> 
            Curso:<p>Análise e desenvolvimento de sistemas</p> <br/> 
            Turma: <p>TDSPJ</p><br/>
        </li>
        <li>
            Foto: <img src="./images/doc3" alt="doc3"></img><br/>
            Nome:<p>Maria</p> <br/> 
            RM:<p>93325</p> <br/> 
            Curso:<p>Análise e desenvolvimento de sistemas</p> <br/> 
            Turma: <p>TDSPK</p><br/>
        </li>
        <li>
            Foto: <img src="./images/doc4"alt="doc3"></img><br/>
            Nome:<p>Joana</p> <br/> 
            RM:<p>93326</p> <br/> 
            Curso:<p>Análise e desenvolvimento de sistemas</p> <br/> 
            Turma: <p>TDSPL</p><br/>
        </li>

    </ul>
    </carteirinha>

    </>
  );
}

export default App;