import {  useEffect, useState } from "react";
import {  Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
// import { products } from "../constants/data";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState("");

  const location = useLocation();

  // console.log(location.pathname);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "w-[100vw] " +
        (location.pathname === "/" ? "fixed" : "") +
        " " +
        (scrollPosition < 40 && location.pathname === "/"
          ? "bg-transparent"
          : "bg-black")
      }
    >
      <nav
        className="mx-auto flex items-center justify-between p-8 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peryton</span>
            <img className="h-5 w-auto" src="imgs/logo.png" alt="site-logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={
              "text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
              (location.pathname === "/" ? "border-b-2 border-blue-700" : "")
            }
          >
            Home
          </Link>

          {/* <Popover className="relative">
            <Popover.Button
              className={
                "flex items-center text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
                (location.pathname === "/products"
                  ? "border-b-2 border-blue-700"
                  : "")
              }
            >
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-400"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-900 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          className="h-[20px] w-[20px] text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={"/products/" + item.id}
                          className="block font-semibold text-gray-50 group-hover:text-black"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">
                          {item.description.split(".")[0]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover> */}

          <Link
            to="/services"
            className={
              "text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
              (location.pathname === "/services"
                ? "border-b-2 border-blue-700"
                : "")
            }
          >
            Services
          </Link>
          <Link
            to="/about"
            className={
              "text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
              (location.pathname === "/about"
                ? "border-b-2 border-blue-700"
                : "")
            }
          >
            About us
          </Link>
          <Link
            to="/ecommerce"
            className={
              "text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
              (location.pathname === "/ecommerce"
                ? "border-b-2 border-blue-700"
                : "")
            }
          >
            Ecommerce
          </Link>
          <Link
            to="/contact"
            className={
              "text-sm font-semibold leading-6 text-gray-50 pb-2 hover:border-b-2 hover:border-blue-700 " +
              (location.pathname === "/contact"
                ? "border-b-2 border-blue-700"
                : "")
            }
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="#" className="text-sm font-semibold leading-6 text-gray-50">
            <MagnifyingGlassIcon className="h-5 w-5 flex-none hidden" />
          </Link>
        </div>
      </nav>


{/*       
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Peryton</span>
              <img className="h-8 w-auto" src="imgs/logo.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Home
                </Link>

                

                <Link
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  to="/ecommerce"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  Ecommerce
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 flex-none" />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}


{mobileMenuOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-950 px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Peryton</span>
              <img className="h-8 w-auto" src="imgs/logo.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={()=>{setMobileMenuOpen(!mobileMenuOpen)}}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  About us
                </Link>
                <Link
                  to="/ecommerce"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Ecommerce
                </Link>
                <Link
                  to="/contact"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Contact
                </Link>
              </div>
              {/* <div className="py-6">
                <Link
                  to="#"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 flex-none" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      )}

      
    </header>
  );
}



{/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Peryton</span>
              <img className="h-8 w-auto" src="imgs/logo.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Home
                </Link>

               

                <Link
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-950"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  to="/ecommerce"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  Ecommerce
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 flex-none" />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}




 {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.id}
                            as="a"
                            href={`/products/${item.id}`}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}