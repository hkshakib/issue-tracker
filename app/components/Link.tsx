import NextLink from "next/link";
import { Link as RadiXLink } from "@radix-ui/themes";

interface Props {
    href: string;
    children: string;
}

const Link = ({href, children}: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <RadiXLink>{children}</RadiXLink>
    </NextLink>
  )
}

export default Link;