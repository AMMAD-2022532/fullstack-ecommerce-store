import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
      built by
      <FontAwesomeIcon
        icon={faLaptopCode}
        className="text-indigo-500 mx-1 animate-bounce"
        aria-hidden="true"
      />
      <a
        href=""
        className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark"
      >
        Ammad
      </a>
    </footer>
  );
}
