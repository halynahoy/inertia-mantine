import { Button } from "@mantine/core";

interface Props {
  variant?:
    | "default"
    | "subtle"
    | "white"
    | "gradient"
    | "filled"
    | "light"
    | "outline";
  color?: string;
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  compact?: true | false;
  uppercase?: true | false;
  disabled?: true | false;
  title: string;
}

const PFButton = ({
  variant = "filled",
  color = "#5555FF",
  radius = "md",
  size = "sm",
  compact = false,
  uppercase = false,
  disabled = false,
  title,
}: Props) => {
  return (
    <>
      <Button
        color={color}
        radius={radius}
        size={size}
        compact={compact}
        uppercase={uppercase}
        disabled={disabled}
        mt={10}
        variant={variant}
        // gradient={{ from: "#AEAEED", to: "#3F3FD5", deg: 35 }}
      >
        {title}
      </Button>
    </>
  );
};

export default PFButton;
