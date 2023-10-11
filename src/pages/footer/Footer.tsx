import logo from "../../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={logo} />
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore in labore!</p>
                    <p >&copy; EMPOWERGYM &copy;  All Right Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold"> Links</h4>

                    <p >
                        (09958584891)
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;