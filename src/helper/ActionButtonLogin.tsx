import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-400 px-5 py-1 text-white
    hover:bg-secondary-500 "

            onClick={() => setSelectedPage(SelectedPage.Login)}
            href={`#${SelectedPage.Login}`}
        >
            {children}

        </AnchorLink>
    )
}

export default ActionButton;