import { Box } from "./style";

export const Button_Change_Theme = (props) => {
  return (
    <Box>
      <button onClick={props.themeBackground} className="Button_Animation">
        {props.text}
      </button>
    </Box>
  );
};
