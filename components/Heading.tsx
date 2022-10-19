import { FC } from "react";
type headingProps = {
  tag?: string;
  text: string;
};

const Heading: FC<headingProps> = ({ tag = "h1", text }) => {
  const Tag: any = tag;

  return <Tag>{text}</Tag>;
};

export default Heading;
