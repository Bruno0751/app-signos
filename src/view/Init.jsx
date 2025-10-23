import Input from '../components/input/Input'
import Button from '../components/input/Button'
import useIndex from './hooks/useIndex'

export default function Init() {
  const hooks = useIndex();
  return (
    <div>
      <Input
        type="date"
        placeholder="Idade"
        id="born" 
        name="born"
      />
      <Button
        click={ hooks.handleClick }
        text="Signo"
      />
      <div id="answer"></div>
    </div>
  );
}
