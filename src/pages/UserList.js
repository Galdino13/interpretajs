import PersonList from "../backend/componentes-crud/PersonList";
import PersonAdd from "../backend/componentes-crud/PersonAdd";
import PersonRemove from "../backend/componentes-crud/PersonRemove";
import CadastroForm from "../backend/componentes-crud/CadastroForm";
import PalavraAdd from "../backend/componentes-crud/PalavraAdd";
import PalavraList from "../backend/componentes-crud/PalavraList";
import PalavraRemove from "../backend/componentes-crud/PalavraRemove";
import PerguntaAdd from "../backend/componentes-crud/PerguntaAdd";
import PerguntaList from "../backend/componentes-crud/PerguntaList";
import PerguntaRemove from "../backend/componentes-crud/PerguntaRemove";
import CicloAdd from "../backend/componentes-crud/CicloAdd";
import CicloList from "../backend/componentes-crud/CicloList";
import CicloRemove from "../backend/componentes-crud/CicloRemove";
import GrupoAdd from "../backend/componentes-crud/GrupoAdd";
import GrupoList from "../backend/componentes-crud/GrupoList";
import GrupoRemove from "../backend/componentes-crud/GrupoRemove";


export default function UserList(){
    return(
        <div className='container userlist'>
            <div className='container userlist-container'>
                <PersonList />
            </div>
            <div>
                <PersonAdd />
            </div>
            <div>
                <PersonRemove />
            </div>
            <div>
                <PalavraAdd />
            </div>
            <div>
                <PalavraList />
            </div>
            <div>
                <PalavraRemove />
            </div>
            <div>
                <PerguntaAdd />
            </div>

            <div>
                <PerguntaList />
            </div>
            
            <div>
                <PerguntaRemove />
            </div>
            <div>
                <CicloList />
            </div>
            <div>
                <CicloAdd />
            </div>
            <div>
                <CicloRemove />
            </div>
            <div>
                <GrupoList />
            </div>
            <div>
                <GrupoAdd />
            </div>
            <div>
                <GrupoRemove />
            </div>
            
            

        </div>
    )
}