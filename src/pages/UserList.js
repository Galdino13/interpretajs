import PersonList from "../backend/componentes-crud/PersonList";
import PersonAdd from "../backend/componentes-crud/PersonAdd";
import PersonRemove from "../backend/componentes-crud/PersonRemove";
import CadastroForm from "../backend/componentes-crud/CadastroForm";


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
            

        </div>
    )
}