import { BiImageAdd } from "react-icons/bi";
export default function ModalEd () {
    return(
            <>
              <div id="modal" class="hidemodaled">
              <div className="modal-header">
                <h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Nome de usuário</u>
                </h2>
                <p style={{ fontSize: 15, fontFamily: "Helvetica" }}>
                <BiImageAdd size={30} color={"#fff"} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nova foto de perfil
                </p>
                <button id="close-modalEd" style={{ marginLeft:110, backgroundColor:"#E6DCEE",}}>Fechar</button>
              </div></div>
            </>
    )}
    