import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import  './Form.css';

export interface IForm {
    id: string,
    name: string;
    timezone: number
}

export interface IFormAdd {
    onAdd: (formdata: IForm) => void
}

export const Form = ({onAdd}: IFormAdd) => {

  const [form, setForm] = useState({
    id: '',
    name: '',
    timezone: 0
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(prevForm =>
      ({ ...prevForm, [name]: value}));
  }

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    const newWatch = {
        id: uuidv4(),
        name: form.name,
        timezone: form.timezone
    }
    onAdd(newWatch);
    setForm({id: '', name: '', timezone: 0});
  }
    
  return (
    <form className="form" onSubmit={handleAdd}>
        <div className="input-name">
            <label htmlFor="name" className="label-name">Название</label>
            <input className="name-zone" type="text" name="name" id="name" value={form.name}  onChange={handleChange} required />  
        </div>
        <div className="input-timezone">    
            <label htmlFor="timezone" className="label-zone">Временная зона</label>
            <input className="timezone-name" type="text" name="timezone" id="timezone" value={form.timezone} onChange={handleChange} required />
        </div>
        <button className='button'>Добавить</button>
    </form>
  )
}
