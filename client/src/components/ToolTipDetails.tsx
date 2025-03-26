import { ReactNode } from "react";
import { Tooltip } from "./ui/tooltip";
import { useColorMode } from "./ui/color-mode";

interface IProps {
  children: ReactNode;
  content: string;
}

const ToolTipDetails = ({ children, content }: IProps) => {
  const { colorMode } = useColorMode();
  return (
    <Tooltip
      content={content}
      interactive
      positioning={{ placement: "top" }}
      openDelay={500}
      closeDelay={100}
      contentProps={{
        css: {
          "--tooltip-bg": `${colorMode === "dark" ? "#0e2323" : "#e4e4e7"}`,
          color: `${colorMode === "dark" ? "white" : "black"}`,
          padding: "10px",
          lineHeight: "1.5",
        },
      }}
      showArrow
    >
      {children}
    </Tooltip>
  );
};

export default ToolTipDetails;
