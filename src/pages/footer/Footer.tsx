import logo from "../../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={logo} />
                    <p className="my-5">EmpowerHer Gym: Where Strength Meets Grace, Empowering Women to Achieve Their Best Self, One Workout at a Time!</p>
                    <p >&copy; EMPOWER-HER GYM &copy;  All Right Reserved.</p>
                </div>
               
            </div>
        </footer>
    );
}
export default Footer;