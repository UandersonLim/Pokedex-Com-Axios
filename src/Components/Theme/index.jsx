import { Box_Them } from "./style";

export const ThemeBackground = (props) => {

  return (
    <>
      <Box_Them>
        <div className={props.toggle_theme}></div>
      </Box_Them>
      
    </>
  );
};
