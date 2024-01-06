import { Box_Button } from "./style";

const Button_Load = (props) => {


  return (
    <Box_Button>
      <button onClick={props.funcao}>Carregar +</button>
    </Box_Button>
  );
};

export default Button_Load;
