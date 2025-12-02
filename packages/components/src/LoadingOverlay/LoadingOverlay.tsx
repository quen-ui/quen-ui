import type { ILoadingOverlayProps } from "./types";
import { LoadingOverlayWrapper, LoadingOverlayStyled } from "./styles";
import { Loader } from "../Loader";
import { Text } from "../typography/Text";

const LoadingOverlay = ({
  children,
  loading,
  backdrop = true,
  label,
  loaderVariant,
  zIndex = 1000
}: ILoadingOverlayProps) => {
  return (
    <LoadingOverlayWrapper>
      {children}
      {loading && (
        <LoadingOverlayStyled backdrop={backdrop}>
          <Loader view={loaderVariant} size="l" />
          {label && <Text size="s">{label}</Text>}
        </LoadingOverlayStyled>
      )}
    </LoadingOverlayWrapper>
  );
};

export default LoadingOverlay;
