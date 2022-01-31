import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Main, Wrapper, OverlayTermosUso, ModalTermosUso, TitleContainer, ImgContainer } from './styles';
import termos1 from "../assets/Termos01.jpg";
import termos2 from "../assets/Termos02.jpg";

const Layout = ({children, page}) => {

  const [showTermosUso] = useState(false)
  const [showTermosUsoLista, setShowTermosUsoLista] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [error, setError] = useState(false)
  const [liTermos, setLiTermos] = useState(false)

  function handleContinue() {
    if(checkbox) {
    } else {
      setError(true)
    }
  }

  // const { currentUser } = useContext(AuthContext);

//  const api = axios.create({
//     baseURL: "https://json-serverepw.herokuapp.com/user",
//   });

//   if (currentUser) {
//     const userId = firebase.auth().currentUser.uid;
//     async function postUser(){
//         await api.post("/", {
//         id: userId,
//       });
//     }
//     postUser()
//     async function get() {
//       const { data } = await api.get("/" + userId)
     

     
//       if (data.confirmacao === true) {
        
//         return 

//       } else {

//         setShowTermosUso(true)
//         // var confirm = window.confirm("Você aceita os termos de uso?");
//         if (termosUso === true) {
//           setShowTermosUso(false)
//           api.patch("/" + userId, {
//             id: userId,
//             confirmacao: true,
//           });
//         }
//       }
      
//     }
//     get()
//   }


  return(
    <Wrapper>
        <Header page={page}/>
        <Main>
          {showTermosUso && 
          <OverlayTermosUso>
                  <ModalTermosUso >
                    <TitleContainer>
                      <h3>Você aceita os termos de uso?</h3>
                   
                    </TitleContainer>
                    
                    
                    {showTermosUsoLista && 
                      <ImgContainer>
                        <img src={termos1} alt="termos de uso" width="100%" height="100%" />
                        <img src={termos2} alt="termos de uso" width="100%" height="100%" />
                      </ImgContainer>
                    }

                    <div>

                      {liTermos ? 
                        <><input type="checkbox" enable onChange={() => setCheckbox(!checkbox)} />  estou de acordo com os 
                        <span 
                        onClick={() => {
                          setShowTermosUsoLista(!showTermosUsoLista)
                          setLiTermos(true)
                        }} > Com termos!!</span>
                         <button onClick={() => handleContinue()} >Continuar</button>
                        </>
                        
                       :  <>
                       <span 
                        onClick={() => {
                          setShowTermosUsoLista(!showTermosUsoLista)
                          setLiTermos(true)
                        }} > <button className="btn btn-warning">Continuar !</button></span></>
                      }


                      {error &&
                        <p>Aceite os termos de uso antes de continuar!</p>
                      }
                    </div>

                    

                   
                 
                   
                    
                  </ModalTermosUso>
              </OverlayTermosUso>
          }
              
          {children}
        </Main>
        <Footer />
    </Wrapper>
  )
  ;
}

export default Layout;