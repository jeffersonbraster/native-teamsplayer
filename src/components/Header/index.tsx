import * as S from "./styles";
import logoImg from "@assets/logo.png";

const Header = () => {
  return (
    <S.Container>
      <S.Logo source={logoImg} alt="Logo" />
    </S.Container>
  );
};

export default Header;
